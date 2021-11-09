import { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

import ReviewsList from '@components/ReviewsList'
import {Spinner} from '@components/Spinner'
import {actions} from '@redux/index'
import {stringWrapper} from '@utils/misc'
import {FilterByBar} from '@components/FilterByBar'
import {ProductUrlCard} from '@components/ProductUrlCard'

const reviewsFetcher = async (params) => {
  const [, { url }] = params.queryKey;
  return axios.post(`/api/reviews`, {url: url}).then(res => res.data)
}

const Reviews = ({productUrl }) => {
  const [reviews, setReviews] = useState([])
  const [filterdReviews, setFilteredReviews] = useState([])
  const dispatch = useDispatch()
  const {addTotalReview, addFilteredReview, resetReview} = bindActionCreators(actions, dispatch)
  const { isLoading, error, data, isFetching } = useQuery(
    ['reviews', {url: productUrl}], 
    reviewsFetcher, 
    {
      staleTime: 0,
      onSuccess: (data) => {
        const reviews = data.data
        setReviews(reviews)
        addTotalReview(reviews)
        setFilteredReviews(reviews)
        addFilteredReview(reviews)
      }
    }
  )

  useEffect(() : any => {
    return () => resetReview()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  const filterReviews = (data, filterWord) => {
    return data
      .filter(obj => {
        const body = obj.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") //remove diacritics
        const word = filterWord.toLowerCase()
        return body.includes(word)
      }) // filter array first
      .map(obj => {
        const n = {
          ...obj, // copy shallow fields
          children: obj.children && filterReviews(obj.children, '') // filter children
        }
        // const colored = {...n, content: n.content.replace(filterWord, `<span style="color: red">${filterWord}</span>`)}
        const colored = {...n, content: stringWrapper(n.content, filterWord)}
        return colored
      })
  } 

  const handleChange = (event) => {
    const word = event.target.value
    const filtered = filterReviews(reviews, word)
    // const colorFiltered = filtered.replace(word, 'XXXXXX')
    setFilteredReviews(filtered)
    addFilteredReview(filtered)
  }

  if (isLoading || isFetching) return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner />
    </div>
  )

  if (error){
    return (
      <div className='mt-4'>
        some error when fetching comments
      </div>
    )
  }
  
  return (
    <div className='h-screen'>
      <ProductUrlCard productUrl = {productUrl}/>
      {/* Check why doesn't work fi put content-list class on next div */}
      <div>
         <ReviewsList reviews={filterdReviews}/>
      </div>
      <FilterByBar handleFilter={handleChange}/>
    </div>
  )
}

export default Reviews

Reviews.getInitialProps = ({ query: { productUrl } }) => {
  return { productUrl }
}
