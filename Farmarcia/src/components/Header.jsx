import React from 'react'
import { useState } from 'react'
import './Header.css'

function Header() {

  return (
    <div className='Header-container'>
      
        <img className='img-logo' src="farmarcia-logo-pq.PNG.png" alt="" />
        <h1>Farmárcia</h1>
        <button>HOME</button>
        <button>Senha</button>
        <button>Produtos</button>
        <button>Serviços</button>

    </div>
  )
}

export default Header