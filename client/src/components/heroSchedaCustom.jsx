import MeditationSection from "./meditationSection";
import { useState, useEffect } from "react";


export default function HeroScheda({descrizione, title, picture}) {
  const [isMeditationActive, setIsMeditationActive] = useState(false);
    const [soundData, setSoundData] = useState([]);
    const [timerMap, setTimerData] = useState([]); 

    const [selectedAudio, setSelectedAudio] = useState(""); // stato per l'audio selezionato
    const [selectedTimer, setSelectedTimer] = useState(""); 


 useEffect(() => {
    fetch('/assets/json/sound.json')
      .then(response => response.json())
      .then(data => {
        setSoundData(data);
        setSelectedAudio(data[0].source); 
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  },[]);

  useEffect(() => {
    fetch('/assets/json/timer.json')
      .then(response => response.json())
      .then(data => {
        setTimerData(data);
        setSelectedTimer(data[0].time); 
      })
      .catch(error => {
        console.error('Error fetching timer:', error);
      }
    )
  },[]);
  
  console.log(timerMap);
    return (
        
        <>
        <div className="flex flex-col lg:flex-row m-10">
            <div className="flex-1 mb:flex-none bg-teal-600/70 text-white p-8 flex flex-col items-center justify-center rounded-lg drop-shadow-xl/30 m-3 ">
                  <h2 className="text-3xl font-body font-bold mb-4">{title}</h2>
        <p className="mb-6 text-xl text-center justify-center">{descrizione}</p>


        <div class="block w-full">
        <label htmlFor="sound" className="block mb-2  font-body text-white w-full ">Scegli il suono</label>
        <select id="sound" 
        className="h-12 border border-gray-300 text-white bg-teal-700 text-body rounded-lg block w-full py-2.5 px-4 focus:outline-none"
        value={selectedAudio}
        onChange={e => setSelectedAudio(e.target.value)}>
        {soundData.map((item, index) => (
          <option key={index} value={item.source}>{item.name} </option>))}
      </select>
      </div>

      <div class="block w-full mt-3">
        <label htmlFor="timer" className="block mb-2  font-body text-white w-full ">Scegli il tempo</label>
        <select id="timer" 
        className="h-12 border border-gray-300 text-white bg-teal-700 text-body rounded-lg block w-full py-2.5 px-4 focus:outline-none"
        value={selectedTimer}
        onChange={e => setSelectedTimer(e.target.value)}>
        {timerMap.map((item, index) => (
          <option key={index} value={item.time}>{item.time} minuti </option>))}
      </select>
      </div>

         <button onClick={() => setIsMeditationActive(true)} 
         className="drop-shadow-xl bg-lime-400 text-teal-700 px-8 py-3 text-2xl rounded-full font-semibold hover:bg-lime-200 hover:scale-120 hover:-translate-y-1 transition mt-10">
Avvia Ora</button>

<a href="/meditazione" className="text-teal-900 underline mt-10 transition duration-300 hover:scale-110 hover:text-white" >Torna indietro</a>

                </div>
        <div className="flex-1 mb:flex-none p-3 flex flex-col items-center justify-center drop-shadow-xl/30">
            <img src={picture} alt="Meditazione" className="rounded-lg transition duration-1200 hover:scale-105 hover:rotate-3" />
            
            </div>
          
        </div>
        
            {isMeditationActive && (
        <section className="w-full mt-12">
          <MeditationSection
            key ={selectedAudio + selectedTimer} 
            onClose={() => setIsMeditationActive(false) }
             timer={selectedTimer}
              video={"assets/video/forest.mp4"} 
              audio={selectedAudio}// Nasconde la sezione
          />
        </section>
      )}
        </>
    );
    }
