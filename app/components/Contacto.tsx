"use client";
import { SOCIAL_LINKS } from "../constants/social";

export default function Contacto() {
  return (
    <section id="contacto" style={{ background:"#0d0d0d", padding:"100px 40px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.78rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#8da4ff", marginBottom:12 }}>
          Contáctanos
        </p>
        <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"clamp(2rem,4vw,3.2rem)", textTransform:"uppercase", lineHeight:1, marginBottom:0 }}>
          Estamos listos<br />para ayudarte
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, marginTop:56, alignItems:"start" }} className="contacto-inner">
          {/* Info */}
          <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
            {[
              { icon:"📱", label:"WhatsApp / Teléfono", value:"+56 9 7554 8568", href: SOCIAL_LINKS.whatsapp },
              { icon:"📍", label:"Ubicación", value: SOCIAL_LINKS.address, href: SOCIAL_LINKS.mapsUrl },
              { icon:"🚚", label:"Cobertura", value:"Todo Chile" },
              { icon:"📦", label:"Servicios de despacho", value:"Starken · Chilexpress · Correos" },
            ].map(item => (
              <div key={item.label} style={{ display:"flex", alignItems:"flex-start", gap:16 }}>
                <div style={{ width:44, height:44, background:"rgba(26,43,140,0.3)", border:"1px solid rgba(45,68,200,0.3)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.75rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#888", marginBottom:4 }}>{item.label}</div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"1.15rem" }}>
                    {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color:"inherit", textDecoration:"none" }}>{item.value}</a> : item.value}
                  </div>
                </div>
              </div>
            ))}

            <a href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(SOCIAL_LINKS.whatsappMsg)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:12, background:"#128c7e", color:"white", textDecoration:"none", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"1.1rem", letterSpacing:"0.05em", textTransform:"uppercase", padding:"16px 32px", borderRadius:4, transition:"background 0.2s, transform 0.15s", marginTop:12, alignSelf:"flex-start" }}
              onMouseEnter={e => { e.currentTarget.style.background="#075e54"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="#128c7e"; e.currentTarget.style.transform="translateY(0)"; }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Enviar mensaje
            </a>
          </div>

          {/* Card horarios */}
          <div style={{ background:"#1a1a1a", border:"1px solid rgba(255,255,255,0.07)", borderRadius:8, padding:40, display:"flex", flexDirection:"column", gap:20 }}>
            <div>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"1.1rem", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6 }}>Horario de atención</div>
              <div style={{ color:"#888", fontSize:"0.9rem", fontWeight:300, lineHeight:1.6 }}>Respondemos cotizaciones dentro del horario hábil.</div>
            </div>
            <div style={{ display:"flex", flexDirection:"column" }}>
              {[
                ["Lunes – Viernes","9:00 – 19:00",false],
                ["Sábado","10:00 – 14:00",false],
                ["Domingo","Cerrado",true],
              ].map(([dia,hrs,cerrado]) => (
                <div key={String(dia)} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize:"0.9rem", color:"#888" }}>{dia}</span>
                  <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"0.95rem", color: cerrado ? "#555" : "#f5f5f5" }}>{hrs}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingTop:8, borderTop:"1px solid rgba(255,255,255,0.06)", color:"#888", fontSize:"0.9rem", fontWeight:300, lineHeight:1.6 }}>
              💬 Puedes escribirnos fuera de horario y te respondemos al día siguiente hábil.
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          #contacto{ padding: 70px 20px !important; }
          .contacto-inner{ grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
