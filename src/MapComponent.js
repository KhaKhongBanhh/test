import React from "react";
import ReactMapGL from 'react-map-gl';

function MapComponent() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: "100vw", // We use the entire viewport
    height: "100vh",  // We use the entire viewport
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={viewport => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1Ijoic2F0eWFuZyIsImEiOiJja3B1Z2V1aG0wZ2J1Mm9wZGJ3Z2JyZmVzIn0.0Tm3VjT9rj8r5W7Z6Z9Z8A"
    />
  );
}

export default MapComponent;