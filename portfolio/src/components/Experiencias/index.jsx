
import React, { useState } from 'react';
import experiencias from '../../data/data.js'
import AcordionEsperiences from './AcordionExperiences.jsx'


const Experiencias = () => {

  return(

    <div className="container">
      {experiencias.map((item) => (
        <AcordionEsperiences funcao={item.funcao} key={item.id}>
        <span>{item.descricao}</span>
        <span>{item.competencias}</span>
      </AcordionEsperiences>
      ))}
    </div>
  )
}



export default Experiencias
