# 02 - Module Graph, Linking, dan Evaluation Order

## Tujuan Pembelajaran
- Memahami bagaimana module graph menentukan urutan linking dan evaluation.
- Bisa membedakan apa yang terjadi pada fase linking vs evaluation.
- Bisa memprediksi output log untuk dependency chain sederhana sampai bercabang.

## Konsep Utama
- Module graph
- Dependency edge
- Linking phase
- Evaluation phase
- Topological dependency order

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`2` pada Buku 09.
- Prasyarat langsung: `01-es-modules-fundamentals.md`.
- Lanjut setelah ini: `03-live-bindings-dan-re-export-behavior.md`.

Prasyarat topik:
- Sudah paham sintaks `import` dan `export`.
- Sudah paham bahwa modul dievaluasi berdasarkan dependency, bukan urutan nama file.

Kamus mini topik:
- `[baru]` Dependency edge: arah ketergantungan modul A ke modul B.
- `[baru]` Linking: fase pengikatan import ke export sebelum eksekusi body modul.
- `[baru]` Evaluation: fase eksekusi kode top-level modul.

## 1) Big Picture
Ketika aplikasi terdiri dari banyak modul, bug urutan eksekusi sering muncul bukan karena syntax, tapi karena asumsi yang salah tentang kapan nilai sudah tersedia. Engine JavaScript menyusun module graph dari semua `import`, lalu melakukan linking lebih dulu. Setelah graph valid, modul dievaluasi sesuai dependency order.

Artinya, memahami module graph memberi kamu kemampuan memprediksi perilaku runtime tanpa trial-and-error.

## 2) Small Picture
1. Engine membaca entry module.
2. Semua `import` statis ditelusuri dan membentuk graph dependency.
3. Pada fase linking, binding import/export dihubungkan.
4. Jika linking valid, engine masuk ke fase evaluation.
5. Evaluation berjalan dari dependency terdalam ke modul yang bergantung padanya.

## 3) Wireframe
```text
[entry module]
   -> [telusuri import]
   -> [module graph terbentuk]
   -> [linking semua binding]
   -> [evaluation sesuai dependency order]
```

Kasus umum:
```text
a -> b -> c
Evaluation c dulu, lalu b, lalu a
```

## 4) Dipakai untuk Apa + Alasan
- Dipakai untuk: debugging urutan log, efek samping top-level, dan nilai import yang "belum siap".
- Alasan pakai: mengurangi tebakan saat menganalisis output lintas modul.
- Kapan tidak dipakai: script kecil satu file tanpa import/export.

## 5) Contoh Kode
### Contoh A - Dependency Berantai
`c.js`
```js
export const valueC = "C";
console.log("eval C");
```

`b.js`
```js
import { valueC } from "./c.js";
export const valueB = valueC + "B";
console.log("eval B", valueB);
```

`a.js`
```js
import { valueB } from "./b.js";
console.log("eval A", valueB);
```

Prediksi output:
```text
eval C
eval B CB
eval A CB
```

Bedah:
1. `a` butuh `b`, `b` butuh `c`.
2. `c` dievaluasi dulu karena paling dalam.
3. Setelah `c` selesai, `b` lalu `a` dievaluasi.

### Contoh B - Dependency Bercabang
`shared.js`
```js
export const env = "prod";
console.log("eval shared");
```

`featureA.js`
```js
import { env } from "./shared.js";
console.log("eval A", env);
```

`featureB.js`
```js
import { env } from "./shared.js";
console.log("eval B", env);
```

`main.js`
```js
import "./featureA.js";
import "./featureB.js";
```

Inti observasi:
- `shared.js` dievaluasi sekali.
- `featureA` dan `featureB` memakai binding yang sama dari `shared`.

## 6) Eksperimen Kode
Buat file ini untuk latihan prediksi:

```js
// x.js
import "./y.js";
console.log("X");

// y.js
import "./z.js";
console.log("Y");

// z.js
console.log("Z");
```

Tugas:
1. Prediksi urutan log sebelum menjalankan.
2. Jalankan dan verifikasi hasil.
3. Ubah satu dependency (`y` tidak import `z`) lalu prediksi ulang.

## 7) Jebakan Umum
- Mengira urutan file di folder menentukan evaluation order.
- Mengira `import` bekerja seperti function call yang dieksekusi saat baris itu dibaca.
- Menaruh side effect penting di top-level tanpa memahami dependency order.

## 8) Prediksi Output Drill
```js
// data.js
export const id = 42;
console.log("data ready");

// app.js
import { id } from "./data.js";
console.log("app sees", id);
```

### Kunci Jawaban Drill
- Output:
```text
data ready
app sees 42
```
- Alasan: `data.js` sebagai dependency dievaluasi sebelum `app.js`.

## 9) Debug Story
Kasus: tim melihat log `main ready` muncul lebih lambat dari yang diperkirakan.
Langkah debug:
1. Petakan graph dari entry ke dependency terdalam.
2. Cari modul yang memiliki side effect top-level berat.
3. Pindahkan side effect non-kritis ke function yang dipanggil saat dibutuhkan.
4. Verifikasi urutan log setelah refactor.

## 10) Cakupan dan Batasan
- Dibahas: graph dependency statis, linking, dan evaluation order umum.
- Tidak dibahas: detail loader host tertentu atau dynamic `import()` mendalam (dibahas di topik 05).

## 11) Checkpoint
- [ ] Bisa menggambar graph dependency 3-5 modul.
- [ ] Bisa membedakan linking vs evaluation dengan bahasa sendiri.
- [ ] Bisa memprediksi urutan log untuk chain dan branch dependency.

## 12) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `01-es-modules-fundamentals.md`.
2. Jalankan ulang contoh A dengan menambah log di setiap file.
3. Lanjutkan ke topik 03 setelah prediksi outputmu konsisten.

## Ringkasan
- Module graph menentukan urutan evaluasi, bukan urutan file di folder.
- Linking menghubungkan binding terlebih dulu sebelum body modul dieksekusi.
- Pemahaman order ini adalah fondasi debugging lintas modul.

## Lanjut Setelah Ini
- [03-live-bindings-dan-re-export-behavior.md](./03-live-bindings-dan-re-export-behavior.md)
