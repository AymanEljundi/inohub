"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";

const roomsList = [
    { id: "living", label: "Living Room" },
    { id: "kitchen", label: "Kitchen" },
    { id: "master", label: "Master Bedroom" },
    { id: "bedroom", label: "Other Bedrooms" },
    { id: "outdoor", label: "Outdoor/Garden" },
    { id: "entrance", label: "Entrance/Gate" },
];

const featuresList = [
    { id: "lighting", label: "Smart Lighting", icon: "💡" },
    { id: "hvac", label: "Climate Control (HVAC)", icon: "❄️" },
    { id: "security", label: "Security & Cameras", icon: "🛡️" },
    { id: "audio", label: "Multi-room Audio", icon: "🎵" },
    { id: "blinds", label: "Automated Blinds", icon: "🪟" },
    { id: "wellness", label: "Health & Wellness", icon: "❤️" },
];

export function Configurator() {
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [recommendation, setRecommendation] = useState<string | null>(null);

    const toggleRoom = (id: string) => {
        setSelectedRooms((prev) =>
            prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
        );
    };

    const toggleFeature = (id: string) => {
        setSelectedFeatures((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };

    const calculateRecommendation = () => {
        // Simple logic for demo purposes
        const score = selectedRooms.length + selectedFeatures.length;
        if (score > 8) {
            setRecommendation("Ultimate Smart Villa Package");
        } else if (score > 4) {
            setRecommendation("Advanced Family Home Package");
        } else {
            setRecommendation("Starter Essentials Package");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Selection Area */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                            Select Rooms
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {roomsList.map((room) => (
                                <button
                                    key={room.id}
                                    onClick={() => toggleRoom(room.id)}
                                    className={`text-sm px-3 py-2 rounded-lg border text-left transition-all ${selectedRooms.includes(room.id)
                                            ? "border-primary bg-primary/5 text-primary font-medium"
                                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                                        }`}
                                >
                                    {room.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                            Desired Features
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {featuresList.map((feature) => (
                                <button
                                    key={feature.id}
                                    onClick={() => toggleFeature(feature.id)}
                                    className={`text-sm px-3 py-2 rounded-lg border text-left transition-all flex items-center gap-2 ${selectedFeatures.includes(feature.id)
                                            ? "border-primary bg-primary/5 text-primary font-medium"
                                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                                        }`}
                                >
                                    <span>{feature.icon}</span> {feature.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={calculateRecommendation}
                        disabled={selectedRooms.length === 0 && selectedFeatures.length === 0}
                        className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Show Recommendation
                    </button>
                </div>

                {/* Results Area */}
                <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center items-center text-center min-h-[300px]">
                    {recommendation ? (
                        <div className="animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Recommended for You</h3>
                            <div className="text-2xl font-bold text-primary mb-4">{recommendation}</div>
                            <p className="text-sm text-gray-600 mb-6">
                                Based on your selection of {selectedRooms.length} rooms and {selectedFeatures.length} features, this package provides the optimal balance of coverage and functionality.
                            </p>
                            <button className="text-primary font-semibold hover:text-red-700 underline underline-offset-4">
                                View Package Details below
                            </button>
                        </div>
                    ) : (
                        <div className="text-gray-400">
                            <Info className="w-12 h-12 mx-auto mb-3 opacity-20" />
                            <p>Select your preferences on the left to generate a personalized smart home recommendation.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
