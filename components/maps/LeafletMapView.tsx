"use client";

import { MapContainer, TileLayer, CircleMarker, useMap, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { EVStation } from "@/lib/evcharging/mockStations";
import { useEffect, memo } from 'react';
import L from 'leaflet';

// Fix for default marker icons if we were using markers, 
// but we are using CircleMarker which doesn't rely on assets as much.

interface MapProps {
    stations: EVStation[];
    onStationSelect: (id: string | null) => void;
    selectedStationId: string | null;
}

const center: [number, number] = [33.8938, 35.5018]; // Beirut Center

// Helper to fit bounds
function MapUpdater({ stations }: { stations: EVStation[] }) {
    const map = useMap();

    useEffect(() => {
        if (stations.length > 0) {
            const bounds = L.latLngBounds(stations.map(s => [s.location.lat, s.location.lng]));
            map.flyToBounds(bounds, { padding: [50, 50], duration: 1.5 });
        }
    }, [stations, map]);

    return null;
}

function LeafletMapViewComponent({ stations, onStationSelect, selectedStationId }: MapProps) {
    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={center}
                zoom={10}
                style={{ width: '100%', height: '100%' }}
                className="z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                <MapUpdater stations={stations} />

                {stations.map(station => (
                    <CircleMarker
                        key={station.id}
                        center={[station.location.lat, station.location.lng]}
                        radius={selectedStationId === station.id ? 12 : 8}
                        pathOptions={{
                            color: '#ffffff',
                            weight: 2,
                            fillColor: station.status === 'Online' ? '#4CAF50' : station.status === 'Busy' ? '#FF9800' : '#F44336',
                            fillOpacity: 1
                        }}
                        eventHandlers={{
                            click: () => onStationSelect(station.id)
                        }}
                    >
                        <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                            <span className="font-bold">{station.name}</span>
                        </Tooltip>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    );
}

export const LeafletMapView = memo(LeafletMapViewComponent);
