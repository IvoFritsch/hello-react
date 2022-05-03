import { useEffect, useState } from 'react'
import BotaoContador from './BotaoContador'
import './css/Feed.css'
import Post from './Post'

export default function Feed() {
 
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setPosts([{"author":"Ana Paula","qttLikes":3,"comments":[{"author":"Ivo","text":"Perfeito"}],"date":"04/03/2022"},{"author":"Paulo Fritsch","qttLikes":1,"comments":[],"date":"21/03/2022"},{"author":"Ingrid Maria","qttLikes":35,"comments":[{"author":"Ivo","text":"Mto bom!!!"},{"author":"Anna","text":"Lindo"},{"author":"Luiz","text":"Muito legal!"},{"author":"Lucas","text":"Parabéns pela foto"}],"date":"21/03/2022"}])
    }, 3000)
  })

  return (
    <main className="container content">
      <BotaoContador valorInicial={3}/>
      <BotaoContador valorInicial={6}/>
      <BotaoContador valorInicial={1}/>
      <BotaoContador valorInicial={10}/>
      <BotaoContador valorInicial={2}/>
      {posts.map((p, index) => 
        <Post dados={p} key={index}/>
      )}
      {posts.length == 0 &&
        <b>Carregando os posts...</b>
      }

      <button id="more">Ver Mais</button>
    </main>
  )
}