import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <nav className='hamburger'>
        <div className='burger burger1'/>
        <div className='burger burger2'/>
        <div className='burger burger3'/>
      </nav>
    </div>
  )
}

export default Menu
