"use client";

export default function Cotizar() {
  return (
    <section id="cotizar" style={{ 
      background: "#111", 
      padding: "100px 20px",
      position: "relative" 
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <p style={{ 
          fontFamily: "'Barlow Condensed',sans-serif", 
          fontSize: "0.78rem", 
          letterSpacing: "0.22em", 
          textTransform: "uppercase", 
          color: "#8da4ff", 
          marginBottom: 12 
        }}>
          Solicitud de presupuesto
        </p>
        <h2 style={{ 
          fontFamily: "'Barlow Condensed',sans-serif", 
          fontWeight: 900, 
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
          textTransform: "uppercase", 
          lineHeight: 1, 
          marginBottom: 40,
          color: "white"
        }}>
          Formulario de <span style={{ color: "#2d44c8" }}>Cotización</span>
        </h2>
        
        <div style={{ 
          background: "rgba(255,255,255,0.03)", 
          borderRadius: 12, 
          padding: "20px",
          border: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          minHeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ? (
            <iframe 
              src={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL} 
              width="100%" 
              height="850" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              style={{ borderRadius: 8 }}
            >
              Cargando…
            </iframe>
          ) : (
            <div style={{ color: "#888" }}>Formulario no disponible momentáneamente.</div>
          )}
        </div>
        
        <p style={{ marginTop: 30, color: "#666", fontSize: "0.9rem" }}>
          También puedes contactarnos directamente vía WhatsApp para una respuesta más rápida.
        </p>
      </div>
    </section>
  );
}
