import React from 'react'
import './Header.css'


function Header({mostrarHome,  mostrarSenha, mostrarProdutos, mostrarServiços}) {

  return (
    <div className='Header-container'>
      
        <img className='img-logo' src="farmarcia-logo-pq.PNG.png" alt="" />
        <h1>Farmárcia</h1>
        <button onClick={mostrarHome}>HOME</button>
        <button onClick={mostrarSenha}>Senha</button>
        <button onClick={mostrarProdutos}>Produtos</button>
        <button onClick={mostrarServiços}>Serviços</button>

       

    </div>
  )
}

export default Header