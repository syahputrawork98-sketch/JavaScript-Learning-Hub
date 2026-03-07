# Writing Rules - Buku 01

Dokumen ini mengatur gaya penulisan materi untuk `01-javascript-tutorial`.

## Fokus Buku

Boleh dibahas:
- sintaks dasar JavaScript
- pola penulisan program sederhana
- penggunaan fitur dasar bahasa

Tidak dibahas mendalam:
- execution context, lexical environment, closure internals
- event loop, task queue, microtask queue detail
- prototype internals dan memory internals

## Gaya Penulisan

- kalimat pendek dan langsung ke inti
- satu paragraf membahas satu ide utama
- istilah teknis dipakai konsisten
- hindari analogi panjang yang mengaburkan konsep

## Aturan Analogi

- analogi boleh dipakai setelah section `Contoh Kode`
- analogi bersifat opsional
- panjang analogi maksimal 2-4 kalimat
- analogi harus jadi jembatan intuisi, bukan pengganti penjelasan teknis

## Aturan Contoh Kode

- satu blok kode fokus ke satu konsep
- utamakan contoh kecil (5-20 baris)
- gunakan nama variabel yang deskriptif (`count`, `userName`, `isActive`)
- contoh harus mudah dijalankan di Node.js atau browser console

## Struktur Bab

Setiap bab mengikuti `docs/topic-template.md`.

Minimal section yang wajib ada:
- Tujuan Pembelajaran
- Konsep Utama
- Penjelasan
- Contoh Kode
- Latihan
- Ringkasan

## Boundary ke Buku Lain

Jika pembahasan mulai masuk internal runtime, tambahkan catatan singkat:
"Pembahasan internalnya ada di buku 02/03/04/05."

Tujuannya menjaga buku 01 tetap sebagai tutorial dasar.
