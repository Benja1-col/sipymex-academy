import { useState } from "react";
import problemaImg from "../assets/problema.png";

function ReportProblem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [environment, setEnvironment] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  function validEmail(e) {
    return /^\S+@\S+\.\S+$/.test(e);
  }

  function handleFiles(ev) {
    const list = Array.from(ev.target.files || []);
    setFiles(list);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !validEmail(email)) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSuccessMsg(`Reporte enviado. Se enviará confirmación a ${email}`);
    setTitle("");
    setDescription("");
    setEnvironment("");
    setEmail("");
    setFiles([]);
    setTimeout(() => setSuccessMsg(""), 7000);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-9 col-md-10">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <img src={problemaImg} alt="Reportar problema" style={{ width: 56, height: 56, objectFit: "contain", marginRight: 12 }} />
                <h1 style={{ margin: 0, fontWeight: 600 }}>Reportar problema</h1>
              </div>

              <p className="text-muted">Informa problemas que afecten tu uso. Completa los campos para que el equipo pueda reproducir y resolver el incidente; el correo es obligatorio para recibir seguimiento.</p>

              {successMsg && <div className="alert alert-success">{successMsg}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Título</label>
                  <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Breve resumen del problema" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea className="form-control" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe qué ocurrió y cuándo." />
                </div>

                <div className="mb-3">
                  <label className="form-label">Entorno (opcional)</label>
                  <input className="form-control" value={environment} onChange={(e) => setEnvironment(e.target.value)} placeholder="Ej: Chrome 114 / Windows 10 / Android" />
                  <div className="form-text">Indica navegador, sistema operativo o dispositivo, si lo conoces.</div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Adjuntar capturas (opcional)</label>
                  <input className="form-control" type="file" multiple onChange={handleFiles} />
                  {files.length > 0 && (
                    <div className="mt-2">
                      {files.map((f, idx) => (
                        <div key={idx} className="small text-muted">{f.name} • {(f.size / 1024).toFixed(0)} KB</div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo (obligatorio)</label>
                  <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" />
                  {!validEmail(email) && email.length > 0 && <div className="form-text text-danger">Correo inválido.</div>}
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary" disabled={sending || !title.trim() || !description.trim() || !validEmail(email)}>
                    {sending ? "Enviando..." : "Enviar reporte"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportProblem;
