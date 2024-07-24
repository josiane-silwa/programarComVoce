import React from 'react'
import instagramIcon from '../../assets/instagram2.png'
import './Projetos.modules.css'

const Projetos = () => {
  return (
    <div className='container-projetos'>
        <h1>Projetos</h1>
      <div className='projetos-coluna'>
        <div>
          <div className='img-projeto'>Imagem projeto</div>
          <h2>Nome do projeto</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h4>Tecnologias usadas no projeto</h4>
          <div className='btn'>
            <button className='btn1'><a href="#">Acessar Projeto</a></button>
            <button className='btn2'><a href="#">Acessar Repositório</a></button>
          </div>
        </div>
        <div>
          <div className='img-projeto'>Imagem projeto</div>
          <h2>Nome do projeto</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h4>Tecnologias usadas no projeto</h4>
          <div className='btn'>
            <button className='btn1'><a href="#">Acessar Projeto</a></button>
            <button className='btn2'><a href="#">Acessar Repositório</a></button>
          </div>
        </div>
      </div>
      <div className='projetos-coluna'>
        <div>
          <div className='img-projeto'>Imagem projeto</div>
          <h2>Nome do projeto</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h4>Tecnologias usadas no projeto</h4>
          <div className='btn'>
            <button className='btn1'><a href="#">Acessar Projeto</a></button>
            <button className='btn2'><a href="#">Acessar Repositório</a></button>
          </div>
        </div>
        <div>
          <div className='img-projeto'>Imagem projeto</div>
          <h2>Nome do projeto</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h4>Tecnologias usadas no projeto</h4>
          <div className='btn'>
            <button className='btn1'><a href="#">Acessar Projeto</a></button>
            <button className='btn2'><a href="#">Acessar Repositório</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projetos
