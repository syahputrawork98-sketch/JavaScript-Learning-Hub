# 04 - Circular Dependencies dan Mitigasi

## Tujuan Pembelajaran
- Mengidentifikasi circular dependency dan dampaknya pada runtime.
- Memahami kenapa modul bisa berada pada state partially initialized.
- Bisa memilih strategi mitigasi berdasarkan tradeoff desain.

## Konsep Utama
- Circular dependency
- Partially initialized module
- Runtime access timing
- Boundary refactor

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`4` pada Buku 09.
- Prasyarat langsung: `03-live-bindings-dan-re-export-behavior.md`.
- Lanjut setelah ini: `05-dynamic-import-dan-code-splitting-konseptual.md`.

Prasyarat topik:
- Sudah paham linking/evaluation order.
- Sudah paham live binding bukan snapshot value.

Kamus mini topik:
- `[baru]` Cycle node: modul yang menjadi bagian dari dependency loop.
- `[baru]` Partially initialized: modul belum selesai evaluasi saat nilainya diakses modul lain.
- `[baru]` Break cycle: memutus ketergantungan loop lewat perubahan boundary/desain akses.

## 1) Big Picture
Circular dependency tidak selalu langsung crash, tetapi sering melahirkan bug halus: nilai undefined di waktu tertentu, behavior yang berbeda antar environment, dan coupling arsitektur yang makin parah. Masalah utamanya bukan hanya loop graph, melainkan kapan nilai antar modul diakses saat inisialisasi.

Tujuan mitigasi bukan sekadar "menghilangkan warning", tetapi memastikan alur inisialisasi aman dan dependency direction tetap sehat.

## 2) Gejala Umum
- Log output tidak sesuai prediksi saat startup.
- Nilai import kadang undefined di top-level init.
- Satu perubahan kecil memicu efek domino ke banyak modul.
- Sulit menulis test unit karena modul saling menahan inisialisasi.

## 3) Contoh Dasar Cycle
`a.js`
```js
import { b } from "./b.js";
export const a = "A";
console.log("a sees b:", b);
```

`b.js`
```js
import { a } from "./a.js";
export const b = "B";
console.log("b sees a:", a);
```

Hal penting:
1. Ada cycle `a <-> b`.
2. Salah satu modul bisa mencoba membaca binding lawan saat lawan belum selesai evaluasi.
3. Output bisa tidak intuitif jika akses terjadi terlalu dini.

## 4) Mitigasi 1 - Ekstrak Kontrak Bersama
Pisahkan bagian bersama ke modul ketiga yang netral.

```js
// contract.js
export const VERSION = "v1";

// a.js
import { VERSION } from "./contract.js";
export function featureA() {
  return "A-" + VERSION;
}

// b.js
import { VERSION } from "./contract.js";
export function featureB() {
  return "B-" + VERSION;
}
```

Kapan cocok:
- Kedua modul berbagi constant/type/utility.

Tradeoff:
- Menambah modul baru, tapi dependency jadi lebih bersih.

## 5) Mitigasi 2 - Tunda Akses ke Runtime
Jangan akses dependency lintas modul di top-level init, pindahkan ke function call.

```js
// a.js
import { getB } from "./b.js";
export function getA() {
  return "A + " + getB();
}

// b.js
import { getA } from "./a.js";
export function getB() {
  return "B";
}

console.log(getA());
```

Kapan cocok:
- Cycle tidak bisa langsung diputus karena constraint legacy.

Tradeoff:
- Mengurangi risiko init timing, tetapi arsitektur cycle masih ada.

## 6) Mitigasi 3 - Refactor Boundary Domain
Ubah dependency direction agar domain tidak saling bergantung langsung.

Sebelum:
```text
user -> pricing
pricing -> user
```

Sesudah:
```text
user -> pricing-contract
pricing -> pricing-contract
```

Kapan cocok:
- Saat cycle muncul berulang dan melibatkan domain logic.

Tradeoff:
- Butuh perubahan struktur yang lebih besar, tapi hasil jangka panjang biasanya paling sehat.

## 7) Wireframe Keputusan
```text
[ada circular dependency]
   -> [cek apakah hanya shared constant/utility]
      -> ya: ekstrak kontrak bersama
      -> tidak: cek akses top-level
          -> bisa ditunda: tunda akses runtime
          -> tidak: refactor boundary domain
```

## 8) Eksperimen Kode
Latihan cepat untuk melihat dampak timing:

```js
// serviceA.js
import { readB } from "./serviceB.js";
export const stateA = "ready-A";
export function readA() {
  return stateA;
}
console.log("A init sees B:", readB());

// serviceB.js
import { readA } from "./serviceA.js";
export const stateB = "ready-B";
export function readB() {
  return stateB + " + " + (readA ? readA() : "A-not-ready");
}
```

Tugas:
1. Prediksi output startup.
2. Pindahkan akses lintas modul dari top-level ke function yang dipanggil belakangan.
3. Bandingkan stabilitas output.

## 9) Jebakan Umum
- Menyelesaikan cycle dengan barrel global yang malah menambah coupling.
- Menambah hack `setTimeout` untuk "mengakali" init timing.
- Menganggap cycle aman hanya karena "di mesin saya jalan".
- Refactor besar tanpa metrik cycle sebelum/sesudah.

## 10) Prediksi Output Drill
```js
// m1.js
import { v2 } from "./m2.js";
export const v1 = "M1";
console.log("m1 sees", v2);

// m2.js
import { v1 } from "./m1.js";
export const v2 = "M2";
console.log("m2 sees", v1);
```

### Kunci Jawaban Drill
- Ada risiko akses ke binding lawan saat statusnya belum stabil.
- Walau kadang output terlihat "benar", desain ini rapuh dan rawan regresi.
- Mitigasi sebaiknya dilakukan di level boundary, bukan patch timing sementara.

## 11) Debug Story
Kasus: startup app kadang gagal setelah tim menambah export baru di modul pricing.
Langkah debug:
1. Visualisasi graph dependency dan temukan cycle node.
2. Cari akses top-level lintas modul pada node tersebut.
3. Pindahkan akses ke runtime function dan ekstrak kontrak bersama.
4. Retest startup beberapa kali di CI.
5. Tambah rule lint untuk melarang dependency direction tertentu.

## 12) Cakupan dan Batasan
- Dibahas: cycle pada ES module dan strategi mitigasi praktis.
- Tidak dibahas: semua edge case host/bundler spesifik.

## 13) Checkpoint
- [ ] Bisa mendeteksi cycle dari graph dependency sederhana.
- [ ] Bisa menjelaskan kenapa partially initialized module berbahaya.
- [ ] Bisa memilih mitigasi yang tepat berdasarkan konteks kasus.

## 14) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `02-module-graph-linking-dan-evaluation-order.md`.
2. Ulangi `03-live-bindings-dan-re-export-behavior.md`.
3. Coba satu cycle kecil lalu pecahkan dengan tiga mitigasi berbeda.

## Ringkasan
- Circular dependency sering gagal karena timing akses, bukan sekadar karena loop graph.
- Mitigasi paling stabil biasanya datang dari boundary design yang lebih sehat.
- Patch timing bisa membantu sementara, tetapi jangan jadi solusi permanen.

## Lanjut Setelah Ini
- [05-dynamic-import-dan-code-splitting-konseptual.md](./05-dynamic-import-dan-code-splitting-konseptual.md)
