import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Projetos from '../../components/Projetos'
import Experiencias from '../../components/Experiencias/index'
import Footer from '../../components/Footer'
import SobreMim from '../../components/SobreMim'
import ButtonScrolling from "../../components/ButtonScrolling/ButtonScrolling.jsx"
import styles from './home.module.css'
import Perfil from '../../assets/img/cel06012017071.jpg'

const Home = () => {
  return (
    <div>
      <Header />
        <section id="home" className={styles.home}>
          <div className="container">
            <div className="row">
              <div
                className="col-md-6"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <h2 className={styles.title}>Olá, eu sou</h2>
                  <h1 className={styles.title_name}>Josiane da Silva</h1>
                  <h3 className={styles.title_description}>
                    Desenvolvedora Web Full-Stack
                  </h3>
                  <div className={styles.buttons}>
                    <button className={styles.home_button_github}>
                      <a href="https://github.com/josiane-silwa">GitHub</a>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className={styles.home_img}>
                  <img className="img-fluid" src={Perfil} alt="theme" />
                </div>
              </div>
            </div>
          </div>
        </section>
      <SobreMim />
      <Experiencias />
      <Projetos />
      <Footer />
    </div>
  )
}

export default Home
