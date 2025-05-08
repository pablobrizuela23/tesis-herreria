import React from 'react';
import {Link} from 'react-router-dom';
import "../hojas-de-estilo/NavBar.css";
import logo from "../imagenes/logo.jpg"
export default function NavBar() {
  return (
    
        <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid ">
    <div className='img-contenedor'>
      <img src={logo} alt='logo'/> 
    </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="#servicio">Servicios</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="#">Proyectos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="#">Testimonios</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Contacto">Contacto</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login"><strong>Administracion</strong> </Link>
            </li>
        </ul>
      
    </div>
  </div>
</nav>    
    
  )
}
