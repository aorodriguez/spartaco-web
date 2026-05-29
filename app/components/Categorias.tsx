"use client";
const cats = [
  { icon: "🛞", name: "Sistema de Frenos", desc: "Discos, balatas, pastillas, cilindros y más" },
  { icon: "⚙️", name: "Motor", desc: "Filtros, correas, juntas, bombas y componentes" },
  { icon: "🔧", name: "Suspensión", desc: "Amortiguadores, brazos, rótulas y bujes" },
  { icon: "💡", name: "Sistema Eléctrico", desc: "Sensores, alternadores, bobinas y fusibles" },
  { icon: "🌬️", name: "Climatización", desc: "Compresores A/C, filtros de habitáculo y más" },
  { icon: "🚗", name: "Transmisión", desc: "Embrague, diferencial, semiejes y caja" },
  { icon: "💧", name: "Refrigeración", desc: "Radiadores, termostatos, mangueras y tapas" },
  { icon: "🔩", name: "Carrocería", desc: "Espejos, manillas, molduras y parrillas" },
];

export default function Categorias() {
  return (
    <section id="categorias" style={{ background: "#0d0d0d", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.78rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#8da4ff", marginBottom:12 }}>
            Nuestros productos
          </p>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"clamp(2rem,4vw,3.2rem)", textTransform:"uppercase", lineHeight:1, marginBottom:20 }}>
            ¿Qué repuesto<br />necesitas?
          </h2>
          <p style={{ color:"#888", fontWeight:300, lineHeight:1.7, maxWidth:520 }}>
            Amplio stock de repuestos para las principales marcas chinas del mercado chileno.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:16 }}>
          {cats.map(c => (
            <div key={c.name}
              style={{ background:"#1a1a1a", border:"1px solid rgba(255,255,255,0.07)", borderRadius:6, padding:"32px 24px", transition:"border-color 0.2s, transform 0.2s, background 0.2s", cursor:"default" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor="rgba(45,68,200,0.5)"; el.style.background="rgba(26,43,140,0.15)"; el.style.transform="translateY(-3px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor="rgba(255,255,255,0.07)"; el.style.background="#1a1a1a"; el.style.transform="translateY(0)"; }}>
              <span style={{ fontSize:"2.2rem", marginBottom:14, display:"block" }}>{c.icon}</span>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"1.1rem", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:6 }}>{c.name}</div>
              <div style={{ fontSize:"0.85rem", color:"#888", fontWeight:300 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){ #categorias{ padding: 70px 20px !important; } }`}</style>
    </section>
  );
}
