import React from 'react'
import "../hojas-de-estilo/CarServicios.css"


export default function CardServicios({ titulo,descripcion,imagen }) {
  return (
    <>
      <div class="row">
                <div class="col-md-12">
                  <div class="servicio-contenedor">
                     <i><img src={imagen} alt='icono'/></i>
                     <div class="service_text">
                        <h3>{titulo}</h3>
                        <p>{descripcion}
                        </p>
                     </div>
                  </div>
               </div>
      </div>
    </>
  )
}
