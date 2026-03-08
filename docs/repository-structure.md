# Struktur Repository 🗂️

Repository ini disusun sebagai **rak buku JavaScript**.  
Setiap folder utama merepresentasikan satu buku dengan domain fokus yang berbeda agar materi tetap terstruktur, tidak tumpang tindih, dan mudah dipelajari bertahap.

---

# Struktur Utama 🧭

```text
README.md
docs/

01-javascript-tutorial
02-javascript-runtime-first-principles
03-asynchronous-javascript-model
04-javascript-object-model
05-javascript-memory-and-references
06-javascript-runtime-exercises
07-javascript-specification-companion
08-javascript-engine-internals
09-javascript-modules-and-program-structure
```

---

# Penjelasan Struktur 📚

## `README.md` (Root) 🏠

Berfungsi sebagai halaman utama repository, berisi:

- tujuan repository
- konsep "rak buku"
- status singkat tiap buku
- peta pembelajaran tingkat tinggi

`README.md` root **bukan tempat materi teknis mendalam**.

---

## `docs/` ⚙️

Folder dokumentasi operasional repository, mencakup:

- aturan penulisan
- aturan kontribusi
- struktur dan konvensi repository

Folder ini **tidak digunakan untuk menyimpan materi JavaScript inti**.

---

## Folder Buku 📘

Setiap buku punya fokus domain yang jelas:

- `01-javascript-tutorial`: fondasi sintaks dan pemrograman dasar JavaScript.
- `02-javascript-runtime-first-principles`: mental model runtime (execution context, scope, closure, hoisting, `this`, call stack).
- `03-asynchronous-javascript-model`: event loop, async orchestration, hingga debugging async.
- `04-javascript-object-model`: prototype system, descriptors, inheritance/composition, hingga Proxy/Reflect dasar.
- `05-javascript-memory-and-references`: perilaku nilai/reference, mutation, GC high-level, leak patterns, profiling dasar.
- `06-javascript-runtime-exercises`: paket latihan runtime bertahap untuk validasi mental model.
- `07-javascript-specification-companion`: jembatan konsep praktik ke istilah formal ECMAScript specification.
- `08-javascript-engine-internals`: pipeline engine, optimization/deoptimization, dan profiling.
- `09-javascript-modules-and-program-structure`: module graph, evaluation order, circular deps, dan boundary design.

---

# Aturan Struktur ✅

Untuk menjaga konsistensi:

- satu domain besar JavaScript harus masuk ke buku yang tepat
- materi lintas buku harus dipisah jelas (boleh saling referensi, tidak dicampur)
- `docs/` hanya untuk dokumen aturan/proses repository
- `README.md` root tetap ringkas dan orientasi navigasi
- materi teknis detail wajib berada di folder buku terkait

---

# Tujuan Struktur 🎯

Struktur ini dibuat agar repository:

- mudah dinavigasi
- mudah dipelajari bertahap
- mudah dikembangkan dalam jangka panjang
- konsisten sebagai knowledge base JavaScript

Dengan pola ini, pembelajaran tetap fokus: **dari fondasi, ke model internal, ke praktik lanjutan**.
