import axios from 'axios';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';




export default function CrearCliente() {
    let navegacion = useNavigate();

    const [cliente, setCliente]=useState({
        nombre:"",
        apellido:"",
        telefono:"",
        direccion:""
    })
    
    const{nombre,apellido,telefono,direccion} = cliente

    const onInputChange = (e) => {
        setCliente({...cliente,[e.target.name]: e.target.value})    
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        const urlBase = "http://localhost:8080/herrecor-app/clientes"
        await axios.post(urlBase,cliente);
        //redirigimos a la pagina de inicio
        navegacion('/clientes');

    }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">NUEVO CLIENTE</h5>
              <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    id="nombre"
                    placeholder="Escriba su nombre"
                    value={nombre}
                    onChange={(e)=> onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    id="apellido"
                    placeholder="Escriba su apellido"
                    value={apellido}
                    onChange={(e)=> onInputChange(e)}
                    required
                  />
                </div>
               
                
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    className="form-control"
                    id="telefono"
                    placeholder="Escriba su numero de telefono"
                    value={telefono}
                    onChange={(e)=> onInputChange(e)}
                    required
                  />
                  
                </div>

                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                    Direccion
                  </label>
                  <input
                    type="text"
                    name='direccion'
                    className="form-control"
                    id="direccion"
                    placeholder="Escriba su direccion actual"
                    value={direccion}
                    onChange={(e)=> onInputChange(e)}
                    required
                  />
                </div>

                
                <button type="submit" className="btn btn-primary w-100">
                  Crear cliente
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}