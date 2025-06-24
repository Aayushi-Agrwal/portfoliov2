'use client';

import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface IExperience {
  position: [number, number];
  title: string;
  role: string;
  date: string;
}

interface Props {
  experienceData: IExperience[];
}

const MapExperience = ({ experienceData }: Props) => {
  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={6}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {experienceData.map((exp, index) => (
        <Marker
          key={index}
          position={exp.position}
          icon={L.icon({
            iconUrl: '/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>
            <strong>{exp.title}</strong><br />
            {exp.role}<br />
            {exp.date}
          </Popup>
        </Marker>
      ))}
      <Polyline
        positions={experienceData.map(exp => exp.position)}
        color="blue"
      />
    </MapContainer>
  );
};

export default MapExperience;
