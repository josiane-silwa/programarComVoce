import React, { useState } from 'react'
//import image from '../../assets/cel06012017071.jpg'
import styles from './header.module.css'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='container-header'>
        {/*<div className='text'>
        <p>Ol&aacute;, eu sou</p>
        <h1>Josiane da Silva</h1>
        <p>Desenvolvedora Web Full Stack</p>
        <button>LinkedIn</button>
      </div>
      <div className='img'>
        <img src={image} alt="" />
      </div>*/}
      <header id="header_section" className="container">
        <div className="row">
          <div className={styles.header}>
            <div className="col-md-6">
              <h1 className={styles.header_title}>Portifólio</h1>
            </div>
            <div className="col-md-6">
              <div className={styles.header_menu}>
                <button className={styles.hambuger_button} onClick={toggleMenu}>☰</button>
                <ul className={`${styles.header_menu_list} ${showMenu ? styles.active : ""}`}>
                  <li>
                    <a href="/" style={{ textDecoration: "none", color: "#FFFFFF"}}>Home</a>
                  </li>
                  <li>
                    <a href='#about_me' style={{ textDecoration: "none", color: "#FFFFFF"}}>Sobre Mim</a>
                  </li>
                  <li>
                    <a href="#experiences" style={{ textDecoration: "none", color: "#FFFFFF"}}>Experiências</a>
                  </li>
                  <li>
                    <a href="#projects" style={{ textDecoration: "none", color: "#FFFFFF"}}>Projetos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "1px", backgroundColor: "#151515" }}></div>
      </header>
    </div>
  )
}

export default Header
