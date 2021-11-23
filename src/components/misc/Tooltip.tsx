import React from 'react'
import Tippy, {TippyProps} from '@tippyjs/react/headless'

export const Tooltip = (props: Partial<TippyProps>): JSX.Element => {
  return (
    <Tippy 
      {...props}
      // interactive={true}
      // interactiveBorder={60}
      render={attrs => (
        <div className='bg-gray-600 text-white p-2 rounded-md' {...attrs}>
          {props.content}
        </div>
      )}
    >
      {props.children}
    </Tippy>
  )
}