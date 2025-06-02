//pagina di meditazione personalizzata

import HeroSchedaCustom from "../components/ctaMeditationCustom";
import Menu from "../components/menu";
import Footer from "../components/footer";


export default function MeditationDetails() {
  return (
    <div className="h-screen w-screen owerflow-hidden m-0 p-0">
        <Menu />
    
        <HeroSchedaCustom descrizione="Scegli il tempo che vuoi dedicare alla meditazione e la musica di sottofondo"  title="Personalizza la tua sessione" picture="/assets/images/zenBreath.jpg"  />
   
      <Footer/>
    </div>
  );
}