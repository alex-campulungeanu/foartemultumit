import { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import { Divider, Grid, List, ListItem, ListItemText, Typography, createStyles, makeStyles} from '@material-ui/core';
import axios from 'axios'
import { useQuery } from 'react-query'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

import ReviewsList from '@components/ReviewsList'
import {Spinner} from '@components/Spinner'
import styles from '@styles/pages/ReviewsPage.module.css'
import { serverApi } from '@src/config/constants'
import {actions} from '@redux/index'
import {stringWrapper} from '@src/lib/misc'

const reviewsFetcher = async (params) => {
  const [, { url }] = params.queryKey;
  return axios.post(`/api/reviews`, {url: url}).then(res => res.data)
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    }
  }),
);


const Reviews = ({productUrl }) => {
  const classes = useStyles();
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

  useEffect(() => {
    return () => resetReview()
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
          children: obj.children && filterReviews(obj.children) // filter children
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

  // if (isLoading || isFetching) return <Spinner />
  // if (isFetching) return <Spinner />
  
  return (
    <div>
      <Grid className={styles.header}>
        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="Product" secondary={productUrl} />
          </ListItem>
        </List>
        <div className={styles.filter}>
          <CreateIcon />
          <input type="text" onChange={handleChange}/>
        </div>
      </Grid>
      {isLoading || isFetching ?
        <div className={styles.spinner}>
          <Spinner />
        </div>
        :
        <ReviewsList reviews={filterdReviews}/>
      }
    </div>
  )
}

export default Reviews

Reviews.getInitialProps = ({ query: { productUrl } }) => {
  return { productUrl }
}
