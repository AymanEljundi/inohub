import { AcademyCatalog } from "@/components/academy/AcademyComponents";
import { BookOpen } from "lucide-react";

export const metadata = {
    title: "TechStore Academy | Professional Certification",
    description: "Training programs for solar installers, EV technicians, and security specialists.",
};

export default function AcademyPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            <div className="bg-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-800/50 text-blue-200 text-sm font-medium mb-6">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Professional Certification
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Master the Infrastructure</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Join the elite network of TechStore Certified Installers.
                        Get hands-on training on the latest photovoltaic, EV, and security systems.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-10">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Available Programs</h2>
                    {/* Filters could go here */}
                </div>

                <AcademyCatalog />
            </div>
        </div>
    );
}
