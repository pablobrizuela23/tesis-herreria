import axios from "axios";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function SacarTurnos() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [hora, setHora] = useState("");
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fechaHora = new Date(fechaSeleccionada);
    const [h, m] = hora.split(":");
    fechaHora.setHours(h);
    fechaHora.setMinutes(m);

    //corregir desfase horario
    const localFechaHora = new Date(
      fechaHora.getTime() - fechaHora.getTimezoneOffset() * 60000
    );

    try {
      // Verificar si el turno ya existe
      const disponible = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/turno/check?fecha=${localFechaHora
          .toISOString()
          .slice(0, 19)}`
      );

      if (!disponible.data) {
        alert("Ese horario ya está ocupado. Elegí otro.");
        return;
      }

      //crear el turno
      const turno = {
        nombre,
        dni,
        direccion,
        telefono,
        descripcion,
        fecha: localFechaHora.toISOString().slice(0, 19),
      };

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/turno`, turno);
      alert("Turno guardado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al guardar el turno");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">
                Formulario para turnos
              </h5>
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
                    onChange={(e) => setNombre(e.target.value)}
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
                    onChange={(e) => setDni(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    placeholder="Escriba su dirección actual"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    placeholder="Escriba su número de telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    class="form-control"
                    id="descripcion"
                    rows="4"
                    placeholder="Escribí una breve descripcion para su turno"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Seleccioná una fecha</label>
                  <Calendar
                    onChange={setFechaSeleccionada}
                    value={fechaSeleccionada}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="hora" className="form-label">
                    Hora
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="hora"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
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
  );
}
