import React from 'react';
import '../estilos/Home.css';
import videoSrc from '../videos/canva-mock.mp4'; // Importa el video

const Home = ({ lang }) => {
  return (
    <section id="home" className="home">
      <video className="home-video" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        {lang.videoAlt}
      </video>
      <div className="home-content">
        {/* <h1>Nati & Luca</h1>
        <p>¡Nos Casamos!</p> */}
      </div>
    </section>
  );
};

export default Home;
