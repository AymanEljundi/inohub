"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Search, X, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

// Mobile nav link with active state
function MobileNavLink({ href, children, onClick, indent = false }: { href: string; children: React.ReactNode; onClick: () => void; indent?: boolean }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex items-center justify-between py-3 text-sm transition-colors ${indent ? "ps-4 border-s-2 border-gray-200" : ""
                } ${isActive ? "text-primary font-semibold" : "text-gray-600 hover:text-gray-900"}`}
        >
            {children}
            {isActive && <ChevronRight className="h-4 w-4 text-primary" />}
        </Link>
    );
}

export function Navbar({ dict }: { dict: any }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    // Check if current path is in a dropdown group
    const isSolutionsActive = ["/solutions", "/services", "/home-automation", "/ev-charging"].some(p => pathname.startsWith(p));
    const isCompanyActive = ["/about", "/investors", "/academy", "/partner"].some(p => pathname.startsWith(p));

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Keyboard accessibility - Escape key closes menu
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        if (isMenuOpen) {
            document.addEventListener("keydown", handleKeyDown);
            // Prevent body scroll when menu is open
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    // Focus trap for mobile menu
    useEffect(() => {
        if (isMenuOpen && menuRef.current) {
            const focusableElements = menuRef.current.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            firstElement?.focus();
        }
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

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
                                <span className="hidden xl:block text-sm font-medium text-gray-600 ms-2 border-s ps-2 border-gray-300">
                                    Innovation Hub
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Hidden below 768px (md breakpoint) */}
                        <div className="hidden md:flex space-x-6 lg:space-x-8">
                            {/* Solutions Dropdown */}
                            <div className="relative group">
                                <Link
                                    href="/solutions"
                                    className={`inline-flex items-center text-sm font-medium transition-colors py-5 gap-1 outline-none relative ${isSolutionsActive
                                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                                        : "text-gray-700 hover:text-primary"
                                        }`}
                                >
                                    {dict.nav.solutions} <ChevronDown className="h-3 w-3" />
                                </Link>
                                {/* Dark themed dropdown */}
                                <div className="absolute start-0 w-56 mt-0 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-2 space-y-1">
                                        <Link href="/services" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">{dict.nav.all_services}</span>
                                            <span className="text-xs text-gray-400">{dict.nav.catalog_dashboard}</span>
                                        </Link>
                                        <div className="h-px bg-gray-800 my-1"></div>
                                        <Link href="/services/solar-power" className="block px-4 py-2 rounded-lg hover:bg-gray-800 text-sm font-medium text-gray-300 whitespace-nowrap">
                                            {dict.nav.solar_power}
                                        </Link>
                                        <Link href="/home-automation" className="block px-4 py-2 rounded-lg hover:bg-gray-800 text-sm font-medium text-gray-300 whitespace-nowrap">
                                            {dict.nav.automation}
                                        </Link>
                                        <Link href="/ev-charging" className="block px-4 py-2 rounded-lg hover:bg-gray-800 text-sm font-medium text-gray-300 whitespace-nowrap">
                                            {dict.nav.ev_network}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Products */}
                            <NavLink href="/products-finder">{dict.nav.products}</NavLink>



                            {/* Company Dropdown */}
                            <div className="relative group">
                                <button className={`inline-flex items-center text-sm font-medium transition-colors py-5 gap-1 outline-none relative ${isCompanyActive
                                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                                    : "text-gray-700 hover:text-primary"
                                    }`}>
                                    {dict.nav.company} <ChevronDown className="h-3 w-3" />
                                </button>
                                {/* Dark themed dropdown */}
                                <div className="absolute start-0 w-56 mt-0 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-2 space-y-1">
                                        <Link href="/about" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">{dict.nav.about_us}</span>
                                            <span className="text-xs text-gray-400">{dict.nav.mission_team}</span>
                                        </Link>
                                        <Link href="/investors" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">{dict.nav.investors}</span>
                                            <span className="text-xs text-gray-400">{dict.nav.financials_impact}</span>
                                        </Link>
                                        <Link href="/academy" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">{dict.nav.academy}</span>
                                            <span className="text-xs text-gray-400">{dict.nav.training_certs}</span>
                                        </Link>
                                        <Link href="/partner" className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-sm">
                                            <span className="font-bold text-white block mb-0.5">{dict.nav.partners}</span>
                                            <span className="text-xs text-gray-400">{dict.nav.join_network}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 md:gap-4">
                            {/* Search */}
                            <div className={`hidden sm:flex items-center transition-all duration-300 ${isSearchOpen ? 'w-48' : 'w-8'}`}>
                                {isSearchOpen ? (
                                    <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/products-finder?q=${encodeURIComponent(searchQuery)}`; }} className="w-full relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onBlur={() => !searchQuery && setIsSearchOpen(false)}
                                            autoFocus
                                            placeholder="Search..."
                                            className="w-full bg-gray-100 text-sm border-none rounded-full py-1.5 ps-3 pe-8 focus:ring-1 focus:ring-red-500 outline-none"
                                        />
                                        <button type="submit" className="absolute end-2 top-1.5 p-0.5 text-gray-600 hover:text-red-600">
                                            <Search className="h-3 w-3" />
                                        </button>
                                    </form>
                                ) : (
                                    <button
                                        onClick={() => setIsSearchOpen(true)}
                                        className="text-gray-600 hover:text-gray-900"
                                        aria-label="Search"
                                    >
                                        <Search className="h-5 w-5" />
                                    </button>
                                )}
                            </div>

                            {/* Partner Portal - Desktop only */}
                            <Link href="/partner" className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                                {dict.nav.partner_portal}
                            </Link>

                            {/* Hamburger Menu Button - Below 768px */}
                            <button
                                ref={menuButtonRef}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 -me-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Slide-out Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Mobile Slide-out Menu Panel */}
            <div
                ref={menuRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={`fixed top-0 end-0 h-full w-[280px] max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"
                    }`}
            >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <span className="font-bold text-gray-900">Menu</span>
                    <button
                        onClick={closeMenu}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Menu Content */}
                <div className="overflow-y-auto h-[calc(100%-140px)] p-4">
                    {/* Solutions Section */}
                    <div className="mb-4">
                        <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Solutions</div>
                        <div className="space-y-1">
                            <MobileNavLink href="/solutions" onClick={closeMenu}>Overview</MobileNavLink>
                            <MobileNavLink href="/services" onClick={closeMenu} indent>Services Catalog</MobileNavLink>
                            <MobileNavLink href="/services/solar-power" onClick={closeMenu} indent>Solar & Power</MobileNavLink>
                            <MobileNavLink href="/home-automation" onClick={closeMenu} indent>Home Automation</MobileNavLink>
                            <MobileNavLink href="/ev-charging" onClick={closeMenu} indent>EV Network</MobileNavLink>
                        </div>
                    </div>

                    {/* Direct Links */}
                    <div className="border-t border-gray-100 pt-4 mb-4">
                        <MobileNavLink href="/products-finder" onClick={closeMenu}>Products</MobileNavLink>
                        <MobileNavLink href="/developers" onClick={closeMenu}>Developers</MobileNavLink>
                    </div>

                    {/* Company Section */}
                    <div className="border-t border-gray-100 pt-4">
                        <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Company</div>
                        <div className="space-y-1">
                            <MobileNavLink href="/about" onClick={closeMenu}>About Us</MobileNavLink>
                            <MobileNavLink href="/investors" onClick={closeMenu}>Investors</MobileNavLink>
                            <MobileNavLink href="/academy" onClick={closeMenu}>Academy</MobileNavLink>
                            <MobileNavLink href="/partner" onClick={closeMenu}>Partners</MobileNavLink>
                        </div>
                    </div>
                </div>

                {/* Menu Footer - CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
                    <Link
                        href="/partner"
                        onClick={closeMenu}
                        className="flex items-center justify-center w-full px-4 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
                    >
                        Partner Portal
                    </Link>
                </div>
            </div>
        </div>
    );
}

