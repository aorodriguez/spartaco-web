"use client";
import Image from "next/image";
import { SOCIAL_LINKS } from "../constants/social";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", href: SOCIAL_LINKS.facebook, icon: "fb", color: "#1877F2" },
    { name: "Instagram", href: SOCIAL_LINKS.instagram, icon: "ig", color: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
    { name: "TikTok", href: SOCIAL_LINKS.tiktok, icon: "tt", color: "#000000" }
  ];

  const renderIcon = (name: string) => {
    switch(name) {
      case "fb": return <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>;
      case "ig": return <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
      case "tt": return <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>;
      default: return null;
    }
  };

  return (
    <footer style={{
      background:"#080808", borderTop:"1px solid rgba(255,255,255,0.06)",
      padding:"60px 40px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 30 }}>
          <Image src="/logo.jpeg" alt="Spartaco Repuestos" width={120} height={50}
            style={{ height: 45, width: "auto", filter: "brightness(0.9)" }} />
          
          <div style={{ display: "flex", gap: 20 }}>
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                aria-label={link.name}
                className="social-icon"
                style={{ 
                  width: 50, height: 50, borderRadius: 12, 
                  background: link.color.includes("gradient") ? link.color : link.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)" 
                }}>
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 30,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 20
        }}>
          <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
            © 2026 Spartaco Repuestos · Todos los derechos reservados
          </span>
          <div style={{ display: "flex", gap: 30 }}>
            <a href="#hero" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "0.8rem" }}>Inicio</a>
            <a href="#catalogo" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "0.8rem" }}>Catálogo</a>
            <a href="#contacto" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "0.8rem" }}>Contacto</a>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ 
          footer{ padding: 50px 20px !important; }
          footer > div { text-align: center; }
          footer > div > div { justify-content: center !important; }
        }
      `}</style>
    </footer>
  );
}
