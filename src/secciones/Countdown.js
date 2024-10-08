import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import '../estilos/Countdown.css';
import '../estilos/FlipClock.css';


const Countdown = ({ lang }) => {
  const weddingDate = new Date('2025-09-20T18:00:00');
  const calculateTimeLeft = () => {
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
      {/* <div className="timer">
        <div>{timeLeft.days} <span>{lang.days}</span></div>
        <div>{timeLeft.hours} <span>{lang.hours}</span></div>
        <div>{timeLeft.minutes} <span>{lang.minutes}</span></div>
        <div>{timeLeft.seconds} <span>{lang.seconds}</span></div>
      </div> */}


      <FlipClockCountdown 
        labels={[lang.days, lang.hours, lang.minutes, lang.seconds]}
        onComplete={"hola"} to={weddingDate} className='flip-clock'
      />
      

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
