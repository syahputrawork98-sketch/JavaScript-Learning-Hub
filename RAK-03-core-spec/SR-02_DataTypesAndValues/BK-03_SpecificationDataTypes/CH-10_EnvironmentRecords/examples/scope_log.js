/**
 * CH-10: Environment Records (Spec Lab)
 * 
 * Lab ini mensimulasikan bagaimana "Environment Record" 
 * menyimpan binding variabel dalam scope.
 */

function createScope() {
    // Simulasi penambahan binding ke Environment Record
    let secret = "ENERGY_NODE_01";
    
    return function() {
        console.log(`Accessing internal record: ${secret}`);
    };
}

const access = createScope();
access();

/**
 * MENTAL MODEL:
 * Environment Record adalah "Buku Log" di sebuah ruangan (Scope). 
 * Setiap variabel yang Anda buat dicatat di buku ini. 
 * Jika Anda pindah ruangan, Anda punya buku log baru.
 */
