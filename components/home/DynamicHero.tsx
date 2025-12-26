"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function DynamicHero() {
    const [scrollY, setScrollY] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        // Use setTimeout to avoid synchronous setState in effect
        setTimeout(() => {
            setPrefersReducedMotion(mediaQuery.matches);
        }, 0);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        // Scroll handler for parallax
        const handleScroll = () => {
            if (!prefersReducedMotion) {
                setScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prefersReducedMotion]);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Animated Grid Background */}
            {!prefersReducedMotion && (
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="rgba(0, 102, 255, 0.3)"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="white" stopOpacity="0" />
                                <stop offset="50%" stopColor="white" stopOpacity="1" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#grid)"
                            style={{
                                transform: `translateY(${scrollY * 0.3}px)`,
                                transition: "transform 0.1s linear"
                            }}
                        />
                        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                    </svg>
                </div>
            )}

            {/* Node + Line Network - meaningful connections, not random dots */}
            {!prefersReducedMotion && (
                <div className="absolute inset-0 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {/* Connection lines between nodes */}
                        <line x1="25%" y1="25%" x2="45%" y2="35%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1">
                            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
                        </line>
                        <line x1="45%" y1="35%" x2="70%" y2="30%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1">
                            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" begin="1s" repeatCount="indefinite" />
                        </line>
                        <line x1="70%" y1="30%" x2="55%" y2="60%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1">
                            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" begin="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="55%" y1="60%" x2="30%" y2="55%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1">
                            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" begin="3s" repeatCount="indefinite" />
                        </line>
                        <line x1="30%" y1="55%" x2="25%" y2="25%" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1">
                            <animate attributeName="opacity" values="0.05;0.2;0.05" dur="5s" repeatCount="indefinite" />
                        </line>

                        {/* Data flow pulses along lines */}
                        <circle r="2" fill="rgba(59, 130, 246, 0.6)">
                            <animateMotion dur="4s" repeatCount="indefinite" path="M 200,200 L 360,280 L 560,240" />
                        </circle>
                        <circle r="2" fill="rgba(16, 185, 129, 0.6)">
                            <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 560,240 L 440,480 L 240,440 L 200,200" />
                        </circle>
                    </svg>

                    {/* Stationary nodes at connection points */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500/40 rounded-full ring-2 ring-blue-500/20" />
                    <div className="absolute top-[35%] left-[45%] w-2 h-2 bg-green-500/40 rounded-full ring-2 ring-green-500/20" />
                    <div className="absolute top-[30%] right-[30%] w-3 h-3 bg-blue-400/40 rounded-full ring-2 ring-blue-400/20" />
                    <div className="absolute top-[60%] left-[55%] w-2 h-2 bg-green-400/40 rounded-full ring-2 ring-green-400/20" />
                    <div className="absolute top-[55%] left-[30%] w-2 h-2 bg-blue-500/30 rounded-full ring-2 ring-blue-500/15" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div
                    className="space-y-8"
                    style={{
                        transform: !prefersReducedMotion ? `translateY(${scrollY * -0.15}px)` : undefined,
                        transition: "transform 0.1s linear"
                    }}
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        LIVE PLATFORM
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Infrastructure as a
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
                            Deployed Service
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Solar arrays. EV charging networks. Smart security.
                        <br className="hidden sm:block" />
                        We don&apos;t just sell tech—we deploy it across Lebanon.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                        >
                            <Zap className="h-5 w-5" />
                            Explore Services
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/ev-charging"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105"
                        >
                            View EV Network
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>

                    {/* Tech Metrics Preview */}
                    <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">47</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1">EV Stations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">4</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1">Cities</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">12.4 MW</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1">Solar Deployed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">23</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1">Active Projects</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
