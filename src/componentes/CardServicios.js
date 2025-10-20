import React from 'react';
import "../hojas-de-estilo/CarServicios.css";

export default function CardServicios({ titulo, descripcion, imagen }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="servicio-contenedor text-center p-3 h-100">
        <img src={imagen} alt="icono" className="icono-servicio mb-3" />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
