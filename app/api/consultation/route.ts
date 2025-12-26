import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real app, this would save to a DB or send an email/CRM request
        console.log('Consultation Request Received:', body);

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: 'Consultation request received successfully'
        });
    } catch (error) {
        console.error('Consultation Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process request' },
            { status: 500 }
        );
    }
}
