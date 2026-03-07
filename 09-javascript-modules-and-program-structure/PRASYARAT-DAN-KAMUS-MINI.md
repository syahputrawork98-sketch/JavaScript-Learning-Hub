# Prasyarat dan Kamus Mini - Buku 09

## Prasyarat Global
- Sudah memahami `import`/`export` dasar dari buku 01.
- Sudah memahami execution model sinkron + async order dari buku 02 dan 03.
- Nyaman membaca struktur folder, dependency antar file, dan output log lintas modul.

## Prasyarat Teknis Minimum
Sebelum mulai buku 09, pastikan kamu sudah bisa:
1. Menjelaskan perbedaan function call vs module import.
2. Memprediksi urutan output sync, Promise, dan timer sederhana.
3. Menjelaskan shared reference dasar pada object/function.

## Kamus Mini Modules
- Module graph: peta dependency antar modul.
- Dependency edge: arah ketergantungan dari satu modul ke modul lain.
- Linking: fase pengikatan import ke export sebelum eksekusi.
- Evaluation: fase eksekusi body modul sesuai urutan graph.
- Live binding: binding import membaca nilai export sumber secara hidup.
- Circular dependency: siklus dependency antar modul.
- Partially initialized module: modul yang belum selesai evaluasi ketika nilainya diakses.
- Dynamic import (`import()`): loading modul saat runtime (async), bukan saat startup statis.
- Public API modul: surface export yang sengaja dibuka lintas domain.
- Internal implementation: detail modul yang boleh berubah tanpa memecahkan konsumen.
- Barrel module: file agregator export dari satu titik.
- Regression guard: rule/script untuk mencegah arsitektur dependency memburuk lagi.

## Rujukan Lintas Buku
- Runtime fundamentals: `../02-javascript-runtime-first-principles/topics/`
- Async model: `../03-asynchronous-javascript-model/topics/`
- Object model: `../04-javascript-object-model/topics/`
- Memory and references: `../05-javascript-memory-and-references/topics/`
- Runtime drills: `../06-javascript-runtime-exercises/exercises/`
- Engine internals: `../08-javascript-engine-internals/topics/`

## Rekomendasi Penggunaan Kamus
- Pakai kamus ini saat menemukan istilah yang mirip tapi levelnya beda (mis. linking vs evaluation).
- Jika dua istilah terasa tumpang tindih, cek konteksnya: phase runtime, boundary arsitektur, atau desain API.
- Simpan 1 contoh nyata per istilah dari projectmu agar istilah tidak berhenti di teori.

## Tanda Perlu Remedial
Kembali ke buku sebelumnya jika kamu masih sering:
- mengira `import` berjalan seperti pemanggilan function biasa,
- salah prediksi urutan eksekusi lintas modul,
- kesulitan membedakan API publik vs helper internal.

Remedial cepat yang disarankan:
1. Buku 02 topik scope/execution/evaluation.
2. Buku 03 topik event loop dan Promise order.
3. Buku 04 topik object model + encapsulation.
