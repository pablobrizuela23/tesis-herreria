import React from 'react';
import CardServicios from './CardServicios';
import "../hojas-de-estilo/Servicios.css";
import Icono from "../imagenes/icono-herreria.png";
import Icono2 from "../imagenes/icono2.png";
import Icono3 from "../imagenes/icono3.png";
import Icono4 from "../imagenes/icono4.png";

export default function Servicios() {
  return (
    <section className='servicio' id='servicio'>
      <div className='container'>
        <div className='servicio-titulo text-center mb-5'>
          <h2><span className="texto-color">Nuestros Servicios</span></h2>
          <p>
            Brindamos soluciones de herrería tanto para proyectos comerciales como residenciales.
            Desde la fabricación de portones hasta la automatización de sistemas, nuestro equipo ofrece trabajos a medida con alta calidad y profesionalismo.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="row g-4">
          <CardServicios
            titulo={"Automatización"}
            descripcion={"Realizamos automatizaciones en diferentes tipos de aberturas, corredizos, batientes y levadizos."}
            imagen={Icono}
          />
          <CardServicios 
            titulo={"Herrería"}
            descripcion={"Prestamos un servicio de primera categoría, analizando las necesidades de los clientes, realizando rejas perimetrales, de aberturas, escaleras, y todo lo referido a herrería."}
            imagen={Icono2}
          />
          <CardServicios 
            titulo={"Mantenimiento y reparación"}
            descripcion={"Tenemos gran variedad de repuestos para motores automáticos, también se realizan reparaciones y mantenimientos en diferentes equipos, lo que prolonga su vida útil."}
            imagen={Icono3}
          />
          <CardServicios 
            titulo={"Proyectos personalizados de herrería"}
            descripcion={"Creamos proyectos únicos adaptados a tus necesidades, combinando diseño, funcionalidad y calidad de materiales para lograr resultados excepcionales."}
            imagen={Icono4}
          />
        </div>
      </div>
    </section>
  );
}
