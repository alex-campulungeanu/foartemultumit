import React from 'react'
import Link from 'next/link'

interface ErrorPageProps {
  statusCode: number,
  message: string
}

export const ErrorPage = ({statusCode, message}: ErrorPageProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <div className='flex items-center justify-center'>
        <div className=' px-4 text-4xl font font-semibold text-red-400 border-r border-gray-400 tracking-wider'>
          {statusCode}
        </div>
        <div className='ml-4 text-3xl text-red-300 tracking-wider'>
          {message}
        </div>
      </div>
      <div className='flex justify-center mt-2'>
        <Link href='/'>
          <a className='hover:underline'>Want to go home ?</a>
        </Link>
      </div>
    </div>
  )
}


