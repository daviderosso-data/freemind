import React, { useState, useEffect, useRef } from "react";


export default function MeditationSection({ onClose,timer, video, audio }) {
  const [time, setTime] = useState(timer); // Imposta il timer in secondi
  const [isPaused, setIsPaused] = useState(false); 
  const endAudioRef = useRef(new Audio("/assets/audio/gong.mp3")); // Audio da riprodurre alla fine
  const audioRef = useRef(null); 
  const [text, setText] = useState("Prenditi un momento per te stesso, rilassati e respira profondamente.");

  // Effetto per il countdown del timer
  useEffect(() => {
    if (time > 0 && !isPaused) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else if (time === 0) {
      // Se il timer arriva a 0, chiude la sezione
      if (endAudioRef.current) {
        audioRef.current.pause();
        endAudioRef.current.play();
        
      }
      setText("Tempo scaduto! Spero che tu abbia trovato un momento di pace e tranquillità.");
      setTimeout(() => {
      onClose();}, 5000); // Chiude dopo 1 secondo
    }
  }, [time, isPaused, onClose]);

useEffect(() => {
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.pause(); // Pausa audio
      } else {
        audioRef.current.play().catch((err) => console.error(err)); // Avvia audio
      }
    }
  }, [isPaused]);

  // Conversione dei secondi in formato MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  
  return (
    <div className=" relative h-150 m-12 bg-teal-600 drop-shadow-xl/50 rounded-full flex flex-col items-center justify-center text-white">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-full p-2"> 
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <h1 className="text-6xl font-bold">{formatTime(time)}</h1>
        <p className="mt-4 text-lg">{text}</p>
        {/* Player audio */}
        <audio ref={audioRef} autoPlay loop className="mt-6">
          <source src={audio} type="audio/mp3" />
          Il tuo browser non supporta l'audio.
        </audio>
      
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-6 py-2 bg-lime-500 rounded-lg hover:bg-yellow-600 transition-all"
          >
            {isPaused ? "Riprendi" : "Pausa"}
          </button>
          
          <button
            onClick={onClose}
            className="px-6 py-2 bg-teal-600 rounded-lg hover:bg-teal-500 transition-all"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
