import React from 'react'
import "../hojas-de-estilo/Hero.css";


export default function Hero() {
  return (
    <section className='hero-section' id='home'>
      <div className='hero-contenido'>
       
        <h1 ><span className='texto-color'> BIENVENIDOS A<br/>HERRECOR</span></h1>
        <p>Diseño, fabricación y automatización de estructuras metálicas con excelencia y precisión</p>
        <div className='boton-contenedor'>
          <button className='btn btn-hero'>ACERCA DE NOSOTROS</button>
          <button className='btn btn-hero'>CONTACTANOS</button>
        </div>
        
      </div>  
    </section>
  )
}
