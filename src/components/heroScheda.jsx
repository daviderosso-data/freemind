import MeditationSection from "./meditationSection";
import { useState } from "react";

export default function HeroScheda({descrizione, title, timer, picture, video, audio}) {
  const [isMeditationActive, setIsMeditationActive] = useState(false);


    return (
        
        <>
        <div className="flex flex-col lg:flex-row m-10">
            <div className="flex-1 mb:flex-none bg-teal-600/70 text-white p-8 flex flex-col items-center justify-center rounded-lg drop-shadow-xl m-3 ">
                  <h2 className="text-3xl font-body font-bold mb-4">{title}</h2>
        <p className="mb-6 text-xl text-center justify-center">{descrizione}</p>
        <p className="mb-6 text-xl text-center justify-center">Durata: {timer} minuti</p>
         <button onClick={() => setIsMeditationActive(true)} className="drop-shadow-xl bg-lime-400 text-teal-700 px-8 py-3 text-2xl rounded-full font-semibold hover:bg-lime-200 hover:scale-120 hover:-translate-y-1 transition mt-10">
Avvia Ora</button>

<a href="/meditazione" className="text-teal-900 underline mt-10 transition duration-300 hover:scale-110 hover:text-white" >Torna indietro</a>

                </div>
        <div className="flex-1 mb:flex-none p-3 flex flex-col items-center justify-center drop-shadow-xl">
            <img src={picture} alt="Meditazione" className="rounded-lg transition duration-1200 hover:scale-105 hover:rotate-3" />
            
            </div>
          
        </div>
        
            {isMeditationActive && (
        <section className="w-full mt-12">
          <MeditationSection
            onClose={() => setIsMeditationActive(false) } timer={timer} video={video} audio={audio}// Nasconde la sezione
          />
        </section>
      )}
        </>
    );
    }