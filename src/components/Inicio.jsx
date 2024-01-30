import { Link } from "react-router-dom"
import { ListadoTrabajo } from "./ListadoTrabajo"
import persona from "../../src/image/yo-5.png"




export const Inicio = () => {

      

  return (

    <div className="home">
      <div className="fondo-image">
        <div className="imagen-principal">
          <img src={persona} alt="Luis Manuel" />
        </div>
      </div>
      <div className="home-box" id="cloud">
        <h1>
        Soy Luis Manuel Camacho Fontacaba, un apasionado <strong>desarrollador web</strong> autodidacta 
        con <strong>3 años de experiencia</strong> en la creación de aplicaciones web. 
        Mi enfoque principal se centra en el desarrollo <strong>front-end</strong>, donde he desarrollado mis habilidades 
        utilizando tecnologías avanzadas como <strong>AngularJS y ReactJS.</strong> 
        </h1>
      </div>
      
      <h2>
        Te ayudo a crear tu sitio web, tener más 
        visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo. </Link>
      </h2>
      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        
        <p>Estos son algunos de mis trabajos en desarrollo web.</p>
        
        <div className="works">
        <ListadoTrabajo limite="2"/>
        </div>
      </section>
    </div>
  )
}
