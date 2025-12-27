"use client";

import { useMemo } from "react";
import { getRecommendations } from "@/lib/solutions/getRecommendations";
import { ArrowRight, Plus, Zap, Battery } from "lucide-react";
import Link from "next/link";

interface Props {
    serviceId: string;
    defaultSiteType?: string;
}

export function SolutionExpansionPanel({ serviceId, defaultSiteType = 'business' }: Props) {
    // Use useMemo for synchronous derivation instead of useEffect + setState
    const recommendations = useMemo(() => {
        return getRecommendations({
            currentServiceId: serviceId,
            siteType: defaultSiteType
        });
    }, [serviceId, defaultSiteType]);

    if (recommendations.length === 0) return null;

    return (
        <div className="mt-12 border-t border-gray-100 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expand Your System</h3>
            <p className="text-gray-500 mb-6">Combine services to unlock greater efficiency and resilience.</p>

            <div className="grid gap-6 md:grid-cols-2">
                {recommendations.map(rec => (
                    <div key={rec.solution.id} className="border border-red-100 bg-red-50/50 rounded-xl p-6 hover:shadow-md transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Plus className="w-16 h-16 text-red-500" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100 px-2 py-1 rounded">
                                    Recommended Add-on
                                </span>
                            </div>

                            <h4 className="text-lg font-bold text-gray-900 mb-2">{rec.solution.name}</h4>
                            <p className="text-sm text-gray-600 mb-4 h-10">{rec.explanation}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {rec.solution.sustainabilityImpact.co2Saved && (
                                    <div className="flex items-center text-xs text-green-700 bg-green-100 px-2 py-1 rounded-lg">
                                        <Zap className="w-3 h-3 mr-1" />
                                        Save {rec.solution.sustainabilityImpact.co2Saved}
                                    </div>
                                )}
                                {rec.solution.includedServiceIds.includes('energy-storage-plus') && (
                                    <div className="flex items-center text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-lg">
                                        <Battery className="w-3 h-3 mr-1" />
                                        Backup Power
                                    </div>
                                )}
                            </div>

                            <Link href={`/solutions/${rec.solution.id}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-red-800">
                                View Combined Solution <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
