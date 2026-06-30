"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { landingData } from '@/data/site';

const icon: L.Icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

export default function MapaZona() {
    const { map } = landingData.audienceCoverage.coverage;

    return (
        <MapContainer 
            center={map.position}
            zoom={map.zoom}
            style={{ height: "300px", width: "100%", borderRadius: "15px"}}
        >
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={map.position} icon={icon}>
                <Popup>{map.popup}</Popup>
            </Marker>
        </MapContainer>
    );
}
