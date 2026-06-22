import React, { useEffect, useRef, useState } from "react";
import sipymexImg from "../assets/sipymex.png";
import chatbotImg from "../assets/chatbot.png";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const GREETING_RESPONSES = [
  "¡Hola! ¿Cómo puedo ayudarte con tutoriales, boletas o tu progreso?",
  "¡Bienvenido! ¿Qué necesitas hoy? Puedo ayudarte con boletas, tutoriales y más.",
  "¡Hola! Estoy aquí para ayudarte. ¿Qué preguntas tienes?",
  "¡Saludos! ¿En qué puedo asistirte hoy?",
  "¡Hey! ¿Qué necesitas? Conoce sobre boletas, tutoriales y tu progreso.",
  "¡Bienvenido a Sipymex Academy! ¿Cómo te puedo asistir?",
  "¡Hola amigo! Cuéntame qué buscas y te guiaré al lugar correcto.",
  "¡Buenos días! Estoy listo para ayudarte. ¿Qué necesitas?",
  "¡Hola! Soy tu asistente de Sipymex. ¿En qué puedo ser útil?",
  "¡Saludos! Aquí estoy para resolver tus dudas. ¿Qué te inquieta?",
  "¡Hola! Dime qué necesitas y te llevaré al lugar perfecto.",
  "¡Bienvenido! ¿Tienes alguna pregunta o duda? Estoy para ayudarte.",
  "¡Hola! ¿Necesitas ayuda con boletas, tutoriales, progreso o reportes?",
  "¡Hola de nuevo! ¿Qué puedo hacer por ti hoy?",
  "¡Buenas! Estoy aquí para guiarte. ¿Qué buscas?",
  "¡Hola! Tengo información sobre boletas, preguntas frecuentes, tutoriales y más.",
  "¡Saludos cordiales! ¿En qué tema necesitas ayuda?",
  "¡Hola! Cuéntame tu duda y te mostraré dónde encontrar la respuesta.",
  "¡Bienvenido! ¿Buscas aprender, reportar un problema o revisar tu progreso?",
  "¡Hola! Soy tu asistente virtual. ¿Cómo te puedo ayudar hoy?",
];

const CONFIRMATION_RESPONSES = [
  "¿Es esto lo que buscabas?",
  "¿Era esto lo que necesitabas?",
  "¿Encontraste lo que buscas?",
  "¿Es exactamente lo que querías?",
  "¿Te sirve esta opción?",
  "¿Es lo que andabas buscando?",
  "¿Coincide con lo que necesitas?",
  "¿Es la información que requerías?",
  "¿Esto es lo que te ayudará?",
  "¿Es lo que esperabas encontrar?",
];

