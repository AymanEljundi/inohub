import Link from "next/link";
import { ArrowRight, Zap, Shield, Wifi, Server } from "lucide-react";

export const metadata = {
    title: "Solutions | TechStore Innovation Hub",
    description: "Enterprise-grade infrastructure solutions. Solar, Connectivity, Security, and Data Center services.",
};

const solutions = [
    {
        id: "energy",
        title: "Energy & Power",
        description: "Turnkey solar, battery storage, and generator synchronization systems.",
        icon: Zap,
        href: "/services/solar-power",
        color: "red"
    },
    {
        id: "connectivity",
        title: "Connectivity",
        description: "Fiber optic backbones and long-range wireless bridges for campuses.",
        icon: Wifi,
        href: "/services/networking",
        color: "blue" // Using brand accents if desired, or stick to red
    },
    {
        id: "security",
        title: "Physical Security",
        description: "AI-powered CCTV, access control, and perimeter detection.",
        icon: Shield,
        href: "/home-automation", // Logic mapping
        color: "red"
    },
    {
        id: "it",
        title: "IT Infrastructure",
        description: "Server room design, structured cabling, and data management.",
        icon: Server,
        href: "/products-finder",
        color: "red"
    }
];

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative isolate overflow-hidden bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-base font-semibold leading-7 text-red-600">Enterprise Solutions</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Infrastructure for the Modern Era
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We design, deploy, and manage the critical systems that keep your business running.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {solutions.map((solution) => (
                            <Link
                                key={solution.id}
                                href={solution.href}
                                className="flex flex-col gap-y-4 rounded-2xl bg-white p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-xl hover:ring-red-500/20 transition-all group"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 group-hover:bg-red-500 transition-colors">
                                        <solution.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                                </div>
                                <p className="flex-auto text-base text-gray-600">{solution.description}</p>
                                <div className="mt-4 flex items-center text-sm font-semibold text-red-600 group-hover:text-red-500">
                                    Explore Solution <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
