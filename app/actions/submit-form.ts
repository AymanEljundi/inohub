"use server";

export async function submitFormAction(formData: FormData) {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Submitted:", Object.fromEntries(formData));

    // In a real app, this would send an email (Resend/SendGrid) or save to DB (Supabase/Prisma).
    // For now, we return a success signals.
    return { success: true };
}
