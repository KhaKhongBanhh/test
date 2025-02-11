import React, { useState } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import District from './District';

function App() {
  const [showMap, setShowMap] = useState(false);
  const [showDistrict, setShowDistrict] = useState(false);

  return (
    <div className="App">
      {!showMap && !showDistrict && <button onClick={() => setShowMap(true)}>Dropbox</button>}
      {showMap && <MapComponent />}
      {!showMap && !showDistrict && <button onClick={() => setShowDistrict(true)}>7_district</button>}
      {showDistrict && <District />}
    </div>
  );
}

export default App;