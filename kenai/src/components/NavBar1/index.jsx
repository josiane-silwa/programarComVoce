import React, { useState } from 'react'
import Menu from '../Menu'
import Header from '../Header'
import styles from './NavBar.module.css'

const NavBar = () => {

  const [active, setActive] = useState(false)
  const toggleMode = () => {
    setActive(!active)
  }

  return (
    <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
      <div className='hamburger hamburgerIcon'>
        <Menu />
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <div className='list'>
          <ul className='listItems'>
            <li>Nome</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <Header />
    </div>
  )
}

export default NavBar
