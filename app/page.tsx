import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marcas from "./components/Marcas";
import Catalogo from "./components/Catalogo";
import Categorias from "./components/Categorias";
import Ventajas from "./components/Ventajas";
import Cotizar from "./components/Cotizar";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WaFloat from "./components/WaFloat";

export default function Home() {
  return (
    <>
      <WaFloat />
      <Navbar />
      <main>
        <Hero />
        <Marcas />
        <Catalogo />
        <Categorias />
        <Ventajas />
        <Cotizar />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
