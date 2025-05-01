import React from 'react'
import "../hojas-de-estilo/TestimonioCard.css"
export default function TestimonioCard({ texto,imagen }) {
  return (
    <>
        <div className='col-sm-12 col-md-6 col-lg-4 card-contenedor'>
            <div class="card" style={{width: "24rem", height: "100%"}}>
              <img src={imagen} class="card-img-top" alt="imagen card"/>
              <div class="card-body">
                <p class="card-text"> {texto}
                </p>
              </div>
            </div>
          </div> 
    </>
  )
}
