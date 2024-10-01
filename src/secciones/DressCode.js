import React from 'react';
import '../estilos/DressCode.css';
import hanger from '../assets/clothes-hanger.svg'; 

const DressCode = ({ lang }) => {
  return (
    <section id="dresscode">
      <div className="hanger-icon">
        <img src={hanger} alt="Hanger"/>
      </div>
      <h2>Dress Code</h2>
      <p>{lang.description}</p>
    </section>
  );
};

export default DressCode;
