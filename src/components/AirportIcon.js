import L from 'leaflet';

const AirportIcon = new L.Icon({
    iconUrl: process.env.PUBLIC_URL + '/airport-icon.png',
    iconRetinaUrl: process.env.PUBLIC_URL + '/airport-icon@2x.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

export default AirportIcon;
