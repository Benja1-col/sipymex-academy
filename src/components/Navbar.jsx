import { Link } from "react-router-dom";
import sipymexLogo from "../assets/sipymex-removebg-preview.png";
import novaLogo from "../assets/novaacademy.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "rgba(0,0,0,0.6)",
        color: "#ffffff",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <img src={sipymexLogo} alt="Sipymex" style={{ height: 96, display: 'block' }} />
          <img src={novaLogo} alt="Nova Academy" style={{ height: 48, display: 'block' }} />
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
            className="btn btn-light me-2"
            to="/faqs"
          >
            FAQS
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