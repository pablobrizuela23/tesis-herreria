import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../hojas-de-estilo/NavbarMobile.css";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar-mobile">
      <div className="navbar-header">
        <span className="menu-title">ADMIN</span>
        <button className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>
      </div>

      <div className={`mobile-links ${menuOpen ? "show" : ""}`}>
        <Link to="/clientes" onClick={() => setMenuOpen(false)}>CLIENTES</Link>
        <Link to="/proveedores" onClick={() => setMenuOpen(false)}>PROVEEDORES</Link>
        <Link to="/index-turnos" onClick={() => setMenuOpen(false)}>TURNOS</Link>
        <Link to="/usuario" onClick={() => setMenuOpen(false)}>USUARIOS</Link>
        <Link to="/crear-usuario" onClick={() => setMenuOpen(false)}>CREAR USUARIO</Link>
      </div>
    </nav>
  );
}
