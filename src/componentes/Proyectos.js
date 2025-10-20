import React from 'react';
import "../hojas-de-estilo/Carrusel.css";
import Imagen1 from "../imagenes/cerramientos-internos.jpg";
import Imagen2 from "../imagenes/paneles-colgante.jpg";
import Imagen3 from "../imagenes/puertas-asador.jpg";
import { Link } from 'react-router-dom';

export default function Proyectos() {
  return (
    <section className='carrusel-contenedor-principal' id='proyectos'>
      <h3>Nuestros Proyectos</h3>
      <p>
        Descubre algunos de nuestros trabajos más recientes, donde combinamos calidad, precisión y creatividad para cumplir con las necesidades de nuestros clientes. Cada proyecto refleja nuestro compromiso con la excelencia y la satisfacción.
      </p>

      <div id="carouselExampleCaptions" className="carousel slide carrusel-contenedor" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Imagen1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>CERRAMIENTOS PARA PATIOS INTERNOS</h5>
              <p>cerramiento para patios internos en hierro 14mm, con estructurales 40x40 terminación triple acción negro.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Imagen2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>PANELES COLGANTES LIVING/HALL, PUERTA COCINA, PUERTA BAÑO</h5>
              <p>Fabricación e instalación sin vidrios, colgantes con sistema de carros y guía Roma, chapa del 20, caños estructurales 30x30 y subdivisión T 3/4x1/8</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Imagen3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>PUERTAS BAJO ASADOR</h5>
              <p>Realizamos puertas bajo asador de chapa plegada de 3 hojas con marco, detalle decorativo de planchuela remachada, manijas de aluminio, terminación triple acción grafito</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='boton-contenedor-proyecto'>
        <button type="button" className="btn btn-primary btn-proyecto">
          <Link className="btn-link" to="/sacar-turnos">TURNOS</Link>
        </button>
      </div>
    </section>
  );
}

