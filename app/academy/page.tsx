"use client";
import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function AcademyPage() {
    const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

    const courses = [
        {
            id: 'solar-install',
            title: 'Solar Installation Certified',
            level: 'Professional',
            duration: '4 Weeks',
            price: '$450',
            features: ['20h Theory', '40h On-site', 'Official Certificate'],
            icon: Star
        },
        {
            id: 'smart-home',
            title: 'Smart Home Specialist',
            level: 'Advanced',
            duration: '6 Weeks',
            price: '$600',
            features: ['Automation Logic', 'Wiring Standards', 'Device Config'],
            icon: BookOpen
        },
        {
            id: 'network-eng',
            title: 'Network Infrastructure',
            level: 'Expert',
            duration: '8 Weeks',
            price: '$800',
            features: ['Fiber Splicing', 'Server Rack Assy', 'Ubiquiti/Mikrotik'],
            icon: Award
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Standardized System Dark Theme */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.800),theme(colors.gray.900))] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-red-600/10 ring-1 ring-gray-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <div className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-red-400 ring-1 ring-inset ring-red-400/20 bg-red-500/10">
                                <span className="w-2 h-2 bg-red-400 rounded-full inline-block mr-2 animate-pulse"></span>
                                TRAINING CENTER
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Build the Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">With Us</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Get certified in Solar, Automation, and Networking. Hands-on training with industry experts.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#courses" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all flex items-center gap-2">
                                <BookOpen className="h-4 w-4" /> Browse Courses
                            </a>
                            <Link href="/" className="text-sm font-semibold leading-6 text-white group">
                                <ArrowLeft className="inline-block h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Grid */}
            <div id="courses" className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Available Programs</h2>
                        <p className="mt-4 text-lg text-gray-600">Invest in your career with our accredited certifications.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-500/30 transition-all group cursor-pointer"
                                onClick={() => setSelectedTrack(course.id)}
                            >
                                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <course.icon className="h-6 w-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                    <span className="flex items-center gap-1"><Award className="h-4 w-4" /> {course.level}</span>
                                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                                </div>
                                <div className="space-y-3 mb-8">
                                    {course.features.map(f => (
                                        <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle className="h-4 w-4 text-green-500" /> {f}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                                    <button className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1">
                                        Enroll <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
