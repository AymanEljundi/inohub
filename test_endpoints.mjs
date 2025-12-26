
async function testEndpoints() {
    console.log('Testing Endpoints...');
    const baseUrl = 'http://localhost:3000';

    // 1. Test Homepage
    try {
        const res = await fetch(baseUrl);
        console.log(`Homepage Status: ${res.status}`);
        if (res.status === 200) console.log('✅ Homepage is accessible');
        else console.error('❌ Homepage failed');
    } catch (e) {
        console.error('❌ Could not connect to homepage', e.message);
    }

    // 2. Test Consultation API
    try {
        const res = await fetch(`${baseUrl}/api/consultation`, {
            method: 'POST',
            body: JSON.stringify({ name: 'Test', email: 'test@example.com' }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        console.log(`API Status: ${res.status}`);
        console.log('API Response:', data);

        if (res.status === 200 && data.success) console.log('✅ Consultation API works');
        else console.error('❌ Consultation API failed');
    } catch (e) {
        console.error('❌ Could not connect to API', e.message);
    }
}

testEndpoints();
