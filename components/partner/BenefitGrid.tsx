import { Coins, Settings, BarChart3, Globe } from "lucide-react";

export function BenefitGrid() {
    const benefits = [
        {
            title: "Shared Revenue Model",
            description: "You provide the location; we deploy the asset. Net profits are split specifically based on the asset class and location value.",
            icon: Coins,
        },
        {
            title: "Fully Managed Ops",
            description: "TechStore handles all maintenance, insurance, and repairs. You have zero operational overhead or headaches.",
            icon: Settings,
        },
        {
            title: "Community Impact",
            description: "Bring essential services like High-Speed WiFi, Solar Power, and Security to your municipality or district.",
            icon: Globe,
        },
        {
            title: "Transparent Dashboard",
            description: "Track uptime, usage metrics, and earnings in real-time through the Partner Portal dashboard.",
            icon: BarChart3,
        },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-base text-primary font-semibold tracking-wide uppercase">Why Partner?</p>
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A Better Way to Monetize Infrastructure
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-lg flex items-center justify-center mb-6">
                                <benefit.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
