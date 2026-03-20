/**
 * CH-01: Security by Default (Deno Lab)
 * 
 * Lab ini menunjukkan bagaimana Deno memblokir akses file 
 * secara default untuk keamanan.
 * 
 * Cara Tes (Gagal): deno run deno_secure.ts
 * Cara Tes (Sukses): deno run --allow-read deno_secure.ts
 */

try {
    console.log('--- Attempting to read a sensitive file ---');
    const data = await Deno.readTextFile("./secrets.txt"); // Simulasi
    console.log(`Content: ${data}`);
} catch (e) {
    console.error('\n[ACCESS DENIED] Deno has blocked this action!');
    console.error('Reason: Missing --allow-read flag.');
}

/**
 * MENTAL MODEL:
 * Deno adalah bank dengan brankas yang selalu terkunci.
 * Anda (Developer) harus memberikan kunci spesifik (--allow-xxx) 
 * kepada kurir (Script) agar bisa masuk.
 */
