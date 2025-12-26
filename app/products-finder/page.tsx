import { ProductSearchModule } from "@/components/products/ProductSearchModule";
import { ExternalCategoryGrid } from "@/components/products/ExternalCategoryGrid";

export const metadata = {
    title: "Product Finder | TechStore Innovation Hub",
    description: "Find retail products and hardware on the official TechStoreLB store.",
};

export default function ProductFinderPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ProductSearchModule />
                <ExternalCategoryGrid />
            </div>
        </div>
    );
}
