"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export function IdeaForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [ticketId, setTicketId] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setTicketId(`IDEA-${Math.floor(Math.random() * 10000)}`);
        setIsSuccess(true);
        setIsSubmitting(false);
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Proposal Submitted!</h3>
                <p className="text-green-800 mb-6">
                    Your idea has been registered in the Innovation Pipeline. Our engineering team will review feasibility within 48 hours.
                </p>
                <div className="bg-white rounded-lg py-3 px-6 inline-block shadow-sm border border-green-100">
                    <span className="text-xs uppercase text-gray-400 font-bold tracking-wider block">Ticket ID</span>
                    <span className="text-xl font-mono font-bold text-gray-900">{ticketId}</span>
                </div>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="block w-full mt-8 text-sm font-medium text-green-700 hover:text-green-900 underline"
                >
                    Submit Another Idea
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Service Title</label>
                    <input
                        type="text"
                        required
                        placeholder="e.g. Autonomous Drone Delivery Network"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Category</label>
                        <select
                            aria-label="Select Category"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                            <option>Energy & Infrastructure</option>
                            <option>Smart City</option>
                            <option>Security & Surveillance</option>
                            <option>Logistics & Transport</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Target Region</label>
                        <input
                            type="text"
                            placeholder="e.g. Beirut Port, Bekaa Valley"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Value Proposition</label>
                    <textarea
                        required
                        rows={4}
                        placeholder="Describe the problem this service solves and how it should operate..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-400"
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin h-5 w-5 mr-2" /> Processing...
                            </>
                        ) : (
                            <>
                                Submit Proposal <Send className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        By submitting, you agree to the TechStore Innovation Hub IP Policy.
                    </p>
                </div>
            </div>
        </form>
    );
}
