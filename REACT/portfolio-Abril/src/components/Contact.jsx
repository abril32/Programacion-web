import React from 'react';


const Contact = () => {
  return (
    <section id="contact">
      <h2 className='margen'>Contacto</h2>
      <form>
        <a href="name">Nombre; </a>
        <input type="text" id="name" name="name" required />
        <a href="email">Correo: </a>
        <input type="email" id="email" name="email" required />
        <a href="message">Mensaje: </a>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;