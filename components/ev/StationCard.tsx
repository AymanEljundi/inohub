import { EVStation } from "@/lib/evcharging/mockStations";
import { MapPin, BatteryCharging, Zap } from "lucide-react";
import Link from "next/link";

export function StationCard({ station }: { station: EVStation }) {
    const isOnline = station.status === 'Online';
    const isBusy = station.status === 'Busy';

    return (
        <Link href={`/ev-charging/stations/${station.id}`} className="block group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{station.name}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${isOnline ? 'bg-green-100 text-green-700' :
                            isBusy ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'
                            }`}>
                            {station.status}
                        </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        {station.location.address}, {station.city}
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                            <Zap className="h-3 w-3 mr-1 text-yellow-500" />
                            <span className="font-medium">{station.connectors.length} Plugs</span>
                        </div>
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                            <BatteryCharging className="h-3 w-3 mr-1 text-primary" />
                            <span className="font-medium">
                                {Math.max(...station.connectors.map(c => c.powerKw))}kW Max
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
