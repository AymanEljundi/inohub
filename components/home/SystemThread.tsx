"use client";

import { useEffect, useState, useMemo } from "react";

/**
 * SystemThread - A persistent visual element that spans the entire page
 * Creates visual continuity by showing a network of connecting lines
 * that connects all sections as "one operating system".
 * Enhanced with scroll-driven progression and "wake-up" logic for nodes/lines.
 */
export function SystemThread() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => setViewportHeight(window.innerHeight);
        const handleScroll = () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
            setScrollProgress(Math.min(progress, 1));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        // Initial checks
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Calculate which areas are "active" based on scroll
    // This drives the opacity of the network lines
    const activeStates = useMemo(() => {
        return [0.1, 0.3, 0.5, 0.7, 0.9].map(threshold => {
            const distance = Math.abs(scrollProgress - threshold);
            return Math.max(0, 1 - distance * 4); // Peak at threshold, fade out
        });
    }, [scrollProgress]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Network of Connecting Lines - spans entire viewport */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                {/* Subtle base grid */}
                <defs>
                    <pattern id="system-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#system-grid)" />

                {/* Main network lines - opacity driven by activeStates */}
                {/* Left to center diagonal */}
                <line x1="5%" y1="20%" x2="40%" y2="35%" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"
                    style={{ opacity: 0.1 + activeStates[0] * 0.4 }} />

                {/* Center to right diagonal */}
                <line x1="40%" y1="35%" x2="85%" y2="25%" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1"
                    style={{ opacity: 0.1 + activeStates[1] * 0.4 }} />

                {/* Right side going down */}
                <line x1="85%" y1="25%" x2="70%" y2="55%" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"
                    style={{ opacity: 0.1 + activeStates[2] * 0.4 }} />

                {/* Bottom left arc */}
                <line x1="70%" y1="55%" x2="25%" y2="65%" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1"
                    style={{ opacity: 0.1 + activeStates[3] * 0.4 }} />

                {/* Closing the loop */}
                <line x1="25%" y1="65%" x2="10%" y2="45%" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"
                    style={{ opacity: 0.1 + activeStates[4] * 0.3 }} />

                {/* Traveling Progress "Signal" pulse along the grid */}
                <circle
                    r="4"
                    fill="rgba(59, 130, 246, 0.6)"
                    className="filter blur-[2px]"
                    style={{
                        cx: `${5 + scrollProgress * 90}%`,
                        cy: `${10 + scrollProgress * 80}%`,
                        transition: "cx 0.2s linear, cy 0.2s linear"
                    }}
                />
            </svg>

            {/* Network Nodes at intersection points - scale/glow based on scroll */}
            <div className={`absolute top-[20%] left-[5%] w-2 h-2 bg-blue-500/30 rounded-full transition-all duration-500 ${activeStates[0] > 0.5 ? 'scale-150 shadow-[0_0_10px_rgba(59, 130, 246, 0.5)]' : 'scale-100'}`} />
            <div className={`absolute top-[35%] left-[40%] w-3 h-3 bg-green-500/35 rounded-full transition-all duration-500 ${activeStates[1] > 0.5 ? 'scale-125 shadow-[0_0_12px_rgba(16, 185, 129, 0.5)]' : 'scale-100'}`} />
            <div className={`absolute top-[25%] right-[15%] w-2 h-2 bg-blue-400/30 rounded-full transition-all duration-500 ${activeStates[1] > 0.7 ? 'scale-150 shadow-[0_0_10px_rgba(96, 165, 250, 0.5)]' : 'scale-100'}`} />
            <div className={`absolute top-[55%] right-[30%] w-2 h-2 bg-green-400/30 rounded-full transition-all duration-500 ${activeStates[2] > 0.6 ? 'scale-150 shadow-[0_0_10px_rgba(74, 222, 128, 0.5)]' : 'scale-100'}`} />
            <div className={`absolute top-[65%] left-[25%] w-2 h-2 bg-blue-500/30 rounded-full transition-all duration-500 ${activeStates[3] > 0.6 ? 'scale-150 shadow-[0_0_10px_rgba(59, 130, 246, 0.5)]' : 'scale-100'}`} />

            {/* Scroll Progress Indicator - Progressing vertical line */}
            <div className="absolute left-4 md:left-8 top-[5%] bottom-[5%] w-px">
                {/* Background "Path" */}
                <div className="absolute inset-0 bg-blue-500/10" />

                {/* Active Progress Line */}
                <div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-green-500 to-blue-400 shadow-[0_0_8px_rgba(59, 130, 246, 0.4)]"
                    style={{
                        height: `${scrollProgress * 100}%`,
                        transition: "height 0.15s linear"
                    }}
                />

                {/* Traveling Cursor/Head on progress line */}
                <div
                    className="absolute w-2 h-2 -left-[3.5px] bg-white rounded-full border border-blue-500 shadow-[0_0_10px_white]"
                    style={{
                        top: `${scrollProgress * 100}%`,
                        transition: "top 0.15s linear",
                        transform: "translateY(-50%)"
                    }}
                />
            </div>
        </div>
    );
}
