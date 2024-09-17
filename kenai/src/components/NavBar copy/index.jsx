//import React from 'react'
//import { useState } from 'react'
import './nav.css'
//import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Header from '../Header/'

const NavBar = () => {

  return (
    <nav className='navbar bg-dark navbar-dark'>
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img src="" alt="" style={{ width: '50px' }}/>
        </a>
        <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#menuCursos' style={{ cursor: 'pointer', ariaExpanded:'true' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id='menuCursos'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Arduino</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Bootstrap</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">C++</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Javascript</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
