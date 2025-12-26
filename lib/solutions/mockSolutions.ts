import { Solution, RecommendationRule } from "./types";

// We strictly reference slugs from data/services.ts or virtual IDs for new modules
// Virtual IDs: 'ev-charging-network', 'energy-storage-plus', 'smart-monitoring'

export const mockSolutions: Solution[] = [
    {
        id: "sol-ev-biz",
        name: "Commercial Solar EV Hub",
        description: "Turn your parking lot into a revenue-generating green energy hub. Powers EV chargers directly from solar canopies.",
        targetUseCase: "Business",
        primaryServiceId: "solar-12kw",
        includedServiceIds: ["solar-12kw", "ev-charging-network"],
        whyThisCombination: [
            "Reduces EV charging costs by up to 100% during daylight",
            "Attracts high-value customers with green charging",
            "Shades vehicles while generating power"
        ],
        prerequisites: ["South-facing parking lot", "Grid connection for backup"],
        scalabilityNotes: "Start with 4 chargers, expand to 20 without upgrading grid connection.",
        sustainabilityImpact: {
            co2Saved: "12 Tons/Year",
            efficiencyBoost: "40% vs Grid Charging"
        },
        diagramSteps: ["Solar Canopy", "Hybrid Inverter", "Battery Buffer", "EV Chargers"]
    },
    {
        id: "sol-bat-reliability",
        name: "Always-On Business Continuity",
        description: "Integration of solar generation with high-capacity storage to ensure 24/7 operations during grid blackouts.",
        targetUseCase: "Mixed",
        primaryServiceId: "solar-12kw",
        includedServiceIds: ["solar-12kw", "energy-storage-plus"],
        whyThisCombination: [
            "Eliminates diesel generator fuel costs",
            "Instant switchover (UPS grade) for servers",
            "Silent operation perfect for offices"
        ],
        scalabilityNotes: "Modular battery cabinets allow adding capacity in 10kWh increments.",
        sustainabilityImpact: {
            co2Saved: "8 Tons/Year",
        },
        diagramSteps: ["Rooftop Solar", "Smart Controller", "LiFePO4 Bank", "Critical Loads"]
    },
    {
        id: "ev-manage-muni",
        name: "Municipal Fleet Depot",
        description: "High-power charging infrastructure with smart load balancing for effective service vehicle management.",
        targetUseCase: "Municipality",
        primaryServiceId: "ev-charging-network",
        includedServiceIds: ["ev-charging-network", "smart-monitoring"],
        whyThisCombination: [
            "Optimizes charging to avoid peak demand charges",
            "Tracks diverse fleet energy usage by department",
            "Ensures vehicles are ready for morning shifts"
        ],
        sustainabilityImpact: {
            co2Saved: "Variable",
            efficiencyBoost: "25% Cost Reduction"
        }
    }
];

export const recommendationRules: RecommendationRule[] = [
    {
        triggerServiceId: "solar-12kw",
        triggerContext: { siteType: ["parking", "campus", "business"] },
        recommendedSolutionId: "sol-ev-biz",
        explanation: "Since you have a parking area, adding EV charging can monetize your solar excess."
    },
    {
        triggerServiceId: "solar-12kw",
        triggerContext: { siteType: ["residential", "business"] },
        recommendedSolutionId: "sol-bat-reliability",
        explanation: "Ensure 24/7 uptime by adding battery storage to your solar array."
    },
    {
        triggerServiceId: "ev-charging-network",
        recommendedSolutionId: "sol-ev-biz",
        explanation: "Generate your own clean power to reduce the operational cost of these chargers."
    }
];
