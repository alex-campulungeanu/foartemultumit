import React from 'react'
import {useSelector} from 'react-redux'
import styles from '@src/styles/Sidebar.module.css'

export const Sidebar = () => {
  const reviews = useSelector((state) => state.reviews)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img
          src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
          alt="" />
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>Reviews: {reviews.totalReviews.length}</div>
        <div className={styles.stat}>Filtered: {reviews.filteredReviews.length}</div>
      </div>
    </div>
  )
}
