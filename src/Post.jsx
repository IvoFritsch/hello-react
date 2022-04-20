import './css/Post.css'

export default function Post() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <img className="avatar" src="img/avatar-example.png" alt=""/>
          <b>Ana Paula</b>
        </div>
        <img src="img/icons/more-vertical.svg" alt=""/>
      </div>
      <div className="card-img">
        <img src="img/publication_example.jpg" alt=""/>
      </div>
      <div className="card-body">
        <div className="card-itens">
          <div className="likes">
            <img src="img/icons/heart.svg" width="24px" alt=""/>
            <b><span>1</span> likes</b>
          </div>
          <b>Postado no dia: 00/00/0000</b>
        </div>
        <div className="card-comments">
          <p><b>Nome comentarista</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  </p>
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