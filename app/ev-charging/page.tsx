"use client";

import { stations as allStations, StationStatus } from "@/lib/evcharging/mockStations";
import { StationCard } from "@/components/ev/StationCard";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import { Zap, Search } from "lucide-react";

// Dynamic import for Leaflet to avoid SSR window error
const LeafletMapView = dynamic(() => import("@/components/maps/LeafletMapView").then(mod => mod.LeafletMapView), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    )
});
import { useState, useMemo } from "react";
import { DeploymentHeatmap } from "@/components/shared/DeploymentHeatmap"; // Will create next

export default function EVChargingPage() {
    const [selectedCity, setSelectedCity] = useState<string>('All');
    const [selectedStatus, setSelectedStatus] = useState<StationStatus | 'All'>('All');
    const [selectedStationId, setSelectedStationId] = useState<string | null>(null);

    const filteredStations = useMemo(() => {
        return allStations.filter(s => {
            if (selectedCity !== 'All' && s.city !== selectedCity) return false;
            if (selectedStatus !== 'All' && s.status !== selectedStatus) return false;
            return true;
        });
    }, [selectedCity, selectedStatus]);

    const router = useRouter();

    const handleStationSelect = (id: string | null) => {
        if (id) {
            router.push(`/ev-charging/stations/${id}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row h-screen">

            {/* Sidebar / List View */}
            <div className="w-full md:w-[450px] bg-white border-r border-gray-200 flex flex-col h-full z-10 shadow-xl">
                <div className="p-6 border-b border-gray-100 bg-white">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                        <Zap className="h-6 w-6 text-primary mr-2" /> Charging Net
                    </h1>

                    {/* Filters */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <select
                            aria-label="Filter by City"
                            value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900"
                        >
                            <option value="All">All Cities</option>
                            <option value="Beirut">Beirut</option>
                            <option value="Tripoli">Tripoli</option>
                            <option value="Jounieh">Jounieh</option>
                            <option value="Dbayeh">Dbayeh</option>
                        </select>
                        <select
                            aria-label="Filter by Status"
                            value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value as StationStatus | 'All')}
                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900"
                        >
                            <option value="All">Any Status</option>
                            <option value="Online">Online Only</option>
                            <option value="Busy">Busy</option>
                        </select>
                    </div>

                    <p className="text-xs text-gray-500 font-medium">
                        {filteredStations.length} stations found
                    </p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {filteredStations.map(station => (
                        <div key={station.id} onClick={() => handleStationSelect(station.id)} className={`cursor-pointer transition-all ${selectedStationId === station.id ? 'ring-2 ring-primary rounded-xl' : ''}`}>
                            <StationCard station={station} />
                        </div>
                    ))}
                    {filteredStations.length === 0 && (
                        <div className="text-center py-10 text-gray-400">
                            <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                            <p>No stations match your filters.</p>
                        </div>
                    )}
                </div>

                {/* Heatmap Widget (To be implemented next step) */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <div className="text-xs font-bold text-gray-400 uppercase mb-2">Demand Heatmap</div>
                    <DeploymentHeatmap />
                </div>
            </div>

            {/* Map View */}
            <div className="flex-1 relative bg-gray-100">
                <LeafletMapView
                    stations={filteredStations}
                    onStationSelect={handleStationSelect}
                    selectedStationId={selectedStationId}
                />
                {/* Legend/Floaters can go here */}
            </div>

        </div>
    );
}
