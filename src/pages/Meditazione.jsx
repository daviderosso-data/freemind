import Menu from "../components/menu";
import Footer from "../components/footer";
import Slider from "react-slick";
import CustomMed from "../components/cta_customMeditation";
import SliderCards from '../components/slider';

import { useEffect, useState } from 'react';


export default function Meditazione() {

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

      const silentMeditation = [...sliderData]
        .filter(item => item.type === 'Silent')

     const soundMeditation = [...sliderData]
        .filter(item => item.type === 'Nature')

         const musicMeditation = [...sliderData]
        .filter(item => item.type === 'Music')

         const zenMeditation = [...sliderData]
        .filter(item => item.type === 'Zen')
      
    return (
        <>  
       <div className="h-screen w-screen owerflow-hidden m-0 p-0">
    <Menu />
    <CustomMed />
    <div className={`text-2xl font-bold text-left mt-10 -mb-10 font-body text-teal-900  ml-5 lg:ml-30 z-10`}>Meditazione in Silenzio:</div>
    <SliderCards picture={silentMeditation} color="bg-emerald-600/60"></SliderCards>
    <div className=" text-2xl font-bold text-left mt-10 -mb-10 font-body text-teal-900  ml-5 lg:ml-30 z-10">Meditazione con suoni della natura:</div>
    <SliderCards picture={soundMeditation} color="bg-purple-600/60"></SliderCards>
    <div className=" text-2xl font-bold text-left mt-10 -mb-10 font-body text-teal-900  ml-5 lg:ml-30 z-10">Meditazione con musica:</div>
    <SliderCards picture={musicMeditation} color="bg-lime-600/60"></SliderCards>
    <div className=" text-2xl font-bold text-left mt-10 -mb-10 font-body text-teal-900  ml-5 lg:ml-30 z-10">Meditazione zen:</div>
    <SliderCards picture={zenMeditation} color="bg-teal-600/60"></SliderCards>
    
    <Footer />
    </div>
    </>
        
    );
}


