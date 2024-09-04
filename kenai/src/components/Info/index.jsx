import React, {useState} from 'react'
import RatingReview from '../RatingReview'
import { FaClock } from 'react-icons/fa'
import styles from './Info.module.css'

const Info = (props) => {

  return (
    <div>
      <div className={styles.infoClassificacao}>
        <p>{props.props.classificacao}</p>
      </div>
      <div className={styles.infoRating}>
        <RatingReview />
        <div>
          <FaClock className={styles.infoClock}/>
        </div>
        <p>1h 57m</p>
      </div>
    </div>
  )
}

export default Info
