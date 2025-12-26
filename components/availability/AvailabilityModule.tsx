"use client";

import { Service } from "@/data/services";
import { useState } from "react";
import { checkAvailability, CITIES, AvailabilityResponse } from "@/lib/availability/checkAvailability";
import { MapPin, Info, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function AvailabilityModule({ service }: { service: Service }) {
    const isHybrid = service.availabilityType === 'Hybrid';
    const defaultMode = service.availabilityType === 'Event' ? 'Event' : 'Permanent';

    const [mode, setMode] = useState<'Permanent' | 'Event'>(defaultMode);
    const [location, setLocation] = useState(CITIES[0]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [status, setStatus] = useState<'Idle' | 'Loading' | 'Result'>('Idle');
    const [result, setResult] = useState<AvailabilityResponse | null>(null);

    const handleCheck = async () => {
        setStatus('Loading');

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const req = {
            serviceSlug: service.slug,
            mode,
            location,
            dates: mode === 'Event' && startDate ? { start: new Date(startDate), end: new Date(endDate || startDate) } : undefined
        };

        const res = checkAvailability(service, req);
        setResult(res);
        setStatus('Result');
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">

            {/* Header */}
            <div className="bg-secondary px-6 py-4 border-b border-gray-800">
                <div className="flex justify-between items-center text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-400">Deployment Logic</span>
                    <span className={`px-2 py-0.5 rounded text-white ${service.deploymentModel === 'Owned' ? 'bg-blue-600' : 'bg-purple-600'
                        }`}>
                        {service.deploymentModel}
                    </span>
                </div>
            </div>

            {/* Mode Selector (Hybrid Only) */}
            {isHybrid && (
                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => { setMode('Permanent'); setStatus('Idle'); }}
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${mode === 'Permanent' ? 'text-primary border-b-2 border-primary bg-red-50/20' : 'text-gray-500'
                            }`}
                    >
                        Permanent Infra
                    </button>
                    <button
                        onClick={() => { setMode('Event'); setStatus('Idle'); }}
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${mode === 'Event' ? 'text-primary border-b-2 border-primary bg-red-50/20' : 'text-gray-500'
                            }`}
                    >
                        Event Rental
                    </button>
                </div>
            )}

            <div className="p-6 space-y-6">

                {/* INPUTS */}
                <div className="space-y-4">
                    {/* Location Input (Universal) */}
                    <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase mb-1">Target Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <select
                                aria-label="Select Target Location"
                                value={location} onChange={(e) => setLocation(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            >
                                {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Event Date Inputs */}
                    {mode === 'Event' && (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="start-date" className="block text-xs font-medium text-gray-700 uppercase mb-1">Start Date</label>
                                <input
                                    id="start-date"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="end-date" className="block text-xs font-medium text-gray-700 uppercase mb-1">End Date</label>
                                <input
                                    id="end-date"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary"
                                />
                            </div>

                            {service.leadTimeDays && (
                                <p className="col-span-2 text-xs text-orange-600 flex items-center">
                                    <AlertCircle className="h-3 w-3 mr-1" /> Requires {service.leadTimeDays} days lead time
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* ACTIONS */}
                {status !== 'Result' && (
                    <button
                        onClick={handleCheck}
                        disabled={status === 'Loading'}
                        className="w-full bg-secondary text-white py-3 rounded-lg font-bold shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center disabled:opacity-70"
                    >
                        {status === 'Loading' ? <Loader2 className="animate-spin h-5 w-5" /> : 'Check Availability'}
                    </button>
                )}

                {/* RESULTS */}
                {status === 'Result' && result && (
                    <div className={`rounded-xl p-4 border ${result.isAvailable ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="flex items-start gap-3">
                            {result.isAvailable ? (
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                            ) : (
                                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                            )}

                            <div>
                                <h4 className={`font-bold ${result.isAvailable ? 'text-green-900' : 'text-red-900'}`}>
                                    {result.isAvailable ? 'Available for Deployment' : 'Not Available'}
                                </h4>
                                <p className={`text-sm mt-1 ${result.isAvailable ? 'text-green-700' : 'text-red-700'}`}>
                                    {result.message}
                                </p>

                                {result.costEstimate && (
                                    <div className="mt-3 pt-3 border-t border-black/5">
                                        <p className="text-xs uppercase opacity-70 mb-0.5">Estimated Rate</p>
                                        <p className="font-bold text-lg">${result.costEstimate} <span className="text-xs font-normal">/unit</span></p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-4">
                            {result.nextStep === 'Book' && (
                                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 text-sm">
                                    Proceed to Formal Quote
                                </button>
                            )}
                            {result.nextStep === 'Request' && (
                                <button className="w-full bg-white border border-red-300 text-red-700 py-2 rounded-lg font-semibold hover:bg-red-50 text-sm">
                                    Request Deployment Here
                                </button>
                            )}
                        </div>

                        <button
                            onClick={() => setStatus('Idle')}
                            className="mt-3 w-full text-xs text-center underline opacity-60 hover:opacity-100"
                        >
                            Check Different Parameters
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
