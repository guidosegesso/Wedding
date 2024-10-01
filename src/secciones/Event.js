import React from 'react';
import '../estilos/Event.css';
import rings from '../images/rings.png'; // Importar los anillos

const Event = ({ lang }) => {
  return (
    <section id="event" className="event">
      <div className="rings-icon">
        <img src={rings} alt="Rings" />
      </div>
      <h2>{lang.title}</h2>
      <p>{lang.placeTitle}: <strong>{lang.placeDescription}</strong></p>
      <p>{lang.dateTitle}: <strong>{lang.dateDescription}</strong></p>
      <p>{lang.startTitle}: <strong>{lang.startDescription}</strong></p>
    </section>
  );
};

export default Event;
