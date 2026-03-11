# C11 - [13.11] Equality Operators

## Tujuan

Bab ini bertujuan memperdalam operator equality (`==`, `!=`, `===`, `!==`) dalam konteks expression chain.

## Kenapa Bab Ini Penting

Equality adalah sumber bug klasik di JavaScript, terutama saat coercion implicit ikut bermain di `==`.

## Konsep Inti

### 1. Strict Equality (`===`) Tanpa Coercion

```js
5 === '5'; // false
0 === false; // false
```

### 2. Loose Equality (`==`) dengan Coercion

```js
5 == '5'; // true
0 == false; // true
```

### 3. Kasus Khusus Penting

```js
null == undefined; // true
NaN === NaN;       // false
```

### 4. Pola Praktis

`value == null` bisa dipakai saat intent-nya memang cek `null` atau `undefined` sekaligus.

## Praktik yang Direkomendasikan

- Gunakan `===` sebagai default.
- Pakai `== null` hanya untuk nullish check yang eksplisit.
- Gunakan `Number.isNaN` untuk cek `NaN`.

## Kesalahan Umum

- Memakai `==` tanpa memahami coercion path.
- Mengira `NaN` bisa dibandingkan dengan `===`.
- Menganggap object literal dengan isi sama pasti equal.

## Checkpoint Cepat

1. Kenapa `===` lebih prediktif?
2. Kapan `== null` masih layak dipakai?
3. Cara benar mengecek `NaN` apa?

## Analogi Singkat

Equality operator bisa dibayangkan seperti dua mode pemeriksaan identitas: satu ketat, satu longgar. Karena ada mode yang mau menyesuaikan bentuk input dulu, hasil perbandingan bisa mengejutkan.

## Analogi

- Intuisi Singkat: Equality operator mengecek kesetaraan dengan aturan longgar atau ketat.
- Analogi: Seperti verifikasi identitas: ada cek mirip dan cek identik.
- Batas Analogi: `==` melakukan coercion, `===` tidak.

## Ringkasan

- Strict equality aman sebagai default.
- Loose equality punya tempat terbatas untuk kasus nullish.
- Edge case equality wajib dipahami sebelum menulis kondisi kritikal.

## Visual Map

![C11 - [13.11] Equality Operators Map](../assets/C11-equality-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C11-equality-operators/example.js
- Panduan: ../examples/C11-equality-operators/README.md
