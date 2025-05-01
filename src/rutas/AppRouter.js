import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../paginas/Home";
import Dashboard from "../paginas/Dashboard/Dashboard";
import Login from "../paginas/Login";
import Contacto from "../paginas/Contacto";
import Clientes from '../paginas/Dashboard/Clientes';
import Proveedores from '../paginas/Dashboard/Proveedores';



export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Dashboard' element={<Dashboard />}/>
            <Route path='/Login' element={<Login />} />
            <Route path='/Contacto' element={<Contacto />} />

            <Route path='clientes' element={<Clientes />} />
            <Route path='proveedores' element={<Proveedores />} />
        </Routes>
    </BrowserRouter>
  )
}
