import React, { useState } from "react";
import SideBar from "../../componentes/SideBar";
import "../../hojas-de-estilo/Dashboard.css";
import NavbarMobile from "../../componentes/NavbarMobile";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  let navegacion = useNavigate();

  const location = useLocation();
  const rutaActiva = location.pathname;

  // Mostrar background solo en /Dashboard
  const mostrarBackground = rutaActiva === "/Dashboard";

  const handleLogout = () => {
  const confirmar = window.confirm("¿Seguro que deseas cerrar sesión?");
  if (confirmar) {
    localStorage.clear();
    navegacion("/");
    
  }
};


  return (
    <div className="dashboard-wrapper">
      <NavbarMobile />
      <SideBar 
      isOpen={sidebarOpen} 
      toggleSidebar={toggleSidebar} 
      usuario={usuario}
      onLogout={handleLogout}
      />

      <div
        className="content"
        style={{
          background: mostrarBackground
            ? 'url("../imagenes/background-dashboard.jpg") no-repeat center/cover'
            : "none",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
