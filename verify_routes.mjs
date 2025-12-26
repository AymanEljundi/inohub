
const routes = [
    '/',
    '/services',
    '/products-finder',
    '/ev-charging',
    '/academy',
    '/innovation',
    '/about',
    '/partner',
    '/calculator'
];

async function verifyRoutes() {
    console.log('🚀 Starting Full Route Verification...');
    let errors = 0;

    for (const route of routes) {
        try {
            const url = `http://localhost:3000${route}`;
            const start = performance.now();
            const res = await fetch(url);
            const duration = (performance.now() - start).toFixed(0);

            if (res.status === 200) {
                console.log(`✅ ${route.padEnd(20)} [200 OK] (${duration}ms)`);
            } else {
                console.error(`❌ ${route.padEnd(20)} [${res.status}]`);
                errors++;
            }
        } catch (e) {
            console.error(`❌ ${route.padEnd(20)} [FAILED] - ${e.message}`);
            errors++;
        }
    }

    console.log('\n----------------------------------------');
    if (errors === 0) {
        console.log('✨ All routes passed verification.');
    } else {
        console.error(`⚠️ Found ${errors} broken routes.`);
        process.exit(1);
    }
}

verifyRoutes();
