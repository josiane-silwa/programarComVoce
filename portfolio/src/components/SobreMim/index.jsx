import React from 'react'
/*
import linkedinIcon from '../../assets/icons8-linkedin-48.png'
import latesIcon from '../../assets/icons8-twitter-48.png'
import githubIcon from '../../assets/icons8-github-64.png'
import facebookIcon from '../../assets/icons8-facebook-48.png'
import instagramIcon from '../../assets/icons8-instagram-48.png'*/
import gitHubIcon from '../../assets/Icons/github.svg';
import linkedinIcon from '../../assets/Icons/linkedin.svg';
import instagramIcon from '../../assets/Icons/instagram.svg';
import youtubeIcon from '../../assets/Icons/youtube.svg';
//import teste from '../../public/testeD.png'
import teste from '../../assets/img/cel06012017071.jpg'
import styles from './sobre.module.css'

const SobreMim = () => {
  return (
    <div className='container'>
      {/*  <h1>Sobre mim</h1>
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
        </div>*/}


        <section id='about_me' className={styles.about_me}>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "100px 0" }}
            >
              <div className={styles.about_me_text}>
                <h2 className={styles.title_section} style={{marginBottom: "40px"}}>Sobre mim</h2>
                <p style={{ fontSize: "20px", fontWeight: "500" }}>
                  Cruzeiro - SP, Brasil
                </p>
                <p className={styles.description} style={{ width: "80%" }}>
                Meu nome é Josiane da Silva, sou desenvolvedora web. Me dedico ao frontend e também ao backend. Traballhando e estudando
                </p>
              </div>
              <div className={styles.about_me_social_links}>
                <a href="https://github.com/josiane-silwa">
                  <img src={gitHubIcon} alt="GitHub" />
                </a>
                <a href="https://github.com/josiane-silwa">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/josiane-silwa">
                  <img src={instagramIcon} alt="Instagram" />
                </a>  
                <a href="https://github.com/josiane-silwa">
                  <img src={youtubeIcon} alt="Instagram" />
                </a>  
              </div>
              <div className={styles.buttons_about}>
                <button className={styles.curriculum_btn}>
                 <a href={teste} download='testeDownload'>Baixar Currículo</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SobreMim
