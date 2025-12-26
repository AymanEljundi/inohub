export const TECHSTORE_BASE_URL = "https://techstorelb.com";

export const PRODUCT_CATEGORIES = [
    { id: "all", label: "All Departments", slug: "" },
    { id: "solar", label: "Solar Systems", slug: "solar-energy" },
    { id: "business", label: "Business Systems", slug: "business-systems" },
    { id: "networking", label: "Networking", slug: "networking" },
    { id: "security", label: "Security & Surveillance", slug: "security-surveillance" },
    { id: "automation", label: "Home & Gates Automation", slug: "home-gates-automation" },
    { id: "fire", label: "Fire Safety And Tools", slug: "fire-safety-tools" },
    { id: "safes", label: "Safes", slug: "safes" },
    { id: "sound", label: "Sound Systems", slug: "sound-systems" },
    { id: "alarm", label: "Alarm Systems", slug: "alarm-systems" },
];

export function buildTechStoreLink(keyword: string, categoryId: string): string {
    // 1. Keyword Search (highest priority)
    // Pattern: https://techstorelb.com/?s={keyword}&post_type=product
    if (keyword && keyword.trim().length > 0) {
        const encodedKeyword = encodeURIComponent(keyword.trim());
        return `${TECHSTORE_BASE_URL}/?s=${encodedKeyword}&post_type=product`;
    }

    // 2. Category Browse
    // Pattern: https://techstorelb.com/product-category/{slug}/
    if (categoryId && categoryId !== 'all') {
        const category = PRODUCT_CATEGORIES.find(c => c.id === categoryId);
        if (category && category.slug) {
            return `${TECHSTORE_BASE_URL}/product-category/${category.slug}/`;
        }
    }

    // 3. Fallback to Home
    return TECHSTORE_BASE_URL;
}
