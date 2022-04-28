import { useState } from 'react'
import './css/Post.css'

export default function Post(props) {

  const [deuLike, setDeuLike] = useState(false)

  const dados = props.dados

  const [qttLikes, setQttLikes] = useState(dados.qttLikes)

  function like() {
    setDeuLike(!deuLike)
    setQttLikes(qttLikes + 1)
  }

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <img className="avatar" src="img/avatar-example.png" alt=""/>
          <b>{dados.author}</b>
        </div>
        <img src="img/icons/more-vertical.svg" alt=""/>
      </div>
      <div className="card-img">
        <img src="img/publication_example.jpg" alt=""/>
      </div>
      <div className="card-body">
        <div className="card-itens">
          <div className="likes" onClick={like}>
            {
              deuLike ?
                <img src="img/red-heart.png" width="24px" alt=""/>
                :
                <img src="img/icons/heart.svg" width="24px" alt=""/>
            }
            <b><span>{qttLikes}</span> likes</b>
          </div>
          <b>Postado no dia: {dados.date}</b>
        </div>
        <div className="card-comments">
          {dados.comments.map(c => 
            <p>
              <b>{c.author}</b>
              &nbsp;
              {c.text}
            </p>
          )}
        </div>
      </div>
      <form className="form-comments" action="/comentar" method="post">
        <input type="text" hidden name="postId" value=""/>
        <input type="text" placeholder="Adicione um comentário..." name="description"/>
        <button type="submit">Comentar</button>
      </form>
    </div>
  )
}