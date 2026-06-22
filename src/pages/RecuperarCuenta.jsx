import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function RecuperarCuenta() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestReset = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    setTimeout(() => {
      if (!email) {
        setMessage("Por favor ingresa tu correo electrónico");
        setLoading(false);
        return;
      }

      const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      const userExists = users.some((u) => u.email === email) || email === "admin@admin";

      if (!userExists) {
        setMessage("No encontramos una cuenta con este correo");
        setLoading(false);
        return;
      }

      setMessage("Se ha enviado un código de verificación a tu correo");
      setTimeout(() => {
        setStep(2);
        setMessage("");
      }, 1000);

      setLoading(false);
    }, 800);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    setTimeout(() => {
      if (!code) {
        setMessage("Por favor ingresa el código de verificación");
        setLoading(false);
        return;
      }

      if (code.length !== 6) {
        setMessage("El código debe tener 6 dígitos");
        setLoading(false);
        return;
      }

      setMessage("Código verificado exitosamente");
      setTimeout(() => {
        setStep(3);
        setMessage("");
      }, 800);

      setLoading(false);
    }, 800);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    setTimeout(() => {
      if (!newPassword || !confirmPassword) {
        setMessage("Por favor completa todos los campos");
        setLoading(false);
        return;
      }

      if (newPassword !== confirmPassword) {
        setMessage("Las contraseñas no coinciden");
        setLoading(false);
        return;
      }

      if (newPassword.length < 6) {
        setMessage("La contraseña debe tener al menos 6 caracteres");
        setLoading(false);
        return;
      }

      const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      const userIndex = users.findIndex((u) => u.email === email);

      if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem("registeredUsers", JSON.stringify(users));
      }

      setMessage("Contraseña actualizada exitosamente. Redirigiendo...");
      setTimeout(() => {
        navigate("/login");
      }, 1500);

      setLoading(false);
    }, 800);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Recuperar Cuenta</h1>
          <p>Restablece tu contraseña en 3 pasos</p>
        </div>

        <div className="steps-indicator">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`step-line ${step >= 2 ? "active" : ""}`}></div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`step-line ${step >= 3 ? "active" : ""}`}></div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        {step === 1 && (
          <form onSubmit={handleRequestReset} className="auth-form">
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

            {message && <div className="info-message">{message}</div>}

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Código"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyCode} className="auth-form">
            <div className="form-group">
              <label htmlFor="code">Código de Verificación</label>
              <input
                id="code"
                type="text"
                placeholder="000000"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                disabled={loading}
                maxLength="6"
              />
              <p className="input-hint">Revisa tu correo electrónico</p>
            </div>

            {message && <div className="info-message">{message}</div>}

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Verificando..." : "Verificar Código"}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="auth-form">
            <div className="form-group">
              <label htmlFor="newPassword">Nueva Contraseña</label>
              <input
                id="newPassword"
                type="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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

            {message && <div className="info-message">{message}</div>}

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Actualizando..." : "Actualizar Contraseña"}
            </button>
          </form>
        )}

        <div className="auth-footer">
          <Link to="/login" className="back-link">
            ← Volver al Login
          </Link>
        </div>
      </div>

      <div className="auth-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </div>
  );
}

export default RecuperarCuenta;
