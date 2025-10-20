import React from 'react';
import Test1 from "../imagenes/adolfo-bermudez-testimonio.jpg";
import Test2 from "../imagenes/jason-ayers-testimonio.jpg";
import Test3 from "../imagenes/marta-lopez.jpg";
import TestimonioCard from './TestimonioCard';
import "../hojas-de-estilo/Testimonios.css";

export default function Testimonios() {
  return (
    <section className='testimonio-contenedor' id='testimonios'>
      <div className='container'>
        <h2 className='text-center'>Testimonios</h2>
        <div className='row justify-content-center'>
          <TestimonioCard 
            imagen={Test1}
            texto={"Excelente trabajo, el portón quedó perfecto y la automatización funciona sin problemas. Muy profesionales y puntuales. – Adolfo Bermudez"}
          />
          <TestimonioCard 
            imagen={Test2}
            texto={"Gran calidad en los materiales y un servicio impecable. Recomiendo totalmente su trabajo. – Jason Ayers"}
          />
          <TestimonioCard 
            imagen={Test3}
            texto={"Atencion rápida y resultados impecables. La instalación de las rejas quedó justo como la quería, Mauricio es el mejor. – Marta Lopez"}
          />
        </div>
      </div>
    </section> 
  );
}
