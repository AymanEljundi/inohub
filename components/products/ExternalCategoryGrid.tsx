"use client";

import { PRODUCT_CATEGORIES, buildTechStoreLink } from "@/lib/products/techstoreLinks";
import { ExternalLink } from "lucide-react";

export function ExternalCategoryGrid() {
    const categories = PRODUCT_CATEGORIES.filter(c => c.id !== 'all');

    const openCategory = (catId: string) => {
        const url = buildTechStoreLink("", catId);
        console.log("product_finder_category_click", { catId, url });
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {categories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => openCategory(cat.id)}
                    className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all text-center"
                >
                    <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {cat.label}
                    </span>
                    <span className="text-xs text-gray-400 mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        View on Store <ExternalLink className="ml-1 h-3 w-3" />
                    </span>
                </button>
            ))}
        </div>
    );
}
