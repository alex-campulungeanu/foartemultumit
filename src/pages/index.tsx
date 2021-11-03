import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actions} from '@redux/index'
import { FaSearch, FaSistrix } from 'react-icons/fa'
import { useRouter } from 'next/router'

import {prepareUrl} from '@src/lib/misc'

const Home = (): JSX.Element => {
  const [url, setUrl] = useState('')
  const [urlError, setUrlError] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()
  const {resetReview} = bindActionCreators(actions, dispatch)

  useEffect(() => {
    resetReview()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleChange = (event) => {
    const url = event.target.value
    setUrl(url)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setUrlError('')
    const [res, msg] = prepareUrl(url)
    if (res) {
      router.push({
        pathname: `/reviews`,
        query: {productUrl: msg},
      })
    } else {
      setUrlError(msg)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center my-7">
          <div className='search-url'>
            <FaSearch size='18' className='text-secondary my-auto text-green-500 mr-5' />
            <input 
              className='search-url-input' 
              type="text" 
              placeholder='Put the product URL here ...'
              onChange={handleChange}
            />
          </div>
          {urlError ?
            (<div className='bg-red-400 rounded-lg p-3 w-3/5 mt-3 text-white'>
              <div>
                Product URL is not ok
              </div>
              <br />
              <div>
                Should have the format: {'https://www.emag.ro/<product>/pd/<product_id>'}
              </div>
            </div>
            )
            :
            null
          }
          {/* <Link href={`/reviews?productUrl=${url}`} as={`/reviews?productUrl=${url}`} passHref> */}
          <button type='submit' className="search-url-btn">SEARCH</button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  )
}


// export const getServerSideProps = async (context) => {
//   console.log('Enter getServerSideProps: ', context.query)
//   const {data: reviews} = await axiosService.get(`${serverApi}/api/reviews`)
//   // const {reviews} = await getreviews()
//   // console.log('reviews: ', reviews);
//   return {
//     props: {
//       reviews: reviews.data
//     }
//   }
// }

export default Home