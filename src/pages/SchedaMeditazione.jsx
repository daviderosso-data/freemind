// pagina di meditazione 

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CtaMeditation from "../components/ctaMeditation";
import Menu from "../components/menu";
import Footer from "../components/footer";
import NotFound from "../components/NotFound";


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
    <div className="h-screen w-screen owerflow-hidden m-0 p-0">
        <Menu />
      {meditation ? (
        <CtaMeditation descrizione={meditation.description} timer={meditation.duration} title={meditation.name} picture={meditation.picture} video={meditation.video} audio={meditation.audio} />
      ) : (
        <NotFound />)}
      <Footer/>
    </div>
  );
}