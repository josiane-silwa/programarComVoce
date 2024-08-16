import React from 'react'
import img1 from '../../assets/img/shang-chi.png'
import img2 from '../../assets/img/wishDragon.png'
import styles from './Carrossel.module.css'
import RatingReview from '../RatingReview'

const Carrossel = () => {
  return (
    <div className={styles.imgContainer}>
      <div><img src={img1} alt="" /><RatingReview/></div>
      <div><img src={img2} alt="" /></div>
    </div>
  )
}

export default Carrossel
