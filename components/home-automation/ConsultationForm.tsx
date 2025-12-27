"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ConsultationForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request Received!</h3>
                <p className="mt-2 text-gray-600 max-w-md mx-auto">
                    We've got your details. One of our Smart Home experts will contact you within 24 hours to schedule your consultation.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="home-type" className="block text-sm font-semibold leading-6 text-gray-900">
                        Home Type
                    </label>
                    <div className="mt-2.5">
                        <select
                            id="home-type"
                            name="home-type"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        >
                            <option>Apartment (Under 150sqm)</option>
                            <option>Apartment (Large / Duplex)</option>
                            <option>Villa / Standalone House</option>
                            <option>Under Construction</option>
                        </select>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="features" className="block text-sm font-semibold leading-6 text-gray-900">
                        Interested Features
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="features"
                            id="features"
                            placeholder="e.g. Lighting, Security, Audio..."
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                        </span>
                    ) : "Book Consultation"}
                </button>
            </div>
        </form>
    );
}
