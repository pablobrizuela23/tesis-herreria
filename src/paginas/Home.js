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


  

  return (
    <>
      <NavBar />
      <Hero />
      <Servicios />
      <AcercaDeNosotros />
      <Proyectos />
      <Testimonios/>
      <Contacto />
      <Footer />
    </>
  )
}
