"use client";

import { Building2, Factory, Globe, Landmark, ShieldCheck } from "lucide-react";

const PARTNERS = [
    { name: "City of Jounieh", icon: Landmark },
    { name: "Beirut Solar Grid", icon: ZapIcon },
    { name: "Mount Lebanon Industry", icon: Factory },
    { name: "Cedars Data Center", icon: ShieldCheck },
    { name: "Bekaa AgroTech", icon: Globe },
    { name: "Metn Municipality", icon: Building2 },
];

function ZapIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4Z" />
        </svg>
    )
}

export function TrustBar() {
    return (
        <div className="w-full bg-[#0f1729] border-y border-gray-800 py-8 overflow-hidden relative z-30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 text-center">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Trusted by Municipalities & Industry Leaders</p>
            </div>
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 px-8 items-center">
                    {PARTNERS.map((partner, i) => (
                        <div key={i} className="inline-flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors duration-300">
                            <partner.icon className="h-5 w-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">{partner.name}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {PARTNERS.map((partner, i) => (
                        <div key={`dup-${i}`} className="inline-flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors duration-300">
                            <partner.icon className="h-5 w-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">{partner.name}</span>
                        </div>
                    ))}
                    {/* Triplicate for large screens if needed */}
                    {PARTNERS.map((partner, i) => (
                        <div key={`trip-${i}`} className="inline-flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors duration-300">
                            <partner.icon className="h-5 w-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade Edges - Dark Theme */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f1729] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f1729] to-transparent pointer-events-none z-10" />
        </div>
    );
}
