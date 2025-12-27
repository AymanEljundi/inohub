"use client";

import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    fullWidth?: boolean;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", fullWidth = false }: FadeInProps) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    const initial = { opacity: 0, ...directions[direction] };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
