import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroScheda from "../components/heroScheda";
import Menu from "../components/menu";
import Footer from "../components/footer";


export default function MeditationDetails() {

  const { id } = useParams();

  const [sliderData, setSliderData] = useState([]);
          useEffect(() => {
            fetch('/assets/json/courses.json')
              .then(response => response.json())
              .then(data => {
                setSliderData(data);
              })
              .catch(error => {
                console.error('Error fetching courses:', error);
              });
          }
          , []);

  const meditation = sliderData.find((med) => med.id == Number(id));

  if (!sliderData.length) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-700">Caricamento in corso...</h1>
      </div>
    );
  }
  return (
    <div>
        <Menu />
      {meditation ? (
        <HeroScheda descrizione={meditation.description} timer={meditation.duration} title={meditation.name} picture={meditation.picture} video={meditation.video} audio={meditation.audio} />
      ) : (
        // Se l'id non è valido, mostra un messaggio di errore
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">Meditazione non trovata</h1>
          <p className="mt-4 text-gray-700">L'id fornito non corrisponde a nessuna meditazione disponibile.</p>
          <a
            href="/"
            className="mt-6 block px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-all"
          >
            Torna alla Home
          </a>
        </div>
      )}
      <Footer/>
    </div>
  );
}