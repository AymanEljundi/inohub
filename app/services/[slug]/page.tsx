"use client";

import { services } from "@/data/services";
import { AvailabilityModule } from "@/components/availability/AvailabilityModule";
import { SolutionExpansionPanel } from "@/components/solutions/ExpansionPanel";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

function getStatusColor(status: string) {
    switch (status) {
        case 'Live': return 'bg-green-100 text-green-700 border-green-200';
        case 'Pilot': return 'bg-blue-100 text-blue-700 border-blue-200';
        case 'Concept': return 'bg-purple-100 text-purple-700 border-purple-200';
        case 'Expanding': return 'bg-orange-100 text-orange-700 border-orange-200';
        default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = services.find(s => s.slug === slug);

    if (!service) return notFound();

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header / Hero */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex gap-3 mb-6">
                                <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border ${getStatusColor(service.status)}`}>
                                    {service.status} Phase
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-gray-100 text-gray-600 border border-gray-200">
                                    {service.category}
                                </span>
                            </div>
                            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">{service.title}</h1>
                            <p className="text-xl text-gray-500 leading-relaxed mb-8">{service.description}</p>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span className="flex items-center"><ShieldCheck className="h-5 w-5 mr-2 text-primary" /> {service.deploymentModel} Model</span>
                                <span className="flex items-center"><Zap className="h-5 w-5 mr-2 text-yellow-500" /> {service.availabilityType === 'Hybrid' ? 'Flexible Deployment' : service.availabilityType + ' Availability'}</span>
                            </div>
                        </div>
                        <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Specs & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.specs.map((spec, i) => (
                                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                                        <span className="text-xs font-bold uppercase text-gray-400 mb-1">{spec.label}</span>
                                        <span className="text-lg font-semibold text-gray-900">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* EXPANSION PANEL INSERTION */}
                        <SolutionExpansionPanel serviceId={service.slug} />

                    </div>

                    {/* Right Column: Availability Module */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Zap className="h-5 w-5 text-primary mr-2" />
                                Check Availability
                            </h2>
                            <AvailabilityModule service={service} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
