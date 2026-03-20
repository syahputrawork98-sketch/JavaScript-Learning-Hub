/**
 * SIMULASI: Binding Initialization & TDZ (Temporal Dead Zone)
 * 
 * Mendemonstrasikan perbedaan dua fase:
 * 1. BINDING: Pendaftaran nama ke scope (statis)
 * 2. INITIALIZATION: Pemberian nilai awal (runtime)
 */

class BindingManager {
  constructor() {
    // Environment Record yang menyimpan semua binding
    this.record = new Map(); // name -> { initialized, value }
  }

  // --- FASE STATIS: Registrasi binding SEBELUM eksekusi ---
  registerVar(name) {
    console.log(`[BINDING] var '${name}' → registered + initialized to undefined`);
    this.record.set(name, { initialized: true, value: undefined });
  }

  registerLet(name) {
    console.log(`[BINDING] let '${name}' → registered (TDZ LOCKED)`);
    this.record.set(name, { initialized: false, value: "🔒 TDZ" });
  }

  registerConst(name) {
    console.log(`[BINDING] const '${name}' → registered (TDZ LOCKED)`);
    this.record.set(name, { initialized: false, value: "🔒 TDZ" });
  }

  // --- FASE RUNTIME: Inisialisasi binding saat baris kode tercapai ---
  initialize(name, value) {
    const binding = this.record.get(name);
    if (!binding) {
      console.error(`🚨 ReferenceError: '${name}' is not defined`);
      return;
    }
    binding.initialized = true;
    binding.value = value;
    console.log(`[INIT]    '${name}' ← ${JSON.stringify(value)} (TDZ lifted)`);
  }

  // Membaca binding (meniru pola akses variabel)
  read(name) {
    const binding = this.record.get(name);
    if (!binding) {
      console.error(`🚨 ReferenceError: Cannot access '${name}' before initialization`);
      return;
    }
    if (!binding.initialized) {
      console.error(`🚨 ReferenceError: Cannot access '${name}' before initialization (TDZ)`);
      return;
    }
    console.log(`[READ]    '${name}' = ${JSON.stringify(binding.value)}`);
    return binding.value;
  }
}

// --- SIMULASI EKSEKUSI ---
const env = new BindingManager();

console.log("=== FASE STATIS: BoundNames Scan ===");
env.registerVar("x");
env.registerLet("y");
env.registerConst("PI");

console.log("\n=== FASE RUNTIME: Eksekusi Kode ===");

// Baca 'x' sebelum assignment → undefined (var sudah init)
env.read("x");

// Baca 'y' sebelum deklarasinya → TDZ Error!
env.read("y");

// Inisialisasi 'y' saat baris let tercapai
env.initialize("y", 42);
env.read("y"); // Sekarang OK

// Inisialisasi PI
env.initialize("PI", 3.14159);
env.read("PI");
