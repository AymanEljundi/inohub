# Refining Home Page Design & Gradients

## Goal Description
Align the Home Page Hero section with the "Premium Hardware" reference design provided by the user. Ensure all "orange" tones are replaced with the brand red (`#c3232b`) variants, and the overall aesthetic is purer red/black.

## User Review Required
> [!IMPORTANT]
> I will change the Secondary CTA ("View EV Network") from a button to a text link style to match the "View Categories" reference.
> I will darken the background to a deep navy/black to match the reference image.

## Proposed Changes

### Components

#### [MODIFY] [DynamicHero.tsx](file:///c:/Users/helpd/Desktop/antigravity%202/inohub/components/home/DynamicHero.tsx)
- **Remove Orange**: Replace all instances of `orange-500`, `orange-400`, and `rgba(249, 115, 22, ...)` with red equivalents (e.g., `text-red-500`, `rgba(220, 38, 38, ...)`).
- **Badge Style**: Update "LIVE PLATFORM" badge to use a dark red background (`bg-red-950/30`) with red text and border, matching the "OFFICIAL RETAIL" look.
- **Secondary CTA**: Change "View EV Network" from a glassmorphism button to a clean text link with hover arrow effect.
- **Background**: Update the main section background to be darker (`bg-[#0B0F17]`) and adjust the gradient overlay to be a subtle red glow, avoiding any orange hues.
- **Bottom Fade**: Update the bottom fade from `from-white` to `from-gray-50` or `transparent` if the page transitions to a light section, or keep it dark if the next section allows. *Correction*: The next section is stats/white, so `from-white` (which creates a fade *to* white at the bottom) is actually correct for blending into the next white section. I will keep it but maybe adjust the height/intensity if needed.

## Verification Plan

### Automated Tests
- None available for visual styling.

### Manual Verification
1.  **Visual Check**: Open `http://localhost:3000/` and verify:
    - No orange dots or lines in the animated background.
    - Badge looks like the "OFFICIAL RETAIL" reference (Dark/Red).
    - "View EV Network" is a text link.
    - Background is deep dark navy/black.
    - The red gradient text is purely red.
