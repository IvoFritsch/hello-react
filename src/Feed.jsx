import './css/Feed.css'
import Post from './Post'

export default function Feed() {
 
  return (
    <main className="container content">

      <Post />
      <button id="more">Ver Mais</button>
    </main>
  )
}