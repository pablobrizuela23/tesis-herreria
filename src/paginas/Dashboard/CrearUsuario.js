import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';




export default function CrearUsuario() {


    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({ nombre, dni, direccion, telefono, email,password });

        
    }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">NUEVO USUARIO</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Escriba su nombre completo"
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dni" className="form-label">
                    DNI
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dni"
                    placeholder="Escriba su dni"
                    value={dni}
                    onChange={(e)=> setDni(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                    Direccion
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    placeholder="Escriba su direccion actual"
                    value={direccion}
                    onChange={(e)=> setDireccion(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    placeholder="Escriba su numero de telefono"
                    value={telefono}
                    onChange={(e)=> setTelefono(e.target.value)}
                    required
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Escriba su email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Escriba su contraseña"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                  />
                  
                </div>
                <div className='mb-3'>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione rol de usuario</option>
                        <option value="1">Administrador</option>
                        <option value="2">Usuario</option>
                        
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Crear usuario
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}