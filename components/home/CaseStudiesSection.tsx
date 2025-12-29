"use client";

import Link from "next/link";
import { CASE_STUDIES, CaseStudy } from "@/lib/data/caseStudies";
import { ArrowUpRight, Sun, Zap, Home, Wifi } from "lucide-react";
import Image from "next/image";

const CATEGORY_ICONS: Record<CaseStudy["category"], React.ElementType> = {
    solar: Sun,
    ev: Zap,
    automation: Home,
    infrastructure: Wifi,
};

const CATEGORY_COLORS: Record<CaseStudy["category"], string> = {
    solar: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
    ev: "bg-green-500/10 text-green-600 border-green-200",
    automation: "bg-red-500/10 text-red-600 border-red-200",
    infrastructure: "bg-purple-500/10 text-purple-600 border-purple-200",
};

function CaseStudyCard({ study }: { study: CaseStudy }) {
    const Icon = CATEGORY_ICONS[study.category];

    return (
        <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${CATEGORY_COLORS[study.category]}`}>
                    <Icon className="h-3 w-3" />
                    {study.category}
                </div>

                {/* Metric Overlay */}
                <div className="absolute bottom-4 left-4 z-20">
                    <div className="text-4xl font-black text-white">{study.metric.value}</div>
                    <div className="text-xs text-white/80 font-medium uppercase tracking-wider">{study.metric.label}</div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {study.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                    {study.client} • {study.location}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {study.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-sm font-semibold text-red-600 group-hover:underline">
                    View Project Details
                    <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/5 group-hover:ring-red-500/20 transition-all pointer-events-none" />
        </div>
    );
}

export function CaseStudiesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-xs font-bold text-red-700 uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        Proven Impact
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Deployed in the Real World
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From municipal infrastructure to private industry—see how our
                        managed deployments are transforming Lebanon.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CASE_STUDIES.map((study) => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors shadow-lg"
                    >
                        See All Deployments
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
