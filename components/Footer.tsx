import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-secondary text-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Image
                            src="/images/logo-white.png"
                            alt="TechStoreLB"
                            width={150}
                            height={50}
                            className="mb-4 h-10 w-auto object-contain brightness-0 invert"
                        />
                        {/* Note: The logo-white.png is already white, but adding brightness-0 invert if needed or just opacity */}

                        <p className="text-gray-400 text-sm mt-4">
                            Turning ideas into real-world tech services.
                            Powered by TechStoreLB.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Platform</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/services" className="text-gray-400 hover:text-white text-sm">Browse Services</Link></li>
                            <li><Link href="/innovation" className="text-gray-400 hover:text-white text-sm">Submit Innovation</Link></li>
                            <li><Link href="/events" className="text-gray-400 hover:text-white text-sm">Event Rentals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/help" className="text-gray-400 hover:text-white text-sm">Help Center</Link></li>
                            <li><Link href="/trust" className="text-gray-400 hover:text-white text-sm">Trust & Safety</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400" suppressHydrationWarning>
                    &copy; {new Date().getFullYear()} TechStore Innovation Hub. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
