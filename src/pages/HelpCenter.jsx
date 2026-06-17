import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import tutorials from "../data/tutorials";
import faqs from "../data/faqs";
import centroImg from "../assets/centrodeayuda.png";

function HelpSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [noResults, setNoResults] = useState("");

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const tList = tutorials.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)).map(t => ({ label: t.title, path: `/tutorial/${t.id}`, source: "tutorial" }));
    const fList = faqs.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)).map(f => ({ label: f.question, path: `/faqs#${f.id}`, source: "faq" }));
    const pages = [];
    if ("tutorials".includes(q) || q.includes("tutorial")) pages.push({ label: "Ver tutoriales", path: "/tutorials", source: "page" });
    if (q.includes("faq") || q.includes("pregunta")) pages.push({ label: "Ir a FAQs", path: "/faqs", source: "page" });
    if (q.includes("feedback") || q.includes("retroaliment")) pages.push({ label: "Enviar feedback", path: "/feedback", source: "page" });
    if (q.includes("report") || q.includes("problema") || q.includes("reportar")) pages.push({ label: "Reportar problema", path: "/report", source: "page" });
    const combined = [...pages, ...fList, ...tList];
    return combined.slice(0, 8);
  }, [query]);

  function handleSelect(s) {
    setSelected(s);
    setQuery(s.label);
    setNoResults("");
  }

  function handleSearch() {
    if (selected && selected.path) {
      navigate(selected.path);
      return;
    }
    if (suggestions.length > 0) {
      navigate(suggestions[0].path);
      return;
    }
    const q = query.trim().toLowerCase();
    if (q.includes("tutorial")) return navigate("/tutorials");
    if (q.includes("faq") || q.includes("pregunta")) return navigate("/faqs");
    if (q.includes("feedback") || q.includes("retroaliment")) return navigate("/feedback");
    if (q.includes("report") || q.includes("problema") || q.includes("reportar")) return navigate("/report");
    setNoResults("No se encontraron resultados. Intenta con otra palabra clave.");
  }

  return (
    <div>
      <div className="input-group">
        <input value={query} onChange={(e) => { setQuery(e.target.value); setSelected(null); setNoResults(""); }} className="form-control" placeholder="Busca por palabra clave (ej. acceso, pago, tutoriales)" onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSearch(); } }} />
        <button type="button" className="btn btn-primary" onClick={handleSearch}>Buscar</button>
      </div>
      {suggestions.length > 0 && (
        <div className="list-group mt-2">
          {suggestions.map((s, i) => (
            <button key={i} type="button" className="list-group-item list-group-item-action" onClick={() => handleSelect(s)}>{s.label}</button>
          ))}
        </div>
      )}
      {noResults && <div className="form-text text-danger mt-2">{noResults}</div>}
    </div>
  );
}

function HelpCenter() {
  return (
    <div className="container mt-5">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="d-flex align-items-center mb-4">
          <img src={centroImg} alt="Centro de ayuda" style={{ width: 56, height: 56, objectFit: "contain", marginRight: 12 }} />
          <h1 style={{ margin: 0, fontWeight: 600 }}>Centro de ayuda</h1>
        </div>

        <p className="lead text-muted">Bienvenido al Centro de Ayuda. Aquí encontrarás formas sencillas de resolver dudas, contactar al equipo y enviar reportes o sugerencias.</p>

        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Horario de atención</h5>
                <p className="card-text">Lunes - Viernes<br/>09:00 a 15:30 hrs</p>
                <h6 className="mt-3">Información de contacto</h6>
                <ul className="list-unstyled">
                  <li className="mb-1">Tel: +652 854091</li>
                  <li className="mb-1">Tel: +569 40566034</li>
                  <li className="mb-1">Email: ventas@sipymex.cl</li>
                </ul>
                
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Preguntas frecuentes</h5>
                <p className="card-text">Revisa nuestras preguntas frecuentes para respuestas rápidas a consultas comunes.</p>
                <Link to="/faqs" className="btn btn-outline-secondary">Ir a FAQS</Link>
                <hr/>
                <h6 className="mt-3">Buscar ayuda</h6>
                <div className="mt-2">
                  <HelpSearch />
                </div>
                <p className="form-text mt-2">Si no encuentras lo que buscas, utiliza Reportar problema o Enviar feedback desde el menú.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h5>Guía rápida para pedir ayuda</h5>
          <ol>
            <li>Describe claramente el problema o la pregunta.</li>
            <li>Incluye capturas o enlaces si es posible.</li>
            <li>Proporciona tu correo para recibir seguimiento.</li>
            <li>Usa <Link to="/report">Reportar problema</Link> para fallos técnicos y <Link to="/feedback">Enviar feedback</Link> para sugerencias.</li>
          </ol>
        </div>

        <div className="mt-4">
          <h5>Recursos útiles</h5>
          <ul>
            <li><Link to="/tutorials">Ver tutoriales</Link></li>
            <li><Link to="/progress">Ver tu progreso</Link></li>
            <li><Link to="/faqs">Ver FAQs</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
