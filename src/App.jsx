import AcercaDe from "./components/layout/AcercaDe";
import Clientes from "./components/layout/Clientes";
import Contacto from "./components/layout/Contacto";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
function App() {

  return (
    <>
    <div className="contenedor">
      <Header />
      <Hero />
      <Clientes />
      <AcercaDe />
      <Contacto />
      <Footer/>
    </div>
      
    </>
  );
}

export default App;
