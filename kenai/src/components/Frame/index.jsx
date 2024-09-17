import React from 'react'
import Info from '../Info'
import Details from '../Details'
import styles from './Frame.module.css'

const Frame = () => {
  return (
    <div className={styles.frame}>
      <Info />
      <Details />
    </div>
  )
}

export default Frame
