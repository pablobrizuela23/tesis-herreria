import React from 'react';
import "../hojas-de-estilo/Contacto.css"

export default function Contacto() {
  return (
    <section className='contacto-contenedor'>
      <div className='contacto-bg'>
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-md-6'>
                    <form id='request' className='formulario-contenedor' autocomplete="off">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='titulo-contenedor'>
                                    <h2>Contactanos</h2>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <input className='contacto' placeholder='Nombre' type='texto' name='nombre' />
                            </div>
                            <div className='col-md-12'>
                                <input className='contacto' placeholder='Telefono' type='tel' name='telefono '/>
                            </div>
                            <div className='col-md-12'>
                                <input className='contacto' placeholder='Email' type='email' name='email'/>
                            </div>
                            <div className='col-md-12'>
                                <input className='contacto-mensaje' placeholder='Mensaje' type='text'/>
                            </div>
                            <div className='col-md-12 '>
                                <button type="button" class="btn btn-primary boton-enviar">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-6 separar-derecha '>
                    
                        <div class="map">
                            <iframe
                            title='mapa taller' 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27437.67957471407!2d-64.8052736!3d-30.7265536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1742914120521!5m2!1ses-419!2sar" 
                            width="800" height="600"  
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                                
                            </iframe>
                        </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
