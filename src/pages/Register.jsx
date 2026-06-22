import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    setTimeout(() => {
      if (!email || !password || !confirmPassword) {
        setError("Por favor completa todos los campos");
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden");
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres");
        setLoading(false);
        return;
      }

      const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

      if (users.some((u) => u.email === email)) {
        setError("Este correo ya está registrado");
        setLoading(false);
        return;
      }

      users.push({ email, password });
      localStorage.setItem("registeredUsers", JSON.stringify(users));

      setSuccess("Cuenta registrada exitosamente. Redirigiendo...");
      setTimeout(() => {
        navigate("/login");
      }, 1500);

      setLoading(false);
    }, 500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Bienvenid@ a Sipymex Nova Academy</h1>
          <p>Únete a nuestra plataforma hoy</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form">
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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Registrando..." : "Crear Cuenta"}
          </button>
        </form>

        <div className="auth-divider">
          <span>¿Ya tienes cuenta?</span>
        </div>

        <Link to="/login" className="register-link">
          Inicia Sesión
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

export default Register;
