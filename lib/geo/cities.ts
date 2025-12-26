export interface CityBounds {
    name: string;
    latMin: number;
    latMax: number;
    lngMin: number;
    lngMax: number;
    stationCount: number;
}

export const CITIES: CityBounds[] = [
    {
        name: 'Beirut',
        latMin: 33.8650,
        latMax: 33.9150,
        lngMin: 35.4700,
        lngMax: 35.5350,
        stationCount: 6
    },
    {
        name: 'Tripoli',
        latMin: 34.4150,
        latMax: 34.4650,
        lngMin: 35.8100,
        lngMax: 35.8650,
        stationCount: 4
    },
    {
        name: 'Jounieh',
        latMin: 33.9700,
        latMax: 34.0300,
        lngMin: 35.6000,
        lngMax: 35.6600,
        stationCount: 3
    },
    {
        name: 'Dbayeh',
        latMin: 33.9900,
        latMax: 34.0450,
        lngMin: 35.5800,
        lngMax: 35.6450,
        stationCount: 3
    }
];
