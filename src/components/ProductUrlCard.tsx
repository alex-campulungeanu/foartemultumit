import React from 'react'
import {BsInfoCircle} from 'react-icons/bs'

interface ProductUrlCardProps {
  productUrl: string
}

export const ProductUrlCard = ({productUrl}: ProductUrlCardProps): JSX.Element => {
  return (
    <div className='product-url'>
      <BsInfoCircle size='22' className='mr-3'/>
      {productUrl}
  </div>
  )
}
