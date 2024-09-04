import React from 'react'
import styles from './Carousel.module.css'

const CarouselControl = ({prev, next}) => {
  return (
    <div>
      <button className={styles.left} onClick={prev}>Prev</button>
      <button className={styles.right} onClick={next}>Next</button>
    </div>
  )
}

export default CarouselControl
