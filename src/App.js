// src/App.js

import React, { useState } from 'react';
import BrazilMap from './components/BrazilMap';
import { airports, routes } from './data';  // Atualizado aqui
import { dijkstra } from './dijkstra';

const App = () => {
    const [startAirport, setStartAirport] = useState('GRU');
    const [endAirport, setEndAirport] = useState('GIG');
    const [path, setPath] = useState([]);

    const calculateRoute = () => {
        const result = dijkstra(airports, routes, startAirport, endAirport);
        const coordinates = result.path.map(airportId => airports[airportId].position);
        setPath(coordinates);
    };

    return (
        <div className="App">
            <label>
                Aeroporto de origem:
                <select value={startAirport} onChange={e => setStartAirport(e.target.value)}>
                    {Object.values(airports).map(airport => (
                        <option key={airport.id} value={airport.id}>{airport.name}</option>
                    ))}
                </select>
            </label>
            <label>
                Aeroporto de destino:
                <select value={endAirport} onChange={e => setEndAirport(e.target.value)}>
                    {Object.values(airports).map(airport => (
                        <option key={airport.id} value={airport.id}>{airport.name}</option>
                    ))}
                </select>
            </label>
            <button onClick={calculateRoute}>Calcular Rota</button>
            <BrazilMap path={path} />
        </div>
    );
};

export default App;
