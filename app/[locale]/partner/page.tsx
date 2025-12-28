import { PartnerHero } from "@/components/partner/PartnerHero";
import { BenefitGrid } from "@/components/partner/BenefitGrid";
import { PartnerForm } from "@/components/partner/PartnerForm";

export const metadata = {
    title: "Partner Portal | TechStore Innovation Hub",
    description: "Become a deployment partner. Monetize your infrastructure space.",
};

export default function PartnerPage() {
    return (
        <div className="min-h-screen bg-white">
            <PartnerHero />
            <BenefitGrid />

            <div className="bg-gray-50 pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                    <PartnerForm />
                </div>
            </div>

            <div className="bg-white py-12 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400 text-sm">
                        Already a partner? <a href="#" className="text-red-600 hover:underline">Log in to your dashboard</a> to view earnings.
                    </p>
                </div>
            </div>
        </div>
    );
}
