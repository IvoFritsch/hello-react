import './css/Feed.css'
import Post from './Post'

const posts = [
  {
    author: 'Ana Paula',
    qttLikes: 3,
    comments: [{
      author: 'Ivo',
      text: 'Perfeito'
    }],
    date: '04/03/2022'
  },
  {
    author: 'Paulo Fritsch',
    qttLikes: 1,
    comments: [],
    date: '21/03/2022'
  },
  {
    author: 'Igor Nunes',
    qttLikes: 25,
    comments: [],
    date: '21/03/2015'
  },
  {
    author: 'Ingrid Maria',
    qttLikes: 35,
    comments: [{
      author: 'Ivo',
      text: 'Mto bom!!!'
    },{
      author: 'Anna',
      text: 'Lindo'
    },{
      author: 'Luiz',
      text: 'Muito legal!'
    },{
      author: 'Lucas',
      text: 'Parabéns pela foto'
    }, {
      author: 'André',
      text: 'Foto bonita'
    }],
    date: '21/03/2022'
  }
]

export default function Feed() {
 
  return (
    <main className="container content">

      {posts.map(p => 
        <Post dados={p}/>
      )}

      <button id="more">Ver Mais</button>
    </main>
  )
}