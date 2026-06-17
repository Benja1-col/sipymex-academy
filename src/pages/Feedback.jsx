import { useState } from "react";
import retroImg from "../assets/retroalimentacion.png";

function Feedback() {
  const [userType, setUserType] = useState("Cliente habitual");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [topic, setTopic] = useState("General");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  function validEmail(e) {
    return /^\S+@\S+\.\S+$/.test(e);
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!message.trim() || (email.length > 0 && !validEmail(email))) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    setSuccess(true);
    setUserType("Cliente habitual");
    setEmail("");
    setRating(5);
    setTopic("General");
    setMessage("");
    setTimeout(() => setSuccess(false), 6000);
  }

  function Star({ index }) {
    const filled = index <= rating;
    return (
      <span
        onClick={() => setRating(index)}
        style={{ cursor: "pointer", color: filled ? "#f59e0b" : "#d1d5db", fontSize: 22, marginRight: 6 }}
        aria-hidden
      >
        {filled ? "★" : "☆"}
      </span>
    );
  }

  return (
    <div className="container mt-5">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="d-flex align-items-center mb-3">
          <img src={retroImg} alt="Retroalimentación" style={{ width: 56, height: 56, objectFit: "contain", marginRight: 12 }} />
          <h1 style={{ fontWeight: 600, margin: 0 }}>Retroalimentación</h1>
        </div>

        <p className="text-muted">Esta página nos permite recibir tus comentarios y sugerencias. Completa los campos que consideres útiles; el correo es opcional y solo es necesario si quieres recibir respuesta.</p>

        {success && (
          <div className="alert alert-success">Gracias — recibimos tu mensaje.</div>
        )}

        <form onSubmit={handleSubmit} className="p-4" style={{ background: "#fff", borderRadius: 8, border: "1px solid #e6e9ee" }}>
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <label className="form-label small text-muted">Tipo</label>
              <select className="form-select" value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option>Cliente habitual</option>
                <option>Visitante nuevo</option>
                <option>Proveedor</option>
              </select>
              <div className="form-text">Selecciona la opción que mejor describa tu relación con nuestros servicios.</div>
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label small text-muted">Correo (opcional)</label>
              <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" />
              <div className="form-text">Opcional: si deseas que te contactemos deja tu correo; si no, puedes enviar sin él.</div>
              {email.length > 0 && !validEmail(email) && <div className="form-text text-danger">Correo inválido.</div>}
            </div>
          </div>

          <div className="mb-3 d-flex align-items-center">
            <div style={{ marginRight: 12 }} className="small text-muted">Calificación</div>
            <div>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} index={i} />
              ))}
            </div>
            <div className="small text-muted ms-3">{rating} / 5</div>
            <div className="form-text ms-3">1 = Muy insatisfecho, 5 = Muy satisfecho.</div>
          </div>

          <div className="mb-3">
            <label className="form-label small text-muted">Tema</label>
            <select className="form-select" value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option>General</option>
              <option>Tutoriales</option>
              <option>Plataforma</option>
              <option>Soporte</option>
              <option>Sugerencia</option>
            </select>
            <div className="form-text">Elige el área a la que se refiere tu comentario.</div>
          </div>

          <div className="mb-4">
            <label className="form-label small text-muted">Tu mensaje</label>
            <textarea className="form-control" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe la sugerencia o lo que te gustaría compartir." />
            <div className="form-text">Explica con detalle para que podamos entender y actuar sobre tu retroalimentación.</div>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary" disabled={sending || !message.trim() || (email.length > 0 && !validEmail(email))}>
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
