export interface Solution {
    id: string;
    name: string;
    description: string;
    targetUseCase: 'Business' | 'Municipality' | 'Event' | 'Residential' | 'Mixed';
    primaryServiceId: string; // The anchor service (e.g., Solar)
    includedServiceIds: string[]; // e.g., ['solar-12kw', 'ev-charging-network']
    whyThisCombination: string[];
    prerequisites?: string[];
    scalabilityNotes?: string;
    sustainabilityImpact: {
        co2Saved: string;
        efficiencyBoost?: string;
    };
    diagramSteps?: string[]; // E.g. ['Solar Array', 'Hybrid Inverter', 'EV Charger']
}

export interface RecommendationRule {
    triggerServiceId: string;
    triggerContext?: {
        siteType?: string[]; // e.g., ['parking', 'campus']
        minPower?: number;
    };
    recommendedSolutionId: string;
    explanation: string;
}
