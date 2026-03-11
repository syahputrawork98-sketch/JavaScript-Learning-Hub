# C13 - Class Definitions Static Semantics Bagian 1

## Tujuan

Bab ini bertujuan memahami static semantics awal pada class definitions.

## Kenapa Bab Ini Penting

Class definitions memperluas model function dan method dengan aturan statis tambahan. Memahami aturan awal ini penting supaya kita tidak hanya menulis class yang "jalan", tetapi juga mengerti kenapa bentuk tertentu dianggap valid atau invalid.

## Konsep Inti

1. Class punya aturan early errors yang lebih ketat dibanding object literal biasa.
2. Constructor method punya peran khusus dan tidak diperlakukan seperti method biasa.
3. Static semantics membantu membedakan elemen class sebelum runtime evaluation dimulai.

## Analogi

- Intuisi Singkat: Static semantics class membantu memeriksa validitas struktur class sebelum runtime penuh.
- Analogi: Seperti pemeriksaan gambar teknik gedung sebelum pembangunan dimulai.
- Batas Analogi: Banyak aturan class diverifikasi lebih awal agar error tidak terlambat muncul saat eksekusi.

## Praktik yang Direkomendasikan

- Uji satu aturan class per contoh agar pesan error mudah ditafsirkan.
- Pisahkan eksperimen constructor, instance method, dan static method.
- Saat membaca class, bedakan dulu mana elemen normal dan mana elemen khusus.

## Kesalahan Umum

- Mengira `constructor` hanyalah method biasa yang bisa dinamai ulang secara bebas.
- Menggunakan lebih dari satu constructor dalam satu class.
- Tidak membedakan method instance dengan method static saat membaca API class.

## Checkpoint Cepat

1. Kenapa constructor dianggap elemen khusus dalam class?
2. Apa contoh early error sederhana pada class definition?
3. Bagaimana membedakan method instance dan static dari bentuk deklarasinya?

## Ringkasan

- Static semantics awal class membantu kita memvalidasi struktur class sebelum runtime.
- Constructor punya status khusus dibanding method lain.
- Dasar ini memudahkan pembahasan elemen class lanjutan pada bab berikutnya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.7`
- `15.7.1`
- `15.7.2`
- `15.7.3`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C13 Class Definitions Static Semantics Bagian 1 Map](../assets/C13-class-definitions-static-semantics-bagian-1-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C13-class-definitions-static-semantics-bagian-1/example.js`
- Lihat contoh tambahan: `../examples/C13-class-definitions-static-semantics-bagian-1/example-02.js`
- Lihat contoh tambahan: `../examples/C13-class-definitions-static-semantics-bagian-1/example-03.js`
- Panduan: `../examples/C13-class-definitions-static-semantics-bagian-1/README.md`
