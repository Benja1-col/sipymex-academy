import { Link, useNavigate } from "react-router-dom";
import sipymexLogo from "../assets/sipymex-removebg-preview.png";
import novaLogo from "../assets/novaacademy.png";

function Navbar() {
  const navigate = useNavigate();
  const authUser = JSON.parse(localStorage.getItem("authUser") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/login");
  };

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
            className="btn btn-warning fw-bold me-2"
            to="/progress"
          >
            Mi Progreso
          </Link>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "13px", color: "#e2e8f0" }}>
              {authUser.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 16px",
                background: "rgba(239, 68, 68, 0.9)",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(220, 38, 38, 1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(239, 68, 68, 0.9)";
              }}
            >
              Cerrar Sesión
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;