import React from 'react';
import { Link } from 'react-router-dom';
import "../hojas-de-estilo/Footer.css";

export default function Footer() {
  return (
    <>
        <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h4>Sobre Nosotros</h4>
                <p>Somos especialistas en herrería, creando piezas únicas y duraderas con los mejores materiales.</p>
            </div>
            <div class="col-md-4">
                <h4>Contacto</h4>
                <ul class="contacto-lista">
                    <li><i class="fas fa-map-marker-alt"></i> Dirección: Calle Falsa 123</li>
                    <li><i class="fas fa-phone"></i> Teléfono: +54 9 3549 63-9639</li>
                    <li><i class="fas fa-envelope"></i> Email: herrecor.contacto@gmail.com</li>
                </ul>
            </div>
            <div class="col-md-4">
                <h4>Síguenos</h4>
                <div class="social-icons">
                    <Link to="#"><i class="fab fa-facebook"></i></Link>
                    <Link to="#"><i class="fab fa-instagram"></i></Link>
                    <Link to="#"><i class="fab fa-whatsapp"></i></Link>
                </div>
            </div>
        </div>
        <div class="text-center mt-4">
            <p>&copy; 2025 HERRECOR | Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
 
    </>
  )
}
