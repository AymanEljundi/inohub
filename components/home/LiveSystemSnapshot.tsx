"use client";

import { useEffect, useState, useRef } from "react";
import { Activity, Zap, GraduationCap, TrendingUp } from "lucide-react";

interface Stat {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: number;
    suffix: string;
    color: string;
}

const STATS: Stat[] = [
    {
        icon: Zap,
        label: "EV Stations Online",
        value: 47,
        suffix: "",
        color: "text-blue-500"
    },
    {
        icon: Activity,
        label: "Cities Covered",
        value: 4,
        suffix: "",
        color: "text-green-500"
    },
    {
        icon: TrendingUp,
        label: "Solar Capacity",
        value: 12.4,
        suffix: " MW",
        color: "text-yellow-500"
    },
    {
        icon: GraduationCap,
        label: "Academy Sessions",
        value: 8,
        suffix: " this month",
        color: "text-purple-500"
    }
];

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!shouldStart || hasAnimated) return;

        // Use setTimeout to avoid synchronous setState
        setTimeout(() => {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = 0;

            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);

                // Easing function (ease-out)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = startValue + (end - startValue) * easeOut;

                setCount(current);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }, 0);
    }, [end, duration, shouldStart, hasAnimated]);

    return count;
}

// Component for individual stat card
function StatCard({ stat, index, isVisible }: { stat: Stat; index: number; isVisible: boolean }) {
    const Icon = stat.icon;
    const animatedValue = useCountUp(stat.value, 2000, isVisible);
    const displayValue = stat.value % 1 !== 0
        ? animatedValue.toFixed(1)
        : Math.floor(animatedValue);

    return (
        <div
            className="relative group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${index * 100}ms`
            }}
        >
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 ${stat.color}`}>
                <Icon className="h-6 w-6" />
            </div>

            {/* Value */}
            <div className="text-4xl font-bold text-gray-900 mb-1 font-mono">
                {displayValue}{stat.suffix}
            </div>

            {/* Label */}
            <div className="text-sm text-gray-600 font-medium">
                {stat.label}
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-green-500/0 group-hover:from-blue-500/5 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none" />
        </div>
    );
}

export function LiveSystemSnapshot() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="relative py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-white">
            {/* Connector line from hero */}
            <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-bold text-green-700 uppercase tracking-wider mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                        </span>
                        Live System Status
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Platform Activity
                    </h2>
                    <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
                        Real-time snapshot of deployed infrastructure across Lebanon
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STATS.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
                    ))}
                </div>

                {/* Additional Context */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Updated in real-time • Last sync: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                </div>
            </div>
        </section>
    );
}
