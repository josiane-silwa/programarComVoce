import React from 'react'
import image from '../../assets/cel06012017071.jpg'
import './Header.modules.css'

const Header = () => {
  return (
    <div className='container-header'>
      <div className='text'>
        <p>Ol&aacute;, eu sou</p>
        <h1>Josiane da Silva</h1>
        <p>Desenvolvedora Web Full Stack</p>
        <button>LinkedIn</button>
      </div>
      <div className='img'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Header
