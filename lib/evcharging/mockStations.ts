import { SeededRandom } from "@/lib/geo/seededRandom";
import { CITIES } from "@/lib/geo/cities";

export type ConnectorType = 'CCS2' | 'Type2' | 'CHAdeMO';
export type StationStatus = 'Online' | 'Busy' | 'Offline' | 'Maintenance';

export interface EVConnector {
    type: ConnectorType;
    powerKw: number;
    count: number;
    status: 'Available' | 'InUse' | 'Broken';
}

export interface EVStation {
    id: string;
    name: string;
    city: string;
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    status: StationStatus;
    connectors: EVConnector[];
    amenities: string[];
    pricing: {
        perKwh: number;
        currency: string;
    };
    openHours: string;
    lastUpdated: string;
    image: string;
}

const rng = new SeededRandom("techstorelb-v1");

const AMENITIES_POOL = ['Free WiFi', 'Coffee Shop', 'Restrooms', 'Shopping Mall', 'Convenience Store', 'Car Wash', 'Waiting Lounge'];
const NAME_SUFFIXES = ['Hub', 'Point', 'Station', 'Supercharger', 'Energy Spot', 'Link'];

function generateStations(): EVStation[] {
    const stations: EVStation[] = [];
    let idCounter = 1;

    CITIES.forEach(city => {
        for (let i = 0; i < city.stationCount; i++) {

            // Coordinates
            const lat = rng.nextFloat(city.latMin, city.latMax);
            const lng = rng.nextFloat(city.lngMin, city.lngMax);

            // Status (Weighted: 60% Online, 20% Busy, 10% Offline, 10% Maintenance)
            const statusRoll = rng.next();
            let status: StationStatus = 'Online';
            if (statusRoll > 0.9) status = 'Maintenance';
            else if (statusRoll > 0.8) status = 'Offline';
            else if (statusRoll > 0.6) status = 'Busy';

            // Connectors
            const connectors: EVConnector[] = [];
            // Always have Type 2
            connectors.push({
                type: 'Type2',
                powerKw: 22,
                count: rng.nextInt(2, 6),
                status: 'Available'
            });
            // Sometimes have CCS2 or CHAdeMO
            if (rng.next() > 0.3) {
                connectors.push({
                    type: 'CCS2',
                    powerKw: rng.pick([50, 75, 120, 150]),
                    count: rng.nextInt(1, 3),
                    status: 'Available' // Simplified, logic handled in pure function check
                });
            }
            if (rng.next() > 0.8) {
                connectors.push({
                    type: 'CHAdeMO',
                    powerKw: 50,
                    count: 1,
                    status: 'Available'
                });
            }

            stations.push({
                id: `ev-${idCounter.toString().padStart(3, '0')}`,
                name: `TechStore ${city.name} ${rng.pick(NAME_SUFFIXES)} ${i + 1}`,
                city: city.name,
                location: {
                    lat,
                    lng,
                    address: `${city.name} Sector ${rng.nextInt(1, 15)}`
                },
                status,
                connectors,
                amenities: [rng.pick(AMENITIES_POOL), rng.pick(AMENITIES_POOL)],
                pricing: {
                    perKwh: rng.nextFloat(0.12, 0.25), // Normalized formatting needed later
                    currency: 'USD'
                },
                openHours: '24/7',
                lastUpdated: new Date().toISOString(),
                image: '/images/ev-station-1.jpg' // Placeholder
            });
            idCounter++;
        }
    });

    return stations;
}

export const generatedStations = generateStations();

// Deprecate static list in favor of this
export const stations = generatedStations;

// Logic imports
export function checkStationAvailability(station: EVStation, connectorType: ConnectorType, intent: 'Charge' | 'Reserve'): { available: boolean; reason?: string; action?: 'Charge' | 'Wait' | 'Navigate' | 'Reserve' } {
    if (station.status === 'Offline' || station.status === 'Maintenance') {
        return { available: false, reason: 'Station is currently offline.', action: 'Navigate' };
    }

    const connectorGroup = station.connectors.find(c => c.type === connectorType);
    if (!connectorGroup) {
        return { available: false, reason: 'Connector type not supported.', action: 'Navigate' };
    }

    if (connectorGroup.count === 0) {
        return { available: false, reason: 'No connectors of this type.', action: 'Navigate' };
    }

    if (station.status === 'Busy' && intent === 'Charge') {
        return { available: false, reason: 'All chargers busy. Join waitlist or reserve.', action: 'Wait' };
    }

    return { available: true, action: intent === 'Reserve' ? 'Reserve' : 'Charge' };
}
