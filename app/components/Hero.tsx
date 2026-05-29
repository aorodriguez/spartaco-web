"use client";
import Image from "next/image";
import { SOCIAL_LINKS } from "../constants/social";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden", padding: "120px 32px 80px",
    }}>
      {/* Fondo */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(26,43,140,0.35) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(45,68,200,0.12) 0%, transparent 60%), linear-gradient(160deg, #111 0%, #0d0d0d 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Logo decorativo fondo */}
      <Image src="/logo.jpeg" alt="" width={560} height={480}
        className="animate-floatIn"
        style={{
          position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
          width: "clamp(300px, 36vw, 560px)", height: "auto",
          opacity: 0.08, filter: "grayscale(1) brightness(3)", pointerEvents: "none",
        }} />

      {/* Contenido */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 640 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 15 }} className="animate-fadeUp">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-block", background: "rgba(26,43,140,0.3)",
              border: "1px solid rgba(45,68,200,0.4)", color: "#8da4ff",
              fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.78rem",
              letterSpacing: "0.2em", textTransform: "uppercase",
              padding: "6px 14px", borderRadius: 2,
            }}>
              🚗 Envíos a todo Chile
            </span>
            
            <a href={SOCIAL_LINKS.mapsUrl} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 6, 
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", 
              color: "#aaa", fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.78rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "6px 14px", borderRadius: 2, textDecoration: "none",
              transition: "all 0.2s"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#aaa"; }}>
              📍 {SOCIAL_LINKS.address}
            </a>
          </div>
          
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { name: "fb", color: "#1877F2", href: SOCIAL_LINKS.facebook, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> },
              { name: "ig", color: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", href: SOCIAL_LINKS.instagram, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771-4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259 0 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              { name: "tt", color: "#000000", href: SOCIAL_LINKS.tiktok, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg> }
            ].map(social => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                width: 32, height: 32, borderRadius: 8, background: social.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "transform 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <h1 className="animate-fadeUp-1" style={{
          fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
          fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.95,
          textTransform: "uppercase", margin: 0,
        }}>
          Spartaco<br />
          <span style={{ color: "#2d44c8" }}>Repuestos</span>
        </h1>

        <p className="animate-fadeUp-2" style={{
          marginTop: 20, fontSize: "1.1rem", color: "#888",
          fontWeight: 300, lineHeight: 1.6, maxWidth: 500,
        }}>
          Repuestos automotrices para vehículos chinos y más. Calidad garantizada, despacho rápido en todo el país.
        </p>

        <div className="animate-fadeUp-3" style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#cotizar"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#1a2b8c", color: "white", textDecoration: "none",
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "14px 28px", borderRadius: 4, transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#2d44c8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1a2b8c"; e.currentTarget.style.transform = "translateY(0)"; }}>
            📋 Cotizar por Formulario
          </a>
          <a href={SOCIAL_LINKS.whatsapp}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              border: "1px solid #25d366", color: "#25d366", textDecoration: "none",
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600,
              fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "14px 28px", borderRadius: 4, transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#25d366"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#25d366"; }}>
            💬 WhatsApp Rápido
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero { padding: 100px 20px 60px !important; }
        }
      `}</style>
    </section>
  );
}
