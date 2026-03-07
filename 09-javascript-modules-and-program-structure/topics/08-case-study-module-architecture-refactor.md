# 08 - Case Study: Module Architecture Refactor

## Tujuan Pembelajaran
- Melatih alur refactor arsitektur modul dari gejala coupling ke boundary yang sehat.
- Bisa memisahkan problem arsitektur menjadi gejala, hipotesis, aksi, dan verifikasi.
- Bisa menulis guard agar kualitas struktur modul tidak regress.

## Konsep Utama
- Dependency hotspot
- Module boundary
- Contract stabilization
- Incremental refactor
- Regression guard

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`8` pada Buku 09.
- Prasyarat langsung: `07-barrel-pattern-tradeoff-dan-anti-pattern.md`.
- Topik ini menutup buku 09 (tidak ada topik lanjutan di buku ini).

Prasyarat topik:
- Sudah paham module graph, linking/evaluation order, dan circular dependency.
- Sudah paham boundary design dan tradeoff barrel pattern.

Kamus mini topik:
- `[baru]` Hotspot: modul/node dengan fan-in/fan-out ekstrem yang sering memicu coupling.
- `[baru]` Stabilize contract: memperkecil dan menstabilkan public API agar perubahan internal aman.
- `[baru]` Regression guard: mekanisme (script/test/rule) untuk mencegah struktur buruk muncul lagi.

## 1) Big Picture
Saat project membesar, masalah modul biasanya muncul sebagai gejala berulang: import chain rumit, cycle sulit dilacak, dan modul pusat jadi "god module". Refactor yang efektif bukan menata folder secara kosmetik, tetapi mengubah dependency flow agar domain saling bergantung lewat kontrak yang jelas.

Kunci case study ini: lakukan refactor bertahap dengan bukti. Jangan mengubah semuanya sekaligus karena sulit membedakan mana perubahan yang benar-benar memperbaiki arsitektur.

## 2) Skenario Kasus
Gejala pada project e-commerce:
- `core/index.js` diimpor hampir semua modul.
- Muncul cycle: `core -> user -> pricing -> core`.
- Banyak helper internal terekspos lewat barrel global.
- Saat satu API `core` berubah, banyak domain ikut pecah.

Target refactor:
1. Putus cycle utama.
2. Kecilkan public surface.
3. Buat dependency antar domain lebih eksplisit.
4. Tambah guard agar struktur tidak mundur.

## 3) Baseline Struktur (Sebelum)
```text
src/
  core/
    index.js
    money.js
    logger.js
    validation.js
  user/
    service.js
  pricing/
    service.js
  order/
    service.js
```

Contoh masalah dependency:
```js
// user/service.js
import { formatMoney, validateUser, calcPrice } from "../core/index.js";

// pricing/service.js
import { getUserTier } from "../user/service.js";
import { logger } from "../core/index.js";

// core/index.js
export { formatMoney } from "./money.js";
export { logger } from "./logger.js";
export { validateUser } from "./validation.js";
export { calcPrice } from "../pricing/service.js"; // anti-pattern: core tarik domain
```

Masalah utama:
- `core/index.js` jadi pintu semua hal, termasuk domain logic.
- Arah dependency menjadi kabur dan rawan cycle.
- Konsumen tidak tahu mana API benar-benar publik vs kebetulan terekspos.

## 4) Hipotesis Refactor
Hipotesis kerja:
1. Pisahkan `core` menjadi:
- `core-contract` (utilitas/kontrak lintas domain yang stabil)
- `core-runtime` (implementasi runtime internal)
2. Domain (`user`, `pricing`, `order`) hanya boleh konsumsi kontrak yang diperlukan.
3. Larang domain logic diekspor lewat `core`.
4. Ganti barrel global dengan barrel per domain yang sempit.

Jika hipotesis benar:
- Cycle utama hilang.
- Dampak perubahan API lebih lokal.
- Dependency graph lebih mudah dijelaskan ke tim.

## 5) Langkah Refactor Bertahap
1. Petakan graph aktual dan cycle node.
2. Tandai export `core` yang seharusnya internal.
3. Buat modul `core-contract` berisi API lintas domain yang benar-benar stabil.
4. Pindahkan domain logic (`calcPrice`) keluar dari `core` ke domain aslinya.
5. Update import konsumen sedikit demi sedikit per domain.
6. Retest behavior + ukur ulang metrik struktur.
7. Tambah lint/test guard untuk mencegah dependency terlarang.

