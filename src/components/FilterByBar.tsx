import React from 'react'
import {FaSistrix} from 'react-icons/fa'

interface FilterByBarProps {
  handleFilter: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const FilterByBar = ({handleFilter} : FilterByBarProps) => {
  return (
    <div className='bottom-bar'>
      <FaSistrix
        size='22'
        className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
      />
      <input type='text' placeholder='Filter by word ...' className='bottom-bar-input' onChange={handleFilter} />
    </div>
  )
}