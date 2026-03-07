# 02 - Interpreter vs JIT Tiering

## Tujuan Pembelajaran
- Memahami peran interpreter, baseline tier, dan optimizing tier pada engine modern.
- Memahami kenapa warm-up penting saat membaca benchmark JavaScript.
- Bisa mengenali kapan jalur kode dipromosikan dan kapan bisa fallback (deopt).

## Konsep Utama
- Interpreter
- Baseline tier
- Optimizing tier
- Warm-up
- Hot path
- Tiering decision

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`2` pada Buku 08.
- Prasyarat langsung: `01-engine-pipeline-parse-ast-bytecode.md`.
- Lanjut setelah ini: `03-hidden-classes-shapes-dan-inline-cache.md`.

Prasyarat topik:
- Sudah paham alur parse -> AST -> bytecode.
- Sudah paham perbedaan correctness vs performance behavior.

Kamus mini topik:
- `[baru]` Tiering: strategi engine menjalankan kode di beberapa level eksekusi/optimasi.
- `[baru]` Warm-up: fase awal saat engine mengumpulkan sinyal eksekusi sebelum optimasi lebih agresif.
- `[baru]` Hot path: jalur kode yang sering dieksekusi sehingga layak dioptimasi.

## 1) Big Picture
Engine JavaScript modern biasanya tidak langsung menjalankan semua fungsi di mode paling cepat. Mereka memulai dari tier awal (interpreter/baseline) untuk mengeksekusi kode dengan cepat dan mengumpulkan profil perilaku runtime. Jika fungsi tertentu sering dipanggil dengan pola yang cukup stabil, jalur itu bisa dipromosikan ke optimizing tier.

Akibatnya, performa fungsi yang sama bisa berubah seiring waktu eksekusi. Inilah alasan benchmark satu kali run sering menipu.

## 2) Small Picture
1. Kode mulai dieksekusi di tier awal agar startup cepat.
2. Engine mencatat sinyal runtime (frekuensi panggilan, pola tipe, shape data).
3. Jalur panas dipertimbangkan untuk optimasi lanjutan.
4. Jika asumsi optimasi tetap valid, jalur cepat bertahan.
5. Jika asumsi rusak, engine bisa deopt ke tier lebih aman.

## 3) Wireframe
```text
[source code]
  -> [interpreter/baseline]
  -> [profiling signal terkumpul]
  -> [hot path terdeteksi]
  -> [optimizing tier]
  -> [deopt jika asumsi patah]
```

## 4) Dipakai untuk Apa + Alasan
- Dipakai untuk: membaca hasil benchmark dengan benar dan menghindari kesimpulan performa palsu.
- Alasan pakai: membantu membedakan masalah startup cost vs steady-state performance.
- Kapan tidak dipakai: kode script pendek yang dieksekusi sekali lalu selesai.

## 5) Contoh Kode
### Contoh A - Warm-up sederhana
```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}

for (let i = 0; i < 1000; i++) {
  sum([1, 2, 3, 4, 5]);
}
```

Inti observasi:
1. Panggilan awal cenderung belum optimal penuh.
2. Repetisi membantu engine menilai jalur ini sebagai kandidat hot path.

### Contoh B - Pola input berubah
```js
function plusOne(v) {
  return v + 1;
}

for (let i = 0; i < 20000; i++) plusOne(i);
plusOne("100");
```

Inti observasi:
1. Awalnya input stabil (angka).
2. Input string dapat memaksa jalur berbeda.
3. Ini dapat mempengaruhi hasil optimasi yang sudah terbentuk.

## 6) Eksperimen Kode
Coba benchmark kecil dengan fase warm-up vs tanpa warm-up:

```js
function work(n) {
  let x = 0;
  for (let i = 0; i < n; i++) x += i;
  return x;
}

function measure(label, fn) {
  const t0 = performance.now();
  fn();
  const t1 = performance.now();
  console.log(label, (t1 - t0).toFixed(2), "ms");
}

measure("cold-run", () => {
  for (let i = 0; i < 100; i++) work(10000);
});

for (let i = 0; i < 5000; i++) work(10000); // warm-up

measure("post-warmup", () => {
  for (let i = 0; i < 100; i++) work(10000);
});
```

Catatan:
- Hasil berbeda antar engine/mesin.
- Fokus pada pola perubahan, bukan angka absolut.

## 7) Jebakan Umum
- Menyimpulkan performa hanya dari satu run.
- Mencampur cold-start dan steady-state dalam satu angka benchmark.
- Mengubah terlalu banyak variabel sekaligus saat eksperimen.

## 8) Prediksi Output Drill
```js
function square(v) {
  return v * v;
}

for (let i = 0; i < 3; i++) {
  console.log(square(i));
}
```

### Kunci Jawaban Drill
- Output numerik tetap deterministik: `0`, `1`, `4`.
- Topik ini menekankan bahwa meski output sama, jalur eksekusi performa bisa berubah seiring warm-up.

## 9) Debug Story
Kasus: tim mengira patch A membuat fungsi 2x lebih cepat, ternyata hasil benchmark tidak stabil.
Langkah:
1. Pisahkan pengukuran cold-run dan warm-run.
2. Pastikan input benchmark konsisten.
3. Ulangi beberapa iterasi dan bandingkan median, bukan single run.
4. Validasi lagi setelah perubahan input heterogen.
5. Simpan catatan metode benchmark agar dapat direplikasi tim.

## 10) Cakupan dan Batasan
- Dibahas: mental model tiering dan implikasi praktis untuk benchmarking.
- Tidak dibahas: detail implementasi internal tiap engine secara spesifik.

## 11) Checkpoint
- [ ] Bisa menjelaskan kenapa warm-up relevan di benchmark JS.
- [ ] Bisa membedakan tier awal vs optimizing tier.
- [ ] Bisa menyebut satu kondisi yang memicu fallback/deopt.

## 12) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik `01-engine-pipeline-parse-ast-bytecode.md`.
2. Jalankan eksperimen warm-up dengan input yang sama vs campuran.
3. Catat perbedaan observasi cold-run dan post-warmup.

## Ringkasan
- Engine biasanya mengeksekusi kode lewat tiering, bukan langsung mode tercepat.
- Warm-up membantu engine mengenali hot path dan peluang optimasi.
- Benchmark yang baik harus memisahkan cold-start dari steady-state.

## Lanjut Setelah Ini
- [03-hidden-classes-shapes-dan-inline-cache.md](./03-hidden-classes-shapes-dan-inline-cache.md)
