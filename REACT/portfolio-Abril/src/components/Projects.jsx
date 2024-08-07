import React from 'react';


const Projects = () => {
  return (
    <section id="projects">
      <h2 className='tamaño-letras margen'>Proyectos</h2>
      <div>
        <a href="http://127.0.0.1:5500/peliculas/index.html"><h3>Proyecto 1</h3></a>
        <img src="cartelera.png" alt="cart" />
        <p>Este proyecto trata sobre una cartelera de peliculas.</p>
      </div>
      <div >
        <a href="http://127.0.0.1:5500/ejercitacion.html/pokemon.html"><h3>Proyecto 2</h3></a>
        <p>Este proyecto trata sobre 3 cartas de pokemons.</p>
      </div>
      <div>
        <a href="http://localhost:5174/"><h3>Proyecto 3</h3></a>
        <p>Este fue mi primer proyecto con react. Trata sobre un convertor de monedas</p>
      </div>
      {/* Agrega más proyectos aquí */}
    </section>
  );
};

export default Projects;