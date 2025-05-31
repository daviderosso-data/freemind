
  import { useEffect, useState } from 'react';
  import Cta from '../components/cta'
import Footer from '../components/footer';
import HeroSection from '../components/hero';
import Menu from '../components/menu';
import SliderCards from '../components/slider';


  export default function Home() {
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
  const favourites = [...sliderData]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 4);

  const fastMeditations = [...sliderData]
  .sort((a, b) => a.duration - b.duration)
  .slice(0, 4);
  return (
    <>
    
    <div className="h-screen w-screen owerflow-hidden m-0 p-0">
    <Menu />
    <HeroSection></HeroSection>
    <div className=" realtive text-2xl font-bold text-left mt-10 -mb-10 font-body text-teal-900 ml-30 z-10">Le meditazioni preferite:</div>
    <SliderCards picture={favourites}></SliderCards>
    <div className=" realtive text-2xl font-bold text-left mt-10 -mb-10 font-body text-teal-900 ml-30 z-10">Le meditazioni veloci:</div>
    <SliderCards picture={fastMeditations}></SliderCards>
    <Cta />
    <Footer />
    </div>
 
    </>
  )}
