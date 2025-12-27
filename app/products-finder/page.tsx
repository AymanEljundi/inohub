import { ProductSearchModule } from "@/components/products/ProductSearchModule";
import { ExternalCategoryGrid } from "@/components/products/ExternalCategoryGrid";
import { ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
    title: "Product Finder | TechStore Innovation Hub",
    description: "Official retail channel for premium hardware. Certified supply chain for servers, sensors, and networking equipment.",
    openGraph: {
        title: "Product Finder | TechStore",
        description: "Premium Hardware, Verified Quality. Sourced directly from manufacturers.",
        images: ["/og-products.png"]
    }
};

export default function ProductFinderPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Standardized System Dark Theme */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.800),theme(colors.gray.900))] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-red-600/10 ring-1 ring-gray-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <div className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-red-400 ring-1 ring-inset ring-red-400/20 bg-red-500/10">
                                <span className="w-2 h-2 bg-red-400 rounded-full inline-block mr-2 animate-pulse"></span>
                                OFFICIAL RETAIL
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Premium Hardware, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Verified Quality</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Source the exact components we use in our enterprise deployments. <br />
                            Professional grade servers, sensors, and networking gear.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#search" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all flex items-center gap-2">
                                <ShoppingBag className="h-4 w-4" /> Start Browsing
                            </a>
                            <a href="#categories" className="text-sm font-semibold leading-6 text-white group">
                                View Categories <ArrowRight className="inline-block h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Proposition */}
            <div className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-gray-900">Certified Supply Chain</h3>
                            <p className="text-sm text-gray-500">Sourced directly from manufacturers.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                <Truck className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-gray-900">Fast Deployment</h3>
                            <p className="text-sm text-gray-500">24-48 hour logistics across Lebanon.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-gray-900">Warranty Support</h3>
                            <p className="text-sm text-gray-500">Local RMA and technical support.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="search" className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ProductSearchModule />
                </div>
            </div>

            <div id="categories" className="py-16 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
                    </div>
                    <ExternalCategoryGrid />
                </div>
            </div>

        </div>
    );
}
