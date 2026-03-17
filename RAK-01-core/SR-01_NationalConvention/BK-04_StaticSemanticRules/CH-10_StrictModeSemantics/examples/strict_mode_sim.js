/**
 * SIMULASI: Strict Mode Semantics (Clause 11.2)
 * 
 * Mendemonstrasikan perubahan aturan statis yang aktif
 * saat 'use strict' aktif.
 */

class StrictModeChecker {
  check(code, isStrict) {
    const label = isStrict ? "STRICT" : "SLOPPY";
    console.log(`\n=== Mode: ${label} ===`);
    
    this.checkDuplicateParams(code.duplicateParams, isStrict);
    this.checkWithStatement(code.hasWith, isStrict);
    this.checkDeleteIdentifier(code.deletesIdentifier, isStrict);
    this.checkFutureReserved(code.usesFutureReserved, isStrict);
  }

  checkDuplicateParams(hasDuplicates, isStrict) {
    if (hasDuplicates && isStrict) {
      this.error("SyntaxError: Duplicate parameter names not allowed in strict mode");
    } else if (hasDuplicates) {
      console.warn("⚠️  Duplicate params: Allowed (sloppy mode), tapi tidak disarankan.");
    }
  }

  checkWithStatement(hasWith, isStrict) {
    if (hasWith && isStrict) {
      this.error("SyntaxError: 'with' statement tidak diizinkan di strict mode");
    } else if (hasWith) {
      console.warn("⚠️  'with': Allowed (sloppy mode), tapi sangat tidak disarankan.");
    }
  }

  checkDeleteIdentifier(deletesId, isStrict) {
    if (deletesId && isStrict) {
      this.error("SyntaxError: 'delete' pada identifier tidak valid di strict mode");
    } else if (deletesId) {
      console.warn("⚠️  delete <identifier>: Allowed (sloppy), menghasilkan 'false' diam-diam.");
    }
  }

  checkFutureReserved(usesFRW, isStrict) {
    if (usesFRW && isStrict) {
      this.error("SyntaxError: 'implements', 'static', 'private', dll. adalah reserved words di strict mode");
    }
  }

  error(msg) { console.error(`🚨 ${msg}`); }
}

const checker = new StrictModeChecker();

// Kode yang sama, dianalisis dalam dua mode berbeda
const codePattern = {
  duplicateParams: true,
  hasWith: true,
  deletesIdentifier: true,
  usesFutureReserved: true
};

checker.check(codePattern, false); // Non-strict: banyak warning
checker.check(codePattern, true);  // Strict: semua jadi Early Error
