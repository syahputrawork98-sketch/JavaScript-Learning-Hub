/**
 * PILLAR 1: Safety Chaining (Optional Chaining & Nullish Coalescing)
 * Menunjukkan ketahanan sirkuit terhadap data yang tidak terprediksi.
 */

const hubResponse = {
    settings: {
        timeout: 0, // Valid data
        active: false // Valid data
    }
};

console.log("--- Data Resilience Test ---");

// Tanpa Optional Chaining: Bisa meledak jika 'user' undefined
try {
    console.log(hubResponse.user.profile);
} catch (e) {
    console.log(`Traditional Fail: ${e.message}`);
}

// Dengan Optional Chaining: Aman (Short-circuit)
console.log(`Modern Safe: ${hubResponse.user?.profile}`); // undefined

// Nullish Coalescing vs OR
const timeout = hubResponse.settings.timeout ?? 5000;
const timeoutOR = hubResponse.settings.timeout || 5000;

console.log(`Using ??: ${timeout}`); // 0 (Correct)
console.log(`Using ||: ${timeoutOR}`); // 5000 (Incorrect - treated 0 as falsy)
