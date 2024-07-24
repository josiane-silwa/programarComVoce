import React from 'react'
import styles from './navBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar_container}>
      <span>Josiane da Silva</span>
      <ul className={styles.navbar_ul}>
        <li>Início</li>
        <li>Sobre Mim</li>
        <li>Experiências</li>
        <li>Projetos</li>
      </ul>
      <div>
      <hr />
      </div>
    </div>
  )
}

export default NavBar
