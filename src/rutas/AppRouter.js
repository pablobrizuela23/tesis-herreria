import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/Home";
import Dashboard from "../paginas/Dashboard/Dashboard";
import Login from "../paginas/Login";
import Clientes from "../paginas/Dashboard/Clientes";
import Proveedores from "../paginas/Dashboard/Proveedores";
import SacarTurnos from "../paginas/turnos/SacarTurnos";
import Index from "../paginas/turnos/Index";
import CrearUsuario from "../paginas/Dashboard/CrearUsuario";
import CrearCliente from "../paginas/Dashboard/CrearCliente";
import EditarCliente from "../paginas/Dashboard/EditarCliente";
import CrearProveedor from "../paginas/Dashboard/CrearProveedor";
import EditarProveedor from "../paginas/Dashboard/EditarProveedor";
import Usuario from "../paginas/Dashboard/Usuario";
import EditarUsuario from "../paginas/Dashboard/EditarUsuario";
import Notificaciones from "../paginas/Dashboard/Notificaciones";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/tesis-herreria">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas anidadas dentro del Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="clientes" element={<Clientes />} />
          <Route path="proveedores" element={<Proveedores />} />
          <Route path="index-turnos" element={<Index />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="crear-usuario" element={<CrearUsuario />} />
          <Route path="editar-proveedor" element={<EditarProveedor />} />
          <Route path="notificaciones" element={<Notificaciones />} />
        </Route>
        <Route path="/sacar-turno" element={<SacarTurnos />} />
      </Routes>
    </BrowserRouter>
  );
}
