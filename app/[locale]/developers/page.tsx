import Link from "next/link";
import { ArrowRight, Terminal, Box, Code2, Cpu } from "lucide-react";

export const metadata = {
    title: "Developers | TechStore Cloud",
    description: "Build on the TechStore Platform. API access, SDKs, and device integration documentation for Lebanon's infrastructure.",
    keywords: ["TechStore API", "Solar API", "Smart Meter SDK", "IoT Lebanon", "Developer Keys"],
    openGraph: {
        title: "Developers | TechStore Cloud",
        description: "Programmatic access to Lebanon's physical infrastructure. Build on the Connection Layer.",
        type: "website",
        images: ["/og-developers.png"]
    }
};

export default function DevelopersPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Dark Mode Developer Hero */}
            <div className="relative isolate overflow-hidden pt-24 sm:pt-32 pb-16">
                {/* Subtle Grid - specific for Devs */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-red-400 ring-1 ring-inset ring-red-400/30 bg-red-900/10 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2" />
                            API v2.1 Stable
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-mono">
                            Build on the Connection Layer.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-400">
                            Programmatic access to sensors, energy data, and automation triggers.
                            Integrate Lebanon&apos;s physical infrastructure into your applications.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200 transition-colors">
                                Get API Keys
                            </button>
                            <button className="text-sm font-semibold leading-6 text-white border border-white/20 px-3.5 py-2.5 rounded-md hover:bg-white/10 transition-colors">
                                Read Documentation
                            </button>
                        </div>
                    </div>

                    {/* Interactive API Reference (Swagger Mock) */}
                    <div className="mt-16 bg-gray-900 rounded-xl ring-1 ring-white/10 shadow-2xl overflow-hidden border border-gray-800">
                        <div className="border-b border-gray-800 bg-gray-950 px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-bold text-white">Interactive API Reference</h2>
                                <p className="text-sm text-gray-400">Test endpoints in real-time.</p>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-900 rounded-lg p-1 border border-gray-800">
                                <span className="text-xs px-2 py-1 rounded bg-gray-800 text-white font-medium">HTTPS</span>
                                <span className="text-xs px-2 py-1 text-gray-400 font-mono">api.techstore.lb/v2</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Request Panel */}
                            <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-800 bg-gray-900/50">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30">GET</span>
                                    <span className="font-mono text-sm text-gray-300">/devices/{`{id}`}/telemetry</span>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider">Path Variables</label>
                                        <div className="flex bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                                            <span className="px-3 py-2 text-gray-500 border-r border-gray-700 text-sm bg-gray-900/50">id</span>
                                            <input type="text" value="solar-array-01" readOnly className="flex-1 bg-transparent px-3 py-2 text-sm text-white font-mono outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider">Query Parameters</label>
                                        <div className="space-y-2">
                                            <div className="flex bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                                                <span className="w-24 px-3 py-2 text-gray-500 border-r border-gray-700 text-sm bg-gray-900/50 truncate">metrics</span>
                                                <select className="flex-1 bg-transparent px-3 py-2 text-sm text-white font-mono outline-none appearance-none">
                                                    <option>voltage,current,temp</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
                                        <Terminal className="h-4 w-4" /> Execute Request
                                    </button>
                                </div>
                            </div>

                            {/* Response Panel */}
                            <div className="p-6 bg-[#0d1117] overflow-x-auto custom-scrollbar">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xs text-gray-500 font-mono uppercase tracking-wider">Response Body</h4>
                                    <span className="text-xs px-2 py-0.5 rounded bg-green-900/30 text-green-400 border border-green-900/50">200 OK</span>
                                </div>
                                <pre className="font-mono text-xs sm:text-sm leading-relaxed">
                                    <span className="text-gray-500">{`{`}</span>{"\n"}
                                    <span className="text-blue-400">"status"</span>: <span className="text-green-400">"online"</span>,{"\n"}
                                    <span className="text-blue-400">"timestamp"</span>: <span className="text-green-400">"2024-03-20T14:30:00Z"</span>,{"\n"}
                                    <span className="text-blue-400">"data"</span>: <span className="text-gray-500">{`{`}</span>{"\n"}
                                    <span className="text-blue-400">"voltage_l1"</span>: <span className="text-yellow-400">220.4</span>,{"\n"}
                                    <span className="text-blue-400">"current_l1"</span>: <span className="text-yellow-400">12.5</span>,{"\n"}
                                    <span className="text-blue-400">"temp_core"</span>: <span className="text-yellow-400">45.2</span>{"\n"}
                                    <span className="text-gray-500">{`}`}</span>{"\n"}
                                    <span className="text-gray-500">{`}`}</span>
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* SDKs Section */}
                    <div className="mt-24">
                        <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Official SDKs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-red-500/50 transition-all group cursor-pointer hover:bg-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="font-mono font-bold text-white">Node.js</div>
                                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/20">v2.4.0</span>
                                </div>
                                <p className="text-sm text-gray-400 mb-4">Server-side integration for real-time control.</p>
                                <div className="text-xs font-mono bg-black/50 p-3 rounded-lg text-gray-300 group-hover:text-white transition-colors border border-white/5">
                                    npm install @techstore/sdk
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all group cursor-pointer hover:bg-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="font-mono font-bold text-white">Python</div>
                                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/20">v1.8.2</span>
                                </div>
                                <p className="text-sm text-gray-400 mb-4">Data analysis and automation scripts.</p>
                                <div className="text-xs font-mono bg-black/50 p-3 rounded-lg text-gray-300 group-hover:text-white transition-colors border border-white/5">
                                    pip install techstore-py
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group cursor-pointer hover:bg-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="font-mono font-bold text-white">Go</div>
                                    <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/20">Beta</span>
                                </div>
                                <p className="text-sm text-gray-400 mb-4">High-performance microservices agent.</p>
                                <div className="text-xs font-mono bg-black/50 p-3 rounded-lg text-gray-300 group-hover:text-white transition-colors border border-white/5">
                                    go get github.com/techstore/go
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="py-24 bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
                            <Terminal className="h-8 w-8 text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Real-time Webhooks</h3>
                            <p className="text-gray-400">Subscribe to device events with sub-second latency.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
                            <Box className="h-8 w-8 text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Device Twin</h3>
                            <p className="text-gray-400">Interact with a virtual representation of hardware state.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
                            <Code2 className="h-8 w-8 text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Type-Safe SDKs</h3>
                            <p className="text-gray-400">First-class TypeScript support for predictable integration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
