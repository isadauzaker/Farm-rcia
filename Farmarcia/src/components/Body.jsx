import React from 'react'
import './Body.css'

function Body() {
  return (
    <div className='Body-container'>
        <h1>Bem-vindo à Farmárcia</h1>
        <h2>Seu Parceiro em Saúde e Bem-Estar!</h2>
        <p>Na Farmárcia, entendemos que sua saúde é a prioridade número um. É por isso que nos dedicamos a oferecer um atendimento excepcional e uma variedade de produtos que atendem a todas as suas necessidades. Desde medicamentos essenciais até dicas de bem-estar, estamos aqui para apoiar você e sua família em cada passo do caminho.</p>
        <h3>Gere sua Senha agora!</h3>
        <button className='bnt-body'>SENHA</button>
        <button className='bnt-body'>SENHA PREFERENCIAL</button>
        
    </div>
  )
}

export default Body