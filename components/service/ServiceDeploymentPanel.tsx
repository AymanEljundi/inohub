"use client";

import { Service } from "@/data/services";
import { useState } from "react";
import { Calendar, MapPin, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function ServiceDeploymentPanel({ service }: { service: Service }) {
    // Determine default tab based on availability
    const defaultTab = service.availabilityType === 'Event' ? 'event' : 'permanent';
    const [activeTab, setActiveTab] = useState<'permanent' | 'event'>(defaultTab);

    const isHybrid = service.availabilityType === 'Hybrid';
    const showPermanent = service.availabilityType === 'Permanent' || isHybrid;
    const showEvent = service.availabilityType === 'Event' || isHybrid;

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">

            {/* 1. Header: Deployment Model & Status */}
            <div className="bg-secondary px-6 py-4 border-b border-gray-800">
                <div className="flex justify-between items-center text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-400">Deployment Logic</span>
                    <span className={`px-2 py-0.5 rounded text-white ${service.deploymentModel === 'Owned' ? 'bg-primary' : 'bg-purple-600'
                        }`}>
                        {service.deploymentModel}
                    </span>
                </div>
            </div>

            {/* 2. Mode Toggle (Only if Hybrid) */}
            {isHybrid && (
                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => setActiveTab('permanent')}
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'permanent' ? 'text-primary border-b-2 border-primary bg-red-50/20' : 'text-gray-500'
                            }`}
                    >
                        Permanent Infra
                    </button>
                    <button
                        onClick={() => setActiveTab('event')}
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'event' ? 'text-primary border-b-2 border-primary bg-red-50/20' : 'text-gray-500'
                            }`}
                    >
                        Event Rental
                    </button>
                </div>
            )}

            <div className="p-6">
                {/* 3. Logic: Permanent View */}
                {activeTab === 'permanent' && showPermanent && service.pricing.permanent && (
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Infrastructure Cost</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-gray-900">${service.pricing.permanent.amount}</span>
                                <span className="text-gray-500">/{service.pricing.permanent.unit}</span>
                            </div>
                            {service.pricing.permanent.setupFee && (
                                <p className="text-xs text-primary font-medium mt-1">
                                    + ${service.pricing.permanent.setupFee} Deployment Fee
                                </p>
                            )}
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                            <div className="flex items-center text-sm text-gray-600">
                                <ShieldCheck className="h-4 w-4 mr-2 text-green-600" />
                                <span>Managed Maintenance Included</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                                <span>Guaranteed Uptime SLA</span>
                            </div>
                        </div>

                        <button className="w-full bg-secondary text-white py-3 rounded-lg font-bold shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center">
                            Request Pilot Deployment <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                )}

                {/* 4. Logic: Event View */}
                {activeTab === 'event' && showEvent && service.pricing.event && (
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Short-Term Rate</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-gray-900">${service.pricing.event.amount}</span>
                                <span className="text-gray-500">/{service.pricing.event.unit}</span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                            <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>Dates Required</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>Venue Location</span>
                            </div>
                        </div>

                        <button className="w-full bg-white border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-red-50 transition-all">
                            Check Availability
                        </button>
                    </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-center text-gray-400">
                        Powered by TechStoreLB Operations • License #TS-8842
                    </p>
                </div>
            </div>
        </div>
    );
}
