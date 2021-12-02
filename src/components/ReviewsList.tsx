import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Reviewtem from './Reviewtem'
import {EmagResponse} from '@interfaces/reviewsInterface'

const ReviewsList = ({reviews}: {reviews: Array<EmagResponse>}) => {
  const [currentReviews, setCurrentReviews] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setCurrentReviews(reviews.slice(0, 10))
  }, [])

  const fetchMoredata = () => {
    if (reviews.length > 16) {
      setHasMore(false)
      return
    }
    setTimeout(() => {
      setCurrentReviews(currentReviews.concat(reviews.slice(5,10)));
    }, 500);
  }

  return (
    <div className='review-list'>
      <InfiniteScroll
        dataLength={currentReviews.length}
        loader={<h4>Loading ... </h4>}
        next={fetchMoredata}
        hasMore={hasMore}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>Yay ! This is all !</b>
          </p>
        }
      >
          {currentReviews && currentReviews.map(review => (
            <Reviewtem review={review} key={review.id}/>
          ))}
      </InfiniteScroll>
      </div>
  )
}

// const CommentList = ({url}) => {
//   const { isLoading, error, data } = useQuery('comments', axiosService.get(`${serverApi}/api/comments`, {url: url}).then(res => res.data))
//   return (
//     <div className={commentStyle.grid}>
//       {data.map(comment => (
//         <CommentItem comment={comment} key={comment.id}/>
//       ))}
//     </div>
//   )
// }

export default ReviewsList
