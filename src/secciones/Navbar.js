import React from 'react';
import '../estilos/Navbar.css';

const Navbar = ({ lang }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">{lang.home}</a></li>
        <li><a href="#story">{lang.story}</a></li>
        <li><a href="#event">{lang.event}</a></li>
        <li><a href="#rsvp">{lang.assist}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
