import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import {BiSortDown, BiSortUp} from 'react-icons/bi'
import {FcAlphabeticalSortingAz, FcAlphabeticalSortingZa} from 'react-icons/fc'

import {RootState} from '@store/reducers'
import {actions} from '@store/index'
import {EmagResponse} from '@interfaces/reviewsInterface'
import {sortJsonByProperty} from '@utils/misc'

// type directionType  = 'up' | 'down'

const options = [
  {
    id: 1,
    icon: <FcAlphabeticalSortingAz size='28'/>,
    ascending: false
  },
  {
    id: 2,
    icon: <FcAlphabeticalSortingZa size='28'/>,
    ascending: true
  }
]

const ReviewsSort = (): JSX.Element => {
  const [currentOption, setCurrentOption] = useState(1)
  // TODO: maybe i can create a pre-typed version of the useSelector hook https://redux.js.org/usage/usage-with-typescript
  const reviews: {totalReviews: Array<EmagResponse>, filteredReviews: Array<EmagResponse>} = useSelector((state: RootState) => state.reviews)
  const dispatch = useDispatch()
  const {addTotalReview, addFilteredReview, resetReview} = bindActionCreators(actions, dispatch)

  const sortReviews = (ascending: boolean, currentItem) => {
    const totalSorted = sortJsonByProperty(reviews.totalReviews, 'id', ascending)
    const filteredSorted = sortJsonByProperty(reviews.filteredReviews, 'id', ascending)
    addTotalReview(totalSorted)
    addFilteredReview(filteredSorted)
    setCurrentOption(currentItem)
  }
  return (
    <div className='dropdown-selection'>
      {
        options.map(item => {
          return (
            <div 
              key={item.id} 
              onClick={() => sortReviews(item.ascending, item.id)} 
              className={`cursor-pointer bg-gray-400 rounded-lg p-2 ${currentOption != item.id ? 'bg-transparent': null}`}>
              {item.icon}
            </div>
          )
       }) 
      }
    </div>
  )
}

export default ReviewsSort
