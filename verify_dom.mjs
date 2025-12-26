
async function verifyContent() {
    console.log('Verifying Page Content...');
    try {
        const res = await fetch('http://localhost:3000');
        const html = await res.text();

        // Check for Sticky Bar text
        const hasStickyBar = html.includes('Ready to power your project?');
        console.log(`Sticky Bar Present: ${hasStickyBar ? '✅' : '❌'}`);

        // Check for Chat Widget specific text (Note: much is client-side, but initial render might have it or we check for structure)
        // actually chat widget is client side only with useEffect delay. It won't be in SSR HTML mostly.
        // But we can check for the ConsultationProvider presence or specific server-rendered layout parts.

        // Check for Hero Button Update
        // The hero button was updated to trigger modal. We can check if "Explore Services" is there.
        const hasHeroButton = html.includes('Explore Services');
        console.log(`Hero Button Present: ${hasHeroButton ? '✅' : '❌'}`);

        // Check for "Consultation" related text if possible, e.g. in the code bundle references or if rendered.
        // Since it's a client component, the text "Request Consultation" inside the modal might not be in the initial HTML if it's conditioned on isOpen.
        // But the Sticky Bar text is in the component return, conditionally rendered on scroll? 
        // Wait, StickyCTABar has `if (!isVisible) return null;` and `isVisible` starts false.
        // So it WON'T be in the SSR HTML. 

        console.log('Note: Interactive components (Chat, Sticky Bar) are client-side only and may not appear in raw HTML fetch.');

    } catch (e) {
        console.error('Fetch failed:', e.message);
    }
}

verifyContent();
