"use client";

import { useState } from "react";
import { Search, ExternalLink, ShoppingBag } from "lucide-react";
import { PRODUCT_CATEGORIES, buildTechStoreLink } from "@/lib/products/techstoreLinks";

export function ProductSearchModule({ compact = false }: { compact?: boolean }) {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("all");

    const handleSearch = () => {
        const url = buildTechStoreLink(keyword, category);

        // Analytics Mock
        console.log("product_finder_opened", { keyword, category, url });

        // Open in new tab
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${compact ? 'p-6' : 'p-8 md:p-12'}`}>
            {!compact && (
                <div className="text-center mb-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                        <ShoppingBag className="h-3 w-3 mr-2" /> Service-Free Retail
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Find Products & Hardware</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Looking for standalone hardware instead of managed services?
                        Search the official TechStoreLB catalog directly.
                    </p>
                </div>
            )}

            <div className={`flex flex-col gap-4 ${compact ? '' : 'max-w-3xl mx-auto'}`}>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Category Select */}
                    <div className="md:w-1/3 relative">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 py-3 px-4 pr-8 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium"
                            aria-label="Select Category"
                        >
                            {PRODUCT_CATEGORIES.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    {/* Keyword Input */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="e.g. Inverter, Camera, Cable..."
                            className="w-full bg-white border border-gray-200 text-gray-900 py-3 pl-12 pr-4 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-400"
                            aria-label="Search Keyword"
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="bg-gray-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-black transition-colors flex items-center justify-center whitespace-nowrap shadow-lg"
                    >
                        Search Store <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                    </button>
                </div>

                {!compact && (
                    <p className="text-center text-xs text-gray-400 mt-2">
                        This will redirect you to <strong>techstorelb.com</strong> in a new tab.
                    </p>
                )}
            </div>
        </div>
    );
}
