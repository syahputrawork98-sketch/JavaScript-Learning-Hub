# C04 - Batas Scope R01

## Tujuan

Bab ini mencegah pembaca mencampur topik fondasi dengan topik lanjut.

## Peta Scope

| Topik | Status | Alasan |
| --- | --- | --- |
| Sintaks dasar JavaScript | Masuk `R01` | Ini fondasi untuk membaca dan menulis kode. |
| Values, types, dan coercion dasar | Masuk `R01` | Dibutuhkan untuk memahami hasil evaluasi kode sederhana. |
| Control flow (`if`, `switch`, loop) | Masuk `R01` | Bagian inti membangun logika program dasar. |
| Functions dan scope dasar | Masuk `R01` | Fondasi modularisasi logika level pemula. |
| Objects/arrays dan built-ins dasar | Masuk `R01` | Struktur data minimum untuk menyusun program sederhana. |
| Error handling dan modules dasar | Masuk `R01` | Fondasi robustness dan pemisahan file kode. |
| Execution context detail dan environment records formal | Keluar ke `R02` | Membutuhkan model runtime internal yang lebih mendalam. |
| Event loop detail, microtask/macrotask, Promise internals | Keluar ke `R03` | Termasuk domain asynchronous orchestration. |
| Prototype internals, descriptors lanjut, Proxy/Reflect | Keluar ke `R04` | Sudah masuk domain object model lanjutan. |
| Memory profiling, leak diagnosis mendalam | Keluar ke `R05` | Bukan fondasi bahasa level awal. |
| Engine optimization/deoptimization detail | Keluar ke `R07` | Termasuk domain engine dan performa. |
| Pembacaan formal ECMAScript specification | Keluar ke `R08` | Ini jalur companion untuk istilah formal spesifikasi. |

## Aturan Keputusan Cepat

Jika ragu sebuah topik masuk `R01` atau tidak, gunakan aturan ini:

1. Jika topik wajib untuk menulis program JavaScript dasar sehari-hari, masukkan ke `R01`.
2. Jika topik butuh model internal runtime formal, pindahkan ke `R02` atau lebih lanjut.
3. Jika topik fokus async orchestration, pindahkan ke `R03`.
4. Jika topik fokus internals object system, pindahkan ke `R04`.
5. Jika topik fokus analisis memory/performance engine, pindahkan ke `R05`/`R07`.

## Contoh Batas yang Sering Keliru

- `closure` dasar untuk memahami fungsi pengembalian nilai: masih boleh di `R01`.
- detail lexical environment record untuk closure: pindah ke `R02`.
- penggunaan `Promise` paling dasar sebagai pengantar: boleh disinggung singkat, tidak didalami di `R01`.
- urutan microtask vs macrotask: pindah ke `R03`.
