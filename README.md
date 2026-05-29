# Spartaco Repuestos - Sitio Web

Sitio web oficial de Spartaco Repuestos. Construido con Next.js + Tailwind CSS.

## Cómo correr localmente

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo publicar en Vercel (gratis)

1. Sube este proyecto a un repositorio en GitHub
2. Ve a https://vercel.com y haz login con tu cuenta de GitHub
3. Haz clic en "Add New → Project"
4. Selecciona el repositorio `spartaco-web`
5. Deja todo por defecto y haz clic en "Deploy"
6. En 2 minutos tendrás tu URL pública ✅

## Estructura del proyecto

```
app/
  components/
    Navbar.tsx      → Barra de navegación
    Hero.tsx        → Sección principal
    Marcas.tsx      → Franja de marcas
    Categorias.tsx  → Categorías de repuestos
    Ventajas.tsx    → Por qué elegirnos
    Contacto.tsx    → Sección de contacto
    Footer.tsx      → Pie de página
    WaFloat.tsx     → Botón flotante WhatsApp
  page.tsx          → Página principal
  layout.tsx        → Layout y metadatos SEO
  globals.css       → Estilos globales
public/
  logo.jpeg         → Logo Spartaco
```
