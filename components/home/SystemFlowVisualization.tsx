"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, Wrench, Rocket, TrendingUp, ArrowRight } from "lucide-react";

interface FlowStep {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    color: string;
    glow: string;
}

const FLOW_STEPS: FlowStep[] = [
    {
        icon: Lightbulb,
        title: "Idea",
        description: "Submit your infrastructure need or innovation proposal",
        color: "text-yellow-600",
        glow: "shadow-[0_0_15px_rgba(202,138,4,0.3)]"
    },
    {
        icon: Wrench,
        title: "Service",
        description: "We design, source, and configure the deployment",
        color: "text-red-600",
        glow: "shadow-[0_0_15px_rgba(195,35,43,0.3)]"
    },
    {
        icon: Rocket,
        title: "Deployment",
        description: "Professional installation and integration on-site",
        color: "text-green-600",
        glow: "shadow-[0_0_15px_rgba(22,163,74,0.3)]"
    },
    {
        icon: TrendingUp,
        title: "Impact",
        description: "Ongoing monitoring, maintenance, and optimization",
        color: "text-purple-600",
        glow: "shadow-[0_0_15px_rgba(147,51,234,0.3)]"
    }
];

export function SystemFlowVisualization() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollRatio, setScrollRatio] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far into the section we are
            // 0 when top is at bottom of viewport, 1 when bottom is at top of viewport
            const sectionHeight = rect.height;
            const start = windowHeight; // section enters from bottom
            const currentPosition = rect.top;

            // Adjust to start progress as section enters viewport
            // simplified: 0 at bottom entry, 1 at top alignment
            const relativeProgress = (start - currentPosition) / windowHeight;
            setScrollRatio(Math.min(Math.max(relativeProgress, 0), 1));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Pattern - subtle advancement focus */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="flow-grid-adv" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-900" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#flow-grid-adv)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm font-bold text-red-700 uppercase tracking-wider mb-4 shadow-sm">
                        Platform Journey
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        From Concept to Deployed Reality
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Our end-to-end process transforms infrastructure ideas into operational systems through a continuous deployment loop.
                    </p>
                </div>

                {/* Flow Steps - Responsive Container */}
                <div className="relative">
                    {/* Connection Line (Desktop) - Fills as user scrolls */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-yellow-400 via-red-500 via-green-500 to-purple-500 shadow-[0_0_10px_rgba(195,35,43,0.3)] transition-all duration-300 linear"
                            style={{ width: `${scrollRatio * 100}%` }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
                        {FLOW_STEPS.map((step, index) => {
                            const Icon = step.icon;
                            // Activation logic: each step triggers earlier to ensure all are visible comfortably
                            // Previous: index / 4 -> 0, 0.25, 0.5, 0.75. New: index * 0.18 -> 0, 0.18, 0.36, 0.54
                            const stepThreshold = (index * 0.18);
                            const isActive = scrollRatio > stepThreshold + 0.05;
                            const isPending = scrollRatio <= stepThreshold + 0.05;

                            return (
                                <div
                                    key={step.title}
                                    className={`relative transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
                                        }`}
                                >
                                    {/* Step Card */}
                                    <div className={`
                                        bg-white rounded-2xl p-8 border-2 transition-all duration-500 relative h-full
                                        ${isActive ? `border-gray-300 shadow-xl ${step.glow}` : 'border-gray-100 shadow-sm'}
                                    `}>
                                        {/* Step Number */}
                                        <div className={`
                                            absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all duration-500
                                            ${isActive ? 'bg-gray-900 text-white scale-110' : 'bg-gray-100 text-gray-400'}
                                        `}>
                                            0{index + 1}
                                        </div>

                                        {/* Icon Container */}
                                        <div className={`
                                            inline-flex p-5 rounded-2xl mb-6 transition-all duration-500
                                            ${isActive ? `bg-gradient-to-br from-white to-gray-50 ${step.color} scale-110 shadow-md` : 'bg-gray-50 text-gray-300'}
                                        `}>
                                            <Icon className="h-10 w-10" />
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-500 mt-1">
                                            Real-time tracking of your efficiency&apos;s impact.
                                        </p>

                                        {/* Active Status Indicator */}
                                        {isActive && (
                                            <div className="mt-4 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">System Active</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Connection Arrows (Desktop) */}
                                    {index < FLOW_STEPS.length - 1 && (
                                        <div className="hidden md:flex absolute top-24 -right-10 z-20 items-center justify-center">
                                            <ArrowRight className={`h-6 w-6 transition-colors duration-500 ${isActive ? 'text-red-500 animate-pulse' : 'text-gray-200'}`} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Action */}
                <div className={`text-center mt-24 transition-all duration-1000 ${scrollRatio > 0.8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <a
                        href="/innovation"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Initiate New Project
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <p className="mt-4 text-sm text-gray-400 font-medium">Ready to deploy your first service? Let&apos;s begin.</p>
                </div>
            </div>
        </section>
    );
}

