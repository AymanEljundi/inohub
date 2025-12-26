"use client";

import { useEffect, useState } from "react";

interface HeatmapData {
    [city: string]: number;
}

export function DeploymentHeatmap() {
    const [data, setData] = useState<HeatmapData>({
        'Beirut': 124,
        'Tripoli': 85,
        'Jounieh': 210,
        'Dbayeh': 92
    });

    useEffect(() => {
        const stored = localStorage.getItem('deployment_heatmap');
        if (stored) {
            // Defer update to avoid layout thrashing/warning
            setTimeout(() => setData(JSON.parse(stored)), 0);
        }
    }, []);

    return (
        <div className="grid grid-cols-4 gap-2 text-center">
            {Object.entries(data).slice(0, 4).map(([city, count]) => (
                <div key={city} className="bg-gray-50 rounded p-2">
                    <div className="text-[10px] text-gray-400 uppercase font-bold">{city}</div>
                    <div className="text-xs font-bold text-primary">{count}</div>
                </div>
            ))}
        </div>
    );
}

// Helper to increment
export function incrementHeatmap(city: string) {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('deployment_heatmap');
    const data = stored ? JSON.parse(stored) : { 'Beirut': 124, 'Tripoli': 85, 'Jounieh': 210, 'Dbayeh': 92 };

    if (!data[city]) data[city] = 0;
    data[city] += 1;

    localStorage.setItem('deployment_heatmap', JSON.stringify(data));
}
