import React from 'react'
import styles from './Details.module.css'
//import { productImages } from '../../assets'

const Details = (props) => {
  console.log(props.props.title)
  return (
    <div className={styles.detail}>
      <h1>{props.props.title}</h1>
      <p>{props.props.descricao}</p>
      <button>Assistir agora</button>
    </div>
  )
}

export default Details
