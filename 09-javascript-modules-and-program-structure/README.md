# 09 - JavaScript Modules and Program Structure

Buku ini fokus memahami bagaimana program JavaScript modern disusun menggunakan module system.

## Tujuan
- Memahami mekanisme ES Modules dari perspektif loading, linking, dan evaluation.
- Memahami live bindings, dependency graph, dan circular dependencies.
- Mampu menyusun struktur program JavaScript yang scalable dan maintainable.

## Scope
- ES Modules
- `import` dan `export`
- Module graph
- Linking dan evaluation order
- Live bindings
- Circular dependencies
- Dynamic `import()`
- Boundary design antar modul
- Re-export dan barrel tradeoff
- Organisasi program skala menengah

## Out of Scope
- Tooling bundler yang terlalu spesifik sebagai materi inti.
- Framework architecture pattern yang tidak universal.

## Output
- Materi module system + panduan struktur program yang konsisten untuk proyek JavaScript modern.

## Struktur Konten
- `topics/`: materi utama yang dipakai belajar.
- `docs/`: jalur belajar dan catatan pendukung.
- `assets/`: visualisasi module graph dan evaluation flow.

## Mulai Belajar
1. Buka `docs/learning-path.md`.
2. Ikuti urutan di `topics/README.md`.
3. Gunakan latihan buku 06 untuk menguji prediksi evaluation order lintas modul.

## Exit Criteria
- Bisa menjelaskan urutan evaluasi modul pada skenario umum dan circular dependency.
- Bisa merancang batas modul yang jelas dan mudah dipelihara.
- Bisa memilih pola ekspor/impor yang tepat untuk menjaga kejelasan arsitektur.

