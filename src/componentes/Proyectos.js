import React from 'react';
import "../hojas-de-estilo/Carrusel.css";
import Imagen1 from "../imagenes/porton-automatico.jpg";
import Imagen2 from "../imagenes/proyecto-pileta.jpg";
import Imagen3 from "../imagenes//reja2.jpg"

export default function Proyectos() {
  return (
    <section className='container carrusel-contenedor-principal'>
                <h3>Nuestros Proyectos</h3>
                <p>Descubre algunos de nuestros trabajos más recientes, donde combinamos calidad, precisión y creatividad para cumplir con las necesidades de nuestros clientes. Cada proyecto refleja nuestro compromiso con la excelencia y la satisfacción.</p>
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
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={Imagen2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={Imagen3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
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
    </section>
  )
}
