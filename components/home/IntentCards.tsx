"use client";

import Link from "next/link";
import { Zap, Plug, Home, GraduationCap, Handshake, ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation/ConsultationContext";

interface IntentCard {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    action?: string;
    color: string;
    gradient: string;
}

const INTENT_CARDS: IntentCard[] = [
    {
        title: "Deploy or Expand a Service",
        description: "Solar, EV charging, security systems—deployed and maintained by TechStore",
        icon: Zap,
        href: "#services",
        action: "consultation",
        color: "text-red-600",
        gradient: "from-red-500/10 to-red-600/10"
    },
    {
        title: "Home Automation",
        description: "Smart living solutions for modern homes. Configurable packages.",
        icon: Home,
        href: "/home-automation",
        color: "text-red-500",
        gradient: "from-red-500/10 to-red-600/10"
    },
    {
        title: "Find EV Charging",
        description: "Locate charging stations across Beirut, Tripoli, Jounieh, and Dbayeh",
        icon: Plug,
        href: "/ev-charging",
        color: "text-red-600",
        gradient: "from-red-500/10 to-red-900/10"
    },
    {
        title: "Shop Hardware",
        description: "Buy professional grade components directly from our store.",
        icon: Handshake,
        href: "/products-finder",
        color: "text-gray-600",
        gradient: "from-gray-500/10 to-gray-600/10"
    }
];

export function IntentCards() {
    const { openModal } = useConsultation();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What are you here to do?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose your path into the TechStore Innovation Hub
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {INTENT_CARDS.map((card) => {
                        const Icon = card.icon;
                        const isAction = card.action === 'consultation';

                        const CardContent = (
                            <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 p-8 transition-all duration-200 hover:border-transparent hover:shadow-2xl hover:-translate-y-1">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-[0_0_30px_rgba(220,38,38,0.2)]" />

                                {/* Content */}
                                <div className="relative z-10 text-left">
                                    {/* Icon */}
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-6 ${card.color} group-hover:scale-110 transition-transform duration-200`}>
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-900">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {card.description}
                                    </p>

                                    {/* CTA */}
                                    <div className={`inline-flex items-center gap-2 font-semibold ${card.color} group-hover:gap-3 transition-all duration-200`}>
                                        {isAction ? 'Request Consultation' : 'Get Started'}
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
                            </div>
                        );

                        if (isAction) {
                            return (
                                <button
                                    key={card.title}
                                    onClick={openModal}
                                    className="group relative block w-full text-left"
                                >
                                    {CardContent}
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group relative block"
                            >
                                {CardContent}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
