import './css/Navbar.css'

export default function Navbar() {
  return (
    <header id="navbar-header">
      <div className="container header">
        <div id="logo">
          <img src="img/logo.png" alt=""/>
        </div>
        <div className="busca" >
          <form>
            <input type="search" className="search" placeholder="buscar usuarios"/>
          </form>
        </div>
        <nav>
          <a href="/publicar">
            <img src="img/icons/plus.svg" alt="Adicionar Publicação" title="Adicionar Publicação"/>
          </a>
          <a href="/home">
            <img src="img/icons/home.svg" alt=""/>
          </a>
          <a href="/">
            <div className="avatar-content">
              <img className="avatar" src="img/avatar-example.png" alt=""/>
              <b>Nome do Usuário</b>
            </div>
          </a>
        </nav>
      </div>
    </header>
  )
}