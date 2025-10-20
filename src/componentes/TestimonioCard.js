import React from 'react';
import "../hojas-de-estilo/TestimonioCard.css";

export default function TestimonioCard({ texto, imagen }) {
  return (
    <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
      <div className="card card-contenedor h-100">
        <img src={imagen} className="card-img-top" alt="imagen card" />
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <p className="card-text">{texto}</p>
        </div>
      </div>
    </div>
  );
}

