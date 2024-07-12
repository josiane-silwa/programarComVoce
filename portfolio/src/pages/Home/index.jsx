import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Projetos from '../../components/Projetos'
import Experiencias from '../../components/Experiencias'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Experiencias />
      <Projetos />
      <Footer />
    </div>
  )
}

export default Home