const KEYWORD_MAP = {
  home: { page: "/", title: "Inicio: Bienvenido a Sipymex Academy", keywords: ["inicio", "home", "empezar", "principal", "portada", "página principal", "inicio del sitio", "página de inicio"] },
  
  tutorial_boleta: { page: "/tutorial/2", title: "Tutoriales: Anular Boleta", keywords: ["anular boleta", "boleta electrónica", "emitir boleta", "como anular", "anulación de boleta", "boleta inválida", "cancelar boleta", "eliminar boleta", "boleta rechazada", "boleta manual", "comprobante", "factura"] },
  tutorial_nota_credito: { page: "/tutorial/1", title: "Tutoriales: Crear Nota de Crédito", keywords: ["nota de crédito", "crédito", "nc", "crear crédito", "nueva nota", "generar nota", "nota fiscal", "devolución", "reembolso", "ajuste de crédito", "nota de debito", "documento"] },
  tutorial_reporte: { page: "/tutorial/3", title: "Tutoriales: Generar Reporte Mensual", keywords: ["reporte", "reportes", "mensual", "ventas", "generador de reportes", "reporte de ventas", "estadísticas", "resumen mensual", "datos de ventas", "análisis de ventas", "reporte anual", "gráficos", "informe", "documento de ventas"] },
  tutorial_inventario: { page: "/tutorial/4", title: "Tutoriales: Administrar Inventario", keywords: ["inventario", "stock", "productos", "control", "gestión de inventario", "stock de productos", "administración de productos", "entrada de productos", "salida de productos", "control de stock", "productos disponibles", "cantidad", "almacén"] },
  tutoriales: { page: "/tutorials", title: "Tutoriales: Aprende a usar Sipymex", keywords: ["tutorial", "tutoriales", "aprende", "como", "cómo", "paso a paso", "guía", "instrucciones", "enseñanza", "capacitación", "formación", "lecciones", "educación", "aprendizaje", "cursos", "videos", "material educativo", "tutoría", "tutoria", "ttutorial", "tutoril", "tutore", "tutoriales", "tutoriales", "tutoriaal", "tutoriiales", "tutoríales", "tutorias", "aprende", "aprendee", "aprende", "aprendi", "aaprendee", "aprensa", "aprends", "aprenede", "aprende", "aprensa"] },
  
  faq_boleta: { page: "/faqs#que-es-boleta-electronica", title: "FAQS: ¿Qué es una boleta electrónica?", keywords: ["boleta", "boletas", "qué es boleta", "definición boleta", "tipo de boleta", "boleta electrónica definición", "boleta manual vs electrónica", "boleta electronica", "boletas de venta", "documento de venta", "boleeta", "boletta", "boletaa", "bboleta", "boleta", "boleeta", "boletea", "boletía", "bolte", "boelta", "booleta", "boletas", "boletass", "boletaas", "bolettaa", "boletass", "boletassss", "bolettass"] },
  faq_firma: { page: "/faqs#que-es-firma-electronica", title: "FAQS: ¿Qué es una firma electrónica?", keywords: ["firma electrónica", "firma digital", "certificado digital", "certificado", "qué es firma digital", "cómo obtener firma", "firma electrónica requisitos", "autenticación digital", "certificado digital", "seguridad"] },
  faq_contrato: { page: "/faqs#desistir-contrato", title: "FAQS: ¿Puedo desistir del contrato?", keywords: ["contrato", "desistir", "términos", "condiciones", "cancelar contrato", "terminar contrato", "romper contrato", "contratación", "clausulas", "acuerdo", "compromiso", "vigencia"] },
  faq_pago: { page: "/faqs#pago-mensual-pos", title: "FAQS: Pagos y Transacciones", keywords: ["pago", "pagos", "tarjeta", "tarjetas", "transacción", "transacciones", "pos", "punto de venta", "pago tarjeta", "transacción rechazada", "cobro", "facturación", "costo mensual", "precio", "valor", "equipo pos", "máquina"] },
  faq_sii: { page: "/faqs#que-se-necesita-para-emitir-boletas", title: "FAQS: Información sobre SII", keywords: ["sii", "registro de ventas", "impuestos", "declaración", "servicio de impuestos", "tributación", "obligaciones fiscales", "declaración de impuestos", "afiliación sii", "requisitos sii", "actividades"] },
  faq_internet: { page: "/faqs#internet-cortado-vender", title: "FAQS: Requisitos de Conexión", keywords: ["internet", "conexión", "conectado", "offline", "sin internet", "sin conexión", "conexión a internet", "velocidad de conexión", "requisitos de internet", "offline mode", "wifi"] },
  faqs: { page: "/faqs", title: "FAQS: Preguntas Frecuentes", keywords: ["faq", "faqs", "pregunta", "preguntas", "frecuente", "frecuentes", "respuesta", "respuestas", "dudas", "preguntas comunes", "información", "consultas"] },
  
  progreso: { page: "/progress", title: "Mi Progreso: Visualiza tu avance", keywords: ["progreso", "avance", "progreso mío", "mi avance", "mi cuenta", "usuario", "perfil", "cuenta", "mi perfil", "mis datos", "mis cursos", "mis logros", "historial", "estadísticas", "desempeño", "progrezo", "progres", "progresoo", "progreeso", "pprogreso", "progrseso", "pogreso", "progreso", "progesro", "prograso", "progreeso", "progresos", "avancee", "avance", "avancez", "avannce", "avancel", "aavance", "avancce", "avanse", "perfil", "perfi", "pperfile", "perfill", "perfila", "pefil", "perfeel", "pperfil"] },
  
  feedback: { page: "/feedback", title: "Retroalimentación: Comparte tu opinión", keywords: ["feedback", "retroalimentación", "sugerencia", "opinión", "opinar", "comentario", "crítica", "evaluación", "reseña", "calificación", "enviar opinión", "compartir experiencia", "valoración", "dejar comentario", "calificar", "retro", "retroalimentacion", "retroalimetnacio", "retroalimentaciòn", "retroalimentaciónn", "retroalimentacionn", "retroalimetnación", "retro alimentación", "retroalimntacion", "retroalimentacion", "retroalimentacao", "retroalimetnacio", "retroalimentacino", "retroalimetnacino", "retroalimentacios", "retroalimentaciónes", "retroalimentacióon", "retroalimtacion", "retroalientacion", "retroalimnetacion", "retroalimentaçion", "retroalimentacioon"] },
  
  reporte: { page: "/report", title: "Reportar Problema: Cuéntanos qué pasó", keywords: ["problema", "problemas", "error", "errores", "reportar", "reporte", "bug", "incidente", "falla", "no funciona", "está roto", "error del sistema", "soporte técnico", "asistencia", "ayuda técnica", "issue", "ticket", "prblema", "probleema", "problmea", "problama", "prblema", "problemaa", "probliema", "problemos", "errrror", "errror", "erorr", "erroe", "eror", "errrr", "errrores", "repotrte", "reporte", "repote", "reportte", "reportar", "repotar", "reporbte", "rreporte", "repore", "bbugg", "buggg", "fallla", "fala", "faiilla", "falla", "failaa", "faillaa"] },
  
  ayuda: { page: "/help", title: "Centro de Ayuda: Encuentra lo que necesitas", keywords: ["ayuda", "help", "duda", "dudas", "support", "soporte", "centro de ayuda", "asistencia", "servicio al cliente", "atención", "asesoría", "consulta", "búsqueda de soluciones", "preguntas", "soporte técnico", "ayuda", "aayuda", "ayua", "ayudaa", "aayudda", "ayudda", "ayudaz", "ayudan", "ayudda", "ayudita", "duda", "dudaa", "dudas", "duda", "dduda", "duuda", "duhda", "dudaaa", "soporte", "sooparte", "soporte", "sopporte", "soposte", "soportee", "soportte", "soporta", "ssopporte", "soporat"] },
  
  sistema: { page: "/tutorials", title: "Tutoriales: Sistema Nova", keywords: ["nova", "software", "aplicación", "sistema", "plataforma", "programa", "herramienta", "sistema de facturación", "software sipymex", "sistema nova"] },
  
  nuevo_usuario: { page: "/tutorials", title: "Tutoriales: Comienza tu experiencia", keywords: ["nuevo", "principiante", "no sé", "no se", "nunca he usado", "por primera vez", "empezar desde cero", "básico", "principios", "introducción"] },
  
  empresa: { page: "/", title: "Inicio: Conoce Sipymex", keywords: ["sipymex", "empresa", "quiénes somos", "acerca de", "sobre nosotros", "información de la empresa", "historia", "nosotros"] },
  
  precio_costo: { page: "/faqs", title: "FAQS: Información sobre Precios", keywords: ["precio", "costo", "valor", "cuánto cuesta", "tarifa", "plan", "paquete", "suscripción", "mensual", "anual", "promoción"] },
  
  requisitos: { page: "/faqs", title: "FAQS: Requisitos Generales", keywords: ["requisitos", "necesito", "qué necesito", "para empezar", "requerimientos", "condiciones", "criterios"] },
  
  tiempo: { page: "/faqs#tiempo-puesta-en-marcha", title: "FAQS: Tiempos y Plazos", keywords: ["tiempo", "cuánto se demora", "demora", "plazo", "duración", "cuánto tarda", "velocidad"] },
  
  contacto_contratacion: { page: "/feedback", title: "Retroalimentación: Ponte en contacto", keywords: ["contacto", "contratar", "comprar", "cómo comprar", "adquirir", "obtener", "compra", "negociación", "kontacto", "contacto", "contacno", "contactoz", "contacto", "conntacto", "contactoa", "contactoe", "ccontacto", "contacto", "contrato", "contraato", "contrat", "ccontrato", "contratoo", "contrataa", "contratoo", "contratee", "contrattoo", "ccomprar", "comprar", "compra", "compraa", "coomprar", "comprar", "comprae", "compraa", "commprar", "comprae"] },
  
  certificacion: { page: "/faqs", title: "FAQS: Certificación y SII", keywords: ["certificación", "certificado", "tramitación", "proceso", "autorización", "folios", "certificar"] },
};

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("menu");
  const [messages, setMessages] = useState([
    { role: "bot", text: GREETING_RESPONSES[Math.floor(Math.random() * GREETING_RESPONSES.length)] },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatDragging, setChatDragging] = useState(false);
  const [chatDragOffset, setChatDragOffset] = useState(null);
  const [chatDragPos, setChatDragPos] = useState(null);
  const endRef = useRef(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    function onMoveChatWindow(e) {
      if (!chatDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      let left = clientX - (chatDragOffset?.x || 0);
      let top = clientY - (chatDragOffset?.y || 0);
      const winW = 300;
      const winH = 340;
      setChatDragPos({
        left: Math.max(8, Math.min(window.innerWidth - winW - 8, left)),
        top: Math.max(8, Math.min(window.innerHeight - winH - 8, top)),
      });
    }
    function onUpChatWindow() {
      if (chatDragging) {
        setChatDragging(false);
        setChatDragOffset(null);
      }
    }
    document.addEventListener("mousemove", onMoveChatWindow);
    document.addEventListener("mouseup", onUpChatWindow);
    document.addEventListener("touchmove", onMoveChatWindow);
    document.addEventListener("touchend", onUpChatWindow);
    return () => {
      document.removeEventListener("mousemove", onMoveChatWindow);
      document.removeEventListener("mouseup", onUpChatWindow);
      document.removeEventListener("touchmove", onMoveChatWindow);
      document.removeEventListener("touchend", onUpChatWindow);
    };
  }, [chatDragging, chatDragOffset]);

  const containerRef = useRef(null);
  const bubbleRef = useRef(null);
  const chatHeaderRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [dragPos, setDragPos] = useState(null);
  const [dragOffset, setDragOffset] = useState(null);
  const navigate = useNavigate();

  const startChatDrag = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const rect = chatHeaderRef.current?.getBoundingClientRect();
    if (rect) {
      setChatDragOffset({ x: clientX - rect.left, y: clientY - rect.top });
    }
    setChatDragging(true);
  };

  const detectKeywords = (text) => {
    const lowerText = text.toLowerCase();
    for (const [key, info] of Object.entries(KEYWORD_MAP)) {
      for (const keyword of info.keywords) {
        if (lowerText.includes(keyword)) {
          return { key, ...info };
        }
      }
    }
    return null;
  };

  const getSuggestionMessage = (keyword) => {
    const confirmText = CONFIRMATION_RESPONSES[Math.floor(Math.random() * CONFIRMATION_RESPONSES.length)];
    return `¿Quisiste decir "${keyword.title}"? ${confirmText}`;
  };
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  useEffect(() => {
    function onMove(e) {
      if (!dragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const rect = bubbleRef.current?.getBoundingClientRect();
      let left, top;
      if (dragOffset) {
        left = clientX - dragOffset.x;
        top = clientY - dragOffset.y;
      } else {
        left = clientX - (rect?.width || 28) / 2;
        top = clientY - (rect?.height || 28) / 2;
      }
      const w = rect?.width || 52;
      const h = rect?.height || 52;
      setDragPos({ left: Math.max(8, Math.min(window.innerWidth - w - 8, left)), top: Math.max(8, Math.min(window.innerHeight - h - 8, top)) });
    }
    function onUp() { if (dragging) { setDragging(false); setDragOffset(null); } }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    };
  }, [dragging]);

  const startDragFrom = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const el = e.currentTarget || e.target;
    const rect = (el && el.getBoundingClientRect && el.getBoundingClientRect()) || bubbleRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({ x: clientX - rect.left, y: clientY - rect.top });
    }
    setDragging(true);
  };

  const sendMessage = async (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text) return;
    const userMsg = { role: "user", text };
    setMessages((s) => [...s, userMsg]);
    setInput("");
    setLoading(true);
    
    const detected = detectKeywords(text);
    
    if (detected) {
      const suggestionText = getSuggestionMessage(detected);
      const suggestionMsg = {
        role: "bot",
        text: suggestionText,
        suggestion: {
          title: detected.title,
          page: detected.page,
        },
      };
      setMessages((s) => [...s, suggestionMsg]);
    } else {
      try {
        const reply = await getBotReply([...messages, userMsg]);
        const short = (reply || "").split("\n")[0].slice(0, 160);
        setMessages((s) => [...s, { role: "bot", text: short }]);
      } catch (err) {
        setMessages((s) => [...s, { role: "bot", text: "Lo siento, ocurrió un error al procesar tu petición." }]);
      }
    }
    
    setMode("chat");
    setLoading(false);
  };

  const getBotReply = async (conversation) => {
    const apiUrl = import.meta.env.VITE_CHATBOT_API_URL;
    const apiKey = import.meta.env.VITE_CHATBOT_API_KEY;
    if (apiUrl && apiKey) {
      const payload = { messages: conversation.map((m) => ({ role: m.role, content: m.text })) };
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return data.reply || (data.choices && data.choices[0]?.message?.content) || JSON.stringify(data);
    }

    const last = conversation[conversation.length - 1].text.toLowerCase();
    
    const greetings = ["¡Hola de nuevo! ¿Hay algo más que pueda hacer por ti?", "¡Buenas! ¿En qué más te ayudo?", "Hola, ¿qué necesitas?"];
    const tutorialsResponses = ["Tenemos tutoriales sobre boletas, reportes, inventario y mucho más. ¿Cuál te interesa?", "¡Claro! Echa un vistazo a nuestros tutoriales en la sección 'Tutoriales'."];
    const progressResponses = ["Tu progreso es importante para nosotros. Accede a 'Mi Progreso' para ver tu avance.", "Revisa tu progreso en la sección dedicada para ti."];
    const faqResponses = ["En las FAQs encontrarás respuestas a preguntas frecuentes. ¿Hay algo específico?", "Consulta nuestras preguntas frecuentes para más información."];
    const helpResponses = ["Estoy aquí para ayudarte. ¿Qué necesitas exactamente?", "Cuéntame más, estoy atento a cualquier duda."];

    if (last.includes("hola") || last.includes("buenas") || last.includes("buenos")) return greetings[Math.floor(Math.random() * greetings.length)];
    if (last.includes("tutorial")) return tutorialsResponses[Math.floor(Math.random() * tutorialsResponses.length)];
    if (last.includes("progreso")) return progressResponses[Math.floor(Math.random() * progressResponses.length)];
    if (last.includes("faq") || last.includes("pregunta") || last.includes("frecuente")) return faqResponses[Math.floor(Math.random() * faqResponses.length)];
    
    return helpResponses[Math.floor(Math.random() * helpResponses.length)];
  };

  const bubble = (
    <div className="chatbot-portal" ref={containerRef}>
      {open && mode === "menu" && (() => {
        const menuW = 180;
        const menuH = 150;
        let style = { position: 'fixed', right: '20px', bottom: '86px', zIndex: 10000 };
        const rect = bubbleRef.current?.getBoundingClientRect();
        if (rect) {
          const margin = 8;
          let centerX = rect.left + rect.width / 2;
          const halfW = menuW / 2;
          centerX = Math.max(margin + halfW, Math.min(window.innerWidth - margin - halfW, centerX));
          let top = Math.round(rect.top - menuH - 12);
          if (top < margin) top = Math.round(rect.bottom + 12);
          style = { position: 'fixed', left: centerX + 'px', top: top + 'px', transform: 'translateX(-50%)', zIndex: 10000 };
        }
        return (
          <div className="chatbot-menu" role="menu" aria-label="Menú rápido" style={style}>
            <button className="chat-option" onClick={() => { setOpen(false); navigate('/tutorials'); }}>📚 Tutoriales</button>
            <button className="chat-option" onClick={() => { setOpen(false); navigate('/progress'); }}>📈 Mi progreso</button>
            <button className="chat-option" onClick={() => { setOpen(false); navigate('/faqs'); }}>❓ FAQs</button>
            <button className="chat-open-full" onClick={() => setMode("chat")}>Abrir chat</button>
          </div>
        );
      })()}

          {open && mode === "chat" && (() => {
            const winW = 300;
            const winH = 340;
            let style = { position: 'fixed', right: '20px', bottom: '86px', zIndex: 10000 };
            if (chatDragPos) {
              style = { position: 'fixed', left: chatDragPos.left + 'px', top: chatDragPos.top + 'px', zIndex: 10000 };
            } else {
              const rect = bubbleRef.current?.getBoundingClientRect();
              if (rect) {
                const margin = 8;
                let centerX = rect.left + rect.width / 2;
                const halfW = winW / 2;
                centerX = Math.max(margin + halfW, Math.min(window.innerWidth - margin - halfW, centerX));
                let top = Math.round(rect.top - winH - 12);
                if (top < margin) top = Math.round(rect.bottom + 12);
                style = { position: 'fixed', left: centerX + 'px', top: top + 'px', transform: 'translateX(-50%)', zIndex: 10000 };
              }
            }
            return (
                  <div className="chatbot-window" role="dialog" aria-label="Chatbot" style={style}>
                    <div className="chatbot-frame" style={{ backgroundColor: 'white' }}>
                  <div className="chatbot-overlay">
                        <div 
                          className="chatbot-header" 
                          role="button" 
                          tabIndex={0}
                          ref={chatHeaderRef}
                          onMouseDown={startChatDrag}
                          onTouchStart={startChatDrag}
                          style={{ cursor: chatDragging ? 'grabbing' : 'grab' }}
                        >
                          <div className="chatbot-title" style={{ cursor: chatDragging ? 'grabbing' : 'grab' }}>Asistente</div>
                          <div style={{ display: "flex", gap: 8 }}>
                            <button className="mini-btn" onClick={(e) => { e.stopPropagation(); setMode("menu"); }} aria-label="Volver">≡</button>
                            <button className="close-btn" onClick={(e) => { e.stopPropagation(); setOpen(false); setChatDragPos(null); }} aria-label="Cerrar">✕</button>
                          </div>
                        </div>

                    <div className="chatbot-body">
                    {messages.slice(-3).map((m, i) => (
                      <div key={i}>
                        <div className={`chatbot-message ${m.role === "user" ? "user" : "bot"}`}>{m.text}</div>
                        {m.suggestion && (
                          <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                            <button
                              onClick={() => {
                                setOpen(false);
                                setChatDragPos(null);
                                navigate(m.suggestion.page);
                              }}
                              style={{
                                padding: '8px 16px',
                                fontSize: 14,
                                fontWeight: 600,
                                backgroundColor: '#10b981',
                                color: 'white',
                                border: 'none',
                                borderRadius: 6,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              IR →
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                    <div ref={endRef} />
                  </div>

                  <div className="chatbot-footer">
                    <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Pregunta breve..." aria-label="Mensaje" />
                    <button className="send-btn" onClick={() => sendMessage()} disabled={loading}>{loading ? "..." : "Enviar"}</button>
                  </div>
                  </div>
                </div>
              </div>
            );
          })()}

      

      {!(open && mode === "chat") && (
        <button
          ref={bubbleRef}
          className={`chatbot-bubble ${open ? "chat-open" : ""}`}
          onClick={() => { if (!dragging) { if (open) { setOpen(false); } else { setOpen(true); setMode("menu"); } } }}
          onMouseDown={(e) => { e.preventDefault(); startDragFrom(e); }}
          onTouchStart={(e) => { e.preventDefault(); startDragFrom(e); }}
          aria-label="Abrir chat"
          style={dragPos ? { position: 'fixed', left: dragPos.left + 'px', top: dragPos.top + 'px' } : { position: 'fixed', right: '20px', bottom: '24px' }}
        >
            <img src={chatbotImg} alt="nube" style={{ width: '44px', height: '44px', objectFit: 'contain', borderRadius: '50%', display: 'block', pointerEvents: 'none' }} />
        </button>
      )}
    </div>
  );

  return typeof document !== "undefined" ? createPortal(bubble, document.body) : bubble;
}

export default Chatbot;
