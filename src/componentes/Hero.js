import React from 'react'
import "../hojas-de-estilo/Hero.css";


export default function Hero() {
  return (
    <section className='hero-section' id='home'>
      <div className='hero-contenido'>
       
        <h1 ><span className='texto-color'> BIENVENIDOS A<br/>HERRECOR</span></h1>
        <p>Diseño, fabricación y automatización de estructuras metálicas con excelencia y precisión</p>
        <div className='boton-contenedor'>
          <a className='btn btn-hero' href='#acercade'>ACERCA DE NOSOTROS</a>
          <a className='btn btn-hero' href='#contacto'>CONTACTANOS</a>
        </div>
        
      </div>  
    </section>
  )
}
