# 06 - Boundary Design dan Public API Modul

## Tujuan Pembelajaran
- Merancang batas modul yang jelas antara API publik dan implementasi internal.
- Bisa mengecilkan surface export tanpa merusak kebutuhan konsumen.
- Bisa membuat aturan tim agar coupling lintas domain tetap terkendali.

## Konsep Utama
- Module boundary
- Public API
- Internal implementation
- Coupling control
- Stable contract

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`6` pada Buku 09.
- Prasyarat langsung: `05-dynamic-import-dan-code-splitting-konseptual.md`.
- Lanjut setelah ini: `07-barrel-pattern-tradeoff-dan-anti-pattern.md`.

Prasyarat topik:
- Sudah paham dependency graph dasar dan risiko cycle.
- Sudah paham bahwa dynamic import mengubah alur loading jadi async.

Kamus mini topik:
- `[baru]` Public surface: daftar export yang resmi dipakai modul lain.
- `[baru]` Internal helper: fungsi/objek yang hanya untuk implementasi domain itu sendiri.
- `[baru]` Contract stability: kemampuan menjaga API tetap konsisten walau internal berubah.

## 1) Big Picture
Banyak project memburuk bukan karena logika bisnisnya salah, tetapi karena terlalu banyak hal diekspor sehingga semua modul bisa saling "menyentuh" detail internal. Boundary design bertugas menentukan apa yang boleh diakses dari luar dan apa yang harus tetap privat.

Boundary yang sehat memberi tiga manfaat utama:
1. refactor internal lebih aman,
2. test lebih fokus,
3. dampak perubahan lebih lokal.

## 2) Gejala Boundary Buruk
- Modul lain mengimpor helper internal langsung dari file dalam domain.
- Satu perubahan internal memecahkan banyak tempat.
- Sulit membedakan API resmi vs kebetulan terekspos.
- Folder domain menjadi "god module" dengan export campur.

## 3) Contoh Sebelum (Boundary Bocor)
```text
user-service/
  service.js
  repository.js
  validators.js
  formatters.js
```

Contoh import konsumen:
```js
import { createUser } from "../user-service/service.js";
import { buildUserQuery } from "../user-service/repository.js"; // internal bocor
import { normalizePhone } from "../user-service/formatters.js"; // internal bocor
```

Masalah:
- Konsumen bebas masuk ke detail file internal.
- Saat internal berganti, banyak import path ikut berubah.

## 4) Desain Setelah (Public API Sempit)
```text
user-service/
  index.js          <- public API
  service.js
  repository.js
  internal/
    formatters.js
    validators.js
```

`user-service/index.js`
```js
export { createUser, getUser } from "./service.js";
```

Konsumen:
```js
import { createUser, getUser } from "../user-service/index.js";
```

Manfaat langsung:
- Konsumen hanya bergantung pada kontrak yang disepakati.
- Internal bisa berubah tanpa memaksa perubahan di seluruh codebase.

## 5) Decision Framework: Public atau Internal?
Gunakan pertanyaan ini sebelum menambah export:
1. Apakah modul domain lain benar-benar butuh ini?
2. Apakah contract ini cukup stabil untuk jangka menengah?
3. Jika diubah, apakah impact ke konsumen masih bisa dikelola?
4. Apakah ada alternatif lebih aman (mis. expose function tingkat lebih tinggi)?

Aturan praktis:
- Default: internal dulu.
- Naikkan jadi public hanya jika ada kebutuhan lintas domain yang jelas.

## 6) Eksperimen Refactor Bertahap
Langkah aman:
1. Inventaris semua export dan semua import eksternal.
2. Tandai export yang tidak seharusnya publik.
3. Buat `index.js` sebagai single public entry.
4. Migrasi konsumen ke public entry secara bertahap.
5. Hapus akses langsung ke file internal.

Contoh migrasi:
```js
// sebelum
import { buildUserQuery } from "../user-service/repository.js";

// sesudah
import { getUser } from "../user-service/index.js";
```

## 7) Regression Guard
Contoh guard rule sederhana:
```js
// pseudo-rule
// modul luar user-service dilarang impor path internal user-service
if (importerOutsideUserService && importedPath.includes("/user-service/internal/")) {
  throw new Error("Dilarang impor internal user-service");
}
```

Guard yang direkomendasikan:
1. Rule lint untuk larangan import path internal lintas domain.
2. Checklist PR: "export baru ini public contract atau helper internal?"
3. Review berkala ukuran public surface per domain.

## 8) Jebakan Umum
- Mengekspor banyak helper "jaga-jaga" padahal belum ada use case nyata.
- Menganggap barrel global sebagai solusi boundary.
- Membiarkan konsumen impor file internal karena "lebih cepat sekarang".
- Tidak mendokumentasikan API publik minimal per domain.

## 9) Prediksi Output Drill
```js
// user-service/service.js
export function createUser(name) {
  return { id: 1, name };
}

// user-service/index.js
export { createUser } from "./service.js";

// app.js
import { createUser } from "./user-service/index.js";
console.log(createUser("Nina"));
```

### Kunci Jawaban Drill
- Output object user tetap benar.
- Nilai utama latihan ini bukan output, tetapi disiplin akses hanya lewat public API.
- Struktur seperti ini memudahkan refactor internal tanpa ubah konsumen.

## 10) Debug Story
Kasus: refactor repository user memecahkan 12 file di domain lain.
Langkah:
1. Audit import dan temukan banyak akses langsung ke `user-service/repository.js`.
2. Bentuk API publik sempit di `user-service/index.js`.
3. Migrasikan konsumen ke API publik.
4. Setelah migrasi, internal repository bebas direstruktur tanpa ripple besar.

## 11) Cakupan dan Batasan
- Dibahas: boundary design modul dan stabilisasi public API.
- Tidak dibahas: detail enforce policy spesifik tool tertentu.

## 12) Checkpoint
- [ ] Bisa membedakan export publik vs helper internal.
- [ ] Bisa merancang satu public entry per domain yang jelas.
- [ ] Bisa menulis satu guard untuk mencegah import internal lintas domain.

## 13) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `04-circular-dependencies-dan-mitigasi.md`.
2. Bandingkan struktur sebelum/sesudah pada contoh topik ini.
3. Coba audit satu domain nyata di projectmu dengan framework pertanyaan pada bagian 5.

## Ringkasan
- Boundary design menjaga modul tetap terpisah dengan kontrak yang jelas.
- Public API sebaiknya kecil, eksplisit, dan stabil.
- Guard sederhana dapat mencegah kebocoran boundary berulang.

## Lanjut Setelah Ini
- [07-barrel-pattern-tradeoff-dan-anti-pattern.md](./07-barrel-pattern-tradeoff-dan-anti-pattern.md)
