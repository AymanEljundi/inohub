"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/consultation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
            } else {
                throw new Error('Failed to submit');
            }
        } catch (err) {
            console.error(err);
            setStatus('idle'); // simple error handling for prototype
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="text-lg font-bold text-gray-900">Request Consultation</h3>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="p-2 -mr-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {status === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                            <p className="text-gray-500 mb-8">
                                Thanks for sharing your project details. A specialist will review your needs and contact you within 24 hours.
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="text-sm text-gray-500 mb-4">
                                Tell us about your infrastructure project. Solar, EV charging, security or networking – let our team design a solution for you.
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1">Name *</label>
                                    <input id="name" name="name" type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-xs font-bold text-gray-700 mb-1">Company</label>
                                    <input id="company" name="company" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm" placeholder="Acme Inc." />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                                    <input id="email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1">Phone</label>
                                    <input id="phone" name="phone" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm" placeholder="+961..." />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="type" className="block text-xs font-bold text-gray-700 mb-1">Project Type *</label>
                                    <select id="type" name="type" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm bg-white">
                                        <option value="">Select...</option>
                                        <option value="solar">Solar Energy</option>
                                        <option value="ev">EV Charging</option>
                                        <option value="security">Security Systems</option>
                                        <option value="networking">Networking/IT</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="timeline" className="block text-xs font-bold text-gray-700 mb-1">Timeline</label>
                                    <select id="timeline" name="timeline" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm bg-white">
                                        <option value="immediate">Immediately</option>
                                        <option value="1-3months">1-3 Months</option>
                                        <option value="3-6months">3-6 Months</option>
                                        <option value="planning">Just Planning</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="notes" className="block text-xs font-bold text-gray-700 mb-1">Additional Notes</label>
                                <textarea id="notes" name="notes" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm resize-none" placeholder="Briefly describe your requirements..."></textarea>
                            </div>

                            <p className="text-sm text-gray-500 text-center mt-4">
                                We&apos;ll get back to you within 24 hours.
                            </p>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-3 px-4 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="animate-spin h-4 w-4 mr-2" />
                                        Sending Request...
                                    </>
                                ) : (
                                    'Request Consultation'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
