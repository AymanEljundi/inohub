"use client";

import { useState } from "react";
import { Calculator, Sun, Zap, ArrowRight, RefreshCcw } from "lucide-react";
import { useConsultation } from "@/components/consultation/ConsultationContext";

type CalculatorType = 'solar' | 'ev';

export function ROICalculator() {
    const { openModal } = useConsultation();
    const [activeTab, setActiveTab] = useState<CalculatorType>('solar');

    // Solar State
    const [monthlyBill, setMonthlyBill] = useState(200);
    const [roofArea, setRoofArea] = useState(50);

    // EV State
    const [numChargers, setNumChargers] = useState(2);
    const [dailyUsage, setDailyUsage] = useState(4); // hours per charger

    // Results State
    const [showResults, setShowResults] = useState(false);

    // Constants (Simplified for demo)
    const SOLAR_COST_PER_KW = 900; // $ per KW
    const BILL_SAVINGS_RATIO = 0.85; // 85% bill reduction
    const KW_PER_SQM = 0.15; // 150W per sqm

    const EV_CHARGER_COST = 2500; // Hardware + Install
    const EV_REVENUE_PER_HR = 5; // $ profit per hour

    // Calculations
    const calculateSolar = () => {
        const potentialCapacity = roofArea * KW_PER_SQM; // kW
        const estimatedCost = potentialCapacity * SOLAR_COST_PER_KW;
        const annualSavings = (monthlyBill * 12) * BILL_SAVINGS_RATIO;
        const paybackYears = estimatedCost / annualSavings;
        const co2Saved = potentialCapacity * 0.8; // tons/year approx

        return { estimatedCost, annualSavings, paybackYears, co2Saved, capacity: potentialCapacity };
    };

    const calculateEV = () => {
        const estimatedCost = numChargers * EV_CHARGER_COST;
        const dailyRevenue = numChargers * dailyUsage * EV_REVENUE_PER_HR;
        const annualRevenue = dailyRevenue * 365;
        const paybackYears = estimatedCost / annualRevenue;
        const co2Saved = numChargers * dailyUsage * 1.2; // arbitrary unit

        return { estimatedCost, annualSavings: annualRevenue, paybackYears, co2Saved };
    };

    const results = activeTab === 'solar' ? calculateSolar() : calculateEV();

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header / Tabs */}
            <div className="flex border-b border-gray-100">
                <button
                    onClick={() => { setActiveTab('solar'); setShowResults(false); }}
                    className={`flex-1 py-6 px-4 flex items-center justify-center gap-2 font-bold transition-colors ${activeTab === 'solar' ? 'bg-red-50 text-red-700' : 'hover:bg-gray-50 text-gray-500'
                        }`}
                >
                    <Sun className="h-5 w-5" />
                    Solar Installation
                </button>
                <button
                    onClick={() => { setActiveTab('ev'); setShowResults(false); }}
                    className={`flex-1 py-6 px-4 flex items-center justify-center gap-2 font-bold transition-colors ${activeTab === 'ev' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50 text-gray-500'
                        }`}
                >
                    <Zap className="h-5 w-5" />
                    EV Charging Station
                </button>
            </div>

            <div className="p-6 md:p-8">
                {/* Inputs */}
                <div className="space-y-6 mb-8">
                    {activeTab === 'solar' ? (
                        <>
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Monthly Electricity Bill ($)</label>
                                <input
                                    type="range" min="50" max="2000" step="10"
                                    value={monthlyBill}
                                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                                    aria-label="Monthly Electricity Bill"
                                />
                                <div className="mt-2 text-right font-mono font-bold text-red-600">${monthlyBill}</div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Available Roof Area (m²)</label>
                                <input
                                    type="range" min="10" max="1000" step="10"
                                    value={roofArea}
                                    onChange={(e) => setRoofArea(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                                    aria-label="Available Roof Area"
                                />
                                <div className="mt-2 text-right font-mono font-bold text-red-600">{roofArea} m²</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Number of Chargers</label>
                                <input
                                    type="range" min="1" max="20" step="1"
                                    value={numChargers}
                                    onChange={(e) => setNumChargers(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                                    aria-label="Number of Chargers"
                                />
                                <div className="mt-2 text-right font-mono font-bold text-green-600">{numChargers} Units</div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Est. Daily Usage (Hours/Unit)</label>
                                <input
                                    type="range" min="1" max="12" step="0.5"
                                    value={dailyUsage}
                                    onChange={(e) => setDailyUsage(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                                    aria-label="Estimated Daily Usage per Unit"
                                />
                                <div className="mt-2 text-right font-mono font-bold text-green-600">{dailyUsage} Hours</div>
                            </div>
                        </>
                    )}
                </div>

                {/* Calculate Actions */}
                {!showResults ? (
                    <button
                        onClick={() => setShowResults(true)}
                        className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 ${activeTab === 'solar' ? 'bg-primary hover:opacity-90' : 'bg-green-600 hover:bg-green-700'
                            }`}
                    >
                        <Calculator className="h-5 w-5" />
                        Calculate ROI
                    </button>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Results Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Est. Investment</div>
                                <div className="text-xl font-black text-gray-900">${results.estimatedCost.toLocaleString()}</div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Annual Benefit</div>
                                <div className="text-xl font-black text-green-600">+${results.annualSavings.toLocaleString()}</div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Payback Period</div>
                                <div className="text-xl font-black text-primary">{results.paybackYears.toFixed(1)} Years</div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">CO₂ Avoided</div>
                                <div className="text-xl font-black text-teal-600">{results.co2Saved.toFixed(1)} Tons</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={openModal}
                                className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold shadow-xl flex items-center justify-center gap-2 group transition-all"
                            >
                                Get Official Quote
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => setShowResults(false)}
                                className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1"
                            >
                                <RefreshCcw className="h-3 w-3" />
                                Recalculate
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
