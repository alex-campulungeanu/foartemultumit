import Reviewtem from './Reviewtem'

const ReviewsList = ({reviews}) => {
  return (
    <div className='content-list'>
      {reviews.map(review => (
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
