import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../componentes/SideBar";
import "../../hojas-de-estilo/Dashboard.css";
import NavbarMobile from '../../componentes/NavbarMobile';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dashboard-wrapper">
      <NavbarMobile />
      <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${sidebarOpen ? "blur" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
}









