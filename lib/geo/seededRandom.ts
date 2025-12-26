export class SeededRandom {
    private seed: number;

    constructor(seed: string) {
        // Simple hash to convert string to number
        let h = 2166136261 >>> 0;
        for (let i = 0; i < seed.length; i++) {
            h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
        }
        this.seed = h >>> 0;
    }

    // Returns number between 0 and 1
    next(): number {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }

    // Returns float between min and max
    nextFloat(min: number, max: number): number {
        const r = this.next();
        return min + r * (max - min);
    }

    // Returns integer between min and max (inclusive)
    nextInt(min: number, max: number): number {
        return Math.floor(this.nextFloat(min, max + 1));
    }

    // Pick random item from array
    pick<T>(array: T[]): T {
        return array[this.nextInt(0, array.length - 1)];
    }
}
