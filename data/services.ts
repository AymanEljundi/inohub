export type AvailabilityType = 'Permanent' | 'Event' | 'Hybrid';
export type ServiceStatus = 'Concept' | 'Pilot' | 'Live' | 'Expanding';
export type DeploymentModel = 'Owned' | 'Partner' | 'Investor';

export interface ServicePrice {
    amount: number;
    unit: string;
    setupFee?: number;
}

export interface Service {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;

    // Mandatory Universal Model Fields
    availabilityType: AvailabilityType;
    status: ServiceStatus;
    deploymentModel: DeploymentModel;

    // Flexible Pricing for Hybrid Models
    pricing: {
        permanent?: ServicePrice; // Monthly + Setup
        event?: ServicePrice;     // Daily
    };

    // Availability Rules
    supportedLocations: string[];
    leadTimeDays?: number;      // For Event services
    maxEventDurationDays?: number; // For Event services
    coverageAreas?: string[];   // For Permanent services
    specs: { label: string; value: string }[];
    features: string[];
}

export const services: Service[] = [
    {
        slug: "solar-power",
        title: "Enterprise Solar Power Deployment",
        category: "Energy & Infrastructure",
        description: "High-efficiency hybrid solar infrastructure for commercial facilities and large-scale residential complexes. Supports grid-tie and island interaction.",
        image: "/images/solar-hero.jpg",

        // Core Service Attributes
        availabilityType: 'Hybrid', // Can be permanent infra or temporary event power
        status: 'Expanding',
        deploymentModel: 'Owned',
        supportedLocations: ["Beirut", "Mount Lebanon", "North", "South", "Bekaa"],
        leadTimeDays: 7,
        maxEventDurationDays: 30,
        coverageAreas: ["All Regions"],

        pricing: {
            permanent: { amount: 150, unit: 'Month', setupFee: 2000 },
            event: { amount: 150, unit: 'Day' }
        },

        specs: [
            { label: "CO2 Offset", value: "5.2 Tons/Year" },
            { label: "Capacity", value: "12kW Continuous" },
            { label: "Storage", value: "30kWh LiFePO4" },
        ],
        features: [
            "Grid-Interactive Inverters",
            "Remote Telemetry & Control",
            "Structural Engineering Included",
            "24/7 Operations Center Support"
        ]
    },
    {
        slug: "smart-city-wifi",
        title: "Metro-Area Connectivity Mesh",
        category: "Smart City",
        description: "City-wide WiFi mesh network designed for municipalities and large campuses. Provides seamless roaming and public access corridors.",
        image: "/images/wifi-hero.jpg",

        availabilityType: 'Permanent',
        status: 'Live',
        deploymentModel: 'Partner', // Deployed with Municipal Partners
        supportedLocations: ["Beirut", "Mount Lebanon", "Jounieh", "Tripoli"],
        coverageAreas: ["Urban Zones", "Public Parks"],

        pricing: {
            permanent: { amount: 500, unit: 'Month/Zone', setupFee: 1500 }
        },

        specs: [
            { label: "Coverage", value: "2km Radius/Node" },
            { label: "Users", value: "5000+ Concurrent" },
            { label: "Backhaul", value: "Fiber / Starlink" },
        ],
        features: [
            "Seamless Roaming (802.11r)",
            "Public Safety Landing Page",
            "Traffic Analytics",
            "Solar Powered Nodes"
        ]
    },
    {
        slug: "temp-surveillance",
        title: "Rapid Deployment Security Tower",
        category: "Security Infrastructure",
        description: "Autonomous security units for construction sites, borders, and temporary high-security zones. Self-sustained power and comms.",
        image: "/images/cctv-hero.jpg",

        availabilityType: 'Event', // Or Temporary
        status: 'Pilot',
        deploymentModel: 'Investor', // Investors fund the fleet
        supportedLocations: ["Beirut", "Mount Lebanon"],
        leadTimeDays: 3,
        maxEventDurationDays: 90,

        pricing: {
            event: { amount: 100, unit: 'Day', setupFee: 250 }
        },

        specs: [
            { label: "Vision", value: "360° Thermal/Optical" },
            { label: "Autonomy", value: "7 Days (No Sun)" },
            { label: "Comms", value: "4G/LTE + Satellite" },
        ],
        features: [
            "AI Threat Detection",
            "Instant Police Dispatch",
            "Cloud Blackbox Recording",
            "Zero-Infrastructure Required"
        ]
    }
];
