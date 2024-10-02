import './Sorteio.css'
import React, { useState } from 'react'

function Sorteio() {

  const [numero, setNumero] = useState('')
  const [mensagem, setMensagem] = useState('')
  const numeroDaSorte = 7

  function verificarNumero(){
    if (parseInt(numero) === numeroDaSorte) {
      setMensagem('Parabéns! Você ganhou uma linda camiseta Personalizada! 😃🎉');
    } else {
      setMensagem('Não foi dessa vez. Tente novamente!😓');
    }
  }

  return (
    <div className="sorteio-container">

      <h2 className='tittle'>Sorteio de Camisetas Personalizadas</h2>

      <img className='imagem-camiseta' src="./farmarcia-camisetas.png" alt="" />

      <p>Digite um número de 1 a 10 e veja se você ganha uma camiseta!</p>

      <input className='input-numero' type="number"
      value={numero}
      onChange={(e) => setNumero(e.target.value)}
      placeholder='Selecione um número' />

      <button onClick={verificarNumero} className="botao-verificar">Verificar</button>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  )
}

export default Sorteio
