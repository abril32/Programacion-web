import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactDOM from 'react-dom/client'

import './App.css'; // Opcional, para estilos globales


ReactDOM.createRoot(document.getElementById('root')).render
(
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
 