"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X, Phone, ChevronUp } from "lucide-react";
import { useConsultation } from "@/components/consultation/ConsultationContext";

const STORAGE_KEY = "cta_bar_dismissed";
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export function StickyCTABar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(true); // Start hidden to prevent flash
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { openModal } = useConsultation();

    // Check localStorage on mount
    useEffect(() => {
        const dismissedAt = localStorage.getItem(STORAGE_KEY);
        if (dismissedAt) {
            const timeSinceDismiss = Date.now() - parseInt(dismissedAt, 10);
            if (timeSinceDismiss < DISMISS_DURATION_MS) {
                setIsDismissed(true);
                return;
            }
        }
        setIsDismissed(false);
    }, []);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDismiss = () => {
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
        setIsDismissed(true);
    };

    const handleCollapse = () => {
        setIsCollapsed(true);
    };

    const handleExpand = () => {
        setIsCollapsed(false);
    };

    if (isDismissed || !isVisible) return null;

    // Collapsed state - minimal floating button (positioned on left to avoid chat widget overlap)
    if (isCollapsed) {
        return (
            <button
                onClick={handleExpand}
                className="fixed bottom-20 left-4 z-40 bg-primary hover:bg-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
                aria-label="Show consultation bar"
                title="Book Free Consultation"
            >
                <ChevronUp className="h-5 w-5 group-hover:animate-bounce" />
            </button>
        );
    }

    return (
        <>
            {/* Spacer to prevent content from being hidden behind the bar on mobile */}
            <div className="h-20 sm:h-0" aria-hidden="true" />

            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-500 transform translate-y-0 animate-in slide-in-from-bottom-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
                    <div className="flex items-center justify-between gap-3">

                        {/* Text - Hidden on very small screens */}
                        <div className="hidden sm:block flex-1 text-left">
                            <p className="text-gray-900 font-bold text-sm md:text-base">
                                Ready to power your project?
                                <span className="hidden lg:inline font-normal text-gray-600 ml-2">
                                    Get a free technical assessment today.
                                </span>
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
                            <a
                                href="tel:+9611234567"
                                className="hidden md:inline-flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label="Call Now"
                            >
                                <Phone className="h-5 w-5" />
                            </a>

                            <button
                                onClick={openModal}
                                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 bg-primary hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-900/20 transition-all text-sm"
                            >
                                <span className="hidden sm:inline">Book Free Consultation</span>
                                <span className="sm:hidden">Get Quote</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>

                            {/* Collapse button (minimize) */}
                            <button
                                onClick={handleCollapse}
                                className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors"
                                aria-label="Minimize"
                                title="Minimize"
                            >
                                <ChevronUp className="h-4 w-4 rotate-180" />
                            </button>

                            {/* Dismiss button (close for 24h) */}
                            <button
                                onClick={handleDismiss}
                                className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors"
                                aria-label="Dismiss for 24 hours"
                                title="Dismiss for 24 hours"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
