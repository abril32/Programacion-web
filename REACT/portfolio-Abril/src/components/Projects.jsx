import React from 'react';
import ReactPlayer from 'react-player';

export const Projects = () => {
  return (
    <section id="projects">
      <h2 className='tamaño-letras '>Proyectos</h2>
      <div className='espacio '>
        <h3>Proyecto 1</h3>
        <p>Este proyecto trata sobre una cartelera de peliculas.</p>
        <img src="/cartelera.png" alt="foto" className='foto'/>
        <a href="http://127.0.0.1:5500/peliculas/index.html">Ver proyecto</a>
      </div>
      <div className='espacio '>
        <h3>Proyecto 2</h3>
        <p>Este proyecto trata sobre 3 cartas de pokemons.</p>
        <ReactPlayer url={'/pokemon.webm'} playing={true} controls={false} loop={true} className='foto' />
        <a href="http://127.0.0.1:5500/ejercitacion.html/pokemon.html">Ver proyecto</a>
      </div>
      <div className='espacio'>
        <h3>Proyecto 3</h3>
        <p>Este fue mi primer proyecto con react. Trata sobre un convertor de monedas</p>
        <a href="http://localhost:5174/">Ver proyecto</a>
      </div>
      {/* Agrega más proyectos aquí */}
    </section>
  );
};

export default Projects;