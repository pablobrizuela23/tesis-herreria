import React from 'react';
import Test1 from "../imagenes/testimonio1.webp";
import Test2 from "../imagenes/test2.jpg";
import Test3 from "../imagenes/test3.webp";
import TestimonioCard from './TestimonioCard';
import "../hojas-de-estilo/Testimonios.css"

export default function Testimonios() {
  return (
    <section className='testimonio-contenedor'>
      <div className='container'>
          <h2 className='text-center '>Testimonios</h2>
          <div className='row'>
            <TestimonioCard 
            imagen={Test1}
            texto={"Excelente trabajo, el portón quedó perfecto y la automatización funciona sin problemas. Muy profesionales y puntuales. – Pampita"}/>
            
            <TestimonioCard 
            imagen={Test3}
            texto={"Gran calidad en los materiales y un servicio impecable. Recomiendo totalmente su trabajo. – Leonel Messi"}/>
          
          <TestimonioCard 
            imagen={Test2}
            texto={"Atencion rápida y resultados impecables. La instalación de las rejas quedó justo como la quería, Mauricio es el mejor. – China Suarez"}/>
          </div>
        
      </div>
    </section> 
  )
}
