import logo from './logo.svg';
import React from 'react';
import './App.css';
import MapComponent from './MapComponent'; // Import MapComponent
import Mapbox from "./MapComponent";

function App() {
  return (
    <div className="App">
      <MapComponent /> {/* Use MapComponent */}
    </div>
  );
}

export default App;