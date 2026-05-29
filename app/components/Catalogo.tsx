"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Producto {
  nombre: string;
  marca: string;
  categoria: string;
  precio: string;
  imagen: string;
  descripcion: string;
  sku?: string;
}

export default function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtered, setFiltered] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMarca, setSelectedMarca] = useState("Todas");
  const [marcas, setMarcas] = useState<string[]>([]);
  
  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("/api/productos")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProductos(data);
          setFiltered(data);
          const uniqueMarcas = ["Todas", ...new Set(data.map((p: Producto) => p.marca).filter(Boolean))];
          setMarcas(uniqueMarcas as string[]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = productos;
    
    if (search) {
      result = result.filter(p => 
        p.nombre.toLowerCase().includes(search.toLowerCase()) || 
        p.descripcion.toLowerCase().includes(search.toLowerCase()) ||
        (p.sku && p.sku.toLowerCase().includes(search.toLowerCase()))
      );
    }
    
    if (selectedMarca !== "Todas") {
      result = result.filter(p => p.marca === selectedMarca);
    }
    
    setFiltered(result);
    setCurrentPage(1); // Resetear a la primera página cuando cambian los filtros
  }, [search, selectedMarca, productos]);

  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const formatPrecio = (precio: string) => {
    const num = parseInt(precio.replace(/\D/g, ""));
    return isNaN(num) ? precio : new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(num);
  };

  const handleWhatsApp = (p: Producto) => {
    const msg = `Hola Spartaco, me interesa el producto: ${p.nombre} (SKU: ${p.sku || 'N/A'}) que vi en el catálogo.`;
    window.open(`https://wa.me/56975548568?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const getImageUrl = (url: string) => {
    const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23444'%3ESin Imagen%3C/text%3E%3C/svg%3E";
    
    if (!url || url.trim() === "") return FALLBACK;

    // Extraer la URL si viene en formato Markdown [Link](https://...)
    let cleanUrl = url.trim();
    if (cleanUrl.startsWith("[") && cleanUrl.includes("](")) {
      const match = cleanUrl.match(/\((https?:\/\/[^)]+)\)/);
      if (match) cleanUrl = match[1];
    }
    
    // Si es un link de Google Drive, lo convertimos a link directo estable
    if (cleanUrl.includes("drive.google.com")) {
      const id = cleanUrl.split("/d/")[1]?.split("/")[0] || cleanUrl.split("id=")[1]?.split("&")[0];
      // Usamos el endpoint lh3 que es más directo para imágenes de Drive
      return id ? `https://lh3.googleusercontent.com/d/${id}` : cleanUrl;
    }
    return cleanUrl;
  };

  return (
    <section id="catalogo" className="catalogo-section" style={{ background: "#0a0a0a", padding: "100px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8da4ff", marginBottom: 12 }}>
            Explora nuestro stock
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", textTransform: "uppercase", lineHeight: 1, color: "white" }}>
            Catálogo de <span style={{ color: "#2d44c8" }}>Productos</span>
          </h2>
        </div>

        {/* Filtros */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <input 
              type="text" 
              placeholder="Buscar repuesto..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ 
                background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", color: "white",
                padding: "12px 20px", borderRadius: 6, width: "100%", maxWidth: 400,
                fontFamily: "inherit", fontSize: "1rem"
              }}
            />
          </div>
          
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {marcas.map(marca => (
              <button
                key={marca}
                onClick={() => setSelectedMarca(marca)}
                style={{
                  background: selectedMarca === marca ? "#1a2b8c" : "transparent",
                  color: selectedMarca === marca ? "white" : "#888",
                  border: `1px solid ${selectedMarca === marca ? "#2d44c8" : "rgba(255,255,255,0.1)"}`,
                  padding: "8px 16px", borderRadius: 4, cursor: "pointer",
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600,
                  fontSize: "0.85rem", textTransform: "uppercase", transition: "all 0.2s"
                }}
              >
                {marca}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla */}
        {loading ? (
          <div style={{ textAlign: "center", color: "#888", padding: "100px 0" }}>Cargando productos...</div>
        ) : filtered.length > 0 ? (
          <div className="catalogo-grid" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
            gap: 30 
          }}>
            {currentItems.map((p, i) => (
              <div key={i} style={{ 
                background: "#111", border: "1px solid rgba(255,255,255,0.06)", 
                borderRadius: 8, overflow: "hidden", transition: "transform 0.2s" 
              }} className="product-card">
                <div style={{ position: "relative", height: 200, width: "100%", background: "#1a1a1a" }}>
                  <img 
                    src={getImageUrl(p.imagen)} 
                    alt={p.nombre} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const ERROR_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23444'%3EError Imagen%3C/text%3E%3C/svg%3E";
                      if (target.src !== ERROR_FALLBACK) {
                        target.src = ERROR_FALLBACK;
                      }
                    }}
                  />
                  <span style={{ 
                    position: "absolute", top: 12, left: 12, background: "rgba(45,68,200,0.9)", 
                    color: "white", padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem",
                    fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em"
                  }}>
                    {p.marca}
                  </span>
                  {p.sku && (
                    <span style={{ 
                      position: "absolute", bottom: 12, right: 12, background: "rgba(0,0,0,0.6)", 
                      color: "#aaa", padding: "2px 8px", borderRadius: 4, fontSize: "0.65rem",
                      fontFamily: "monospace"
                    }}>
                      SKU: {p.sku}
                    </span>
                  )}
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: "0.75rem", color: "#2d44c8", textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>
                    {p.categoria}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", color: "white", margin: "0 0 10px 0", fontWeight: 600 }}>{p.nombre}</h3>
                  <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: 20, height: 45, overflow: "hidden" }}>
                    {p.descripcion}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "white", fontFamily: "'Barlow Condensed',sans-serif" }}>
                      {formatPrecio(p.precio)}
                    </span>
                    <button 
                      onClick={() => handleWhatsApp(p)}
                      style={{ 
                        background: "#128c7e", color: "white", border: "none", 
                        padding: "8px 14px", borderRadius: 4, cursor: "pointer",
                        fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase"
                      }}
                    >
                      Consultar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", color: "#888", padding: "100px 0" }}>
            No se encontraron productos con esos filtros.
          </div>
        )}

        {/* Paginación UI */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 50 }}>
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              style={{ 
                background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: currentPage === 1 ? "#333" : "white",
                padding: "8px 16px", borderRadius: 4, cursor: currentPage === 1 ? "default" : "pointer"
              }}
            >
              Anterior
            </button>
            <div style={{ display: "flex", alignItems: "center", color: "#666", fontSize: "0.9rem", padding: "0 15px" }}>
              Página {currentPage} de {totalPages}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              style={{ 
                background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: currentPage === totalPages ? "#333" : "white",
                padding: "8px 16px", borderRadius: 4, cursor: currentPage === totalPages ? "default" : "pointer"
              }}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .product-card:hover {
          transform: translateY(-5px);
          border-color: rgba(45,68,200,0.3) !important;
        }
        @media (max-width: 768px) {
          .catalogo-section {
            padding: 60px 15px !important;
          }
          .catalogo-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
