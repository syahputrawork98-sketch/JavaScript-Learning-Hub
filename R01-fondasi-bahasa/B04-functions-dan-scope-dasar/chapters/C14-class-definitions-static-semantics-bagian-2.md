# C14 - Class Definitions Static Semantics Bagian 2

## Tujuan

Bab ini bertujuan memahami static semantics lanjutan pada class definitions.

## Kenapa Bab Ini Penting

Setelah aturan awal class dipahami, kita perlu masuk ke static semantics lanjutan: elemen static, non-constructor elements, dan validasi private identifiers. Ini area yang sering menimbulkan error yang tampak "aneh" jika dasar teorinya belum jelas.

## Konsep Inti

1. Elemen `static` hidup di constructor class, bukan di instance.
2. Non-constructor elements membantu kita melihat bagian class selain constructor.
3. Private identifiers harus valid dan konsisten di seluruh body class.

## Analogi

- Intuisi Singkat: Bagian lanjutan static semantics class memperdalam aturan validitas elemen-elemen class.
- Analogi: Seperti audit lanjutan yang memeriksa detail struktur ruangan, akses, dan sambungan teknis.
- Batas Analogi: Aturan ini sering terasa abstrak, tetapi penting untuk mencegah bentuk class yang kontradiktif.

## Praktik yang Direkomendasikan

- Bedakan dulu elemen instance, static, dan private sebelum menambah logika runtime.
- Gunakan contoh kecil saat memvalidasi penggunaan `#private`.
- Simpan rule of thumb sederhana: static untuk class, non-static untuk instance.

## Kesalahan Umum

- Mengakses field private yang belum dideklarasikan.
- Mengira static method bisa dipanggil langsung dari instance.
- Mencampur tanggung jawab instance dan class-level state tanpa batas jelas.

## Checkpoint Cepat

1. Apa beda elemen static dan elemen instance?
2. Kenapa private identifier harus divalidasi lebih awal?
3. Bagaimana cara cepat mengenali bahwa bug berasal dari sisi static semantics class?

## Ringkasan

- Static semantics lanjutan class membantu kita membedakan class-level dan instance-level behavior.
- Private identifiers membawa aturan validasi yang lebih ketat.
- Dasar ini akan membantu saat masuk ke runtime pipeline class definitions.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.7.4`
- `15.7.5`
- `15.7.6`
- `15.7.7`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C14 Class Definitions Static Semantics Bagian 2 Map](../assets/C14-class-definitions-static-semantics-bagian-2-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C14-class-definitions-static-semantics-bagian-2/example.js`
- Lihat contoh tambahan: `../examples/C14-class-definitions-static-semantics-bagian-2/example-02.js`
- Lihat contoh tambahan: `../examples/C14-class-definitions-static-semantics-bagian-2/example-03.js`
- Panduan: `../examples/C14-class-definitions-static-semantics-bagian-2/README.md`
