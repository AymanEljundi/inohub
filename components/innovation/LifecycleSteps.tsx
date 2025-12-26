import { Lightbulb, FlaskConical, Rocket, CheckCircle2 } from "lucide-react";

export function LifecycleSteps() {
    const steps = [
        {
            id: "concept",
            label: "Phase 1: Concept",
            description: "Submit a proposal for a new infrastructure service. We validate feasibility and market demand.",
            icon: Lightbulb,
            color: "text-gray-500",
            bg: "bg-gray-100",
            border: "border-gray-200"
        },
        {
            id: "pilot",
            label: "Phase 2: Pilot",
            description: "Approved concepts enter limited deployment. Parameters are tested in real-world conditions.",
            icon: FlaskConical,
            color: "text-orange-500",
            bg: "bg-orange-50",
            border: "border-orange-200"
        },
        {
            id: "live",
            label: "Phase 3: Live Service",
            description: "Successful pilots become permanent catalog items, available for standard deployment.",
            icon: Rocket,
            color: "text-green-600",
            bg: "bg-green-50",
            border: "border-green-200"
        }
    ];

    return (
        <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center text-center group">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step.bg} ${step.color} border-2 ${step.border} mb-4 shadow-sm group-hover:scale-110 transition-transform bg-white relative`}>
                            <step.icon className="h-8 w-8" />
                            {step.id === 'live' && (
                                <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                                    <CheckCircle2 className="h-3 w-3 text-white" />
                                </div>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.label}</h3>
                        <p className="text-sm text-gray-500 max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
