"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function DynamicHero() {
    // Static content - no personalization
    const heroHeadline = "Infrastructure as a";
    const heroSubHeadline = "Deployed Service";
    const heroDescription = "Solar arrays. EV charging networks. Smart security. We don't just sell tech—we deploy it across Lebanon.";

    return (
        <section className="relative isolate overflow-hidden bg-gray-900 min-h-[85vh] flex items-center justify-center">
            {/* Premium Background Layer */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.800),theme(colors.gray.900))] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-red-600/10 ring-1 ring-gray-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-10">
                    {/* Status Badge - Premium Pulse Style */}
                    <div className="flex justify-center">
                        <div className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-red-400 ring-1 ring-inset ring-red-400/20 bg-red-500/10">
                            <span className="w-2 h-2 bg-red-400 rounded-full inline-block mr-2 animate-pulse"></span>
                            LIVE PLATFORM
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                        {heroHeadline}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                            {heroSubHeadline}
                        </span>
                    </h1>

                    {/* Subheadline - Location Aware */}
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                        {heroDescription}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <Link
                            href="/services"
                            className="rounded-md bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all flex items-center gap-2"
                        >
                            <Zap className="h-5 w-5" />
                            Explore Services
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/ev-charging"
                            className="text-sm font-semibold leading-6 text-white group flex items-center gap-1 hover:text-red-400 transition-colors"
                        >
                            View EV Network <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Tech Metrics Preview - Refined for Dark Theme */}
                    <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 mt-12">
                        <div className="text-center pt-8">
                            <div className="text-3xl md:text-4xl font-bold text-white">47</div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">EV Stations</div>
                        </div>
                        <div className="text-center pt-8">
                            <div className="text-3xl md:text-4xl font-bold text-white">4</div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">Cities</div>
                        </div>
                        <div className="text-center pt-8">
                            <div className="text-3xl md:text-4xl font-bold text-white">12.4 MW</div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">Solar Deployed</div>
                        </div>
                        <div className="text-center pt-8">
                            <div className="text-3xl md:text-4xl font-bold text-white">23</div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">Active Projects</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
