import { NavLink } from "react-router-dom"


export const HeaderNav = () => {
  return (
    
    <header className="header">
        
        <nav>
            <ul>
                <li className="logo">
                    <h1>LMC</h1>
                </li>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : "" }>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum">Curriculum</NavLink>
                </li>

                <li>
                    <NavLink to="/portafolio">Portfolio</NavLink>
                </li>

                <li>
                    <NavLink to="/servicios">Servicios</NavLink>
                </li>

                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
            <hr></hr>
        </nav>
    </header>
  )
}
