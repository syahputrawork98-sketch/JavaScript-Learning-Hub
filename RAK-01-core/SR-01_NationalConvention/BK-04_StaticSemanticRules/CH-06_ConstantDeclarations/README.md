# CH-06: Constant Declarations

Keyword `const` sering dianggap hanya sebagai "variabel yang tidak bisa diubah". Namun di mata spesifikasi, ada mekanisme **Static Binding** yang menjaga integritas `const` sejak tahap persiapan.

## Mental Model: "Segel Permanen"
Saat Anda mendeklarasikan variabel dengan `var` atau `let`, Anda membuat sebuah laci yang kuncinya bisa diberikan ke siapa saja. Namun, saat Anda menggunakan `const`, spesifikasi memasang **Segel Permanen** pada laci tersebut. 

Analisis statis bertugas memastikan:
1. Segel langsung dipasang saat laci dibuat.
2. Tidak ada rencana (kode) yang mencoba merusak segel tersebut.

---

## 1. Aturan Statis `const`
Spesifikasi menetapkan beberapa aturan semantik statis untuk `LexicalDeclaration`:
- **Wajib Inisialisasi:** `const x;` akan memicu **Early Error** (SyntaxError). Anda tidak boleh membuat konstanta "kosong".
- **Immutable Binding:** Berbeda dengan `let`, identitas binding untuk `const` ditandai sebagai *immutable* di dalam *Environment Record*.

## 2. Penegakan di Tahap Parse
Engine JavaScript melakukan pemeriksaan statis untuk melihat apakah ada operasi penugasan (`AssignmentExpression`) yang menargetkan nama yang dideklarasikan sebagai `const`.
- Jika Anda menulis `const x = 1; x = 2;`, engine seringkali bisa mendeteksi ini sebagai **Early Error** bahkan sebelum menjalankan baris pertama (tergantung implementasi optimasi parser).

## 3. Const vs Immutability
Jangan salah paham: **Constant Binding** ≠ **Immutable Value**.
- `const obj = {}` bersifat statis (Binding-nya tidak bisa diubah).
- Tapi isi dari `obj` bisa diubah. 
Aturan semantik statis hanya menjaga "Alamat" atau "Nama" variabel, bukan isi dari objek yang dirujuknya.

---

## Mengapa Arsitek Harus Tahu Ini?
Penggunaan `const` yang konsisten membantu mesin JS melakukan optimasi "Inlining". Karena mesin tahu secara statis bahwa nilai ini tidak akan pernah merujuk ke lokasi lain, mesin bisa bekerja lebih cepat dan aman dari *runtime side-effects*.

---

## Tantangan Kecil
Mengapa kita tetap butuh `Object.freeze()` jika sudah ada `const`?
(Jawabannya: Karena `const` hanya menjaga **Binding** (identitas variabel), sedangkan `Object.freeze()` menjaga **Value** (isi dari objeknya). Keduanya bekerja di level yang berbeda: `const` di level Static Semantics, `freeze` di level Runtime Semantics).

---
> [!NOTE]
> **Key Takeaway:** `const` adalah janji statis bahwa nama ini tidak akan pernah berpindah ke lain hati (nilai lain).
