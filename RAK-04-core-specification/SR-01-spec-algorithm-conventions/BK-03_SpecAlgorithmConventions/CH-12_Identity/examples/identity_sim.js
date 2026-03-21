/**
 * SIMULASI: Identity (Clause 5.2.8)
 * 
 * Spec membedakan antara "Value" dan "Identity".
 * Objek memiliki identitas unik yang terpisah dari isinya.
 */

// Simulasi Alamat Memori Internal Spesifikasi
let internalIdCounter = 1000;
const memoryMap = new WeakMap();

function getInternalIdentity(obj) {
  if (!memoryMap.has(obj)) {
    memoryMap.set(obj, "0x" + (internalIdCounter++).toString(16));
  }
  return memoryMap.get(obj);
}

// Simulasi Operasi: SameValue(x, y)
function simulateSameValue(x, y) {
  console.log(`Membandingkan ${JSON.stringify(x)} dengan ${JSON.stringify(y)}...`);
  
  const idX = getInternalIdentity(x);
  const idY = getInternalIdentity(y);

  console.log(`-> Internal ID X: ${idX}`);
  console.log(`-> Internal ID Y: ${idY}`);

  if (idX === idY) {
    console.log("=> HASIL: Identik (Same Identity)");
    return true;
  } else {
    console.log("=> HASIL: Berbeda (Different Identity)");
    return false;
  }
}

// Eksperimen
const obj1 = { name: "JS" };
const obj2 = { name: "JS" };

simulateSameValue(obj1, obj1); // True
console.log("---");
simulateSameValue(obj1, obj2); // False (Isi sama, Identitas beda)
