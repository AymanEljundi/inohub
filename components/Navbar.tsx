"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Helper component for nav links with active state
function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            className={`inline-flex items-center text-sm font-medium transition-colors py-5 relative ${isActive
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-gray-700 hover:text-primary"
                } ${className}`}
        >
            {children}
        </Link>
    );
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();

    // Check if current path is in a dropdown group
    const isSolutionsActive = ["/solutions", "/services", "/home-automation", "/ev-charging"].some(p => pathname.startsWith(p));
    const isCompanyActive = ["/about", "/investors", "/academy", "/partner"].some(p => pathname.startsWith(p));

    return (
        <div className="sticky top-0 z-50">
            {/* Glassmorphism Nav */}
            <nav className="border-b border-gray-200/50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between items-center">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex-shrink-0 flex items-center gap-2"
                            >
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
                                <Link
                                    href="/solutions"
                                    className={`inline-flex items-center text-sm font-medium transition-colors py-5 gap-1 outline-none relative ${isSolutionsActive
                                            ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                                            : "text-gray-700 hover:text-primary"
                                        }`}
                                >
                                    Solutions <ChevronDown className="h-3 w-3" />
                                </Link>
                                {/* Dark themed dropdown */}
                                <div className="absolute left-0 w-56 mt-0 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-2 space-y-1">
                                        <Link href="/services" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">All Services</span>
                                            <span className="text-xs text-gray-400">Catalog Dashboard</span>
                                        </Link>
                                        <div className="h-px bg-gray-800 my-1"></div>
                                        <Link href="/services/solar-power" className="block px-4 py-2 rounded-lg hover:bg-gray-800 text-sm font-medium text-gray-300 whitespace-nowrap">
                                            Solar & Power
                                        </Link>
                                        <Link href="/home-automation" className="block px-4 py-2 rounded-lg hover:bg-gray-800 text-sm font-medium text-gray-300 whitespace-nowrap">
                                            Automation
                                        </Link>
                                        <Link href="/ev-charging" className="block px-4 py-2 rounded-lg hover:bg-gray-800 text-sm font-medium text-gray-300 whitespace-nowrap">
                                            EV Network
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Products */}
                            <NavLink href="/products-finder">Products</NavLink>

                            {/* Developers */}
                            <NavLink href="/developers">Developers</NavLink>

                            {/* Company Dropdown */}
                            <div className="relative group">
                                <button className={`inline-flex items-center text-sm font-medium transition-colors py-5 gap-1 outline-none relative ${isCompanyActive
                                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                                        : "text-gray-700 hover:text-primary"
                                    }`}>
                                    Company <ChevronDown className="h-3 w-3" />
                                </button>
                                {/* Dark themed dropdown */}
                                <div className="absolute left-0 w-56 mt-0 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-2 space-y-1">
                                        <Link href="/about" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">About Us</span>
                                            <span className="text-xs text-gray-400">Mission & Team</span>
                                        </Link>
                                        <Link href="/investors" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">Investors</span>
                                            <span className="text-xs text-gray-400">Financials & Impact</span>
                                        </Link>
                                        <Link href="/academy" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">Academy</span>
                                            <span className="text-xs text-gray-400">Training & Certs</span>
                                        </Link>
                                        <Link href="/partner" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">Partners</span>
                                            <span className="text-xs text-gray-400">Join our network</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md max-h-[80vh] overflow-y-auto">
                        <div className="space-y-1 pt-2 pb-3 px-4">
                            <div className="py-2">
                                <div className="font-bold text-gray-900 mb-2 px-2">Solutions</div>
                                <div className="space-y-1 pl-4 border-l-2 border-gray-100">
                                    <Link href="/solutions" className="block py-2 text-sm font-semibold text-gray-800">Overview</Link>
                                    <Link href="/services" className="block py-2 text-sm text-gray-600">Services Catalog</Link>
                                    <Link href="/home-automation" className="block py-2 text-sm text-gray-600">Home Automation</Link>
                                    <Link href="/ev-charging" className="block py-2 text-sm text-gray-600">EV Network</Link>
                                </div>
                            </div>

                            <Link href="/products-finder" className="block py-3 text-base font-bold text-gray-900 border-t border-gray-100">
                                Products
                            </Link>

                            <Link href="/developers" className="block py-3 text-base font-bold text-gray-900 border-t border-gray-100">
                                Developers
                            </Link>

                            <div className="py-2 border-t border-gray-100">
                                <div className="font-bold text-gray-900 mb-2 px-2">Company</div>
                                <div className="space-y-1 pl-4 border-l-2 border-gray-100">
                                    <Link href="/about" className="block py-2 text-sm text-gray-600">About Us</Link>
                                    <Link href="/investors" className="block py-2 text-sm text-gray-600">Investors</Link>
                                    <Link href="/academy" className="block py-2 text-sm text-gray-600">Academy</Link>
                                    <Link href="/partner" className="block py-2 text-sm text-gray-600">Partners</Link>
                                </div>
                            </div>

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
