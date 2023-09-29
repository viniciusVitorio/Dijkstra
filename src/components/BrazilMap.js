import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { airports } from '../data';
import 'leaflet/dist/leaflet.css';
import { MarkerIcon } from './Marker';
import L from 'leaflet'

const BrazilMap = ({ path, points }) => {
    // var pointList;
    // points.forEach((e) => {
    //     var pointA = new L.LatLng(e.position[0], e.position[1]);
    //     var pointB = new L.LatLng(-9.8682, -67.8978);
    //     pointList = [pointA, pointB];
    // });

    // Havia alterado o data.js para que o airports fosse um array porém voltei ele para um objeto pois estava quebrando o dijkstra, portanto essa função não irá funcionar por agora, somente quando fizer os arrays das conexões

    return (
        <MapContainer center={[-14.235004, -51.925280]} zoom={4} style={{ width: '100%', height: '600px' }} maxBounds={[[ -33.750705, -73.992676 ], [ 5.271786, -34.797222 ]]} maxBoundsViscosity={1.0}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {Object.values(airports).map(airport => (
                <Marker key={airport.id} position={airport.position} icon={MarkerIcon}>
                    <Popup>{airport.name}</Popup>
                </Marker>
            ))}
            {/* <Polyline positions={pointList} color="black" weight={2} opacity={0.5} /> */}
            {path.length > 1 && <Polyline positions={path} color="blue" />}
        </MapContainer>
    );
};

export default BrazilMap;
