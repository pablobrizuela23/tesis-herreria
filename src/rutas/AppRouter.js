import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../paginas/Home";
import Admin from "../paginas/Admin";
import Login from "../paginas/Login";
import Contacto from "../paginas/Contacto";


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/admin' element={<Admin />}/>
            <Route path='/Login' element={<Login />} />
            <Route path='/Contacto' element={<Contacto />} />
        </Routes>
    </BrowserRouter>
  )
}
