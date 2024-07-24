import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Projetos from '../../components/Projetos'
import Experiencias from '../../components/Experiencias/index'
import Footer from '../../components/Footer'
import SobreMim from '../../components/SobreMim'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <SobreMim />
      <Experiencias />
      <Projetos />
      <Footer />
    </div>
  )
}

export default Home
