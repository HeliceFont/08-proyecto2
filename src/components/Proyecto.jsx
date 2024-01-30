import { useParams } from "react-router-dom"
import { trabajos } from "../data/Trabajo";
import { useEffect, useState } from "react";

export const Proyecto = () => {
    
    const params = useParams ();
    const [proyecto, setproyecto]= useState({});
    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        
        // indice 0 le pasamos el unico proyecto que hay dentro de la variable proyecto
        setproyecto(proyecto[0]);
    }, )
    return (
        <div className="page page-works">
            <h1 className="heading">{proyecto.nombre}</h1>
            <div className="mask">
                <img src={proyecto.imageUrl}/>
                <p>{proyecto.tecnologias}</p>
            </div>
            <p>Categorías: {proyecto.categorias}</p>
            <p>{proyecto.descripcion}</p>
            <a target="_blank" rel="noreferrer" href={proyecto.url} >Visitar Web</a>
        </div>
    )
}