import React from 'react'

interface DividerProps {
  borderColor: string
}

export const Divider = (props: DividerProps): JSX.Element => {
  //  TODO: conditional class is not working
  return (
    <hr className={`bg-${props.borderColor}-200 dark:bg-${props.borderColor}-800 border border-${props.borderColor}-200 dark:border-${props.borderColor}-800 rounded-full mx-2`} />
  )
};