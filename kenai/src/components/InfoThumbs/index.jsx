import React, {useState} from 'react'
import RatingReview from '../RatingReview'
import { FaClock } from 'react-icons/fa'
import styles from './InfoThumbs.module.css'

const InfoThumbs = (props) => {
  {console.log('item thumbs',props.props.classificacao)}
  return (
    <div>
      <div className={styles.infoClassificacao}>
        <p>{props.props.classificacao}</p>
      </div>
      <div className={styles.infoRating}>
        <RatingReview />
      </div>
    </div>
  )
}

export default InfoThumbs
