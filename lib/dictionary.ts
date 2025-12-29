import 'server-only';

export type Locale = 'en' | 'ar';
// Actually middleware is not creating types.

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    ar: () => import('./dictionaries/ar.json').then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

export const getDictionary = async (locale: string): Promise<Dictionary> => {
    if (locale in dictionaries) {
        return dictionaries[locale as Locale]();
    }
    // Fallback to english if locale not found
    return dictionaries.en();
};
