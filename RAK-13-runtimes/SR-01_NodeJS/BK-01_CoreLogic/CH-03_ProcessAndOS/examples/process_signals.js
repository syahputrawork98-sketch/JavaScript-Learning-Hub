/**
 * CH-03: Process & OS (Signal Handling)
 * 
 * Lab ini menunjukkan bagaimana Node.js berinteraksi 
 * dengan sinyal sistem operasi untuk graceful shutdown.
 * 
 * Cara Tes:
 * 1. Jalankan script ini: node process_signals.js
 * 2. Tekan CTRL+C di terminal.
 */

console.log(`Process ID (PID): ${process.pid}`);
console.log('App is running... Press CTRL+C to terminate.');

// Mencegah proses mati seketika
setInterval(() => {}, 1000);

// Menangkap sinyal SIGINT (Interrupt from keyboard)
process.on('SIGINT', () => {
    console.log('\n[SIGINT Received] Cleaning up resources...');
    
    // Simulasi cleanup (tutup DB, simpan log, dll)
    setTimeout(() => {
        console.log('Cleanup complete. System shutting down safely.');
        process.exit(0); // Keluar dengan sukses
    }, 1500);
});

// Menangkap sinyal SIGTERM (Termination from management tool)
process.on('SIGTERM', () => {
    console.log('[SIGTERM Received] Graceful shutdown triggered.');
    process.exit(0);
});

/**
 * MENTAL MODEL:
 * Node.js adalah tamu di dalam Rumah Sistem Operasi.
 * Sinyal adalah cara Tuan Rumah (OS) memberitahu tamu untuk 
 * segera pulang atau merapikan tempat tidurnya.
 */
