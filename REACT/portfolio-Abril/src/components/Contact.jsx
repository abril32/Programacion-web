import React from 'react';


const Contact = () => {
  return (
    <section id="contact">
      <h2 className='margen boton'>Contacto</h2>
      <form className='orientation'>
        <p>Nombre: </p>
        <input type="text" id="name" name="name" required />
        <p>Correo: </p>
        <input type="email" id="email" name="email" required />
        <p>Mensaje: </p>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;