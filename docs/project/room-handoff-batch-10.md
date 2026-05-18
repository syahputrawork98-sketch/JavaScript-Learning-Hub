# Room Handoff Batch 10 — JavaScript Knowledge Base Rebuild

Dokumen ini adalah ringkasan handoff setelah Batch 10 agar project bisa dilanjutkan di room chat baru tanpa kehilangan konteks.

---

## 1. Status Project Saat Ini

Status: `REBUILD / RESTRUCTURE PHASE`

Project ini adalah JavaScript Knowledge Base, yaitu perpustakaan belajar JavaScript pribadi.

Tujuan project adalah membangun ulang struktur materi agar menjadi sistem belajar JavaScript yang rapi, bertahap, dan bisa dipakai jangka panjang.

---

## 2. Source of Truth

Source of truth project berada di GitHub setelah commit/push.

Dokumen yang harus dibaca di room baru:

1. `docs/project/add-instruksi-chatgpt-project.md`
2. `docs/project/room-context-summary.md`
3. `docs/project/current-status.md`
4. `docs/project/roadmap-active.md`
5. `docs/project/material-content-standard.md`
6. `docs/project/material-writing-policy.md`
7. `docs/project/legacy-migration-deletion-plan.md`
8. `docs/project/room-handoff-batch-10.md`

---

## 3. Ringkasan Batch 1–10

| Batch | Status | Ringkasan |
| --- | --- | --- |
| Batch 1 | Done | Setup `docs/project/` dan Add Instructions portable. |
| Batch 2 | Done | Setup `materi/` dan rak 00–17. |
| Batch 3 | Done | Sync root docs dan hapus legacy control docs lama. |
| Batch 4 | Done | Cleanup identitas docs, link hygiene, dan mapping awal legacy. |
| Batch 5 | Done | Review gate oleh Room Chat 01, status Needs Fix ringan. |
| Batch 5.1 | Done | Fix review gate notes dan dokumentasi kebijakan migrasi. |
| Batch 6 | Done | Formalisasi `material-content-standard.md`. |
| Batch 7 | Done | Detail mapping legacy dan strategi deletion bertahap. |
| Batch 8 | Done | Pilot buku pertama `BK-01-scope-dan-lexical-environment`. |
| Batch 9 | Done | Review pilot oleh Room Chat 01, status Accepted with Notes. |
| Batch 9.1 | Done | Fix kecil teknis pilot buku. |
| Batch 10 | Done | Dokumentasi final dan handoff room baru. |

---

## 4. Keputusan yang Sudah Dikunci

- Struktur materi memakai pola `Rak → Buku → Bab → Subbab`.
- `materi/` adalah pusat perpustakaan pembelajaran.
- `docs/project/` adalah pusat kontrol project.
- Rak 00–17 sudah menjadi struktur rak aktif.
- PPM V4 tidak digunakan.
- Standar baru ada di `material-content-standard.md`.
- Folder legacy `RAK-*` belum boleh dihapus massal.
- Penghapusan legacy hanya boleh bertahap setelah materi dikaji, ditulis ulang, direview, dan disetujui.
- Client/server/web app masih HOLD.
- Gemini 3 Flash adalah executor.
- Room Chat 01 adalah analisa/review saja.
- Room Chat 00 adalah pengambil keputusan final.

---

## 5. Status Materi Saat Ini

Sudah ada pilot buku pertama:

```text
materi/03-scope-closure-this-dan-execution-context/
  BK-01-scope-dan-lexical-environment/
    README.md
    01-apa-itu-scope.md
    02-global-function-dan-block-scope.md
    03-lexical-scope-dan-scope-chain.md
```

Status buku:

`PILOT / ACTIVE DRAFT (REFINED)`

Catatan:

- Buku ini sudah direview dan diberi fix kecil.
- Buku ini boleh menjadi model awal untuk buku berikutnya.
- Buku ini belum perlu dianggap final mutlak.
- Belum ada deletion legacy.

---

## 6. Kondisi Legacy

Folder legacy:

* `RAK-01-introduction-essence/`
* `RAK-02-javascript-foundation/`
* `RAK-03-evolution-esnext/`
* `RAK-04-core-specification/`
* `RAK-05-runtime-apis/`
* `RAK-06-engines-internals/`

Status:

`LEGACY SOURCE`

Aturan:

* Jangan hapus massal.
* Jangan pindahkan mentah-mentah.
* Jangan copy-paste mentah.
* Boleh dipakai sebagai bahan rewrite.
* Boleh dihapus bertahap hanya setelah target baru selesai, direview, dan disetujui.

---

## 7. Rekomendasi Batch Berikutnya

Setelah room baru dibuka, rekomendasi arah berikutnya:

### Opsi A — Lanjutkan Buku Pilot Rak 03

Batch 11 bisa menambah bab lanjutan di buku yang sama:

* `04-shadowing.md`
* `05-tdz-dan-hoisting-lebih-detail.md`
* `06-scope-dalam-project-nyata.md`

*Kelebihan:*
* Melanjutkan konteks yang sudah hangat.
* Membuat satu buku lebih utuh.
* Membantu nanti deletion legacy terkait scope.

### Opsi B — Buat Buku Kedua Rak 03: Closure dan Memory

Batch 11 bisa mulai:

* `BK-02-closure-dan-memory/`

*Kelebihan:*
* Alur dari scope ke closure sangat natural.
* Membantu membuktikan standar material untuk topik yang lebih abstrak.

### Opsi C — Masuk Rak 02 Core Language

Batch 11 bisa mulai buku core language dasar.

*Kelebihan:*
* Lebih foundational untuk jalur belajar dari nol.
* Bagus jika user ingin merapikan dasar-dasar dulu.

---

### Rekomendasi utama Room Chat 00:
**Opsi A dulu: lanjutkan BK-01 sampai lebih utuh.**

*Alasan:*
* Sudah ada fondasi 3 bab.
* Hasil review sudah baik.
* Lebih efisien untuk mengejar satu buku yang solid sebelum pindah ke buku lain.

---

## 8. Aturan untuk Room Baru

Saat mulai room baru:
1. Baca file handoff ini.
2. Baca `current-status.md`.
3. Baca `roadmap-active.md`.
4. Baca `material-content-standard.md`.
5. Jangan mulai deletion legacy tanpa keputusan eksplisit.
6. Jangan buka client/server.
7. Jika batch sebelumnya `accepted`/`accepted with notes`, lanjutkan batch berikutnya.
8. Jika `needs fix`/`blocked`, buat fix kecil dulu.

---

## 9. Status Handoff

Status: **READY FOR NEW ROOM**

Room lama boleh ditutup setelah Batch 10 commit/push.

Room baru melanjutkan dari Batch 11.
