/**
 * SIMULASI: Forbidden Extensions (Clause 17)
 * 
 * Mendeteksi penggunaan eksensi host yang masuk ke area "Zona Merah".
 */

class ForbiddenZoneChecker {
  constructor() {
    // Zona Merah: nama-nama yang dilindungi oleh Spec dan tidak boleh di-override
    this.protectedNames = new Set([
      "Object", "Array", "Function", "Promise", "Symbol",
      "Map", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect",
      "Math", "JSON", "eval"
    ]);

    // Larangan modifikasi inti spesifikasi
    this.coreSemantics = new Set([
      "Object.defineProperty",
      "Object.prototype",
      "Function.prototype.call",
      "Array.prototype.push"
    ]);
  }

  // Simulasi: Apakah host mencoba menambahkan properti dengan nama terlindugi?
  checkGlobalNameOverride(newFeatureName) {
    if (this.protectedNames.has(newFeatureName)) {
      console.error(`🚫 [FORBIDDEN]: Host menambahkan '${newFeatureName}' ke Global — BENTROK dengan nama spec!`);
      return false;
    }
    console.log(`✅ [OK]: '${newFeatureName}' aman sebagai ekstensi host.`);
    return true;
  }

  // Simulasi: Apakah host mencoba mengubah semantik core?
  checkCoreSemanticMutation(target) {
    if (this.coreSemantics.has(target)) {
      console.error(`🚫 [FORBIDDEN]: Modifikasi '${target}' DILARANG oleh Clause 17.`);
      return false;
    }
    console.log(`✅ [OK]: '${target}' bukan area semantik inti. Aman untuk dioverride.`);
    return true;
  }
}

const checker = new ForbiddenZoneChecker();

console.log("=== Cek Ekstensi Nama Global ===");
checker.checkGlobalNameOverride("Promise");       // Zona Merah
checker.checkGlobalNameOverride("fetch");          // Aman (host-defined)
checker.checkGlobalNameOverride("localStorage");   // Aman (browser-defined)

console.log("\n=== Cek Mutasi Semantik Core ===");
checker.checkCoreSemanticMutation("Object.defineProperty"); // Zona Merah
checker.checkCoreSemanticMutation("myCustomLib.helper");    // Aman
