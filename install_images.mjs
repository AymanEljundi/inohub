import fs from 'fs';
import path from 'path';

// Define source and destination
const brainDir = 'C:\\Users\\helpd\\.gemini\\antigravity\\brain\\6cc62c3a-1b22-447c-9b98-a00591ec23c2';
const publicImagesDir = 'c:\\Users\\helpd\\Desktop\\antigravity\\public\\images';

// Map generated filenames (with timestamp) to target filenames
const imageMapping = [
    { pattern: /solar_hero_.*\.png/, target: 'solar-hero.jpg' },
    { pattern: /wifi_hero_.*\.png/, target: 'wifi-hero.jpg' },
    { pattern: /cctv_hero_.*\.png/, target: 'cctv-hero.jpg' }
];

// Ensure destination exists
if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Read brain dir
const files = fs.readdirSync(brainDir);

imageMapping.forEach(mapping => {
    // Find the latest file matching the pattern
    const matches = files.filter(f => mapping.pattern.test(f)).sort(); // sort by name (timestamp)
    if (matches.length > 0) {
        const sourceFile = matches[matches.length - 1]; // Get latest
        const sourcePath = path.join(brainDir, sourceFile);
        const destPath = path.join(publicImagesDir, mapping.target);

        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${sourceFile} to ${mapping.target}`);
    } else {
        console.log(`No match found for ${mapping.target}`);
    }
});
