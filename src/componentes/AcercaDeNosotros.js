import React from 'react';
import "../hojas-de-estilo/AcercaDeNos.css";

export default function AcercaDeNosotros() {
  return (
    <section className='container-fluid contenedor-acerca' id='acercade'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <div className='encabezado-contenedor'>
            <h3>Acerca de Nosotros</h3>
            <p>
              En Herrecor, combinamos tradición y modernidad para ofrecer trabajos de herrería de la más alta calidad. Desde nuestros inicios, nos hemos dedicado a la fabricación e instalación de estructuras metálicas, automatización de portones y todo tipo de trabajos en hierro, siempre con un enfoque en la durabilidad, seguridad y diseño.
              <br/><br/>
              Nuestra historia comienza con una pasión por el metal y el deseo de brindar soluciones funcionales y estéticas a nuestros clientes. Con años de experiencia en el sector, hemos trabajado con hogares, empresas y negocios, adaptándonos a cada necesidad con profesionalismo y dedicación.
              <br/><br/>
              En Herrecor, cada proyecto es único. Nos enorgullece ofrecer atención personalizada, materiales de primera calidad y un compromiso inquebrantable con la satisfacción de nuestros clientes. Si buscas calidad, seguridad y un acabado impecable, estás en el lugar indicado.
            </p>
          </div>
        </div>

        <div className='col-lg-8'>
          <div className='video-contenedor'>
            <div className="ratio ratio-16x9">
              <iframe 
                src="https://www.youtube.com/embed/dPzRkPz03qg?si=0hVsXtFgfLG6Fci6" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

