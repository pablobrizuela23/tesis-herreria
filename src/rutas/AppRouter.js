import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../paginas/Home";
import Dashboard from "../paginas/Dashboard/Dashboard";
import Login from "../paginas/Login";
import Contacto from "../paginas/Contacto";
import Clientes from '../paginas/Dashboard/Clientes';
import Proveedores from '../paginas/Dashboard/Proveedores';
import SacarTurnos from '../paginas/turnos/SacarTurnos';
import Index from '../paginas/turnos/Index';
import CrearUsuario from '../paginas/Dashboard/CrearUsuario';



export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Dashboard' element={<Dashboard />}/>
            <Route path='/Login' element={<Login />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/sacar-turnos' element={<SacarTurnos/>}/>
            <Route path='clientes' element={<Clientes />} />
            <Route path='proveedores' element={<Proveedores />} />
            <Route path='index-turnos' element={<Index />} />
            <Route path='crear-usuario' element={<CrearUsuario />} />
        </Routes>
    </BrowserRouter>
  )
}
