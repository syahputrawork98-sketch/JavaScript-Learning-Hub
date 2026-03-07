# 01 - Cara Membaca ECMAScript Spec

## Tujuan Pembelajaran
- Membangun metode membaca ECMAScript spec tanpa tersesat di detail editorial.
- Bisa membedakan bagian normatif vs informatif saat mengambil keputusan teknis.
- Bisa memetakan satu perilaku runtime ke section spec yang relevan.

## Konsep Utama
- Clause
- Normative text
- Informative note
- Abstract Operation
- Algorithm conventions

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/spec-reading-workflow-map.svg`](../assets/spec-reading-workflow-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`1` pada Buku 07.
- Prasyarat langsung: fondasi runtime buku 02-06.
- Lanjut setelah ini: `02-language-types-values-dan-coercion.md`.

Prasyarat topik:
- Sudah nyaman membaca snippet runtime kecil dan memprediksi output dasar.
- Siap berpindah dari bahasa tutorial ke bahasa formal spesifikasi.

Kamus mini topik:
- `[baru]` Clause: bagian/section formal pada dokumen spec.
- `[baru]` Normative text: aturan yang wajib diikuti implementasi engine.
- `[baru]` Informative note: catatan bantu pemahaman, bukan aturan wajib.
- `[baru]` Abstract Operation: prosedur algoritmik formal yang dipakai di banyak clause.

## 1) Big Picture
Tujuan membaca spec bukan menghafal semua pasal, melainkan mendapatkan jawaban yang presisi saat tutorial, dokumentasi, atau intuisi kita tidak cukup. Dengan pola baca yang benar, kamu bisa:
- memverifikasi kenapa perilaku runtime terjadi,
- membedakan mana aturan inti vs penjelasan tambahan,
- dan menulis reasoning teknis yang konsisten lintas tim.

Spec itu seperti "sumber kebenaran formal". Kita tidak membacanya dari awal sampai akhir, tapi menavigasinya berdasarkan pertanyaan konkret.

## 2) Mapping ke Spec
Pintu masuk yang wajib kamu kenal:
- Spec root: `https://tc39.es/ecma262/`
- Notational Conventions: `https://tc39.es/ecma262/#sec-notational-conventions`
- Algorithm Conventions: `https://tc39.es/ecma262/#sec-algorithm-conventions`

Aturan praktis mapping:
1. Mulai dari konsep (`coercion`, `this`, `promise job`, `prototype`, dst).
2. Cari clause utama konsep tersebut.
3. Catat abstract operation yang dirujuk oleh clause.
4. Ikuti operasi turunan seperlunya sampai jawabanmu cukup.

## 3) Workflow Baca (Template Kerja)
1. Tulis pertanyaan runtime secara spesifik.
Contoh: "Kenapa callback Promise muncul sebelum timer 0ms?"

2. Tentukan istilah formal yang kemungkinan terlibat.
Contoh: Job, Job Queue, Promise reaction.

3. Buka clause utama dan baca definisi istilah dulu.
Jangan loncat langsung ke tengah algoritme.

4. Baca algoritme dari atas ke bawah sambil anotasi:
- input,
- branch condition,
- output/completion,
- abstract operation yang dipanggil.

5. Tandai mana normatif dan mana note informatif.
Kalau terjadi konflik, normatif yang jadi acuan.

6. Validasi dengan snippet runtime kecil.
Kalau output tidak cocok, ulangi mapping istilah atau cek host behavior boundary.

## 4) Cara Anotasi Algoritme
Gunakan format ringkas seperti ini saat membaca langkah algoritme:

```text
[Langkah] If Type(x) is Number, return x.
- Input: x
- Syarat: Type(x) === Number
- Output: x (normal completion)
- Catatan: tidak ada konversi lanjutan pada cabang ini
```

Manfaat anotasi:
- mengurangi salah baca istilah formal,
- memudahkan review reasoning,
- mempermudah balik ke clause saat debug bug runtime.

