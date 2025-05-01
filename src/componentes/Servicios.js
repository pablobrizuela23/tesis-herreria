import React from 'react'
import CardServicios from './CardServicios'
import "../hojas-de-estilo/Servicios.css"
import Icono from "../imagenes/icono-herreria.png"
import Icono2 from "../imagenes/icono2.png"
import Icono3 from "../imagenes/icono3.png"
import Icono4 from "../imagenes/icono4.png"

export default function Servicios() {
  return (
    <section className='servicio' id='servicio'>
      <div className='container'>
        <div className='row'>
              <div class="col-md-12">
                  <div class="servicio-titulo">
                     <h2><span class="texto-color">Nuestros Servicios</span> <br/> </h2>
                     <p>Brindamos soluciones de herrería tanto para proyectos comerciales como residenciales.
                        Desde la fabricación de portones hasta la automatización de sistemas, nuestro equipo ofrece trabajos a medida con alta calidad y profesionalismo.</p>
                  </div>
               </div>
        </div>
        <CardServicios
        titulo={"Automatizacion de portones"}
        descripcion={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
        imagen={Icono}/>

        <CardServicios 
        titulo={"Fabricación de portones metálicos"}
        descripcion={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
        imagen={Icono2}/>

        <CardServicios 
        titulo={"Instalación de rejas de seguridad"}
        descripcion={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
        imagen={Icono3}/>

        <CardServicios 
        titulo={"Proyectos personalizados de herrería"}
        descripcion={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
        imagen={Icono4}/>
      </div>
    </section>
  )
}
