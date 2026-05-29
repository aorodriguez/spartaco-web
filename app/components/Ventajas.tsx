"use client";
const items = [
  { n:"01", title:"Envíos a todo Chile", desc:"Despachamos desde Arica hasta Punta Arenas. Coordinamos con los principales servicios de courier del país." },
  { n:"02", title:"Especialistas en marcas chinas", desc:"Expertos en Maxus, Chery, JAC, BYD, DFSK, Geely y más. Conocemos cada modelo a fondo." },
  { n:"03", title:"Atención directa", desc:"Sin intermediarios. Hablas directamente con quien conoce los repuestos y te da la respuesta correcta." },
  { n:"04", title:"Repuestos garantizados", desc:"Trabajamos con proveedores de confianza. Cada pieza tiene garantía de calidad y compatibilidad." },
];

export default function Ventajas() {
  return (
    <section id="ventajas" style={{ background:"#1a1a1a", padding:"100px 40px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.78rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#8da4ff", marginBottom:12 }}>
          ¿Por qué elegirnos?
        </p>
        <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"clamp(2rem,4vw,3.2rem)", textTransform:"uppercase", lineHeight:1, marginBottom:0 }}>
          Compromiso con<br />la calidad
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px 80px", marginTop:56 }} className="ventajas-grid">
          {items.map(v => (
            <div key={v.n} style={{ display:"flex", gap:20 }}>
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"3rem", color:"rgba(45,68,200,0.25)", lineHeight:1, flexShrink:0, width:56 }}>{v.n}</span>
              <div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"1.15rem", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>{v.title}</div>
                <div style={{ color:"#888", fontSize:"0.92rem", lineHeight:1.6, fontWeight:300 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          #ventajas{ padding: 70px 20px !important; }
          .ventajas-grid{ grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
