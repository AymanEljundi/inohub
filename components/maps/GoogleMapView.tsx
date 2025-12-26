"use client";

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Loader2, AlertTriangle } from "lucide-react";
import { EVStation } from "@/lib/evcharging/mockStations";
import { useCallback, memo } from 'react';


const center = {
    lat: 33.8938,
    lng: 35.5018 // Beirut Center
};

interface MapProps {
    stations: EVStation[];
    onStationSelect: (id: string | null) => void;
    selectedStationId: string | null;
}

function GoogleMapViewComponent({ stations, onStationSelect, selectedStationId }: MapProps) {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
    });

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        // Fit bounds to stations
        if (stations.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            stations.forEach(st => bounds.extend({ lat: st.location.lat, lng: st.location.lng }));
            map.fitBounds(bounds);
        }
    }, [stations]);

    const onUnmount = useCallback(function callback() {
        // Cleanup if needed
    }, []);

    if (loadError || !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        return (
            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-8 text-center">
                <AlertTriangle className="h-10 w-10 text-gray-400 mb-4" />
                <h3 className="text-gray-900 font-bold mb-2">Map Unavailable</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                    Google Maps API key is missing or invalid.
                    <br />
                    Please verify NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
                </p>
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                <Loader2 className="animate-spin h-8 w-8 text-primary" />
            </div>
        );
    }

    return (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: false,
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false
            }}
        >
            {stations.map(station => (
                <Marker
                    key={station.id}
                    position={{ lat: station.location.lat, lng: station.location.lng }}
                    onClick={() => onStationSelect(station.id)}
                    animation={selectedStationId === station.id ? google.maps.Animation.BOUNCE : undefined}
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        fillColor: station.status === 'Online' ? '#4CAF50' : station.status === 'Busy' ? '#FF9800' : '#F44336',
                        fillOpacity: 1,
                        strokeWeight: 2,
                        strokeColor: '#FFFFFF',
                    }}
                />
            ))}
        </GoogleMap>
    );
}

export const GoogleMapView = memo(GoogleMapViewComponent);
