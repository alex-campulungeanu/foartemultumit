import React, { useState } from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineContentCopy} from 'react-icons/md'
import toast from 'react-hot-toast'

import {copyTextToClipboard} from '@utils/misc'
import {Tooltip} from '@components/misc/Tooltip'


interface ProductUrlCardProps {
  productUrl: string
}

export const ProductUrlCard = ({productUrl}: ProductUrlCardProps): JSX.Element => {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(productUrl)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        toast.success('Successfully copied!');
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='flex  justify-between text-green-400 text-opacity-90 text-base font-bold mt-4 mx-4 p-4 border-2 shadow-md rounded-md'>
      <div className="flex">
        <BsInfoCircle size='22' className='mr-3'/>
        {productUrl}
      </div>
      <div className="cursor-pointer" onClick={handleCopyClick}>
        <Tooltip content="Copy link" placement="bottom">
          <span className='hover:text-green-200 duration-250'>
            <MdOutlineContentCopy size='30'/>
          </span>
        </Tooltip>
      </div>
  </div>
  )
}
