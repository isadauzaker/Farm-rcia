import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Header-container'>
        <img className='img-logo' src="farmarcia-logo-pq.PNG.png" alt="" />
        <a href="">HOME</a>
        <a href="">Sobre Nós</a>
        <a href="">Produtos</a>
        <a href="">Serviços</a>
        <a href="">Contato</a>
        <a href="">Promoções</a>

        <button className='bnt-header'>Cadastro</button>
        <button className='bnt-header'>Login</button>
        

    </div>
  )
}

export default Header