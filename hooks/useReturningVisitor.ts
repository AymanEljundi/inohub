"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tsih_visited";

export function useReturningVisitor() {
    const [isReturning, setIsReturning] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check if user has visited before
        const hasVisited = localStorage.getItem(STORAGE_KEY);

        if (hasVisited === "true") {
            setIsReturning(true);
        } else {
            // Mark first visit
            localStorage.setItem(STORAGE_KEY, "true");
        }

        setIsLoaded(true);
    }, []);

    return { isReturning, isLoaded };
}
