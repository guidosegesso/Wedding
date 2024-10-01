import React from 'react';
import '../estilos/Story.css';
import image1 from '../images/story1.jpg';
import image2 from '../images/story2.jpg';
import image3 from '../images/story3.jpg';
// import image4 from '../images/story4.jpg';

const Story = ({ lang }) => {
  const storyItems = [
    { image: image1, text: lang.story1 },
    { image: image2, text: lang.story2 },
    { image: image3, text: lang.story3 },
    // { image: image4, text: lang.story4 }
  ];

  
  return (
    <section id="story" className="story">
      <h2>{lang.title}</h2>
      {storyItems.map((item, index) => (
        <div key={index} className={`story-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
          <img src={item.image} alt={`Story image ${index + 1}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Story;
