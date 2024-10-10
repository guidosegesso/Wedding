import React from 'react';
import '../estilos/DressCode.css';
import { ReactComponent as Hanger }  from '../assets/clothes-hanger.svg'; 

const DressCode = ({ lang }) => {
  return (
    <section id="dresscode" className="dresscode" >
      <Hanger className="hanger-icon"/>
      <h2>Dress Code</h2>
      <p>{lang.description}</p>
    </section>
  );
};

export default DressCode;
