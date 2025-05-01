import React, { useRef } from 'react'
import NavBar from '../componentes/NavBar'
import Hero from '../componentes/Hero'
import Servicios from '../componentes/Servicios'
import AcercaDeNosotros from '../componentes/AcercaDeNosotros'
import Proyectos from '../componentes/Proyectos'
import Testimonios from '../componentes/Testimonios'
import Contacto from '../componentes/Contacto'
import Footer from '../componentes/Footer'

export default function Home() {

  const serviciosRef = useRef(null);
  const acercaRef = useRef(null);
  const proyectosRef = useRef(null);
  const testimoniosRef = useRef(null);
  const contactoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"});
  };

  return (
    <>
      <NavBar 
      scrollToSection={scrollToSection}
      serviciosRef={serviciosRef}
      acercaRef={acercaRef}
      proyectosRef={proyectosRef}
      testimoniosRef={testimoniosRef}
      contactoRef={contactoRef}
      />
      <Hero/>
      <Servicios ref={serviciosRef}/>
      <AcercaDeNosotros ref={acercaRef}/>
      <Proyectos ref={proyectosRef}/>
      <Testimonios ref={testimoniosRef}/>
      <Contacto ref={contactoRef}/>
      <Footer />
    </>
  )
}
