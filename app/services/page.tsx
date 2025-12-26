import { services } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Services Catalog | TechStore Innovation Hub",
    description: "Browse our range of professional tech services available for rent or deployment.",
};

export default function ServicesIndex() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Service Catalog
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Discover scalable infrastructure, event technology, and security solutions.
                        Ready to deploy across Lebanon.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-primary/50 transition-all group"
                        >
                            <div className="relative h-48 w-full bg-gray-200">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-primary z-10">
                                    {service.status}
                                </div>
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
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
                                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                                            {service.availabilityType} Model
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        View <ArrowRight className="ml-1 h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
