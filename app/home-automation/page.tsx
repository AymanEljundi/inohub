import { ArrowRight, Zap, Shield, Smartphone, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
// We will create these components next
import { Configurator } from "@/components/home-automation/Configurator";
import { ReadinessQuiz } from "@/components/home-automation/ReadinessQuiz";
import { Packages } from "@/components/home-automation/Packages";
import { ConsultationForm } from "@/components/home-automation/ConsultationForm";

export const metadata = {
    title: "Home Automation & Smart Living | TechStore Innovation Hub",
    description: "Transform your home with AI-powered automation, advanced security, and energy management. Tailored smart home solutions for Lebanon.",
};

export default function HomeAutomationPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Future-Ready Living, <span className="text-primary">Today.</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Experience the ultimate control and comfort with our AI-powered home automation solutions.
                            Seamlessly integrate security, energy, and entertainment into one intuitive ecosystem.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#consultation" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                                Get a Free Consultation
                            </a>
                            <a href="#configurator" className="text-sm font-semibold leading-6 text-white group">
                                Build Your Package <ArrowRight className="inline-block h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Background gradient/effect - keeping it simple for now, maybe add image later */}
                <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                    <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary to-purple-500 opacity-25" style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }}></div>
                </div>
            </div>

            {/* Value Proposition / Overview */}
            <div className="py-24 sm:py-32 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-primary">Smart Living</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything works together, automatically.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            TechStore's Home Automation brings your existing devices and our premium hardware into a single, cohesive system.
                            Control everything from lighting to locks with your voice or a single app.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    AI-Driven Personalization
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Our system learns your habits over time. It adjusts lighting, temperature, and music automatically to suit your routine, saving you time and energy.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Energy Efficiency
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Smart thermostats and lighting controls ensure you only use energy when needed. Optimized for Lebanon's power challenges with UPS integration monitoring.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Advanced Security
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Biometric locks, AI-powered cameras that distinguish people from pets, and instant mobile alerts keep your home secure 24/7.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Smartphone className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Universal Connectivity
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Compatible with Matter, Apple HomeKit, Amazon Alexa, and Google Home. If it connects, we can automate it.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <Heart className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Health & Wellness
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Monitor air quality, humidity, and even sleep patterns. Automated purification and Circadian lighting to improve your well-being.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Interactive Configurator Section */}
            <div id="configurator" className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Build Your Smart Home Package</h2>
                        <p className="mt-4 text-lg text-gray-600">Select your rooms and desired features to get a tailored recommendation.</p>
                    </div>
                    <Configurator />
                </div>
            </div>

            {/* Packages Section */}
            <div className="py-16 bg-gray-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Curated Packages</h2>
                        <p className="mt-4 text-lg text-gray-400">Choose from our popular pre-configured setups.</p>
                    </div>
                    <Packages />
                </div>
            </div>

            {/* Readiness Quiz */}
            <div className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Is Your Home Ready?</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Take our quick 2-minute quiz to assess your current infrastructure (WiFi, wiring, devices) and get a readiness score.
                                We'll let you know exactly what you need to get started.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl ring-1 ring-gray-900/10">
                            <ReadinessQuiz />
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultation Form */}
            <div id="consultation" className="relative isolate bg-white pb-16 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-3xl p-8 sm:p-16 ring-1 ring-gray-900/10">
                        <div className="mx-auto max-w-2xl text-center mb-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Book a Free Consultation</h2>
                            <p className="mt-2 text-lg text-gray-600">Our experts will visit your home, assess your needs, and design the perfect system for you.</p>
                        </div>
                        <ConsultationForm />
                    </div>
                </div>
            </div>

        </div>
    );
}
