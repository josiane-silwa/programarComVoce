//import React from 'react'
import Frame from "../Frame"
import Header from "../Header"
import ListFilms from "../ListFilms"
import NavBar from "../NavBar"
import styles from './Main.module.css'
import Carrossel from '../Carrossel/index'

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      {/*<NavBar />*/}
      {/*<Frame />*/}
      <Carrossel className='carousel-container'/>
    </div>
  )
}

export default Main
