import React from 'react'
import './Body.css'
import Sorteio from './Sorteio'

function Body() {
  return (
    <div className='Body-container'>
        <h1 className="body-title" >Bem-vindo à Farmárcia</h1>
        <h2 className="body-subtitle" >Seu Parceiro em Saúde e Bem-Estar!</h2>

        <p className="body-text" >Na Farmárcia, entendemos que sua saúde é a prioridade número um. É por isso que nos dedicamos a oferecer um atendimento excepcional e uma variedade de produtos que atendem a todas as suas necessidades. Desde medicamentos essenciais até dicas de bem-estar, estamos aqui para apoiar você e sua família em cada passo do caminho.</p>

        <img className='img-cesta' src="cesta-farmarcia.png" alt="" />

        <Sorteio />
      
    </div>
  )
}

export default Body