## 6) Struktur Setelah Refactor
```text
src/
  core-contract/
    money.js
    logger.js
    validation.js
    index.js
  pricing/
    index.js
    service.js
  user/
    index.js
    service.js
  order/
    service.js
```

Contoh after:
```js
// core-contract/index.js
export { formatMoney } from "./money.js";
export { logger } from "./logger.js";
export { validateUser } from "./validation.js";

// pricing/index.js
export { calcPrice } from "./service.js";

// user/service.js
import { formatMoney, validateUser } from "../core-contract/index.js";
import { calcPrice } from "../pricing/index.js";
```

Hasil arah dependency:
- `core-contract` tidak bergantung ke domain.
- Domain saling bergantung lewat API domain yang jelas, bukan lewat `core` dumping.

## 7) Verifikasi dan Metrik
Metrik struktur sebelum/sesudah (contoh):
- Jumlah cycle: `3 -> 0`
- Fan-out `core/index.js`: `18 -> 0` (file dihapus)
- Public exports total: `62 -> 27`
- File yang terdampak saat ubah API pricing: `14 -> 5`

Checklist verifikasi:
- [ ] Semua test fungsional tetap hijau.
- [ ] Tidak ada import domain logic lewat `core-contract`.
- [ ] Dependency graph tidak mengandung cycle baru.
- [ ] Public API per domain terdokumentasi singkat.

## 8) Regression Guard
Contoh guard minimal:
```js
// pseudo-rule (mis. dipakai di script lint custom)
// larang folder core-contract mengimpor dari domain
if (from.startsWith("src/core-contract") && to.match(/src\/(user|pricing|order)\//)) {
  throw new Error("core-contract tidak boleh impor domain");
}
```

Praktik guard yang disarankan:
1. Aturan dependency direction (lint/script CI).
2. Snapshot sederhana dependency graph per release.
3. Checklist PR: "apakah export baru benar-benar public API?"

## 9) Jebakan Umum
- Refactor sekali jalan tanpa baseline metrik.
- Mengganti nama folder besar-besaran tapi arah dependency tetap sama.
- Menambah barrel baru yang kembali menjadi dumping exports.
- Tidak menambah guard, sehingga 2-3 sprint kemudian cycle muncul lagi.

## 10) Latihan
1. Ambil satu modul hotspot di projectmu, hitung fan-in/fan-out kasarnya.
2. Pisahkan public API vs internal helper untuk modul tersebut.
3. Buat rencana refactor 3 langkah dengan risiko paling kecil dulu.
4. Tentukan 2 metrik keberhasilan (mis. cycle count, ukuran public API).
5. Tulis satu aturan guard dependency yang bisa dijalankan di CI.

## 11) Debug Story
Kasus: tim sering patch darurat karena perubahan kecil di pricing merusak checkout.
Langkah:
1. Audit menunjukkan checkout impor helper pricing lewat `core/index.js`.
2. Ketika helper internal diganti, checkout ikut pecah walau tidak butuh perubahan bisnis.
3. Solusi: batasi import checkout ke `pricing/index.js` (API publik) saja.
4. Setelah refactor, perubahan internal pricing tidak lagi merusak checkout selama kontrak API dijaga.

## 12) Cakupan dan Batasan
- Dibahas: strategi refactor modular bertahap dengan validasi dan guard.
- Tidak dibahas: implementasi spesifik bundler/framework atau micro-frontend orchestration.

## 13) Checkpoint
- [ ] Bisa memisahkan gejala vs akar masalah dependency.
- [ ] Bisa menyusun refactor plan bertahap yang aman dijalankan tim.
- [ ] Bisa menentukan metrik verifikasi sebelum/sesudah.
- [ ] Bisa menulis minimal satu regression guard arsitektur.

## 14) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `04-circular-dependencies-dan-mitigasi.md`.
2. Ulangi `06-boundary-design-dan-public-api-modul.md`.
3. Ulangi `07-barrel-pattern-tradeoff-dan-anti-pattern.md`.

## Ringkasan
- Refactor modul yang efektif dimulai dari gejala terukur, bukan dari estetika folder.
- Fokus utama: arah dependency, stabilitas kontrak API, dan guard anti-regresi.
- Refactor bertahap + verifikasi metrik memberi hasil yang lebih aman dan bisa dipertanggungjawabkan.

## Lanjut Setelah Ini
- Kembali ke latihan buku 06 untuk menguji reasoning runtime setelah perubahan arsitektur.
- Evaluasi ulang topik 01-07 dengan contoh project nyata kamu sendiri.