## 5) Mini Mapping Contoh
Kasus: urutan log sinkron + Promise + timer.

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

Langkah mapping:
1. Pisahkan bagian sinkron dulu: `A`, `D`.
2. `then(...)` dipetakan ke Promise reaction job di model spec.
3. `setTimeout` adalah mekanisme host, bukan Promise job spec.
4. Cocokkan model ini dengan output umum: `A D C B`.

Catatan batasan:
- Spec mendefinisikan model jobs Promise.
- Detail scheduler host (browser/node) punya boundary tersendiri.

## 6) Eksperimen Kode
Latihan cepat membedakan pertanyaan "spec-level" vs "host-level":

```js
console.log("sync-1");
queueMicrotask(() => console.log("microtask"));
setTimeout(() => console.log("timer"), 0);
console.log("sync-2");
```

Tugas:
1. Prediksi output.
2. Tandai bagian mana yang bisa dipetakan langsung ke konsep jobs/microtask model.
3. Tandai bagian yang butuh pengetahuan host scheduling.

## 7) Jebakan Umum
- Membaca note informatif seolah aturan normatif.
- Mengikuti link abstract operation terlalu dalam tanpa kembali ke pertanyaan awal.
- Mencampur istilah tutorial dan istilah normatif tanpa pemetaan eksplisit.
- Menilai hasil hanya dari satu eksperimen runtime tanpa cek clause.

## 8) Prediksi Output Drill
```js
console.log("start");
Promise.resolve().then(() => console.log("p1"));
Promise.resolve().then(() => console.log("p2"));
setTimeout(() => console.log("t"), 0);
console.log("end");
```

### Kunci Jawaban Drill
- Urutan umum: `start`, `end`, `p1`, `p2`, `t`.
- Penjelasan:
- sinkron jalan dulu,
- reaction jobs Promise diproses sebelum task timer,
- timer callback dijalankan setelah antrean job terkait selesai.

## 9) Debug Story
Kasus: tim mengira bug ada di Promise chain karena `setTimeout(..., 0)` "kalah cepat".
Langkah:
1. Repro dengan snippet minimal.
2. Map ulang istilah: Promise reaction job vs host timer task.
3. Baca clause jobs + promise object yang relevan.
4. Hasil: bukan bug Promise, tapi asumsi ordering yang salah.
5. Tindak lanjut: dokumentasikan aturan ordering di coding guideline tim.

## 10) Cakupan dan Batasan
- Dibahas: strategi membaca spec untuk menjawab pertanyaan teknis nyata.
- Tidak dibahas: semua clause ECMAScript secara menyeluruh atau detail editorial TC39 process.

## 11) Checkpoint
- [ ] Bisa membedakan normative text vs informative note dengan contoh.
- [ ] Bisa menelusuri satu abstract operation beserta input/output utamanya.
- [ ] Bisa memetakan satu perilaku runtime ke clause spec yang benar.
- [ ] Bisa menyebutkan kapan isu berada di boundary host, bukan murni language spec.

## 12) Jika Masih Bingung, Baca Ini Dulu
1. Baca ulang `../PRASYARAT-DAN-KAMUS-MINI.md` bagian istilah spec.
2. Ulangi satu kasus kecil (Promise vs timer) sampai mapping istilah stabil.
3. Lanjut ke topik `02-language-types-values-dan-coercion.md` untuk latihan mapping yang lebih deterministik.

## Ringkasan
- Cara baca spec yang efektif selalu dimulai dari pertanyaan runtime yang spesifik.
- Bedakan aturan normatif dari catatan informatif agar keputusan teknis tidak bias.
- Validasi pembacaan clause dengan eksperimen runtime kecil untuk menutup loop pemahaman.

## Lanjut Setelah Ini
- [02-language-types-values-dan-coercion.md](./02-language-types-values-dan-coercion.md)
