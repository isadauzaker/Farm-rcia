import React from 'react'
import './Header.css'


function Header({mostrarHome,  mostrarSenha, mostrarProdutos, mostrarServiços}) {

  return (
    <div className='Header-container'>

      <div className='img-logo'>
      <img src="farmarcia-logo-pq.PNG.png" alt="" />
      </div>
        
        <h1>Farmárcia</h1>
        <button onClick={mostrarHome}>HOME</button>
        <button onClick={mostrarSenha}>Senha</button>
        <button onClick={mostrarProdutos}>Produtos</button>
        <button onClick={mostrarServiços}>Serviços</button>

       <div className='user-img'>
        <img src="user icon.png" alt="" />
       </div>

    </div>
  )
}

export default Header