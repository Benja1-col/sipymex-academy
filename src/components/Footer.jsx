import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>
              <span style={{ color: '#0d6efd' }}>Sipymex</span>{' '}
              <span style={{ color: '#ffffff' }}>Nova Academy</span>
            </h4>
            <p>Información de contacto</p>
            <p>Empresa: Sipymex</p>
            <p>Correo: contacto@sipymex.cl</p>
            <p>Teléfono: +56 9 1234 5678</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h4 style={{ color: '#ffffff' }}>Soporte</h4>
            <p>
              <Link to="/feedback" className="text-white text-decoration-none">
                Retroalimentación
              </Link>
            </p>
            <p>
              <Link to="/report" className="text-white text-decoration-none">
                Reportar problema
              </Link>
            </p>
            <p>
              <Link to="/help" className="text-white text-decoration-none">
                Centro de ayuda
              </Link>
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center">Sipymex Nova Academy © 2026. - Todos los derechos reservados</div>
      </div>
    </footer>
  );
}

export default Footer;