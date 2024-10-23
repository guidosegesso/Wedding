import React, { useEffect, useRef } from 'react';
import '../estilos/Story.css';
import image1 from '../images/story1.jpg';
import image2 from '../images/story2.jpg';
import image3 from '../images/story3.jpg';
import gif from '../images/gif/2 opcion/footprint_alone.gif';
// import image4 from '../images/story4.jpg';

const Story = ({ lang }) => {
  const storyRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2 // Elemento es visible si el 10% de él está en la pantalla
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Añade la clase 'appear' cuando el elemento entra en la vista
          entry.target.classList.add('appear');
          observer.unobserve(entry.target); // Deja de observar el elemento
        }
      });
    }, observerOptions);

    // Observa cada story-item
    storyRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      // Limpia el observer cuando se desmonta el componente
      observer.disconnect();
    };
  }, []);

  const storyItems = [
    { image: image1, text: lang.story1 },
    { image: image2, text: lang.story2 },
    { image: image3, text: lang.story3 },
    // { image: image4, text: lang.story4 }
  ];
  
  return (
    <section id="story" className="story">
      <h2>{lang.title}</h2>

      <div className='footContainer1'>
        <img className='footPrints1' src={gif} alt="Footprints gif" />
      </div>
      
      <div className='footContainer2'>
        <img className='footPrints2' src={gif} alt="Footprints gif" />
      </div>

      {storyItems.map((item, index) => (
        <div
          key={index}
          className={`story-item ${index % 2 === 0 ? 'image-left' : 'image-right'} hidden`}
          ref={(el) => (storyRef.current[index] = el)}
        >
          <img src={item.image} alt={`Story image ${index + 1}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Story;
