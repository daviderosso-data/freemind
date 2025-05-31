
import './App.css'
import Home from "./pages/Home"
import Meditazione from './pages/Meditazione';
import MeditazioneScheda from './pages/SchedaMeditazione';
import CustomMeditation from './pages/CustomMeditation';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {  
  return (
  <Router>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/meditazione" element={<Meditazione />} />
        <Route path="/contatti" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/meditazione/:id" element={<MeditazioneScheda />} />
        <Route path="/meditazionecustom" element={<CustomMeditation />} />
        <Route path="/privacy-policy" element={<Home />} />

      
        
        <Route path="*" element={<div>Pagina non trovata. Torna alla <a href="/">Home</a>.</div>} />
      </Routes>
    </Router>
  );
}

export default App
