import { Service } from "@/data/services";

export interface AvailabilityRequest {
    serviceSlug: string;
    mode: 'Permanent' | 'Event';
    location: string;
    dates?: {
        start: Date;
        end: Date;
    };
    installationType?: string; // For permanent
}

export interface AvailabilityResponse {
    isAvailable: boolean;
    reason?: 'Status' | 'Location' | 'LeadTime' | 'Duration' | 'Capacity' | 'Unknown';
    message: string;
    nextStep?: 'Book' | 'Request' | 'Waitlist';
    costEstimate?: number;
}

export const CITIES = ["Beirut", "Mount Lebanon", "Jounieh", "Tripoli", "Sidon", "Tyre", "Bekaa", "North", "South"];

// Pure function availability engine
export function checkAvailability(service: Service, request: AvailabilityRequest): AvailabilityResponse {

    // 1. Status Check (Global)
    if (service.status === 'Concept') {
        return {
            isAvailable: false,
            reason: 'Status',
            message: "This service is currently in Concept phase.",
            nextStep: 'Waitlist'
        };
    }

    // 2. Mode mismatch check (Sanity)
    if (service.availabilityType === 'Permanent' && request.mode === 'Event') {
        return { isAvailable: false, reason: 'Unknown', message: "This service is only available for permanent deployment." };
    }
    if (service.availabilityType === 'Event' && request.mode === 'Permanent') {
        return { isAvailable: false, reason: 'Unknown', message: "This service is only available for event rental." };
    }

    // 3. Location Check
    const isLocationSupported = service.supportedLocations.some(loc =>
        request.location.includes(loc) || loc === "All Regions"
    );

    if (!isLocationSupported) {
        return {
            isAvailable: false,
            reason: 'Location',
            message: `Service not yet deployed in ${request.location}.`,
            nextStep: 'Request'
        };
    }

    // 4. Event Logic Rules
    if (request.mode === 'Event' && service.leadTimeDays && request.dates) {
        const today = new Date();
        const start = new Date(request.dates.start);
        const end = new Date(request.dates.end);

        // Lead Time
        const diffTime = start.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < service.leadTimeDays) {
            return {
                isAvailable: false,
                reason: 'LeadTime',
                message: `Minimum lead time is ${service.leadTimeDays} days.`,
                nextStep: 'Request' // Maybe expedited query
            };
        }

        // Max Duration
        if (service.maxEventDurationDays) {
            const durationTime = end.getTime() - request.dates.start.getTime();
            const durationDays = Math.ceil(durationTime / (1000 * 60 * 60 * 24));

            if (durationDays > service.maxEventDurationDays) {
                return {
                    isAvailable: false,
                    reason: 'Duration',
                    message: `Max rental duration is ${service.maxEventDurationDays} days.`,
                    nextStep: 'Request' // Long term lease?
                };
            }
        }
    }

    // Success State
    return {
        isAvailable: true,
        message: "Service matches your requirements.",
        nextStep: 'Book',
        costEstimate: request.mode === 'Event' ? service.pricing.event?.amount : service.pricing.permanent?.amount
    };
}
