import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../hojas-de-estilo/NavBar.css";
import logo from "../imagenes/logo.jpg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <div className="img-contenedor">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        {/* Botón toggle para móvil */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicio" onClick={() => setIsOpen(false)}>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonios" onClick={() => setIsOpen(false)}>Testimonios</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/login" onClick={() => setIsOpen(false)}>
                Administración
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


