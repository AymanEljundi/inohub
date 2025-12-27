import { Check } from "lucide-react";

const packages = [
    {
        name: "Starter Essentials",
        id: "tier-starter",
        href: "#consultation",
        priceMonthly: "$299",
        description: "Perfect for apartments. Smart lighting, simple security, and voice control.",
        features: [
            "Smart Hub (Matter Compatible)",
            "5 Smart Light Switches / Bulbs",
            "1 Video Doorbell",
            "voice Assistant (Alexa/Google)",
            "Basic App Control",
        ],
        featured: false,
    },
    {
        name: "Advanced Family",
        id: "tier-advanced",
        href: "#consultation",
        priceMonthly: "$899",
        description: "Complete coverage for medium homes. HVAC, advanced security, and automation.",
        features: [
            "Advanced Hub with UPS",
            "Full Home Lighting Control",
            "Smart Thermostat & Sensors",
            "3 Security Cameras (AI)",
            "Smart Lock for Main Door",
            "Energy Monitoring Dashboard",
        ],
        featured: true,
    },
    {
        name: "Ultimate Smart Villa",
        id: "tier-ultimate",
        href: "#consultation",
        priceMonthly: "$2,499+",
        description: "The pinnacle of luxury. Multi-room audio, automated blinds, and wellness tech.",
        features: [
            "Enterprise Grade Server",
            "Lighting, Climate, & Blinds",
            "Multi-Room Audio System",
            "Full Perimeter Security",
            "Water Leak & Smoke Detection",
            "Health & Air Quality Monitoring",
            "Dedicated Tablet Controls",
        ],
        featured: false,
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function Packages() {
    return (
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {packages.map((tier) => (
                <div
                    key={tier.id}
                    className={classNames(
                        tier.featured
                            ? "bg-white/5 ring-2 ring-primary"
                            : "ring-1 ring-white/10",
                        "rounded-3xl p-8 xl:p-10"
                    )}
                >
                    <div className="flex items-center justify-between gap-x-4">
                        <h3
                            id={tier.id}
                            className="text-lg font-semibold leading-8 text-white"
                        >
                            {tier.name}
                        </h3>
                        {tier.featured ? (
                            <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                                Most Popular
                            </p>
                        ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-300">
                        {tier.description}
                    </p>
                    <div className="mt-6 flex items-baseline gap-x-1">
                        <span className="text-sm font-semibold leading-6 text-gray-300">Starting from</span>
                        <span className="text-4xl font-bold tracking-tight text-white">{tier.priceMonthly}</span>
                    </div>

                    <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={classNames(
                            tier.featured
                                ? "bg-primary text-white shadow-sm hover:bg-red-400 focus-visible:outline-primary"
                                : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                            "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        )}
                    >
                        Get a Quote
                    </a>
                    <ul
                        role="list"
                        className="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                    >
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <Check
                                    className="h-6 w-5 flex-none text-white"
                                    aria-hidden="true"
                                />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
