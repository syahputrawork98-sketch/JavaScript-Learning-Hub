/**
 * CH-01: Scanner & Parser (Lexical Simulation)
 * 
 * Lab ini mensimulasikan bagaimana Scanner V8 bekerja memecah 
 * aliran karakter menjadi token-token yang dipahami Parser.
 */

const sourceCode = 'const energy = 100;';

function simulateScanner(code) {
    console.log(`[Scanner] Processing: "${code}"\n`);
    
    // Pola regex sederhana untuk simulasi tokenisasi
    const tokens = code.match(/\w+|[=;]/g);
    
    tokens.forEach((token, index) => {
        let type = 'IDENTIFIER';
        
        if (['const', 'let', 'var', 'function'].includes(token)) {
            type = 'KEYWORD';
        } else if (!isNaN(token)) {
            type = 'NUMBER_LITERAL';
        } else if (token === '=') {
            type = 'ASSIGN_OPERATOR';
        } else if (token === ';') {
            type = 'PUNCTUATOR';
        }
        
        console.log(`Token ${index + 1}: [${type}] "${token}"`);
    });
}

// Menjalankan simulasi
simulateScanner(sourceCode);

/**
 * MENTAL MODEL:
 * Bayangkan Scanner sebagai "Penyaring Pasir". 
 * Ia menerima tumpukan pasir (teks mentah) dan memisahkannya 
 * menjadi batuan berharga (Tokens) berdasarkan bentuknya.
 */
