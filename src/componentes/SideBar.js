import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBox,
  FaCalendarAlt,
  FaUserCog,
  FaUserPlus,
  FaBell,
} from "react-icons/fa";
import "../hojas-de-estilo/Sidebar.css";
import axios from "axios";

export default function SideBar({ isOpen, toggleSidebar, usuario, onLogout }) {
  const [rol, setRol] = useState(null);
  const [notiCount, setNotiCount] = useState(0);

  

  useEffect(() => {
    const rolGuardado = localStorage.getItem("rolUsuario");
    setRol(rolGuardado);

    // Obtener cantidad de notificaciones
    const fetchNoti = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/turnos/nuevos`
        );
        setNotiCount(res.data.length);
      } catch (err) {
        console.error("Error al traer notificaciones:", err);
      }
    };

    fetchNoti();
    const interval = setInterval(fetchNoti, 10000); // actualizar cada 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>ADMINISTRACIÓN</h3>
      <p className="usuario-logeado">
          👤 Usuario: {usuario?.nombre} {usuario?.apellido}
        </p>
      <Link to="clientes" onClick={toggleSidebar}>
        <FaUsers className="icon" /> CLIENTES
      </Link>
      <Link to="proveedores" onClick={toggleSidebar}>
        <FaBox className="icon" /> PROVEEDORES
      </Link>
      <Link to="index-turnos" onClick={toggleSidebar}>
        <FaCalendarAlt className="icon" /> TURNOS
      </Link>

      {/*  Notificaciones con badge flotante */}
      <Link to="notificaciones" onClick={toggleSidebar} className="noti-link">
        <div className="icono-noti-container">
          <FaBell className="icon" />
          {notiCount > 0 && <span className="badge-noti">{notiCount}</span>}
        </div>
        NOTIFICACIONES
      </Link>

      {rol === "ADMIN" && (
        <>
          <Link to="usuario" onClick={toggleSidebar}>
            <FaUserCog className="icon" /> USUARIOS
          </Link>
          <Link to="crear-usuario" onClick={toggleSidebar}>
            <FaUserPlus className="icon" /> CREAR USUARIO
          </Link>
        </>
      )}

      <button className="btn-cerrar-sesion" onClick={onLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
