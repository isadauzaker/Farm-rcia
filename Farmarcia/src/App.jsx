import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Senha from './pages/Senha'
import Produtos from './pages/Produtos'
import Serviços from './pages/Serviços'


function App() {
  const [pagina, setPagina] = useState(<Body />)

  return (
    <>
      <Header
        mostrarHome={ () => setPagina(<Home />)}
        mostrarSenha={ () => setPagina(<Senha />) }
        mostrarProdutos={ () => setPagina(<Produtos />)}
        mostrarServiços={ () => setPagina(<Serviços />)}
      />
      <div className='container'>
      {pagina}
      </div>
      
      <Footer />
      
    </>
  )
}

export default App
