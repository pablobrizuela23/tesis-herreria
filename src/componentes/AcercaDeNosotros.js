import React from 'react'
import "../hojas-de-estilo/AcercaDeNos.css"

export default function AcercaDeNosotros() {
  return (
    <div className='container-fluid contenedor-acerca'>
      <div className='row'>
        <div className='col-lg-8 offset-lg-2'>
          <div className='encabezado-contenedor'>
            <h3>Acerca de Nosotros</h3>
            <p>En Herrería Turcucha, combinamos tradición y modernidad para ofrecer trabajos de herrería de la más alta calidad. Desde nuestros inicios, nos hemos dedicado a la fabricación e instalación de estructuras metálicas, automatización de portones y todo tipo de trabajos en hierro, siempre con un enfoque en la durabilidad, seguridad y diseño.

Nuestra historia comienza con una pasión por el metal y el deseo de brindar soluciones funcionales y estéticas a nuestros clientes. Con años de experiencia en el sector, hemos trabajado con hogares, empresas y negocios, adaptándonos a cada necesidad con profesionalismo y dedicación.

En Herrería Turcucha, cada proyecto es único. Nos enorgullece ofrecer atención personalizada, materiales de primera calidad y un compromiso inquebrantable con la satisfacción de nuestros clientes. Si buscas calidad, seguridad y un acabado impecable, estás en el lugar indicado.</p>
          </div>
        </div>
        <div className='col-lg-8 offset-lg-2'>
            <div className='video-contenedor'>
                <div className="ratio ratio-16x9 video-contenedor">
                  <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/dPzRkPz03qg?si=0hVsXtFgfLG6Fci6" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>

                  </iframe>
              </div>
            </div>
        </div>
      </div>
        
        
 
    </div>
  )
}
