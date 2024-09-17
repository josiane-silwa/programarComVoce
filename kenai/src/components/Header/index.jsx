import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [ showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.gradient}>Kenai</h1>
      <Link to="/">
                
      </Link>
      <nav 
        className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
        onClick={toggleMenu}
      >
          <Link to="/">Home</Link>
          <Link to="/sobre" className='btn btn-red' >Sobre mim </Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contatos">Contatos</Link>
        </nav>
        <div 
          className={styles.menuButton}
          onClick={toggleMenu}
        >
          <span className={styles.linha1}></span>
          <span className={styles.linha2}></span>
          <span className={styles.linha1}></span>
          <span className={styles.linha2}></span>
        </div>
    </header>
  )
}

export default Header
