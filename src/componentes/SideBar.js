import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBox, FaCalendarAlt, FaUserCog, FaUserPlus } from "react-icons/fa";
import "../hojas-de-estilo/Sidebar.css";

export default function SideBar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>ADMINISTRACIÓN</h3>
      <Link to="/clientes" onClick={toggleSidebar}><FaUsers className="icon" /> CLIENTES</Link>
      <Link to="/proveedores" onClick={toggleSidebar}><FaBox className="icon" /> PROVEEDORES</Link>
      <Link to="/index-turnos" onClick={toggleSidebar}><FaCalendarAlt className="icon" /> TURNOS</Link>
      <Link to="/usuario" onClick={toggleSidebar}><FaUserCog className="icon" /> USUARIOS</Link>
      <Link to="/crear-usuario" onClick={toggleSidebar}><FaUserPlus className="icon" /> CREAR USUARIO</Link>
    </div>
  );
}










