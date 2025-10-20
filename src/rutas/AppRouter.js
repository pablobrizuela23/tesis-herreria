import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../paginas/Home";
import Dashboard from "../paginas/Dashboard/Dashboard";
import Login from "../paginas/Login";
import Clientes from '../paginas/Dashboard/Clientes';
import Proveedores from '../paginas/Dashboard/Proveedores';
import SacarTurnos from '../paginas/turnos/SacarTurnos';
import Index from '../paginas/turnos/Index';
import CrearUsuario from '../paginas/Dashboard/CrearUsuario';
import CrearCliente from '../paginas/Dashboard/CrearCliente';
import EditarCliente from '../paginas/Dashboard/EditarCliente';
import CrearProveedor from '../paginas/Dashboard/CrearProveedor';
import EditarProveedor from '../paginas/Dashboard/EditarProveedor';
import Usuario from '../paginas/Dashboard/Usuario';
import EditarUsuario from '../paginas/Dashboard/EditarUsuario';



export default function AppRouter() {
  return (
    <BrowserRouter basename="/tesis-herreria">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Dashboard' element={<Dashboard />}/>
            <Route path='/Login' element={<Login />} />
            <Route path='/sacar-turnos' element={<SacarTurnos/>}/>
            <Route path='clientes' element={<Clientes />} />
            <Route path='proveedores' element={<Proveedores />} />
            <Route path='index-turnos' element={<Index />} />
            <Route path='crear-usuario' element={<CrearUsuario />} />
            <Route path='crear-cliente' element={<CrearCliente/>} />
            <Route path='/editar/:id' element={<EditarCliente/>} />
            <Route path= 'crear-proveedor' element={<CrearProveedor/>} />
            <Route path= '/editar-proveedor/:id' element={<EditarProveedor/>} />
            <Route path= 'usuario' element={<Usuario/>} />
            <Route path= '/editar-usuario/:id' element={<EditarUsuario/>} />
        </Routes>
    </BrowserRouter>
  )
}
