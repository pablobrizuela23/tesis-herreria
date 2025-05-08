import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




export default function SacarTurnos() {

    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Fecha seleccionada", fechaSeleccionada);
        console.log({ nombre, dni, direccion, telefono, descripcion });

        const fechaFormateada = fechaSeleccionada.toLocaleDateString();
        alert("Turno para el día: " + fechaFormateada);
    }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Formulario para turnos</h5>
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
                  <label htmlFor="descripcion" className="form-label">
                    Descripcion
                  </label>
                  <textarea 
                    class="form-control" 
                    id="descripcion" 
                    rows="4" 
                    placeholder="Escribí una breve descripcion para su turno"
                    value={descripcion}
                    onChange={(e)=> setDescripcion(e.target.value)}>
                    
                  </textarea>
                  
                </div>

                <div className="mb-3">
                    <label className="form-label">Seleccioná una fecha</label>
                    <Calendar
                        onChange={setFechaSeleccionada}
                        value={fechaSeleccionada}
                    />
                </div>

                
                <button type="submit" className="btn btn-primary w-100">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
