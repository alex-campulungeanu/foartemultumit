import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import ReviewsList from '@components/ReviewsList'
import {Spinner} from '@components/Spinner'
import {actions} from '@store/index'
import {stringWrapper, normalizeString} from '@utils/misc'
import {reviewsFetcher} from '@utils/api'
import {FilterByBar} from '@components/FilterByBar'
import {ProductUrlCard} from '@components/ProductUrlCard'
import ActionsBar from '@components/ActionsBar'
import {ErrorPage} from '@components/ErrorPage'
import {EmagResponse} from '@interfaces/reviewsInterface'
import { RootState } from '@store/reducers';

const Reviews = ({productUrl} : {productUrl: string}) => {
  // const [reviews, setReviews] = useState([])
  // const [filterdReviews, setFilteredReviews] = useState([])
  // const reviewsStore = useSelector((state) => state.reviews)
  const reviewsStore: {totalReviews: Array<EmagResponse>, filteredReviews: Array<EmagResponse>} = useSelector((state: RootState) => state.reviews)
  const dispatch = useDispatch()
  //TODO: fix this shit with totalReview, should keep only filteredReviews and store only the number of total reviews received from api
  // LE: i need both of them, totalReviews is used for filter and filteredReviews are presented on page, leave it like this for now
  const {addTotalReview, addFilteredReview, resetReview} = bindActionCreators(actions, dispatch)
  const { isLoading, error, data, isFetching } = useQuery(
    ['reviews', {url: productUrl}], 
    reviewsFetcher, 
    {
      staleTime: 0,
      onSuccess: (data) => {
        const reviews = data.data
        // console.log(reviews)
        // setReviews(reviews)
        addTotalReview(reviews)
        // setFilteredReviews(reviews)
        addFilteredReview(reviews)
      }
    }
  )

  useEffect(() : any => {
    return () => resetReview()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  // TODO: optimize this (it's kinda slow)
  const filterReviews = (data, filterWord: string) => {
    const normalizedWord: string = normalizeString(filterWord)
    const res =  data
      .filter(obj => {
        const body = normalizeString(obj.content)
        return body.includes(normalizedWord)
      }) // filter array first
      .map(obj => {
        const n = {
          ...obj, // copy shallow fields
          // children: obj.children && filterReviews(obj.children, '') // filter children
        }
        // const colored = {...n, content: n.content.replace(filterWord, `<span style="color: red">${filterWord}</span>`)}
        const colored = {...n, content: stringWrapper(n.content, normalizedWord)}
        return colored
      })
      return res
  } 

  const handleChange = (event) => {
    const word = event.target.value
    const filtered = filterReviews(reviewsStore.totalReviews, word)
    // const colorFiltered = filtered.replace(word, 'XXXXXX')
    // setFilteredReviews(filtered)
    addFilteredReview(filtered)
  }

  if (isLoading || isFetching) return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner />
    </div>
  )

  if (error){
    return (
      <ErrorPage message='Error occured when fetching comments' statusCode={500}/>
    )
  }
  
  return (
    <div>
      <ActionsBar />
      <div className='ml-64'>
        <ProductUrlCard productUrl = {productUrl}/>
        {/* Check why doesn't work fi put content-list class on next div */}
        <div>
           {/* <InfiniteScroll
            dataLength={reviewsStore.filteredReviews.length}
           > */}
             <ReviewsList reviews={reviewsStore.filteredReviews}/>
           {/* </InfiniteScroll> */}
        </div>
        <FilterByBar handleFilter={handleChange}/>
      </div>
    </div>
  )
}

export default Reviews

Reviews.getInitialProps = ({ query: { productUrl } }) => {
  return { productUrl }
}
