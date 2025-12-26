"use client";

import Link from "next/link";
import Image from "next/image";
import { Rocket, Menu, X, ChevronDown, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex-shrink-0 flex items-center gap-2"
                        >
                            {/* Logo - using the downloaded asset */}
                            <Image
                                src="/images/logo.png"
                                alt="TechStore Innovation Hub"
                                width={140}
                                height={40}
                                className="h-8 w-auto object-contain"
                                priority
                            />
                            <span className="hidden md:block text-sm font-medium text-gray-500 ml-2 border-l pl-2 border-gray-300">
                                Innovation Hub
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link href="/services" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            Services
                        </Link>
                        {/* Added Products link */}
                        <Link
                            href="/products-finder"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                            title="Find Hardware Products"
                        >
                            Products <ExternalLink className="ml-1 h-3 w-3 opacity-50" />
                        </Link>
                        <Link href="/ev-charging" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            EV Network
                        </Link>
                        <Link href="/academy" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            Academy
                        </Link>
                        <Link href="/innovation" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            Submit Idea
                        </Link>
                        <Link href="/about" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            About & Trust
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-gray-500 hover:text-gray-900" aria-label="Search">
                            <Search className="h-5 w-5" />
                        </button>
                        <Link href="/partner" className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md transition-all">
                            Partner Portal
                        </Link>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-500 hover:text-gray-900"
                                aria-label="Toggle Menu"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="space-y-1 pt-2 pb-3 px-4">
                        <Link href="/" className="block py-2 text-base font-medium text-gray-900">Home</Link>
                        <Link href="/services" className="block py-2 text-base font-medium text-gray-500">Services</Link>
                        <Link href="/calculator" className="block py-2 text-base font-medium text-gray-500">ROI Calculator</Link>
                        <Link href="/products-finder" className="block py-2 text-base font-medium text-gray-500">Products</Link>
                        <Link href="/ev-charging" className="block py-2 text-base font-medium text-gray-500">EV Network</Link>
                        <Link href="/academy" className="block py-2 text-base font-medium text-gray-500">Academy</Link>
                        <Link href="/innovation" className="block py-2 text-base font-medium text-gray-500">Submit Idea</Link>
                        <Link href="/about" className="block py-2 text-base font-medium text-gray-500">About</Link>
                        <Link href="/partner" className="block py-2 text-base font-medium text-primary">Partner Portal</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
