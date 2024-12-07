import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const carIcon = new L.Icon({
  iconUrl:
    "https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const routeCoordinates = [[37.7749, -122.4194]];
const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(routeCoordinates[0]);
  // const [routeIndex, setRouteIndex] = useState(0);
  const startSimulation = () => {
    // setRouteIndex(0);
    setCurrentPosition(routeCoordinates[0]);
  };
  return (
    <div>
      <MapContainer
        center={routeCoordinates[0]}
        zoom={14}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Draw the complete route */}
        {/* Car icon that moves along the route */}
        <Marker position={currentPosition} icon={carIcon} />
      </MapContainer>
      {/* Button to start the simulation */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <button
          onClick={startSimulation}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Start Simulation
        </button>
      </div>
    </div>
  );
};

export default Map;
