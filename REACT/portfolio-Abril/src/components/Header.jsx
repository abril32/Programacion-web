import React from 'react';
 // Asegúrate de crear un archivo CSS si deseas estilizar

const Header = () => {
  return (
    <header>
      <nav className='orientation barra'>
        <div>
        <a href="#home">Inicio</a>
        </div>
        <div>
        <a href="#about">Sobre Mí</a>
        </div>
        <div>
        <a href="#projects">Proyectos</a>
        </div>
        <div>
        <a href="#contact">Contacto</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
