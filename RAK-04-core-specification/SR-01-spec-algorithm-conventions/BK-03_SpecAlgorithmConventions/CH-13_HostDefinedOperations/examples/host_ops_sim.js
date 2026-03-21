/**
 * SIMULASI: Host-defined Operations
 * 
 * Spec ECMAScript mendiktekan APA yang harus terjadi, 
 * tapi menyerahkan BAGAIMANA cara kerjanya kepada Host (Browser/Node).
 */

// 1. Spec Level: The Hook (Kontrak)
function callHostOperation(hookName, args) {
  console.log(`Spec: Memanggil Host Hook "${hookName}"...`);
  if (typeof globalHostEnvironment[hookName] === "function") {
    return globalHostEnvironment[hookName](...args);
  }
  return null;
}

// 2. Implementation Level: Host Environment (Browser vs Node)
const globalHostEnvironment = {
  // Simulasi Hook: HostEnqueuePromiseJob
  HostEnqueuePromiseJob: (job) => {
    console.log("-> Host (Browser): Menambahkan pekerjaan ke Microtask Queue.");
    setTimeout(job, 0); // Implementasi asinkron host
  },
  
  // Simulasi Hook: HostFinalizeImportMeta
  HostFinalizeImportMeta: (importMeta) => {
    console.log("-> Host (Node.js): Mengisi URL file lokal ke import.meta.");
    importMeta.url = "file:///workspace/app.js";
  }
};

// Demo
console.log("--- Skenario Promise ---");
callHostOperation("HostEnqueuePromiseJob", [() => console.log("Job Selesai!")]);

console.log("\n--- Skenario Module Metadata ---");
const meta = {};
callHostOperation("HostFinalizeImportMeta", [meta]);
console.log("Meta Result:", meta);
