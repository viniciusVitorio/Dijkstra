// src/components/BrazilMap.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { airports } from '../data';
import 'leaflet/dist/leaflet.css';

const BrazilMap = ({ path }) => {
    return (
        <MapContainer center={[-14.235004, -51.925280]} zoom={4} style={{ width: '100%', height: '600px' }} maxBounds={[[ -33.750705, -73.992676 ], [ 5.271786, -34.797222 ]]} maxBoundsViscosity={1.0}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {Object.values(airports).map(airport => (
                <Marker key={airport.id} position={airport.position}>
                    <Popup>{airport.name}</Popup>
                </Marker>
            ))}
            {path.length > 1 && <Polyline positions={path} color="blue" />}
        </MapContainer>
    );
};

export default BrazilMap;
