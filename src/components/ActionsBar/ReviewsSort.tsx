import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import {FcAlphabeticalSortingAz, FcAlphabeticalSortingZa} from 'react-icons/fc'

import {RootState} from '@store/reducers'
import {actions} from '@store/index'
import {EmagResponse} from '@interfaces/reviewsInterface'
import {sortJsonByProperty} from '@utils/misc'
import { Tooltip } from '@components/misc/Tooltip'

// type directionType  = 'up' | 'down'

interface Options {
  id: number,
  icon: JSX.Element,
  ascending: boolean,
  label: string
}

const options: Array<Options> = [
  {
    id: 1,
    icon: <FcAlphabeticalSortingAz size='28'/>,
    ascending: false,
    label: 'recent first'
  },
  {
    id: 2,
    icon: <FcAlphabeticalSortingZa size='28'/>,
    ascending: true,
    label: 'oldest first'
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
            <Tooltip content={item.label} placement="bottom" key={item.id} >
              <div 
                onClick={() => sortReviews(item.ascending, item.id)} 
                className={`cursor-pointer bg-gray-400 rounded-lg p-2 ${currentOption != item.id ? 'bg-transparent': null}`}>
                {item.icon}
              </div>
          </Tooltip>
          )
       }) 
      }
    </div>
  )
}

export default ReviewsSort
