export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    location: string;
    category: "solar" | "ev" | "automation" | "infrastructure";
    metric: {
        value: string;
        label: string;
    };
    description: string;
    image: string;
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: "jounieh-solar",
        title: "Municipal Solar Grid",
        client: "City of Jounieh",
        location: "Jounieh, Lebanon",
        category: "solar",
        metric: {
            value: "50%",
            label: "Energy Savings",
        },
        description:
            "Deployed a 2.4MW solar array powering public buildings and street lighting across the municipality.",
        image: "/images/case-studies/solar-grid.jpg",
    },
    {
        id: "dbayeh-ev-hub",
        title: "EV Charging Hub",
        client: "Dbayeh Commercial Center",
        location: "Dbayeh, Lebanon",
        category: "ev",
        metric: {
            value: "12",
            label: "Fast Chargers",
        },
        description:
            "Lebanon's largest public EV charging station with solar-powered fast chargers and real-time availability.",
        image: "/images/case-studies/ev-hub.jpg",
    },
    {
        id: "factory-automation",
        title: "Smart Factory Retrofit",
        client: "Mount Lebanon Industrial",
        location: "Bikfaya, Lebanon",
        category: "automation",
        metric: {
            value: "24/7",
            label: "Remote Monitoring",
        },
        description:
            "End-to-end automation of legacy manufacturing equipment with IoT sensors and predictive maintenance.",
        image: "/images/case-studies/factory.jpg",
    },
];
