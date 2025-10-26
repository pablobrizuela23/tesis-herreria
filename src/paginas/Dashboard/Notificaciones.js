import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../hojas-de-estilo/Notificaciones.css";



export default function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([]);

  const obtenerNotificaciones = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/turnos/nuevos`);
      setNotificaciones(res.data);
    } catch (err) {
      console.error("Error al traer notificaciones", err);
    }
  };

  const marcarVisto = async (id) => {
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/turno/${id}/visto`);
      obtenerNotificaciones();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    obtenerNotificaciones();
    const interval = setInterval(obtenerNotificaciones, 10000); // cada 10s
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="notificaciones">
    <h4>Notificaciones ({notificaciones.length})</h4>
    {notificaciones.map((n) => (
      <div key={n.id} className="notificacion-item">
        <p>
          Turno de <b>{n.nombre}</b> el día <b>{new Date(n.fecha).toLocaleDateString()}</b> a las <b>{new Date(n.fecha).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</b>
        </p>
        <p>Descripción: {n.descripcion}</p>
        <button onClick={() => marcarVisto(n.id)}>Marcar como visto</button>
      </div>
    ))}
  </div>
);

}
