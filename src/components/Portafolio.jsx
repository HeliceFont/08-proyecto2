import { Link } from "react-router-dom"
import { trabajos } from "../data/Trabajo"


export const Portafolio = () => {

  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>

      <section className="works">
        {/* Para mostrar un array de objeto lo podemos hacer con la función
      o si es más cómodo usar return  */}
      {
        trabajos.map((trabajo) =>{
          return(
            <article key={trabajo.id} className="work-item">
              <div className="mask">
              <img src={trabajo.imageUrl}/>
              </div>
              <p>Categoría: {trabajo.categorias}</p>
              <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>Tecnologías: {trabajo.tecnologias}</h3>
              
              <a href={trabajo.url}>Ver proyecto</a>
            </article>
            )
        })
      }
      </section>
      
    </div>
  )
}
