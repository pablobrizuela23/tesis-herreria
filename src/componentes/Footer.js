import React from 'react';
import { Link } from 'react-router-dom';
import "../hojas-de-estilo/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h4>Sobre Nosotros</h4>
            <p>Somos especialistas en herrería, creando piezas únicas y duraderas con los mejores materiales.</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h4>Contacto</h4>
            <ul className="contacto-lista list-unstyled">
              <li><i className="fas fa-map-marker-alt me-2"></i> Dirección: Calle Falsa 123</li>
              <li><i className="fas fa-phone me-2"></i> Teléfono: +54 9 3549 63-9639</li>
              <li><i className="fas fa-envelope me-2"></i> Email: herrecor.contacto@gmail.com</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h4>Síguenos</h4>
            <div className="social-icons d-flex gap-3">
              <Link to="#"><i className="fab fa-facebook fa-lg"></i></Link>
              <Link to="#"><i className="fab fa-instagram fa-lg"></i></Link>
              <Link to="#"><i className="fab fa-whatsapp fa-lg"></i></Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2025 HERRECOR | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

