export type Track = 'Solar Energy' | 'EV Infrastructure' | 'Security Systems' | 'Networking' | 'Automation';
export type Level = 'Beginner' | 'Intermediate' | 'Advanced';
export type Format = 'In-Person' | 'Online' | 'Hybrid';

export interface CurriculumModule {
    title: string;
    duration: string;
    topics: string[];
}

export interface AcademyProgram {
    id: string;
    title: string;
    track: Track;
    level: Level;
    description: string;
    outcomes: string[];
    certification: string;
    image: string;
    curriculum: CurriculumModule[];
}

export interface AcademySession {
    id: string;
    programId: string;
    startDate: string; // ISO Date
    endDate: string;   // ISO Date
    location: string;
    instructor: string;
    price: number;
    currency: string;
    seatsTotal: number;
    seatsRemaining: number;
    status: 'Open' | 'Full' | 'Closed';
}

export const programs: AcademyProgram[] = [
    {
        id: 'prog-solar-101',
        title: 'Certified Solar Installer: Level 1',
        track: 'Solar Energy',
        level: 'Beginner',
        description: 'Comprehensive introduction to PV systems, safety standards, and basic installation techniques.',
        outcomes: ['Understand PV fundamentals', 'Safety certification', 'Basic wiring'],
        certification: 'TechStore Certified Installer (TCI-L1)',
        image: '/images/academy-solar.jpg',
        curriculum: [
            { title: 'PV Fundamentals', duration: '4 Hours', topics: ['Physics of Solar', 'Components', 'Types of Panels'] },
            { title: 'Electrical Safety', duration: '3 Hours', topics: ['DC Safety', 'Grounding', 'PPE'] }
        ]
    },
    {
        id: 'prog-ev-201',
        title: 'EV Charging Network Technician',
        track: 'EV Infrastructure',
        level: 'Intermediate',
        description: 'Advanced course on installing and commissioning Level 2 and Level 3 DC Fast Chargers.',
        outcomes: ['Load calculation', 'Network config', 'Commissioning'],
        certification: 'TechStore EV Specialist',
        image: '/images/academy-ev.jpg',
        curriculum: [
            { title: 'Grid Requirements', duration: '5 Hours', topics: ['Load Balancing', 'Transformers'] },
            { title: 'Connectivity', duration: '3 Hours', topics: ['OCPP Protocol', '4G/WiFi Config'] }
        ]
    }
];

export const sessions: AcademySession[] = [
    {
        id: 'sess-001',
        programId: 'prog-solar-101',
        startDate: '2026-02-10T09:00:00',
        endDate: '2026-02-12T17:00:00',
        location: 'TechStore HQ, Jounieh',
        instructor: 'Eng. Jad H.',
        price: 350,
        currency: 'USD',
        seatsTotal: 20,
        seatsRemaining: 12,
        status: 'Open'
    },
    {
        id: 'sess-002',
        programId: 'prog-ev-201',
        startDate: '2026-02-15T09:00:00',
        endDate: '2026-02-16T17:00:00',
        location: 'Beirut Digital District',
        instructor: 'Dr. Sarah K.',
        price: 500,
        currency: 'USD',
        seatsTotal: 15,
        seatsRemaining: 0,
        status: 'Full'
    }
];

export function getProgramSessions(programId: string) {
    return sessions.filter(s => s.programId === programId);
}
