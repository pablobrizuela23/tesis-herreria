import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../hojas-de-estilo/Contacto.css";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rl3lkrp',    // reemplazar con tu Service ID
      'template_aj39i7r',   // reemplazar con tu Template ID
      form.current,
      'F5Z7DAtFY7A-Tul1Q'     // reemplazar con tu Public Key
    ).then(
      (result) => {
        alert("Mensaje enviado correctamente");
        form.current.reset();
      },
      (error) => {
        alert("Error al enviar el mensaje, intenta nuevamente");
        console.log(error.text);
      }
    );
  };

  return (
    <section className='contacto-contenedor' id='contacto'>
      <div className='contacto-bg'>
        <div className='container-fluid'>
          <div className='row flex-column flex-md-row'>
            {/* Formulario */}
            <div className='col-md-6 mb-4 mb-md-0'>
              <form ref={form} className='formulario-contenedor' autoComplete="off" onSubmit={sendEmail}>
                <div className='titulo-contenedor'>
                  <h2>Contáctanos</h2>
                </div>
                <input className='contacto' placeholder='Nombre' type='text' name='nombre' required />
                <input className='contacto' placeholder='Teléfono' type='tel' name='telefono' required />
                <input className='contacto' placeholder='Email' type='email' name='email' required />
                <textarea className='contacto-mensaje' placeholder='Mensaje' name='mensaje' required />
                <button type="submit" className='btn btn-primary boton-enviar'>Enviar</button>
              </form>
            </div>

            {/* Mapa */}
            <div className='col-md-6'>
              <div className="map">
                <iframe
                  title='mapa taller'
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27437.67957471407!2d-64.8052736!3d-30.7265536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1742914120521!5m2!1ses-419!2sar"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
