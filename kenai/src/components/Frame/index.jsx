import React from 'react'
import Info from '../Info'
import Details from '../Details'
import styles from './Frame.module.css'
import Carrossel from '../Carrossel'

const Frame = () => {
  return (
    <div className={styles.frame}>
      <Info />
      <Details />
      <Carrossel />
    </div>
  )
}

export default Frame
