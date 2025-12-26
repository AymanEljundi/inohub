import { DynamicHero } from "@/components/home/DynamicHero";
import { LiveSystemSnapshot } from "@/components/home/LiveSystemSnapshot";
import { IntentCards } from "@/components/home/IntentCards";
import { SystemFlowVisualization } from "@/components/home/SystemFlowVisualization";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { ProductSearchModule } from "@/components/products/ProductSearchModule";
import { SystemThread } from "@/components/home/SystemThread";

export default function Home() {
  return (
    <div className="flex flex-col relative bg-gray-50">
      {/* Persistent System Thread - spans entire page for visual continuity */}
      <SystemThread />

      {/* Dynamic Hero - Tech-First, Animated */}
      <section className="relative z-10">
        <DynamicHero />
        {/* Bridge to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      </section>

      {/* Live Platform Signals - Partially overlaps Hero for continuity */}
      <section className="relative z-20 -mt-12">
        <LiveSystemSnapshot />
        {/* Connector Line */}
        <div className="flex justify-center -mb-8 relative z-30">
          <div className="w-px h-16 bg-gradient-to-b from-blue-400 to-gray-200" />
        </div>
      </section>

      {/* Interactive Intent Cards - Tighter integration */}
      <section className="relative z-10 py-12">
        <IntentCards />
        {/* Connector Pulse */}
        <div className="flex justify-center my-8">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
        </div>
      </section>

      {/* System Flow Visualization - The Heart of the Journey */}
      <section className="relative z-10">
        <SystemFlowVisualization />
      </section>

      {/* Service Categories - Catalog Entry */}
      <section className="relative z-10 py-32 bg-white">
        {/* Visual Continuity Bridge */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-transparent" />

        {/* Central System Thread Connector */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-purple-200 via-blue-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-bold text-gray-700 uppercase tracking-wider mb-6 shadow-sm">
              Service Catalog
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Deployed Infrastructure Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From concept to live deployment—explore our active and expanding service portfolio running across Lebanon.
            </p>
          </div>
          <ServiceCategories />
        </div>

        {/* Bridge to store */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          EXTERNAL SYSTEM BOUNDARY - Product Store (Outside Innovation Hub)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-20 py-32 bg-gray-100 border-y-4 border-dashed border-gray-300">
        {/* Visual Exit/Entry Points */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-white border-x border-b border-gray-300" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* External System Label */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white border-2 border-gray-400 rounded-full text-xs font-black text-gray-600 uppercase tracking-[0.2em] shadow-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              External Gateway • Product Catalog
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[2.5rem] p-10 md:p-16 overflow-hidden relative shadow-2xl border-2 border-gray-700">
            {/* Unique Grid for "External" feel */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="store-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <rect width="1" height="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#store-grid)" />
              </svg>
            </div>

            {/* Visual Flare */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 rounded-full text-xs font-bold text-orange-400 uppercase tracking-widest mb-6">
                    ↗ Commercial Storefront
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                    Need Standalone Hardware?
                  </h2>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    This platform is for <span className="text-white font-semibold">managed deployments</span>. For individual component purchasing, access our specialized retail channel.
                  </p>
                </div>

                <div className="p-1 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <ProductSearchModule compact={true} />
                </div>
              </div>

              <div className="hidden lg:flex relative h-80 w-full group">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border-2 border-dashed border-gray-600 flex items-center justify-center transition-all duration-500 group-hover:border-orange-500/50 group-hover:bg-white/[0.07]">
                  <div className="text-center p-8 space-y-4">
                    <div className="w-16 h-px bg-orange-500/50 mx-auto" />
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Global Logistics Network</p>
                    <p className="text-4xl font-extrabold text-white tracking-tight group-hover:text-orange-400 transition-colors">techstorelb.com</p>
                    <p className="text-gray-400 text-sm font-medium">Infrastructure Components & Systems</p>
                    <div className="pt-4 flex justify-center">
                      <div className="px-6 py-2 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-400 text-sm font-bold group-hover:bg-orange-500 group-hover:text-white transition-all cursor-pointer">
                        Browse Store ↗
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Back in main system path */}
      <section className="relative z-10 py-32 bg-white">
        {/* Visual Continuity Lead-in */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gray-300 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
              Powering Lebanon&apos;s Strategic Infrastructure
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 items-center">
              {[
                { label: "Deployments", val: "47+", color: "hover:text-blue-500" },
                { label: "Cities", val: "4", color: "hover:text-green-500" },
                { label: "Solar Capacity", val: "12.4 MW", color: "hover:text-yellow-600" },
                { label: "Uptime SLA", val: "100%", color: "hover:text-purple-600" }
              ].map((stat) => (
                <div key={stat.label} className="text-center group cursor-default">
                  <div className={`text-5xl font-black text-gray-200 ${stat.color} transition-all duration-300 transform group-hover:scale-110 mb-2`}>
                    {stat.val}
                  </div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
