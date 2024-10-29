import React, { useState } from 'react';
import { ReactComponent as Eye }  from '../assets/eye-solid.svg'; 
import { ReactComponent as EyeSlashed }  from '../assets/eye-slash-solid.svg'; 
import '../estilos/Map.css';

const Map = ({ lang }) => {
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del contenido

    const openGoogleMaps = () => {
        const lat = -34.315889;
        const lng = -58.761583;
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        
        window.open(googleMapsUrl, '_blank');
    };

    const toggleMap = () => {
        setIsVisible(!isVisible); // Alterna entre visible e invisible
    };

    return (
        <section id="map" >
            <div className="title" onClick={toggleMap} >
                {isVisible ? <Eye className="eye-icon" /> : <EyeSlashed className="eye-icon" />} {/* Renderiza el ícono según el estado */}
                
                <h2>{lang.title}</h2>
            </div>
            
                <div className={`content ${isVisible ? 'visible' : 'hidden'}`}>
                    <iframe className="frame" 
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6590.347427100747!2d-58.7621071088469!3d-34.32059517081544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDE4JzU3LjIiUyA1OMKwNDUnNDEuNyJX!5e0!3m2!1ses-419!2sar!4v1728515993060!5m2!1ses-419!2sar"
                            style={{ display: isVisible ? 'block' : 'none' }}
                            referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div style={{ display: isVisible ? 'block' : 'none' }}>
                        <button className="route-btn" onClick={openGoogleMaps}>
                            {lang.buton}
                        </button>    
                    </div>
                </div>
        </section>
    );
};

export default Map;