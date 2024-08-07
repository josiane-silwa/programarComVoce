import React from 'react'
import Menu from '../Menu'
import Header from '../Header'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Header />
      <Menu />
    </div>
  )
}

export default NavBar
