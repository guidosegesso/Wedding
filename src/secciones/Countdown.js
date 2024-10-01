import React, { useState, useEffect } from 'react';
import '../estilos/Countdown.css';

const Countdown = ({ lang }) => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2025-09-20T18:00:00');
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section id="countdown" className="countdown">
      <h2>{lang.title}</h2>
      <div className="timer">
        <div>{timeLeft.days} <span>{lang.days}</span></div>
        <div>{timeLeft.hours} <span>{lang.hours}</span></div>
        <div>{timeLeft.minutes} <span>{lang.minutes}</span></div>
        <div>{timeLeft.seconds} <span>{lang.seconds}</span></div>
      </div>

      <a  href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Nombre%20del%20Evento&dates=20240930T123000Z/20240930T143000Z&details=Detalles%20del%20evento" 
          target="_blank" 
          rel="noopener noreferrer"
      >
        <button className="calendar-btn">Agendar</button>
      </a>
    </section>
  );
};

export default Countdown;
