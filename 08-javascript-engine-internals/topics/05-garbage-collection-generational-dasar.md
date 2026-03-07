# 05 - Garbage Collection Generational Dasar

## Tujuan Pembelajaran
- Memahami model generational GC secara praktis dan dampaknya pada performa.
- Bisa membedakan young generation vs old generation.
- Bisa mengaitkan pola alokasi object dengan frekuensi dan biaya GC.

## Konsep Utama
- Young generation
- Old generation
- Minor collection
- Major collection
- Promotion
- Allocation churn

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`5` pada Buku 08.
- Prasyarat langsung: `04-optimization-dan-deoptimization-triggers.md`.
- Lanjut setelah ini: `06-profiling-basics-cpu-heap-flamegraph.md`.

Prasyarat topik:
- Sudah paham object allocation dasar.
- Sudah paham bahwa performa bisa dipengaruhi pola runtime, bukan hanya syntax.

Kamus mini topik:
- `[baru]` Minor collection: pembersihan pada generasi muda (biasanya lebih sering dan relatif cepat).
- `[baru]` Major collection: pembersihan pada generasi tua (lebih berat).
- `[baru]` Promotion: perpindahan object yang bertahan dari young ke old generation.

## 1) Big Picture
Sebagian besar object di aplikasi JavaScript hidup sangat singkat. Model generational GC memanfaatkan fakta ini: object baru ditempatkan di young generation, lalu dibersihkan cepat jika tidak lagi reachable. Object yang bertahan lama dipromosikan ke old generation.

Model ini membuat GC efisien, tetapi pola alokasi yang buruk (allocation churn berlebihan atau retention yang tidak perlu) tetap bisa menaikkan overhead GC dan mempengaruhi latency.

## 2) Small Picture
1. Object baru dialokasikan di generasi muda.
2. GC minor membersihkan object short-lived yang sudah tidak reachable.
3. Object yang bertahan beberapa siklus dipromosikan ke generasi tua.
4. Generasi tua dikumpulkan lewat major GC yang cenderung lebih mahal.
5. Tekanan alokasi tinggi atau retention buruk dapat meningkatkan biaya GC total.

## 3) Wireframe
```text
[new object]
   -> [young generation]
      -> [minor GC: banyak object mati cepat]
      -> [object bertahan -> promotion]
         -> [old generation]
            -> [major GC saat diperlukan]
```

## 4) Dipakai untuk Apa + Alasan
- Dipakai untuk: memahami kenapa aplikasi bisa stutter saat allocation/retention pattern buruk.
- Alasan pakai: memberi dasar sebelum masuk praktik profiling heap dan retention path.
- Kapan tidak dipakai: saat masalah utama murni I/O/network tanpa indikasi tekanan memory.

## 5) Contoh Kode
### Contoh A - Allocation churn tinggi
```js
function churn() {
  for (let i = 0; i < 100000; i++) {
    const tmp = { i, v: i + 1 };
    void tmp;
  }
}

churn();
```

Bedah:
1. Banyak object sementara dibuat cepat.
2. Mayoritas object segera tidak dipakai.
3. Pola ini menekan young generation dan memicu minor GC lebih sering.

### Contoh B - Retention object bertahan lama
```js
const cache = [];

function retain() {
  for (let i = 0; i < 50000; i++) {
    cache.push({ id: i, name: "u" + i });
  }
}

retain();
```

Bedah:
1. Object disimpan dalam struktur global `cache`.
2. Object tetap reachable lebih lama.
3. Sebagian object berpotensi dipromosikan ke old generation.

## 6) Eksperimen Kode
Bandingkan dua pola: churn vs retain.

```js
function churnBatch(n) {
  for (let i = 0; i < n; i++) {
    const o = { i, t: i * 2 };
    void o;
  }
}

const retained = [];
function retainBatch(n) {
  for (let i = 0; i < n; i++) {
    retained.push({ i, t: i * 2 });
  }
}

console.time("churn");
churnBatch(200000);
console.timeEnd("churn");

console.time("retain");
retainBatch(200000);
console.timeEnd("retain");
```

Tugas:
1. Jalankan beberapa kali dan amati tren waktu.
2. Profiling heap untuk melihat dampak retention.
3. Tambah kebijakan cleanup pada `retained` lalu bandingkan kembali.

## 7) Jebakan Umum
- Mengira GC berjalan pada waktu sinkron yang bisa diprediksi manual.
- Mengoptimasi mikro memory tanpa ada gejala bottleneck nyata.
- Menambah cache tanpa policy eviction/cleanup.

## 8) Prediksi Output Drill
```js
let arr = [{ x: 1 }, { x: 2 }];
const ref = arr;
arr = null;
console.log(ref.length);
```

### Kunci Jawaban Drill
- Output: `2`.
- Alasan: object array masih reachable lewat `ref`, sehingga belum eligible dibersihkan.

## 9) Debug Story
Kasus: service berjalan stabil 10 menit, lalu latency spike periodik.
Langkah:
1. CPU profile menunjukkan spike berkorelasi dengan aktivitas GC.
2. Heap snapshot menunjukkan growth object dari cache tanpa batas.
3. Tambah kebijakan eviction dan cleanup berkala.
4. Retest menunjukkan spike berkurang dan memory lebih stabil.

## 10) Cakupan dan Batasan
- Dibahas: mental model generational GC untuk reasoning performa.
- Tidak dibahas: implementasi collector detail per engine.

## 11) Checkpoint
- [ ] Bisa menjelaskan young vs old generation.
- [ ] Bisa membedakan minor vs major GC secara konseptual.
- [ ] Bisa menghubungkan allocation churn/retention dengan tekanan GC.

## 12) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi buku 05 topik memory lifecycle dan reachability.
2. Jalankan eksperimen churn vs retain dengan ukuran data berbeda.
3. Lanjut ke topik 06 untuk validasi lewat profiling.

## Ringkasan
- Generational GC mengoptimalkan kasus umum object short-lived.
- Pola alokasi dan retention menentukan beban GC yang nyata.
- Memahami model ini penting sebelum investigasi heap snapshot/flamegraph.

## Lanjut Setelah Ini
- [06-profiling-basics-cpu-heap-flamegraph.md](./06-profiling-basics-cpu-heap-flamegraph.md)
