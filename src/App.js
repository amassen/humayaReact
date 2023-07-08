import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from './Componentes/Navbar';
import Portada from './Componentes/Portada';
import Calidad from './Componentes/Calidad';
import Productos from './Componentes/Productos';
import QuienesSomos from './Componentes/QuienesSomos';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        <Portada />
        <Calidad />
        <Productos />
        <QuienesSomos />
        <Contacto />

      </main>

      <Footer />
      
      
    </div>
  );
}

export default App;
