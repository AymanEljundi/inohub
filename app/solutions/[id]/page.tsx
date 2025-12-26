"use client";

import { mockSolutions } from "@/lib/solutions/mockSolutions";
import { useParams, notFound } from "next/navigation";
import { SolutionHeader, SolutionBenefits } from "@/components/solutions/SolutionDetailView";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionPage() {
    const { id } = useParams();
    const solution = mockSolutions.find(s => s.id === id);

    if (!solution) return notFound();

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <SolutionHeader solution={solution} />
                <SolutionBenefits solution={solution} />

                <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to deploy this solution?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our engineers handle the integration of all {solution.includedServiceIds.length} services into a unified system.
                    </p>
                    <div className="flex justify-center gap-4 flex-col sm:flex-row">
                        <Link href="/partner" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                            Request Deployment
                        </Link>
                        <Link href="/services" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center justify-center">
                            Compare Other Options
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
