import { LifecycleSteps } from "@/components/innovation/LifecycleSteps";
import { IdeaForm } from "@/components/innovation/IdeaForm";
import { Sparkles } from "lucide-react";

export const metadata = {
    title: "Innovation Pipeline | TechStore Innovation Hub",
    description: "Submit and track new service ideas. From concept to deployment.",
};

export default function InnovationPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">

            {/* Hero Section - Darker "Lab" Theme */}
            <div className="bg-gray-900 text-white pt-24 pb-32 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium mb-8 backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 mr-2 text-red-400" />
                        R&D Division
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Build the Future
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We don&apos;t just sell products; we deploy solutions.
                        Submit your idea for the next great infrastructure service.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Lifecycle Container */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900">The Zero-to-One Lifecycle</h2>
                        <p className="text-gray-500">How an idea becomes a deployed service.</p>
                    </div>
                    <LifecycleSteps />
                </div>

                {/* Submission Form Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit a Proposal</h2>
                        <p className="text-lg text-gray-500">
                            Have a concept for a new solar, security, or connectivity service? <br className="hidden md:block" />
                            Pitch it to our engineering team.
                        </p>
                    </div>

                    <IdeaForm />
                </div>

            </div>
        </div >
    );
}
