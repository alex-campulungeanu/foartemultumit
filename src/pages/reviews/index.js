import { useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import { Divider, Grid, List, ListItem, ListItemText, Typography, createStyles, makeStyles} from '@material-ui/core';
import axios from 'axios'
import { useQuery } from 'react-query'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

import ReviewsList from '@components/ReviewsList'
import styles from '@styles/pages/ReviewsPage.module.css'
import { serverApi } from '@src/config/constants'
import {actions} from '@redux/index'

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
  const {addTotalReview, addFilteredReview} = bindActionCreators(actions, dispatch)
  const { isLoading, error, data, isFetching } = useQuery(
    ['reviews', {url: productUrl}], 
    reviewsFetcher, 
    {
      staleTime: 0,
      onSuccess: (data) => {
        const reviews = data.data
        console.log(reviews)
        setReviews(reviews)
        addTotalReview(reviews)
        setFilteredReviews(reviews)
        addFilteredReview(reviews)
        
      }
    }
  )

  const filterReviews = (data, filter) => {
    return data
      .filter(obj => {
        const body = obj.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") //remove diacritics
        const word = filter.toLowerCase()
        return body.includes(word)
      }) // filter array first
      .map(obj => ({ // then re-map to new objects
        ...obj, // copy shallow fields
        children: obj.children && filterReviews(obj.children) // filter children
      }));
  } 

  const handleChange = (event) => {
    const word = event.target.value
    const filtered = filterReviews(reviews, word)
    setFilteredReviews(filtered)
    addFilteredReview(filtered)
  }

  if (isLoading) return 'Is loading'
  if (isFetching) return 'Is fetching'
  
  return (
    <div>
      <div className={styles.header}>
        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="Product" secondary={productUrl} />
          </ListItem>
        </List>
        <div className={styles.filter}>
          <CreateIcon />
          <input type="text" onChange={handleChange}/>
        </div>
      </div>
      <ReviewsList reviews={filterdReviews}/>
    </div>
  )
}

export default Reviews

Reviews.getInitialProps = ({ query: { productUrl } }) => {
  return { productUrl }
}
