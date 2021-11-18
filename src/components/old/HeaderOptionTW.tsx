//unused
import React from 'react'

export const HeaderOption = ({Icon, title, onClick}) => {
  return (
    <div onClick={onClick} className='cursor-pointer' >
      <Icon />
      {title && 
        <h3>
          {title}
        </h3>
      } 
    </div>
  )
}