import React from 'react'

import styles from '@src/styles/HeaderOption.module.css'

const HeaderOption = ({Icon, title, onClick}) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <Icon className={styles.icon} />
      {title && 
        <h3 className={styles.title}>
          {title}
        </h3>
      } 
    </div>
  )
}

export default HeaderOption