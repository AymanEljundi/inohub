import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Globe, Building } from "lucide-react";
import { RevenueChart } from "@/components/investors/RevenueChart";
import { MarketOpportunity } from "@/components/investors/MarketOpportunity";

export const metadata = {
    title: "Investors | TechStore Innovation Hub",
    description: "Scaling Lebanon's digital infrastructure. Financial highlights, strategic vision, and investment opportunities for Series A partners.",
    keywords: ["Lebanon Infrastructure Investment", "TechStore Financials", "Series A Lebanon", "Solar Investment", "Smart City Projects"],
    openGraph: {
        title: "Investors | TechStore Innovation Hub",
        description: "Scaling Lebanon's Digital Infrastructure. 500+ Deployments. 140% Revenue Growth.",
        type: "website",
        images: ["/og-investors.png"]
    }
};

export default function InvestorsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* ... Hero Section remains the same ... */}

            {/* Traction Grid (Stripe-like) */}
            <div className="py-24 bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                        {/* ... Stats remain the same ... */}
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Active Deployments</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">500+</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Yearly Revenue Growth</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">140%</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Cities Covered</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">4</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Retention Rate</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">98%</dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* Financial Performance Section */}
            <div className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-red-600">Financial Performance</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Validated Growth Model
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Our transition to recurring revenue models is driving exponential growth in a largely untapped market.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <RevenueChart />
                        <MarketOpportunity />
                    </div>
                </div>
            </div>

            {/* Investment Theses */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-red-600">Strategic Pillars</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Why TechStore?
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <TrendingUp className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Market Dominance
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    First-mover advantage in consolidated smart infrastructure for the MENA region.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Recurring Revenue
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Transitioning from hardware sales to high-margin &quot;Infrastructure-as-a-Service&quot; contracts.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Impact & ESG
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Direct contribution to carbon reduction through optimized solar and EV networks.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <Building className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Government Partnerships
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Strategic alliances with municipalities for city-wide deployments.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
