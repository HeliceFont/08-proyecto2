import { Link } from "react-router-dom"
import { trabajos } from "../data/Trabajo"


export const ListadoTrabajo = ({limite }) => {

    return (
        
        <section className="works">
            {/* Para mostrar un array de objeto lo podemos hacer con la función
        o si es más cómodo usar return  */}
        {
            // Slice el numero de vece que se muestra un array partiendo de 0 a 2, o a los limite que podeemos usar como atributos
            trabajos.slice(0,limite).map((trabajo) =>{
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
    
  )
}