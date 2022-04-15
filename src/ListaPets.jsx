
export default function ListaPets(props) {

  function mostraPetClicado(event) {
    alert(`${event.target.innerText} do ${props.dono}`)
  }

  return (
    <div>
      <h3>Pets do {props.dono}:</h3>
      <ul>
        <li onClick={mostraPetClicado}>Cachorro</li>
        <li onClick={mostraPetClicado}>Gato</li>
        <li onClick={mostraPetClicado}>Peixe</li>
      </ul>
    </div>
  )
}
