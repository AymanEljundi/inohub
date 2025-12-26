import { Shield, Users, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | TechStore Innovation Hub",
    description: "Learn about our mission to modernize Lebanon's infrastructure.",
};

export default function AboutPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Our Mission</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Building the Infrastructure of Tomorrow
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        TechStore Innovation Hub is dedicated to accelerating Lebanon's transition to smart, sustainable technology. From EV networks to solar arrays, we deploy the systems that power progress.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                    <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Trusted Security
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Over 500 enterprise security deployments protecting critical assets.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                    <Users className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Expert Team
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Certified engineers and technicians ready for rapid deployment.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                    <Award className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Proven ROI
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Systems designed to pay for themselves through energy savings and efficiency.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
