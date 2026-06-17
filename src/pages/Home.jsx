import { Link } from "react-router-dom";
import acercade from "../assets/acercade.png";

function Home() {
  return (
    <div>

      
      <section
        className="text-white py-5"
        style={{
          background:
            "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)",
          minHeight: "420px",
        }}
      >
        <div className="container text-center">

          <h1
            className="fw-bold mb-4"
            style={{
              fontSize: "4rem",
              color: "white",
            }}
          >
            Sipymex Academy
          </h1>

          <p
            className="fs-4 mb-4"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Aprende a utilizar Nova mediante tutoriales
            interactivos, accesibles y diseñados para que
            cualquier usuario pueda aprender de forma autónoma.
          </p>

          <Link
            to="/tutorials"
            className="btn btn-light btn-lg px-5"
          >
            Comenzar ahora
          </Link>

        </div>
      </section>

      
      <div className="container">

        <div className="row text-center mt-n5">

          <div className="col-md-4 mb-3">
            <div className="card shadow border-0">
              <div className="card-body">
                <h2 className="text-primary">4</h2>
                <p>Tutoriales disponibles</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow border-0">
              <div className="card-body">
                <h2 className="text-success">100%</h2>
                <p>Acceso online</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow border-0">
              <div className="card-body">
                <h2 className="text-warning">24/7</h2>
                <p>Disponible siempre</p>
              </div>
            </div>
          </div>

        </div>

        

        <div className="mt-5">

          <h2 className="text-center mb-5">
            Categorías de aprendizaje</h2>
          <div className="row">

            <div className="col-md-3 mb-4">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h1>📄</h1>
                  <h5>Facturación</h5>
                  <p>
                    Emisión y gestión de documentos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h1>📊</h1>
                  <h5>Reportes</h5>
                  <p>
                    Obtención de informes y métricas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h1>📦</h1>
                  <h5>Inventario</h5>
                  <p>
                    Control de stock y productos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h1>💳</h1>
                  <h5>Caja</h5>
                  <p>
                    Ventas, pagos y movimientos.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-12">
              <img src={acercade} alt="categorias" className="img-fluid rounded shadow category-image" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;