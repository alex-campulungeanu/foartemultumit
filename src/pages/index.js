import React, { useEffect, useState } from 'react'
import {TextField, Button, Grid} from '@material-ui/core'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from '@styles/pages/HomePage.module.css'
import {actions} from '@redux/index'

const Home = () => {
  const [url, setUrl] = useState(null)
  const dispatch = useDispatch()
  const {resetReview} = bindActionCreators(actions, dispatch)

  useEffect(() => {
    resetReview()
  }, [])
  const handleChange = (event) => {
    const url = event.target.value
    setUrl(url)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  
  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <Grid className={styles.search}>
          <TextField
            placeholder="Put here the URL of the product"
            multiline
            fullWidth={true}
            variant="outlined"
            rows={6}
            onChange={handleChange}
          />
        </Grid>
        <br/>
        <Grid 
          container 
          direction='row' 
          justify='flex-end'
        >
          <Grid item>
            <Link href={`/reviews?productUrl=${url}`} as={`/reviews?productUrl=${url}`} passHref>
              <Button variant="contained" color="secondary">Search</Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Grid>
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