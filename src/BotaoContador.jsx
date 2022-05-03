import { useEffect, useState } from 'react'


export default function BotaoContador(props) {

  const [contador, setContador] = useState(props.valorInicial)

  useEffect(() => {
    console.log('botão apareceu')
  })

  return (
    <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
  )
}