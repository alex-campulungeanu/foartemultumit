import React, { useEffect, useState } from 'react'
import {TextField, Button, Grid} from '@material-ui/core'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actions} from '@redux/index'

import styles from '@styles/pages/HomePage.module.css'
import TopNavigation from '@components/TopNavigation'

const Home = () => {
  const [url, setUrl] = useState(null)
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
  }
  
  return (
    <div className='content-container'>
      {/* TODO: move TopNavition to AppLayout */}
      <TopNavigation />
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Put here the URL of the product"/>
          {/* <TextField
            placeholder="Put here the URL of the product"
            multiline
            fullWidth={true}
            variant="outlined"
            rows={6}
            onChange={handleChange}
          /> */}
        </div>
        <br/>
        <div className='flex flex-row justify-end'>
          <div>
            <Link href={`/reviews?productUrl=${url}`} as={`/reviews?productUrl=${url}`} passHref>
              <button>Search</button>
            </Link>
          </div>
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