import ListaPets from './ListaPets'


export default function App() {

  console.log('Rodando App')

  const numero = 3 + 7

  const hora = new Date().toLocaleTimeString()

  function clickBotao() {
    console.log('click botao')
  }

  return (
    <div>
      <h1>Testando React, o número é: { numero }</h1>
      <h2>Hora atual: { hora }</h2>
      <button onClick={ clickBotao }>clique aqui!</button>
      
      <ListaPets dono="Ivo" />
      <hr />
      <ListaPets dono="Paulo" />
    </div>
  )
}