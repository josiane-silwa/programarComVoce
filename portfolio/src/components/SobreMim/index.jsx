import React from 'react'
import linkedinIcon from '../../assets/icons8-linkedin-48.png'
import latesIcon from '../../assets/icons8-twitter-48.png'
import githubIcon from '../../assets/icons8-github-64.png'
import facebookIcon from '../../assets/icons8-facebook-48.png'
import instagramIcon from '../../assets/icons8-instagram-48.png'
import './Sobre.modules.css'

const SobreMim = () => {
  return (
    <div className='container'>
        <h1>Sobre mim</h1>
        <p>Cruzeiro - SP, Brasil </p>
        <p>Meu nome é Josiane da Silva, sou desenvolvedora web. Me dedico ao frontend e também ao backend. Traballhando e estudando </p>
        <div className='icons'>
            <a href="#"><img src={linkedinIcon} alt=""></img></a>
            <a href="#"><img src={latesIcon} alt=""></img></a>
            <a href="#"><img src={githubIcon} alt=""></img></a>
            <a href="#"><img src={facebookIcon} alt=""></img></a>
            <a href="#"><img src={instagramIcon} alt=""></img></a>
        </div>
        <div className='btn'>
          <button>Baixar Curriculum</button>
        </div>
    </div>
  )
}

export default SobreMim
