"use client";

import { PRODUCT_CATEGORIES, buildTechStoreLink } from "@/lib/products/techstoreLinks";
import { ExternalLink, Sun, Briefcase, Network, Shield, Home, Flame, Lock, Speaker, Bell } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    solar: Sun,
    business: Briefcase,
    networking: Network,
    security: Shield,
    automation: Home,
    fire: Flame,
    safes: Lock,
    sound: Speaker,
    alarm: Bell
};

export function ExternalCategoryGrid() {
    const categories = PRODUCT_CATEGORIES.filter(c => c.id !== 'all');

    const openCategory = (catId: string) => {
        const url = buildTechStoreLink("", catId);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map(cat => {
                const Icon = iconMap[cat.id] || ExternalLink;
                return (
                    <button
                        key={cat.id}
                        onClick={() => openCategory(cat.id)}
                        className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all text-center w-40 sm:w-44"
                    >
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
                            <Icon className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {cat.label}
                        </span>
                        <span className="text-xs text-gray-400 mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            View on Store <ExternalLink className="ml-1 h-3 w-3" />
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
