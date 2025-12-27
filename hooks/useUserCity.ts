"use client";

import { useEffect, useState } from "react";

interface CityData {
    city: string;
    country: string;
    isLoading: boolean;
    error: string | null;
}

const LEBANON_CITIES = ["Beirut", "Tripoli", "Sidon", "Jounieh", "Byblos", "Zahle", "Tyre"];

export function useUserCity(): CityData {
    const [data, setData] = useState<CityData>({
        city: "Lebanon",
        country: "Lebanon",
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        async function fetchCity() {
            try {
                // Use IP-based geolocation (free, no permissions needed)
                const response = await fetch("https://ip-api.com/json/?fields=city,country");

                if (!response.ok) throw new Error("Failed to fetch location");

                const result = await response.json();

                // Check if city is in Lebanon
                const detectedCity = LEBANON_CITIES.includes(result.city)
                    ? result.city
                    : result.country === "Lebanon"
                        ? "Lebanon"
                        : result.city || "your area";

                setData({
                    city: detectedCity,
                    country: result.country || "Unknown",
                    isLoading: false,
                    error: null,
                });
            } catch (err) {
                setData({
                    city: "Lebanon",
                    country: "Lebanon",
                    isLoading: false,
                    error: "Location unavailable",
                });
            }
        }

        fetchCity();
    }, []);

    return data;
}
