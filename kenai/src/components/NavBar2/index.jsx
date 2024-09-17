//import React from 'react'
import { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
            Harnish
          </div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : 'hamBox'}>
              <span className={navOpen ? "lineTop spin" : 'lineTop'}></span>
              <span className={navOpen ? "lineBottom spin" : 'lineBottom'}></span>
            </div>
          </div>
        </div>
        <div className="nav-overlay" 
          style={{
            top: navOpen ? '0' : '-100%',
            transitionDelay: navOpen ? '0s' : '0s',
          }}
        >
          <ul className='nav-links'>
            <li className='nav-item'>
              <Link to='/'>Home</Link>
              <div className='nav-item-wrapper'></div>
            </li>
            <li className='nav-item'>
              <Link to='/'>Projects</Link>
              <div className='nav-item-wrapper'></div>
            </li>
            <li className='nav-item'>
              <Link to='/'>About</Link>
              <div className='nav-item-wrapper'></div>
            </li>
            <li className='nav-item'>
              <Link to='/'>Contact</Link>
              <div className='nav-item-wrapper'></div>
            </li>
          </ul>
          <div className='nav-footer'>
            <div className="location">
              <span>Toronto, ON</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
