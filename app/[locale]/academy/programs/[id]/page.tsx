import { programs, getProgramSessions } from "@/data/academy";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Calendar, MapPin, DollarSign } from "lucide-react";

export default async function ProgramPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const program = programs.find(p => p.id === id);
    const programSessions = getProgramSessions(id);

    if (!program) return notFound();

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
                    <Link href="/academy" className="text-gray-500 hover:text-gray-900 flex items-center text-sm font-medium">
                        We don&apos;t just teach theory; you&apos;ll get verified TechStore accreditation.
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <span className="text-primary font-bold uppercase tracking-wide text-sm">{program.track} • {program.level}</span>
                        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-6">{program.title}</h1>
                        <p className="text-lg text-gray-600 mb-8">{program.description}</p>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Certification Outcomes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {program.outcomes.map(out => (
                                    <div key={out} className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{out}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Modules</h3>
                        <div className="space-y-4">
                            {program.curriculum.map((mod, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-gray-900 text-lg">Module {i + 1}: {mod.title}</h4>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{mod.duration}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {mod.topics.map(t => (
                                            <span key={t} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2 py-1 rounded">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Upcoming Sessions */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Upcoming Sessions</h3>

                            <div className="space-y-4">
                                {programSessions.length > 0 ? programSessions.map(sess => (
                                    <div key={sess.id} className="border border-gray-200 rounded-xl p-4 hover:border-primary transition-colors">
                                        <div className="flex items-center text-sm text-gray-900 font-bold mb-2">
                                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                                            {new Date(sess.startDate).toLocaleDateString()}
                                        </div>
                                        <div className="text-sm text-gray-600 mb-1 flex items-center">
                                            <MapPin className="h-3 w-3 mr-2" /> {sess.location}
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3 flex items-center">
                                            <DollarSign className="h-3 w-3 mr-2" /> {sess.price} {sess.currency}
                                        </div>

                                        {sess.status === 'Open' ? (
                                            <button className="w-full py-2 bg-gray-900 text-white rounded-lg font-medium text-sm hover:bg-black transition-colors">
                                                Reserve Seat ({sess.seatsRemaining} left)
                                            </button>
                                        ) : (
                                            <button disabled className="w-full py-2 bg-gray-100 text-gray-400 rounded-lg font-medium text-sm cursor-not-allowed">
                                                {sess.status}
                                            </button>
                                        )}
                                    </div>
                                )) : (
                                    <p className="text-gray-500 text-sm">No upcoming sessions scheduled.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
