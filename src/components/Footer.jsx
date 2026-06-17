function Footer() {
  return (
    <footer
      className="bg-dark text-white mt-5 py-5"
    >
      <div className="container">

        <div className="row">

          <div className="col-md-6 mb-4">

            <h4>Sipymex Academy</h4>

            <p>
              Información de contacto
            </p>

            <p>
              Empresa: Sipymex
            </p>

            <p>
              Correo: contacto@sipymex.cl
            </p>

            <p>
              Teléfono: +56 9 1234 5678
            </p>

          </div>

          <div className="col-md-6 text-md-end">

            <h4>Soporte</h4>

            <p style={{ cursor: "pointer" }}>
              Retroalimentación
            </p>

            <p style={{ cursor: "pointer" }}>
              Reportar problema
            </p>


            <p style={{ cursor: "pointer" }}>
              Centro de ayuda
            </p>

          </div>

        </div>

        <hr />

        <div className="text-center">
          Sipymex Nova Academy © 2026. - Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
}

export default Footer;