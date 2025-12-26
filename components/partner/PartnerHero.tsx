"use client";

import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";

export function PartnerHero() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100 mb-6">
                                <ShieldCheck className="h-4 w-4 mr-2" /> Trusted by 12+ Municipalities
                            </span>
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                                <span className="block xl:inline">Monetize your</span>{' '}
                                <span className="block text-primary xl:inline">unused space.</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Partner with TechStore to deploy automated infrastructure—WiFi towers, Solar arrays, EV chargers—on your property. We handle the hardware; you share the revenue.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                                <div className="flex items-center text-sm font-medium text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Zero Capital Investment
                                </div>
                                <div className="flex items-center text-sm font-medium text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Passive Income Stream
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="#register" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg transition-all shadow-lg">
                                    Start Earning
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
                <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="h-3 w-20 bg-gray-200 rounded mb-4"></div>
                            <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                            <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                            <div className="h-3 w-20 bg-gray-200 rounded mb-4"></div>
                            <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                            <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
