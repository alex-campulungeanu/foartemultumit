import React from 'react'
import {useSelector} from 'react-redux'

import {Dropdown} from './Dropdown'

const ActionsBar = () => {
  // TODO: fix this
  // @ts-ignore:next-line
  const reviews = useSelector((state) => state.reviews)
  
  return (
    <div className='summary-bar'>
      <div className='summary-block'>
        <h5 className='summary-block-text'>Actions</h5>
      </div>
      <div className='summary-container'>
        <Dropdown header='Reviews' reviews={reviews}/>
      </div>
    </div>
  )
}

export default ActionsBar