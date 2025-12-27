import { EVStation } from "@/lib/evcharging/mockStations";
import { MapPin, BatteryCharging, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function StationCard({ station }: { station: EVStation }) {
    const isOnline = station.status === 'Online';
    const isBusy = station.status === 'Busy';

    return (
        <Link href={`/ev-charging/stations/${station.id}`} className="block group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="relative h-48 w-full bg-gray-200">
                    <Image
                        src="/images/ev-station-default.jpg"
                        alt={station.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold uppercase shadow-sm z-10">
                        {isOnline ? <span className="text-green-700">Online</span> :
                            isBusy ? <span className="text-red-700">Busy</span> :
                                <span className="text-gray-500">Offline</span>}
                    </div>
                </div>

                <div className="p-5">
                    <div className="mb-3">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">{station.name}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                            {station.location.address}, {station.city}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded border border-gray-100">
                            <Zap className="h-3 w-3 mr-1 text-yellow-500" />
                            <span className="font-medium text-gray-700">{station.connectors.length} Plugs</span>
                        </div>
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded border border-gray-100">
                            <BatteryCharging className="h-3 w-3 mr-1 text-primary" />
                            <span className="font-medium text-gray-700">
                                {Math.max(...station.connectors.map(c => c.powerKw))}kW Max
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
