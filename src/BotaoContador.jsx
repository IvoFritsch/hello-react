import { useState } from 'react'


export default function BotaoContador(props) {

  const [contador, setContador] = useState(props.valorInicial)

  return (
    <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
  )
}