"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(13,13,13,0.93)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "14px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#hero">
          <Image src="/logo.jpeg" alt="Spartaco Repuestos" width={120} height={52}
            style={{ height: 50, width: "auto", filter: "drop-shadow(0 0 8px rgba(45,68,200,0.4))" }} />
        </a>

        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
          {[["#catalogo","Catálogo"],["#categorias","Categorías"],["#ventajas","Nosotros"],["#cotizar","Cotizar"],["#contacto","Contacto"]].map(([href,label]) => (
            <li key={href}>
              <a href={href} style={{ color:"#888", textDecoration:"none", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"0.95rem", letterSpacing:"0.12em", textTransform:"uppercase", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#f5f5f5")}
                onMouseLeave={e=>(e.currentTarget.style.color="#888")}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#cotizar"
              style={{ background:"#1a2b8c", color:"white", textDecoration:"none", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.9rem", letterSpacing:"0.08em", textTransform:"uppercase", padding:"8px 20px", borderRadius:4, transition:"background 0.2s" }}
              onMouseEnter={e=>(e.currentTarget.style.background="#2d44c8")}
              onMouseLeave={e=>(e.currentTarget.style.background="#1a2b8c")}>
              Cotizar →
            </a>
          </li>
        </ul>

        <button onClick={()=>setOpen(!open)} className="mobile-menu-btn"
          style={{ display:"none", background:"none", border:"none", color:"white", fontSize:"1.6rem", cursor:"pointer" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{ background:"#1a1a1a", borderTop:"1px solid rgba(255,255,255,0.06)", padding:"20px 32px", display:"flex", flexDirection:"column", gap:18 }}>
          {[["#catalogo","Catálogo"],["#categorias","Categorías"],["#ventajas","Nosotros"],["#cotizar","Cotizar"],["#contacto","Contacto"]].map(([href,label]) => (
            <a key={href} href={href} onClick={()=>setOpen(false)}
              style={{ color:"#888", textDecoration:"none", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:600, fontSize:"1.1rem", letterSpacing:"0.1em", textTransform:"uppercase" }}>{label}</a>
          ))}
          <a href="#cotizar" onClick={()=>setOpen(false)}
            style={{ background:"#1a2b8c", color:"white", textDecoration:"none", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"1rem", padding:"12px 20px", borderRadius:4, textAlign:"center", textTransform:"uppercase" }}>
            Cotizar por Formulario
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
