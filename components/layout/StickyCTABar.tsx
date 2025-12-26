"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X, Phone } from "lucide-react";
import { useConsultation } from "@/components/consultation/ConsultationContext";

export function StickyCTABar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const { openModal } = useConsultation();

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 600px (approx height of Hero)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isDismissed || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-500 transform translate-y-0 animate-in slide-in-from-bottom-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Text */}
                    <div className="flex-1 text-center sm:text-left">
                        <p className="text-gray-900 font-bold text-base md:text-lg">
                            Ready to power your project?
                            <span className="hidden md:inline font-normal text-gray-600 ml-2">
                                Get a free technical assessment today.
                            </span>
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:+9611234567"
                            className="hidden md:inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 transition-colors"
                            aria-label="Call Now"
                        >
                            <Phone className="h-5 w-5" />
                        </a>

                        <button
                            onClick={openModal}
                            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-900/20 transition-all text-sm sm:text-base animate-pulse hover:animate-none"
                        >
                            Book Free Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>

                        <button
                            onClick={() => setIsDismissed(true)}
                            className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-full transition-colors"
                            aria-label="Dismiss"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
