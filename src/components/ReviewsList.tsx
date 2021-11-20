import Reviewtem from './Reviewtem'
import {EmagResponse} from '@interfaces/reviewsInterface'

const ReviewsList = ({reviews}: {reviews: Array<EmagResponse>}) => {
  return (
    <div className='review-list'>
      {reviews && reviews.map(review => (
        <Reviewtem review={review} key={review.id}/>
      ))}
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
