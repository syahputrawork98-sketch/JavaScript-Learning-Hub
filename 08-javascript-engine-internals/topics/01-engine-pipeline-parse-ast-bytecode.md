# 01 - Engine Pipeline: Parse, AST, Bytecode

## Tujuan Pembelajaran
- Memahami alur engine dari source code sampai eksekusi runtime.
- Bisa menjelaskan fungsi parse, AST, dan bytecode pada pipeline modern.
- Bisa menghubungkan pipeline ini dengan peluang optimasi di tahap berikutnya.

## Konsep Utama
- Parser
- Abstract Syntax Tree (AST)
- Bytecode
- Interpreter entry point
- Execution pipeline

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`1` pada Buku 08.
- Topik pembuka (tanpa prasyarat topik langsung di buku ini).
- Lanjut setelah ini: `02-interpreter-vs-jit-tiering.md`.

Prasyarat topik:
- Sudah paham JavaScript syntax dasar dan function call sederhana.
- Nyaman membaca contoh kode kecil.

Kamus mini topik:
- `[baru]` Parse: proses membaca source code lalu memvalidasi struktur sintaks.
- `[baru]` AST: representasi pohon dari struktur program.
- `[baru]` Bytecode: instruksi perantara yang dieksekusi runtime engine.

## 1) Big Picture
Engine JavaScript tidak mengeksekusi source text mentah baris demi baris. Source code lebih dulu diparse menjadi struktur formal (AST), lalu diturunkan ke instruksi intermediate (bytecode) yang dapat dieksekusi interpreter/baseline tier. Baru setelah itu jalur panas bisa dipromosikan oleh tier optimasi.

Memahami pipeline ini penting karena banyak fenomena performa, error sintaks, dan tooling analysis berakar dari tahap awal parse/AST, bukan dari eksekusi akhir saja.

## 2) Small Picture
1. Source code masuk ke parser.
2. Parser mengecek validitas sintaks.
3. Struktur program dibentuk menjadi AST.
4. AST dikompilasi ke bytecode.
5. Bytecode dieksekusi di runtime tier awal.

## 3) Wireframe
```text
[source code]
   -> [parser]
   -> [AST]
   -> [bytecode]
   -> [interpreter/baseline execution]
   -> [opsional: optimizing tier untuk hot path]
```

## 4) Dipakai untuk Apa + Alasan
- Dipakai untuk: memahami dari mana biaya startup berasal dan kenapa warm-up bisa terjadi.
- Alasan pakai: memberi model mental yang konsisten sebelum masuk topik tiering/deopt.
- Kapan tidak dipakai: jika hanya butuh coding syntax dasar tanpa analisis runtime.

## 5) Contoh Kode
### Contoh A - Pipeline pada fungsi sederhana
```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

Bedah:
1. Parser mengenali `FunctionDeclaration` dan `CallExpression`.
2. Struktur program dibentuk ke AST.
3. AST diturunkan jadi bytecode untuk eksekusi.
4. Jika call berulang dan stabil, jalur ini dapat jadi kandidat optimasi.

### Contoh B - Parse error berhenti sebelum runtime
```js
function broken( {
  return 1;
}
```

Bedah:
1. Parser gagal membangun AST valid.
2. Eksekusi runtime tidak lanjut karena tahap parse sudah gagal.
3. Ini contoh penting: tidak semua error berasal dari fase execution.

## 6) Eksperimen Kode
Tujuan eksperimen: membedakan parse-time error vs runtime error.

```js
// A: parse-time error (syntax invalid)
// function bad( { return 1; }

// B: runtime error (syntax valid, masalah terjadi saat jalan)
function okButCrash() {
  return notDefinedVar + 1;
}

console.log("before run");
try {
  console.log(okButCrash());
} catch (e) {
  console.log("runtime error:", e.name);
}
```

Tugas:
1. Jalankan kasus B dan lihat error runtime.
2. Coba aktifkan kasus A dan perhatikan program gagal sebelum runtime logic berjalan.

## 7) Jebakan Umum
- Mengira engine langsung mengeksekusi source text tanpa intermediate representation.
- Mencampur parse error dengan runtime error.
- Menganggap optimasi sudah aktif penuh sejak pemanggilan pertama.

## 8) Prediksi Output Drill
```js
function mul(a, b) {
  return a * b;
}

console.log("start");
console.log(mul(4, 5));
console.log("end");
```

### Kunci Jawaban Drill
- Output:
```text
start
20
end
```
- Latihan ini menekankan bahwa correctness output berjalan di atas pipeline parse -> AST -> bytecode.

## 9) Debug Story
Kasus: tim mengira bug ada di logic bisnis, ternyata file gagal load di production.
Langkah:
1. Cek log build/runtime dan temukan syntax error pada satu file util.
2. Validasi bahwa error terjadi di fase parse, bukan jalur eksekusi bisnis.
3. Perbaiki syntax lalu jalankan ulang.
4. Tambah lint check di CI agar parse error tertangkap lebih awal.

## 10) Cakupan dan Batasan
- Dibahas: model pipeline umum engine modern secara konseptual.
- Tidak dibahas: detail internal parser/compiler spesifik tiap engine.

## 11) Checkpoint
- [ ] Bisa menjelaskan urutan parse -> AST -> bytecode -> execution.
- [ ] Bisa membedakan parse-time error dan runtime error.
- [ ] Bisa menjelaskan kenapa pipeline ini penting sebelum bicara JIT/deopt.

## 12) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi satu contoh fungsi sederhana dan gambar AST level tinggi secara manual.
2. Coba buat satu syntax invalid untuk melihat parse failure secara sadar.
3. Lanjut ke topik 02 setelah model pipeline terasa stabil.

## Ringkasan
- Engine menjalankan pipeline bertahap sebelum kode benar-benar dieksekusi.
- AST dan bytecode adalah jembatan antara source text dan runtime behavior.
- Memahami pipeline ini memudahkan kamu membaca topik tiering, deopt, dan profiling.

## Lanjut Setelah Ini
- [02-interpreter-vs-jit-tiering.md](./02-interpreter-vs-jit-tiering.md)
