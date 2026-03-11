# C05 - Arrow Function Bentuk dan Early Errors

## Tujuan

Bab ini bertujuan memahami karakter sintaks arrow function dan batasannya.

## Kenapa Bab Ini Penting

Arrow function sangat sering dipakai pada callback dan functional-style code. Jika bentuk sintaks dan batasannya tidak dipahami, error parsing dan bug konteks `this` mudah muncul.

## Konsep Inti

1. Arrow function punya dua bentuk umum: concise body dan block body.
2. Arrow function tidak punya `prototype` untuk dipakai sebagai constructor.
3. Beberapa bentuk sintaks memicu early error (misalnya penggunaan parameter duplikat dalam konteks strict-like tertentu).

## Analogi

- Intuisi Singkat: Arrow function itu ringkas, tetapi formatnya lebih sensitif terhadap aturan sintaks.
- Analogi: Seperti catatan instruksi singkat yang cepat ditulis tapi harus sangat rapi agar tidak ambigu.
- Batas Analogi: Ringkas bukan berarti lebih bebas; beberapa pola justru lebih mudah memicu early error.

## Praktik yang Direkomendasikan

- Gunakan concise body untuk ekspresi pendek yang jelas.
- Gunakan block body saat butuh beberapa langkah logika.
- Tetap pilih function biasa jika memang butuh `this` dinamis atau constructor behavior.

## Kesalahan Umum

- Mengira arrow function bisa dipanggil dengan `new`.
- Lupa kurung saat mengembalikan object literal pada concise body.
- Memakai arrow function di tempat yang semestinya memakai function biasa dengan `this` dinamis.

## Checkpoint Cepat

1. Apa beda concise body dan block body?
2. Kenapa arrow function tidak cocok sebagai constructor?
3. Bagaimana cara aman mengembalikan object literal dari arrow function?

## Ringkasan

- Arrow function ringkas, tetapi punya batasan semantik yang jelas.
- Bentuk sintaks memengaruhi apakah kode valid atau memicu early error.
- Memilih bentuk function yang tepat akan mengurangi bug jangka panjang.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.3`
- `15.3.1`
- `15.3.2`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C05 Arrow Function Bentuk dan Early Errors Map](../assets/C05-arrow-function-bentuk-dan-early-errors-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C05-arrow-function-bentuk-dan-early-errors/example.js`
- Lihat contoh tambahan: `../examples/C05-arrow-function-bentuk-dan-early-errors/example-02.js`
- Lihat contoh tambahan: `../examples/C05-arrow-function-bentuk-dan-early-errors/example-03.js`
- Panduan: `../examples/C05-arrow-function-bentuk-dan-early-errors/README.md`
