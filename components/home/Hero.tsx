"use client";

import Link from "next/link";
import { ArrowRight, Lightbulb, Activity, Zap, Shield } from "lucide-react";
import { useConsultation } from "@/components/consultation/ConsultationContext";

export function Hero() {
    const { openModal } = useConsultation();

    return (
        <div className="relative bg-zinc-950 overflow-hidden">
            {/* Tech Grid Background - Darker contrast */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            {/* Animated Circuit Lines - Red/White Theme */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent delay-700"></div>

            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-12 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-24 pt-20 px-4 sm:px-6 lg:px-8">

                    {/* Status Badges - Red/Zinc Theme */}
                    <div className="flex gap-2 mb-8 flex-wrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-zinc-800/50 text-white border border-red-500/30 backdrop-blur-md">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                            EV Network Live
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-zinc-800/50 text-gray-300 border border-zinc-700 backdrop-blur-md">
                            <Shield className="w-3 h-3 mr-1" />
                            Academy Open
                        </span>
                    </div>

                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span className="block">Deploy Enterprise</span>
                        <span className="block text-red-600">Solar & EV Infrastructure</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                        Turn your facilities into a revenue engine. We design, fund, and deploy advanced energy and security networks—so you can focus on innovation.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={openModal}
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-red-900/40 cursor-pointer"
                        >
                            Explore Services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <Link
                            href="/innovation"
                            className="inline-flex items-center justify-center px-8 py-3 border border-zinc-700 text-base font-medium rounded-lg text-white bg-zinc-900/50 hover:bg-zinc-800 backdrop-blur-sm md:py-4 md:text-lg transition-all"
                        >
                            <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
                            Submit Idea
                        </Link>
                    </div>

                    <div className="mt-8 flex gap-6 text-sm text-gray-400">
                        <Link href="/partner" className="hover:text-red-500 transition-colors flex items-center">
                            Partner & Deploy
                        </Link>
                        <span className="text-zinc-700">•</span>
                        <Link href="/products-finder" className="hover:text-red-500 transition-colors">
                            Find Products
                        </Link>
                    </div>

                </div>
            </div>

            {/* Right Side Visual (Abstract Map/Nodes) - Red/Black Theme */}
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-zinc-950">
                <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full relative opacity-60">
                    {/* Abstract CSS Art for "Network" */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-red-900/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-zinc-800 rounded-full"></div>

                    {/* Floating Nodes */}
                    <div className="absolute top-[30%] left-[60%] p-3 bg-zinc-900 rounded-lg border border-zinc-800 shadow-xl backdrop-blur-md">
                        <Zap className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div className="absolute top-[60%] left-[30%] p-3 bg-zinc-900 rounded-lg border border-zinc-800 shadow-xl backdrop-blur-md">
                        <Activity className="h-6 w-6 text-red-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}
