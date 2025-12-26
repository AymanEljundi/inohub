"use client";

import { Zap, Shield, Wifi, Server, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
    {
        name: "Solar & Power",
        description: "Advanced renewable energy solutions and resilient power systems.",
        icon: Zap,
        color: "text-yellow-500",
        glowColor: "group-hover:shadow-yellow-500/20",
        href: "/services/solar",
    },
    {
        name: "Event Infrastructure",
        description: "Comprehensive technology setup for immersive and seamless live experiences.",
        icon: Server,
        color: "text-purple-500",
        glowColor: "group-hover:shadow-purple-500/20",
        href: "/services/events",
    },
    {
        name: "Security Systems",
        description: "Cutting-edge surveillance, access control, and cybersecurity protection.",
        icon: Shield,
        color: "text-blue-500",
        glowColor: "group-hover:shadow-blue-500/20",
        href: "/services/security",
    },
    {
        name: "Enterprise Networking",
        description: "High-speed connectivity and smart city infrastructure deployment.",
        icon: Wifi,
        color: "text-green-500",
        glowColor: "group-hover:shadow-green-500/20",
        href: "/services/network",
    },
];

export function ServiceCategories() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
            {/* Subtle separator line connecting from above */}
            <div className="absolute top-0 left-1/2 w-px h-12 bg-gradient-to-b from-gray-300 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className={`group relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 
                                hover:border-gray-300 hover:shadow-2xl ${category.glowColor}
                                transition-all duration-300 hover:-translate-y-2 block`}
                        >
                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gray-50 mb-4 
                                    group-hover:bg-gray-100 group-hover:scale-110 transition-all duration-300`}>
                                    <category.icon className={`h-6 w-6 ${category.color} group-hover:animate-pulse`} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                    {category.description}
                                </p>

                                <div className="flex items-center text-xs font-medium text-gray-400 group-hover:text-primary group-hover:gap-2 transition-all mt-auto">
                                    View Catalogue <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

