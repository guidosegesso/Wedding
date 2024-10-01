import React, { useState, useRef, useEffect } from 'react';
import '../estilos/AudioPlayer.css';
import speakerOn from '../assets/speaker-on.svg'; // Icono de parlante encendido
import speakerOff from '../assets/speaker-off.svg'; // Icono de parlante apagado
import song from '../music/song.mp3'; // Importa la canción

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Controla si el audio está sonando
    const [isMuted, setIsMuted] = useState(true); // Comienza como muted (silenciado)
    const audioRef = useRef(null); // Referencia al elemento de audio

    // Función para manejar el mute/unmute
    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
        }
    };

    // Función para manejar el mute/unmute y reproducir por primera vez
    const togglePlayAndMute = () => {
        const audioElement = audioRef.current;

        if (!isPlaying) {
        // Si no ha comenzado a reproducir, inicia la reproducción
        audioRef.current.volume = "0.5"
        audioElement.play().then(() => {
            setIsPlaying(true); // Marca como que el audio ha comenzado a sonar
            setIsMuted(false); // Inicia con el sonido activado
        }).catch(error => {
            console.error('Error al intentar reproducir el audio:', error);
        });
        } else {
        // Si ya está sonando, solo controla el mute/unmute
        setIsMuted(!isMuted);
        audioElement.muted = !audioElement.muted;
        }
    };

    return (
        <div className="audio-player">
            {/* Reproductor de música */}
            <audio ref={audioRef} autoPlay loop muted={isMuted} volume="0.2" >
                <source src={song} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Botón de parlante */}
            <button className="audio-button" onClick={togglePlayAndMute}>
                <img    src={isMuted ? speakerOff : speakerOn}
                        alt={isMuted ? 'Speaker Off' : 'Speaker On'}
                />
            </button>
        </div>
    );
};

    

export default AudioPlayer;
