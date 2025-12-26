import { programs } from "@/data/academy";
import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight, Award, Video, GraduationCap, Gauge } from "lucide-react";

export function AcademyCatalog() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map(prog => (
                <Link key={prog.id} href={`/academy/programs/${prog.id}`} className="block group">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="relative h-48 bg-gray-200">
                            <Image
                                src={prog.image}
                                alt={prog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-blue-800 uppercase backdrop-blur-sm shadow-sm z-10">
                                {prog.track}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{prog.title}</h3>
                            </div>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">{prog.description}</p>

                            <div className="flex items-center justify-between text-sm py-4 border-t border-gray-50 text-gray-500">
                                <span className="flex items-center">
                                    <Gauge className="h-4 w-4 mr-2" /> {prog.level}
                                </span>
                                <span className="text-primary font-bold flex items-center">
                                    View Curriculum <ArrowRight className="h-4 w-4 ml-1" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
