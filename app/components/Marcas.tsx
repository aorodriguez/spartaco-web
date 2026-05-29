"use client";

// Usaremos URLs de logos de alta calidad alojados en un CDN confiable
const marcas = [
  { name: "Great Wall", logo: "https://www.carlogos.org/car-logos/great-wall-logo.png" },
  { name: "Chery", logo: "https://www.carlogos.org/car-logos/chery-logo.png" },
  { name: "JAC", logo: "https://www.carlogos.org/car-logos/jac-motors-logo.png" },
  { name: "BYD", logo: "https://www.carlogos.org/car-logos/byd-logo.png" },
  { name: "Maxus", logo: "https://www.carlogos.org/car-logos/maxus-logo.png" },
  { name: "Haval", logo: "https://www.carlogos.org/car-logos/haval-logo.png" },
  { name: "Foton", logo: "https://www.carlogos.org/car-logos/foton-logo.png" },
  { name: "MG", logo: "https://www.carlogos.org/car-logos/mg-logo.png" },
  { name: "DFSK", logo: "https://www.carlogos.org/car-logos/dfsk-logo.png" }
];

export default function Marcas() {
  return (
    <div style={{
      background: "#0d0d0d",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "30px 20px",
      overflow: "hidden",
      position: "relative"
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto", 
        display: "flex", 
        flexDirection: "column", 
        gap: 20,
        alignItems: "center"
      }}>
        <span style={{
          fontFamily: "'Barlow Condensed',sans-serif", 
          fontSize: "0.7rem",
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#444",
          fontWeight: 700
        }}>
          Expertos en Marcas Chinas
        </span>

        <div className="marcas-container" style={{ 
          display: "flex", 
          gap: 50, 
          flexWrap: "wrap", 
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.8
        }}>
          {marcas.map(m => (
            <div key={m.name} style={{ 
              width: 80, 
              height: 50, 
              position: "relative", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              filter: "grayscale(1) brightness(2) contrast(0.5)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            className="logo-item"
            onMouseEnter={e => {
              e.currentTarget.style.filter = "grayscale(0) brightness(1) contrast(1)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.filter = "grayscale(1) brightness(2) contrast(0.5)";
              e.currentTarget.style.transform = "scale(1)";
            }}>
              <img 
                src={m.logo} 
                alt={m.name} 
                style={{ 
                  maxWidth: "100%", 
                  maxHeight: "100%", 
                  objectFit: "contain" 
                }} 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  // Opcionalmente mostrar el nombre si falla el logo
                  const parent = target.parentElement;
                  if (parent) {
                    const text = document.createElement('span');
                    text.innerText = m.name;
                    text.style.fontSize = '0.7rem';
                    text.style.color = '#555';
                    text.style.fontWeight = '700';
                    parent.appendChild(text);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media(max-width: 768px) {
          .marcas-container {
            gap: 30px !important;
          }
          .logo-item {
            width: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
