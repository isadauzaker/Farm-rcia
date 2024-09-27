import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className='footer-container' >
            <div className='footer-logo' >
                <img src="farmarcia-logo-pq.PNG.png" alt="" />
            </div>

            <div className='footer-socials'>
                <h4>Nos Acompanhe!</h4>
                
                <img src="icon instagram.png" alt="" />
                <a href="">@farmarcia</a>

                <img src="icon facebook.png" alt="" />
                <a href="">@farmarcia</a>

                <img src="icon whatsapp.png" alt="" />
                <a  href="">48 9 1234-5678</a>
                
                <div className='footer-info' >
                    <p>© 2024 - Todos os direitos reservados</p>
                    <p>Endereço da empresa, Cidade, Estado, CEP</p>
                    <p>Contato: farmarcia7@gmail.com</p>
                </div>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer
