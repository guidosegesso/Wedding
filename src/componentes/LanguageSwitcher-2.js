import React, { useState } from 'react';
import '../estilos/LanguageSwitcher-2.css';

const LanguageSwitcher = ({ changeLanguage }) => {
  const [currentLang, setCurrentLang] = useState('ES');

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    changeLanguage(lang);
  };

  return (
    /* From Uiverse.io by andrew-demchenk0 */ 
    <div class="wrapper">
      <div class="option">
        <input class="input" type="radio" name="btn" value="option1" checked=""/>
        <div class="btn">
          <span class="span">ES</span>
        </div>
      </div>
      <div class="option">
        <input class="input" type="radio" name="btn" value="option2"/>
        <div class="btn">
          <span class="span">EN</span>
        </div>  
      </div>
    </div>
  );
};

export default LanguageSwitcher;
