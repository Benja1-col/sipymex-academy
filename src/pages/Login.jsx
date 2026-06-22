import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@admin" && password === "admin") {
        localStorage.setItem("authUser", JSON.stringify({ email, isAdmin: true }));
        navigate("/");
      } else {
        const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
          localStorage.setItem("authUser", JSON.stringify({ email, isAdmin: false }));
          navigate("/");
        } else {
          setError("Correo o contraseña incorrectos");
        }
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Bienvenid@ a Sipymex Nova Academy</h1>
          <p>Inicia sesión en tu cuenta</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Verificando..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className="auth-footer">
          <Link to="/recuperar-cuenta" className="recover-link">
            Recuperar Cuenta
          </Link>
        </div>

        <div className="auth-divider">
          <span>¿No tienes cuenta?</span>
        </div>

        <Link to="/register" className="register-link">
          Crear Nueva Cuenta
        </Link>
      </div>

      <div className="auth-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </div>
  );
}

export default Login;
