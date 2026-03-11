# Changelog

Semua perubahan materi buku dicatat di file ini.

## [Unreleased]

- Menstandarkan section analogi pada seluruh chapter `C01-C20` dari `Analogi Singkat` menjadi `Analogi`.
- Menyamakan format analogi B04 dengan modul lain menjadi tiga poin: `Intuisi Singkat`, `Analogi`, dan `Batas Analogi`.
- Memperbarui `docs/writing-rules.md` agar aturan editorial B04 selaras dengan pola `B01-B03`.

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
