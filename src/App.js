import React, { useState } from 'react';
import Navbar from './secciones/Navbar';
import Home from './secciones/Home';
import Story from './secciones/Story';
import Event from './secciones/Event';
import Countdown from './secciones/Countdown';
import AssistConfirmation from './secciones/AssistConfirmation';
import DressCode from './secciones/DressCode';
import Presents from './secciones/Presents';
import LanguageSwitcher from './componentes/LanguageSwitcher'; // Importar el selector de idioma
import LanguageSwitcher2 from './componentes/LanguageSwitcher-2'; // Importar el selector de idioma
import translations from './componentes/translations'; // Importar las traducciones
import AudioPlayer from './componentes/AudioPlayer'; // Importamos el reproductor de música
import './estilos/Global.css';
import './estilos/App.css';

function App() {
  const [language, setLanguage] = useState('ES'); // Estado para manejar el idioma

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <LanguageSwitcher changeLanguage={changeLanguage} />
      <LanguageSwitcher2/>
      <AudioPlayer />
      {/* Secciones */}
      <Navbar lang={translations[language].navBar} />
      <Home lang={translations[language].home} />
      <Story lang={translations[language].story} />
      <div className="event-dresscode-container" style={{backgroundColor: "#f4f4f4"}}>
        <Event lang={translations[language].event} />
        <DressCode lang={translations[language].dressCode} />
      </div>
      <Countdown lang={translations[language].countdown} />
      <Presents lang={translations[language].presents} /> {/* Nueva sección de regalos */}
      <AssistConfirmation lang={translations[language].assistConfirmation} />
    </div>
  );
}

export default App;
