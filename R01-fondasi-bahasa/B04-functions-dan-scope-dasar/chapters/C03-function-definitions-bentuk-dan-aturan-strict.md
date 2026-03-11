# C03 - Function Definitions Bentuk dan Aturan Strict

## Tujuan

Bab ini bertujuan memahami bentuk function definition dan constraint statis utama.

## Kenapa Bab Ini Penting

Sebelum membahas pipeline runtime, kita harus paham bentuk sintaks function mana yang valid dan bagaimana strict mode memengaruhi aturannya.

## Konsep Inti

1. Function declaration dan function expression punya bentuk sintaks yang berbeda konteks penggunaannya.
2. Strict mode memperketat beberapa aturan, termasuk duplicate parameter pada function biasa.
3. Bentuk function yang benar membantu engine membangun perilaku runtime secara konsisten.

## Analogi

- Intuisi Singkat: Function definition punya bentuk sintaks dan aturan strict yang memengaruhi validitas deklarasi.
- Analogi: Seperti rancangan bangunan yang harus lolos standar teknis sebelum boleh dibangun.
- Batas Analogi: Beberapa kesalahan terdeteksi saat parsing, bukan menunggu function dipanggil.

## Praktik yang Direkomendasikan

- Pilih declaration atau expression sesuai kebutuhan scope dan readability.
- Gunakan strict mode secara konsisten di modul/aplikasi.
- Hindari parameter duplicate agar kode tetap jelas meski di konteks non-strict.

## Kesalahan Umum

- Menyamakan declaration dan expression dalam semua konteks hoisting.
- Mengira duplicate parameter aman di strict mode.
- Menulis function expression tanpa mempertimbangkan keterbacaan nama function.

## Checkpoint Cepat

1. Apa beda penggunaan function declaration dan function expression?
2. Kenapa duplicate parameter bermasalah di strict mode?
3. Kapan named function expression lebih berguna daripada anonymous expression?

## Ringkasan

- Bentuk function yang valid adalah fondasi sebelum evaluasi runtime.
- Strict mode menambah constraint untuk mencegah ambiguitas.
- Konsistensi bentuk function memudahkan debugging bab berikutnya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.2`
- `15.2.1`
- `15.2.2`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C03 Function Definitions Bentuk dan Aturan Strict Map](../assets/C03-function-definitions-bentuk-dan-aturan-strict-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C03-function-definitions-bentuk-dan-aturan-strict/example.js`
- Lihat contoh tambahan: `../examples/C03-function-definitions-bentuk-dan-aturan-strict/example-02.js`
- Lihat contoh tambahan: `../examples/C03-function-definitions-bentuk-dan-aturan-strict/example-03.js`
- Panduan: `../examples/C03-function-definitions-bentuk-dan-aturan-strict/README.md`
