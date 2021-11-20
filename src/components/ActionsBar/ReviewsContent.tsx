import React from 'react'
import {useSelector} from 'react-redux'
import {BsHash} from 'react-icons/bs'

const ReviewsContent = () => {
  // TODO: fix this
  // @ts-ignore:next-line
  const reviews = useSelector((state) => state.reviews)

  const TopicSelection = ({label, number}: {label: string, number: string}) => {
    return (
      <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400'/>
        <h5 className='text-gray-500 font-semibold tracking-wide mr-auto transition duration-300 ease-in-out hover:text-pink-500 dark:hover:text-gray-500 cursor-pointer'>
          <div>{label}: {number}</div>
        </h5>
      </div>
    )
  }

  return (
    <div>
      <TopicSelection label='Total' number={reviews.totalReviews.length}/>
      <TopicSelection label='Filtered' number={reviews.filteredReviews.length}/>
    </div>
  )
}

export default ReviewsContent
