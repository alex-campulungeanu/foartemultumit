import React from 'react';
import {format, parseISO} from 'date-fns'

const ReviewItem = ({review}) => {
  const seed = Math.round(Math.random() * 100)
  const createdFormated = format(parseISO(review.created), 'dd/MM/yyyy')

   return (
    <div  className='review'>
      {/* TODO: avatars api is called on every render, this is a NO NO, fix this please */}
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>
      <div className='review-content'>
        <p className='review-owner'>
          {review.user.name}
          <small className='timestamp'>{createdFormated}</small>
        </p>
        <p className='review-text'><span dangerouslySetInnerHTML = {{__html: review.content}} /></p>
      </div>
    </div>
  )
}

export default ReviewItem