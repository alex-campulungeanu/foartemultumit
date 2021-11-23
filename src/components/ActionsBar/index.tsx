import { Divider } from '@components/misc/Divider'
import React from 'react'

import {DropdownContainer} from './DropdownContainer'
import ReviewsContent from './ReviewsContent'
import ReviewsSort from './ReviewsSort'

const ActionsBar = () => {
  
  return (
    <div className='summary-bar'>
      <div className='summary-block'>
        <h5 className='summary-block-text'>Actions</h5>
      </div>
      <div className='summary-container'>
        <DropdownContainer header='Reviews' content={<ReviewsContent />}/>
        <Divider borderColor='red'/>
        <DropdownContainer header='Sort by date' content={<ReviewsSort />}/>
      </div>
    </div>
  )
}

export default ActionsBar