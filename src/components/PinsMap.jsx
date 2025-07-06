// src/components/PinsMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

<<<<<<< HEAD
export default function PinsMap({ pins = [], onPinClick }) {
  const ClickHandler = () => {
    useMapEvents({ click: () => {} });
    return null;
  };
=======
export default function PinsMap({ pins = [], onPinClick, onMapClick }) {
  // Hook into map events and forward clicks
  function ClickHandler() {
    useMapEvents({
      click: (e) => {
        if (onMapClick) {
          onMapClick(e); // forward the Leaflet click event
        }
      },
    });
    return null;
  }
>>>>>>> d66e25e841f51b570db9fd8e5184a436630abe50

  return (
    <MapContainer
      center={[24.7136, 46.6753]}
      zoom={5}
      className="w-full h-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
<<<<<<< HEAD
=======

>>>>>>> d66e25e841f51b570db9fd8e5184a436630abe50
      {pins.map((pin) => (
        <Marker
          key={pin._id}
          position={[pin.location.lat, pin.location.lng]}
<<<<<<< HEAD
          eventHandlers={{ click: () => onPinClick(pin._id) }}
        />
      ))}
=======
          eventHandlers={{
            click: () => onPinClick(pin._id),
          }}
        />
      ))}

>>>>>>> d66e25e841f51b570db9fd8e5184a436630abe50
      <ClickHandler />
    </MapContainer>
  );
}
