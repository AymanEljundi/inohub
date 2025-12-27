"use client";

import { stations as allStations, StationStatus } from "@/lib/evcharging/mockStations";
import { StationCard } from "@/components/ev/StationCard";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Zap, Search, ArrowRight, MapPin, BatteryCharging, Sun } from "lucide-react";
import { useState, useMemo } from "react";
import { DeploymentHeatmap } from "@/components/shared/DeploymentHeatmap";

// Dynamic import for Leaflet
const LeafletMapView = dynamic(() => import("@/components/maps/LeafletMapView").then(mod => mod.LeafletMapView), {
    ssr: false,
    loading: () => (
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-3xl">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    )
});

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
        <div className="min-h-screen bg-white">
            {/* Hero Section - Standardized System Dark Theme */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.800),theme(colors.gray.900))] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-red-600/10 ring-1 ring-gray-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <div className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-red-400 ring-1 ring-inset ring-red-400/20 bg-red-500/10">
                                <span className="w-2 h-2 bg-red-400 rounded-full inline-block mr-2 animate-pulse"></span>
                                EXTENDING NETWORK
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Charge Anywhere, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Drive Everywhere</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Lebanon&apos;s fastest growing EV network. Powered by solar, available 24/7.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#network-map" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all flex items-center gap-2">
                                <MapPin className="h-4 w-4" /> Find Station
                            </a>
                            <a href="#home-chargers" className="text-sm font-semibold leading-6 text-white group">
                                Buy Home Charger <ArrowRight className="inline-block h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Proposition */}
            <div className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Active Stations</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl flex justify-center items-center gap-2">
                                <Zap className="h-10 w-10 text-primary" /> 47+
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Solar Powered</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl flex justify-center items-center gap-2">
                                <Sun className="h-10 w-10 text-yellow-500" /> 100%
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Fast Charging</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl flex justify-center items-center gap-2">
                                <BatteryCharging className="h-10 w-10 text-green-500" /> 60kW
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* Interactive Network Map Section */}
            <div id="network-map" className="py-16 sm:py-24 bg-white relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Live Network Map</h2>
                        <p className="mt-4 text-lg text-gray-600">Find real-time availability and charging speeds near you.</p>
                    </div>

                    {/* The Dashboard App Embedded */}
                    <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-[800px]">
                        {/* Sidebar */}
                        <div className="w-full lg:w-[400px] border-r border-gray-200 flex flex-col h-full bg-slate-50">
                            <div className="p-6 border-b border-gray-200 bg-white">
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

                            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                {filteredStations.map(station => (
                                    <div key={station.id} onClick={() => handleStationSelect(station.id)} className={`cursor-pointer transition-all ${selectedStationId === station.id ? 'ring-2 ring-primary rounded-xl' : ''}`}>
                                        <StationCard station={station} />
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-white border-t border-gray-200">
                                <div className="text-xs font-bold text-gray-400 uppercase mb-2">Demand Heatmap</div>
                                <DeploymentHeatmap />
                            </div>
                        </div>

                        {/* Map */}
                        <div className="flex-1 relative bg-gray-100 h-full">
                            <LeafletMapView
                                stations={filteredStations}
                                onStationSelect={handleStationSelect}
                                selectedStationId={selectedStationId}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Chargers / Packages Section */}
            <div id="home-chargers" className="py-16 sm:py-24 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Home Charging Solutions</h2>
                        <p className="mt-4 text-lg text-slate-400">Wake up to a full battery every morning. Professional installation included.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Package 1 */}
                        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-lg font-semibold leading-8 text-white">Wallbox Pulsar Plus</h3>
                            <p className="mt-4 text-sm leading-6 text-gray-300">Compact, powerful, and smart. Perfect for home garages.</p>
                            <div className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">$699</span>
                                <span className="text-sm font-semibold leading-6 text-gray-300">/ unit</span>
                            </div>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                                <li className="flex gap-x-3"><Zap className="h-6 w-5 flex-none text-primary" /> 7.4kW Charging Speed</li>
                                <li className="flex gap-x-3"><Zap className="h-6 w-5 flex-none text-primary" /> WiFi & Bluetooth Connected</li>
                                <li className="flex gap-x-3"><Zap className="h-6 w-5 flex-none text-primary" /> 5m Cable Included</li>
                            </ul>
                            <a href="#" className="mt-8 block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Order Now</a>
                        </div>
                        {/* Package 2 */}
                        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-lg font-semibold leading-8 text-white">Business Dual Post</h3>
                            <p className="mt-4 text-sm leading-6 text-gray-300">Dual socket charger for offices and commercial spaces.</p>
                            <div className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">$1,499</span>
                                <span className="text-sm font-semibold leading-6 text-gray-300">/ unit</span>
                            </div>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                                <li className="flex gap-x-3"><Zap className="h-6 w-5 flex-none text-primary" /> 2x 22kW Simultaneous</li>
                                <li className="flex gap-x-3"><Zap className="h-6 w-5 flex-none text-primary" /> RFID Card Access</li>
                                <li className="flex gap-x-3"><Zap className="h-6 w-5 flex-none text-primary" /> Backoffice Management SW</li>
                            </ul>
                            <a href="#" className="mt-8 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
