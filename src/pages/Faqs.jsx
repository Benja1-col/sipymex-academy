import { useState, useRef, useEffect } from "react";
import faqIcon from "../assets/faq.png";
import faqNaranja from "../assets/faqnaranja-removebg-preview.png";
import faqVerde from "../assets/faqverde-removebg-preview.png";
import faqs from "../data/faqs";

function Faqs() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(faqs);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setFiltered(faqs);
      return;
    }
    const list = faqs.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
    setFiltered(list);
  }, [query]);

  return (
    <div className="container py-5">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="d-flex align-items-center mb-3">
          <img src={faqIcon} alt="FAQS" style={{ height: 36, marginRight: 12 }} />
          <div>
            <h1 style={{ margin: 0, fontWeight: 700 }}>Preguntas frecuentes</h1>
            <p className="text-muted" style={{ margin: 0 }}>Respuestas claras y rápidas para ayudarte a avanzar.</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
              <input value={query} onChange={(e) => setQuery(e.target.value)} className="form-control" placeholder="Buscar en FAQs (ej. boleta, firma, POS)" />
              <div className="badge bg-primary" style={{ padding: "10px 14px", fontSize: 14 }}>{filtered.length}</div>
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {filtered.map((f) => (
                <div key={f.id} id={f.id} style={{ background: "#fff", borderRadius: 12, padding: 14, boxShadow: "0 6px 18px rgba(12, 21, 40, 0.06)", border: "1px solid rgba(13,110,253,0.06)" }}>
                  <FAQItem question={f.question} answer={f.answer} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: 320 }}>
            <div style={{ background: "linear-gradient(180deg,#f8fbff,#ffffff)", borderRadius: 12, padding: 16, boxShadow: "0 6px 18px rgba(12,21,40,0.04)" }}>
              <h6 style={{ marginTop: 0 }}>¿Necesitas más ayuda?</h6>
              <p className="text-muted">Si tu duda no está aquí, visita el Centro de Ayuda, contacta soporte o envía un reporte con detalles y capturas.</p>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <a href="/help" className="btn btn-outline-primary" style={{ flex: 1 }}>Centro de ayuda</a>
                <a href="/report" className="btn btn-primary" style={{ flex: 1 }}>Reportar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src={open ? faqVerde : faqNaranja} alt="icon" style={{ height: 22 }} />
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            color: open ? "#198754" : "#ff8c00",
            fontSize: 16,
            cursor: "pointer",
            textAlign: "left",
            flex: 1,
          }}
        >
          {question}
        </button>
      </div>

      {open && (
        <div style={{ marginTop: 12 }}>
          <div>
            <p style={{ margin: 0, color: "#6c757d" }}>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
