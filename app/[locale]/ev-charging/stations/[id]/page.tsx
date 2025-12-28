"use client";

import { stations, checkStationAvailability, ConnectorType } from "@/lib/evcharging/mockStations";
import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, MapPin, Zap, Clock, Info, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StationDetailPage() {
    const { id } = useParams();
    const station = stations.find(s => s.id === id);
    const [selectedConnector, setSelectedConnector] = useState<ConnectorType | null>(null);

    if (!station) return notFound();

    const handleConnectorSelect = (type: ConnectorType) => {
        setSelectedConnector(type);
    };

    const availability = selectedConnector ? checkStationAvailability(station, selectedConnector, 'Charge') : null;

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
                    <Link href="/ev-charging" className="text-gray-500 hover:text-gray-900 flex items-center text-sm font-medium">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Map
                    </Link>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Hero Image */}
                    <div className="relative h-64 bg-gray-200">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/ev-station-default.jpg"
                                alt={station.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 896px"
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">{station.name}</h1>
                                <div className="flex items-center text-gray-500">
                                    <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                    {station.location.address}, {station.city}
                                </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm font-bold uppercase ${station.status === 'Online' ? 'bg-green-100 text-green-700' :
                                station.status === 'Busy' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-700'
                                }`}>
                                {station.status}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Information */}
                            <div className="space-y-6">
                                <h3 className="font-bold text-gray-900 flex items-center">
                                    <Info className="h-5 w-5 mr-2 text-primary" /> Amenities & Access
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {station.amenities.map(a => (
                                        <span key={a} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">{a}</span>
                                    ))}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <Clock className="h-4 w-4 mr-2" /> {station.openHours}
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Pricing</p>
                                    <p className="text-xl font-bold text-gray-900">
                                        ${station.pricing.perKwh}<span className="text-sm font-normal text-gray-500">/kWh</span>
                                    </p>
                                </div>
                            </div>

                            {/* Connector Selection (Availability Check) */}
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <Zap className="h-5 w-5 mr-2 text-yellow-500" /> Select Connector
                                </h3>

                                <div className="space-y-3 mb-6">
                                    {station.connectors.map(conn => (
                                        <button
                                            key={conn.type}
                                            onClick={() => handleConnectorSelect(conn.type)}
                                            className={`w-full flex justify-between items-center p-3 rounded-lg border-2 transition-all ${selectedConnector === conn.type
                                                ? 'border-primary bg-white ring-2 ring-primary/10'
                                                : 'border-gray-200 bg-white hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="text-left">
                                                <span className="block font-bold text-gray-900">{conn.type}</span>
                                                <span className="text-xs text-gray-500">{conn.powerKw}kW • {conn.status}</span>
                                            </div>
                                            {selectedConnector === conn.type && <CheckCircle className="h-5 w-5 text-primary" />}
                                        </button>
                                    ))}
                                </div>

                                {/* Action Button */}
                                {selectedConnector && availability && (
                                    <div className={`p-4 rounded-lg text-center ${availability.available ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                                        <div className="mb-3">
                                            {availability.available ? (
                                                <span className="text-green-700 font-bold flex items-center justify-center">
                                                    <CheckCircle className="h-4 w-4 mr-2" /> Available
                                                </span>
                                            ) : (
                                                <span className="text-red-700 font-bold flex items-center justify-center">
                                                    <AlertTriangle className="h-4 w-4 mr-2" /> {availability.reason}
                                                </span>
                                            )}
                                        </div>

                                        <button
                                            disabled={!availability.available}
                                            className={`w-full py-3 rounded-lg font-bold text-white transition-all ${availability.available ? 'bg-primary hover:bg-red-700 shadow-lg' : 'bg-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            {availability.action === 'Charge' ? 'Start Charging Session' :
                                                availability.action === 'Wait' ? 'Join Waitlist' : 'Find Nearby Station'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
