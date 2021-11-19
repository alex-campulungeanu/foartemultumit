import React from 'react';
import {format, parseISO} from 'date-fns'

import {getAuthorInitials} from '@utils/misc'
import {EmagResponse} from '@interfaces/reviewsInterface'

const ReviewItem = ({review} : {review: EmagResponse}) => {
  const seed = Math.round(Math.random() * 100)
  const createdFormated = format(parseISO(review.created), 'dd/MM/yyyy')

   return (
    <div  className='review'>
      {/* TODO: avatars api is called on every render, this is a NO NO, fix this please */}
      {/* <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div> */}
      <div className='avatar-wrapper from-green-400 to-green-100'>
        {getAuthorInitials(review.user.name)}
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