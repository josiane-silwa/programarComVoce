//import React from 'react'
import Frame from "../Frame"
import Header from "../Header"
import ListFilms from "../ListFilms"
import NavBar from "../NavBar"
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Frame />
      <ListFilms />
    </div>
  )
}

export default Main
