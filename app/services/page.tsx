"use client";

import { services } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Server, Shield, Globe } from "lucide-react";
import { ROICalculator } from "@/components/calculator/ROICalculator";

export default function ServicesIndex() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Standardized System Dark Theme */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                {/* Background Gradient */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.800),theme(colors.gray.900))] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-red-600/10 ring-1 ring-gray-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <div className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-red-400 ring-1 ring-inset ring-red-400/20 bg-red-500/10">
                                <span className="w-2 h-2 bg-red-400 rounded-full inline-block mr-2 animate-pulse"></span>
                                ENTERPRISE GRADE
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Powering Lebanon&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Critical Infrastructure</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            From solar arrays to fiber networks, we deploy and manage the systems that keep businesses running 24/7.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#calculator" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all flex items-center gap-2">
                                <Zap className="h-4 w-4" /> Estimate Savings
                            </a>
                            <a href="#catalog" className="text-sm font-semibold leading-6 text-white group">
                                View Service Catalog <ArrowRight className="inline-block h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Proposition */}
            <div className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-primary">Reliability First</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Infrastructure you can trust.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Solar & Power
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Turnkey solar installations with battery backup and generator synchronization. Keeping the lights on, always.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Connectivity
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    High-speed fiber optic networks and long-range WiFi bridges for campuses, hotels, and remote sites.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Security Systems
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Advanced CCTV with AI analytics, access control, and perimeter detection linked to central monitoring.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Server className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    IT Infrastructure
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Data center design, structured cabling, and server management for robust business operations.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Interactive Tool: ROI Calculator */}
            <div id="calculator" className="py-16 sm:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Estimate Your Savings</h2>
                        <p className="mt-4 text-lg text-gray-600">See how much you can save by switching to our Solar or EV solutions.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl mb-8 flex gap-3 text-sm text-yellow-800">
                            <Zap className="h-5 w-5 flex-none" />
                            <p><strong>Note:</strong> Estimates are based on average rates in Lebanon. For a precise quote, please book a consultation.</p>
                        </div>
                        <ROICalculator />
                    </div>
                </div>
            </div>

            {/* Service Catalog Grid */}
            <div id="catalog" className="py-16 sm:py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Service Catalog</h2>
                        <p className="mt-4 text-lg text-gray-600">Browse our ready-to-deploy solutions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
                            >
                                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-primary z-20 shadow-sm">
                                        {service.status}
                                    </div>
                                </div>

                                <div className="flex-1 p-6 flex flex-col">
                                    <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                                        {service.category}
                                    </p>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            {service.pricing.permanent ? (
                                                <span className="text-sm font-bold text-gray-900">
                                                    ${service.pricing.permanent.amount}
                                                    <span className="text-xs font-normal text-gray-400 ml-1">/{service.pricing.permanent.unit}</span>
                                                </span>
                                            ) : (
                                                <span className="text-sm font-bold text-gray-900">
                                                    ${service.pricing.event?.amount}
                                                    <span className="text-xs font-normal text-gray-400 ml-1">/{service.pricing.event?.unit}</span>
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-sm font-bold text-primary flex items-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                            Details <ArrowRight className="ml-1 h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
