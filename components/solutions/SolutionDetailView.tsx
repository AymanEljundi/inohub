import { Solution } from "@/lib/solutions/types";
import { Check, Activity, Zap } from "lucide-react";
import Link from "next/link";

export function SolutionHeader({ solution }: { solution: Solution }) {
    return (
        <div className="bg-white border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 mb-4">
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary">Services</Link>
                <span className="text-gray-300">/</span>
                <span className="text-sm text-gray-900">Solutions</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{solution.name}</h1>
            <p className="text-xl text-gray-500 max-w-3xl">{solution.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
                {solution.diagramSteps?.map((step, i) => (
                    <div key={i} className="flex items-center">
                        <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                            {step}
                        </div>
                        {i < (solution.diagramSteps?.length || 0) - 1 && (
                            <div className="w-8 h-px bg-gray-300 mx-2"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SolutionBenefits({ solution }: { solution: Solution }) {
    return (
        <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Why This Combination?</h3>
                <ul className="space-y-3">
                    {solution.whyThisCombination.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Impact & Scalability</h3>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                        <div className="flex items-center text-gray-700 font-medium">
                            <Activity className="w-5 h-5 mr-2 text-blue-500" /> Efficiency Boost
                        </div>
                        <span className="text-gray-900 font-bold">{solution.sustainabilityImpact.efficiencyBoost || 'N/A'}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                        <div className="flex items-center text-gray-700 font-medium">
                            <Zap className="w-5 h-5 mr-2 text-green-500" /> CO2 Saved
                        </div>
                        <span className="text-gray-900 font-bold">{solution.sustainabilityImpact.co2Saved}</span>
                    </div>

                    <p className="text-sm text-gray-500 italic mt-4">
                        &quot;{solution.scalabilityNotes}&quot;
                    </p>
                </div>
            </div>
        </div>
    );
}
