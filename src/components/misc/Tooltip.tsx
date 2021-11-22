import React from 'react'
import Tippy, {TippyProps} from '@tippyjs/react'

export const Tooltip = (props: Partial<TippyProps>): JSX.Element => {
  return (
    <Tippy 
      {...props} 
      render={attrs => (
        <div className='bg-gray-600 text-white p-2 rounded-md' {...attrs}>
          Hello
        </div>
      )}
    >
      {props.children}
    </Tippy>
  )
}