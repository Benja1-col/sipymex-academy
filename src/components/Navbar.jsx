import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "linear-gradient(90deg, #0d6efd, #0a58ca)",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand text-white fw-bold fs-3"
          to="/"
        >
          Sipymex Academy
        </Link>

        <div>

          <Link
            className="btn btn-light me-2"
            to="/"
          >
            Inicio
          </Link>

          <Link
            className="btn btn-light me-2"
            to="/tutorials"
          >
            Tutoriales
          </Link>

          <Link
            className="btn btn-warning fw-bold"
            to="/progress"
          >
            Mi Progreso
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;