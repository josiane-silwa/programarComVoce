import React from 'react'
import Info from '../Info'
import Details from '../Details'
import styles from './Frame.module.css'
import Carrossel from '../Carrossel/indexcopy'

const Frame = () => {
  return (
    <div className={styles.frame}>
      <Info />
      <Details />
      <div >
        {/*<Carrossel />*/}
        <Carrossel />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Frame
