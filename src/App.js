import './App.css';
import React from 'react';
import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandForm from "./Components/BandForm";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  return (
    <div className="App">
      <BandForm band={bands[0]} />
    </div>
  );
}

export default App;
