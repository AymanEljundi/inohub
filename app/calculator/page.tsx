import { ROICalculator } from "@/components/calculator/ROICalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ROI Calculator | TechStore Innovation Hub",
    description: "Estimate your savings and return on investment for Solar and EV Charging infrastructure projects.",
};

export default function CalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Interactive Tool
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Calculate Your <span className="text-blue-600">Infrastructure ROI</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            See how quickly your investment in Solar or EV Charging can pay for itself. Our advanced modeling helps you estimate upfront costs, annual savings, and environmental impact in seconds.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Select Technology</h3>
                                    <p className="text-sm text-gray-500">Choose between Solar Energy systems or EV Charging networks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Input Your Data</h3>
                                    <p className="text-sm text-gray-500">Enter simple metrics like your monthly bill or available area.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">3</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Get Instant Results</h3>
                                    <p className="text-sm text-gray-500">See your estimated payback period and annual profit immediately.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Calculator */}
                    <div>
                        <ROICalculator />
                    </div>
                </div>
            </div>
        </div>
    );
}
