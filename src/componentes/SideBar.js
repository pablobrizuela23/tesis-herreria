import React from 'react'
import { Link } from 'react-router-dom'
import "../hojas-de-estilo/Sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <h3>ADMINISTRACION</h3>
      <Link to="/clientes">CLIENTES</Link>
      <Link to="/proveedores">PROVEEDORES</Link>
      <Link to="/index-turnos">TURNOS</Link>
      <Link to="/crear-usuario">CREAR USUARIO</Link>
    </div>
  )
}


