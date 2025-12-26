import { mockSolutions, recommendationRules } from "./mockSolutions";
import { Solution } from "./types";

interface RecommendationRequest {
    currentServiceId: string;
    siteType?: string; // 'parking', 'campus', 'municipality', etc.
    mode?: 'Permanent' | 'Event' | 'Hybrid';
}

interface RecommendationResult {
    solution: Solution;
    explanation: string;
}

export function getRecommendations(req: RecommendationRequest): RecommendationResult[] {
    const results: RecommendationResult[] = [];

    // Normalize input
    const normalizedSiteType = req.siteType?.toLowerCase();

    recommendationRules.forEach(rule => {
        // 1. Check Service ID Match
        if (rule.triggerServiceId !== req.currentServiceId) return;

        // 2. Check Context (if defined in rule)
        if (rule.triggerContext?.siteType && normalizedSiteType) {
            const match = rule.triggerContext.siteType.some(t => normalizedSiteType.includes(t));
            if (!match) return;
        }

        // 3. Find Solution
        const solution = mockSolutions.find(s => s.id === rule.recommendedSolutionId);
        if (solution) {
            results.push({
                solution,
                explanation: rule.explanation
            });
        }
    });

    // Deduping results by solution ID
    const uniqueResults = results.filter((v, i, a) => a.findIndex(t => t.solution.id === v.solution.id) === i);

    return uniqueResults;
}
