/**
 * SIMULASI: Static Scope Rules
 * 
 * Mendemonstrasikan bagaimana mesin membangun "Peta Wilayah" scope
 * secara statis dan mendeteksi konflik nama deklarasi.
 */

class ScopeMapper {
  /**
   * Simulasi algoritma VarDeclaredNames vs LexicallyDeclaredNames
   * untuk mendeteksi konflik dalam scope yang sama.
   */
  analyzeScope(scopeName, varDecls, lexicalDecls) {
    console.log(`\n--- Analisis Scope: [${scopeName}] ---`);
    
    const varNames   = new Set(varDecls);
    const lexNames   = new Set(lexicalDecls);

    // Cek duplikasi dalam VarDecls
    if (varDecls.length !== varNames.size) {
      this.error("Duplikasi nama di VarDeclaredNames");
    }

    // Cek duplikasi dalam LexicalDecls
    if (lexicalDecls.length !== lexNames.size) {
      this.error("Duplikasi nama di LexicallyDeclaredNames");
    }

    // Cek konflik lintas kategori (aturan statis paling penting)
    for (const name of varNames) {
      if (lexNames.has(name)) {
        this.error(`SyntaxError: let/const '${name}' tidak boleh ada bersama var '${name}' dalam scope yang sama`);
      }
    }

    if (!this.hasError) {
      console.log(`✅ Scope [${scopeName}] BERSIH. Tidak ada konflik statis.`);
    }
    this.hasError = false;
  }

  error(msg) {
    console.error(`🚨 [PETA-SCOPE]: ${msg}`);
    this.hasError = true;
  }
}

// --- EKSPERIMEN ---
const mapper = new ScopeMapper();

// Scope 1: Script scope – bersih
mapper.analyzeScope(
  "Script",
  ["a", "b"],      // var  declarations
  ["x", "y", "z"] // let/const declarations
);

// Scope 2: Block level – ada konflik!
mapper.analyzeScope(
  "Block { }",
  ["count"],  // var inside block
  ["count"]   // let SAME NAME – konflik!
);

// Scope 3: Function scope – bersih tapi ada duplikasi var
mapper.analyzeScope(
  "Function foo()",
  ["temp", "temp"],  // duplikat var (diperlakukan toleran dalam non-strict)
  ["result"]
);
