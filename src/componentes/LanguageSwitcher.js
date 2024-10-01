import React, { useState } from 'react';
import '../estilos/LanguageSwitcher.css';

const LanguageSwitcher = ({ changeLanguage }) => {
  const [currentLang, setCurrentLang] = useState('ES');

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => handleLanguageChange('ES')}
        className={currentLang === 'ES' ? 'active' : ''}
      >
        ES
      </button>
      <button
        onClick={() => handleLanguageChange('EN')}
        className={currentLang === 'EN' ? 'active' : ''}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
