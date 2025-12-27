"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="sticky top-0 z-50">


            <nav className="border-b border-gray-200 bg-white">
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
                                <span className="hidden xl:block text-sm font-medium text-gray-500 ml-2 border-l pl-2 border-gray-300">
                                    Innovation Hub
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex space-x-8">
                            {/* Solutions Dropdown */}
                            <div className="relative group">
                                <button className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors py-5 gap-1 outline-none">
                                    Solutions <ChevronDown className="h-3 w-3" />
                                </button>
                                <div className="absolute left-0 w-56 mt-0 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-2 space-y-1">
                                        <Link href="/services" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm">
                                            <span className="font-bold text-gray-900 block mb-0.5">Services</span>
                                            <span className="text-xs text-gray-500">Solar, WiFi & Infrastructure</span>
                                        </Link>
                                        <Link href="/home-automation" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm">
                                            <span className="font-bold text-gray-900 block mb-0.5">Home Automation</span>
                                            <span className="text-xs text-gray-500">Smart Living & Security</span>
                                        </Link>
                                        <Link href="/products-finder" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm">
                                            <span className="font-bold text-gray-900 block mb-0.5">Hardware Store</span>
                                            <span className="text-xs text-gray-500">Shop equipment & parts</span>
                                        </Link>
                                        <Link href="/ev-charging" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm">
                                            <span className="font-bold text-gray-900 block mb-0.5">EV Network</span>
                                            <span className="text-xs text-gray-500">Charging stations map</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Resources Dropdown */}
                            <div className="relative group">
                                <button className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors py-5 gap-1 outline-none">
                                    Resources <ChevronDown className="h-3 w-3" />
                                </button>
                                <div className="absolute left-0 w-56 mt-0 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-2 space-y-1">
                                        <Link href="/academy" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm">
                                            <span className="font-bold text-gray-900 block mb-0.5">Academy</span>
                                            <span className="text-xs text-gray-500">Training & Certification</span>
                                        </Link>
                                        <Link href="/calculator" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm">
                                            <span className="font-bold text-gray-900 block mb-0.5">ROI Calculator</span>
                                            <span className="text-xs text-gray-500">Estimate your savings</span>
                                        </Link>
                                        <Link href="/innovation" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm">
                                            <span className="font-bold text-gray-900 block mb-0.5">Submit Idea</span>
                                            <span className="text-xs text-gray-500">Innovation program</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/about" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors py-5">
                                About & Trust
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-48' : 'w-8'}`}>
                                {isSearchOpen ? (
                                    <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/products-finder?q=${encodeURIComponent(searchQuery)}`; }} className="w-full relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onBlur={() => !searchQuery && setIsSearchOpen(false)}
                                            autoFocus
                                            placeholder="Search..."
                                            className="w-full bg-gray-100 text-sm border-none rounded-full py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-red-500 outline-none"
                                        />
                                        <button type="submit" className="absolute right-2 top-1.5 p-0.5 text-gray-500 hover:text-red-600">
                                            <Search className="h-3 w-3" />
                                        </button>
                                    </form>
                                ) : (
                                    <button
                                        onClick={() => setIsSearchOpen(true)}
                                        className="text-gray-500 hover:text-gray-900"
                                        aria-label="Search"
                                    >
                                        <Search className="h-5 w-5" />
                                    </button>
                                )}
                            </div>
                            <Link href="/partner" className="hidden lg:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                                Partner Portal
                            </Link>
                            <div className="lg:hidden">
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
                    <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
                        <div className="space-y-1 pt-2 pb-3 px-4">
                            <div className="py-2">
                                <div className="font-bold text-gray-900 mb-2 px-2">Solutions</div>
                                <div className="space-y-1 pl-4 border-l-2 border-gray-100">
                                    <Link href="/services" className="block py-2 text-sm text-gray-600">Services</Link>
                                    <Link href="/products-finder" className="block py-2 text-sm text-gray-600">Products</Link>
                                    <Link href="/ev-charging" className="block py-2 text-sm text-gray-600">EV Network</Link>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="font-bold text-gray-900 mb-2 px-2">Resources</div>
                                <div className="space-y-1 pl-4 border-l-2 border-gray-100">
                                    <Link href="/academy" className="block py-2 text-sm text-gray-600">Academy</Link>
                                    <Link href="/calculator" className="block py-2 text-sm text-gray-600">ROI Calculator</Link>
                                    <Link href="/innovation" className="block py-2 text-sm text-gray-600">Submit Idea</Link>
                                </div>
                            </div>
                            <Link href="/about" className="block py-3 text-base font-bold text-gray-900 border-t border-gray-100">About & Trust</Link>
                            <div className="pt-4 space-y-3">
                                <Link href="/partner" className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-red-700">Partner Portal</Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
