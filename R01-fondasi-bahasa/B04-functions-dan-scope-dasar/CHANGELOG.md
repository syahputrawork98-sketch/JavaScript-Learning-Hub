# Changelog

Semua perubahan materi buku dicatat di file ini.

## [Unreleased]

Belum ada perubahan setelah rilis `v1.0.2`.

## [v1.0.2] - 2026-03-12

Kode versi: `JVS-R01-B04-v1.0.2`

- Merombak `README.md` pada seluruh folder `examples/C01-C20` agar tidak lagi hanya berisi daftar file, cara menjalankan, dan spec alignment singkat.
- Menambahkan penjelasan ringkas per example yang menjelaskan tujuan folder, fungsi tiap file, serta poin perilaku penting terkait parameter list, function, method, generator, class, dan async function.
- Mempertahankan section `Spec Alignment` sambil menyelaraskan examples B04 dengan karakter buku yang menekankan fondasi functions dan scope secara bertahap.
- Mengubah examples B04 menjadi panduan kasus konkret yang lebih mudah dipakai pembaca untuk memahami perilaku runtime function family di JavaScript modern.

## [v1.0.1] - 2026-03-12

Kode versi: `JVS-R01-B04-v1.0.1`

- Menyesuaikan strategi analogi B04 agar lebih fleksibel sesuai kebutuhan materi.
- Menambahkan `Analogi Singkat` pada chapter bertipe abstrak yang direkomendasikan memiliki dua lapis analogi.
- Mempertahankan chapter bertipe `Panjang` pada format `Analogi` agar penjelasan tetap fokus dan tidak berlebihan.

## [v1.0.0] - 2026-03-11

Kode versi: `JVS-R01-B04-v1.0.0`

- Struktur buku lengkap: `README.md`, `docs/`, `chapters/`, `examples/`, dan `assets/`.
- Blueprint chapter penuh `C01-C20` untuk cakupan `ECMAScript Clause 15` (`15.1-15.10`).
- Dokumen mapping penuh [docs/spec-mapping-70.md](../docs/spec-mapping-70.md) untuk `70` section source.
- Materi chapter lengkap `C01-C20` dengan section standar: `Tujuan`, `Kenapa Bab Ini Penting`, `Konsep Inti`, `Spec Coverage`, `Visual Map`, dan `Contoh Runnable`.
- Contoh runnable lengkap untuk semua chapter: `example.js`, `example-02.js`, `example-03.js`, serta `README.md` per folder example.
- Visual map SVG lengkap untuk chapter `C01-C20` di folder `assets/`.
- Section `Analogi Singkat` di seluruh chapter `C01-C20` untuk membantu pembaca pemula membangun intuisi konsep.
- `README.md`, `chapters/README.md`, `examples/README.md`, dan `assets/README.md` diperbarui agar mencerminkan status materi final.
- Gaya editorial dibakukan menjadi "Indonesia dengan istilah teknis Inggris seperlunya" melalui [docs/writing-rules.md](../docs/writing-rules.md).
- `C17` dan `C18` diselaraskan kembali dengan `spec-mapping-70.md` agar pembahasan async function expression berada pada bab yang tepat.
- Contoh detached method pada `C08` dibuat lebih deterministik dengan output strict-mode yang konsisten.
- `C01-C04`: parameter list dan function definitions dasar.
- `C05-C08`: arrow functions dan method definitions.
- `C09-C12`: generator dan async generator functions.
- `C13-C16`: class definitions dari static semantics ke alur runtime.
- `C17-C20`: async functions, async arrow functions, dan tail position calls.
