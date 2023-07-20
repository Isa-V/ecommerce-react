import { Link } from "react-router-dom"
import '../NotFound/NotFound.css'

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h2>¡Ups! Lo sentimos, la página que buscas no existe.</h2>
      <p>
        Parece que te has perdido. Te recomendamos regresar a la página de inicio.
      </p>
      <Link to="/" className="notFoundLink">
        Volver a la página de inicio
      </Link>
    </div>
  )
}

export default NotFound