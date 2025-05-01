import React from 'react'
import { Outlet } from 'react-router-dom'

import SideBar from '../../componentes/SideBar'
import "../../hojas-de-estilo/Dashboard.css"

export default function Dashboard() {
  return (
    <div className="dashboard-container">
    <SideBar />
    <div className="content container-fluid">
      <Outlet />
    </div>
  </div>
    
  )
}

