import React from 'react'
import NavBar from '../NavBar'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.gradient}>Kenai</h1>
    </div>
  )
}

export default Header
