# C09 - Coercion ke Boolean

## Tujuan

Bab ini bertujuan memahami konversi nilai ke boolean dan pola evaluasi kondisi yang aman.

## Kenapa Bab Ini Penting

Konversi ke boolean terjadi hampir di semua percabangan.

Tanpa pemahaman yang tepat, nilai valid seperti `0` atau `''` bisa dianggap salah secara logika bisnis.

## Konsep Inti

### 1. Konversi Eksplisit dengan `Boolean(...)`

```js
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean('JS')); // true
console.log(Boolean(''));  // false
```

### 2. Double Negation (`!!`) untuk Coercion Cepat

```js
console.log(!!'hello'); // true
console.log(!!0);       // false
```

`!!value` berguna untuk normalisasi output boolean.

### 3. `&&` dan `||` Mengembalikan Operand, Bukan Boolean Murni

```js
console.log('A' && 'B'); // "B"
console.log('' || 'fallback'); // "fallback"
```

Konsekuensinya: hasil ekspresi bisa berupa string/number/object.

### 4. Gunakan Nullish Coalescing Saat Perlu

```js
const qty = 0;
console.log(qty || 10); // 10 (sering tidak diinginkan)
console.log(qty ?? 10); // 0
```

## Praktik yang Direkomendasikan

- Gunakan `Boolean(value)` atau `!!value` saat perlu output `true/false` tegas.
- Gunakan `??` untuk default yang tidak boleh menimpa `0`, `false`, atau `''`.
- Tulis kondisi dengan intent bisnis yang eksplisit.

## Kesalahan Umum

- Mengira `||` hanya fallback untuk `null`/`undefined`.
- Menganggap hasil `&&`/`||` selalu boolean.
- Menyamakan "falsy" dengan "invalid".

## Checkpoint Cepat

1. Apa beda `||` dan `??` pada nilai `0`?
2. Kenapa `&&` tidak selalu menghasilkan boolean?
3. Kapan `Boolean(value)` lebih jelas daripada coercion implicit?

## Ringkasan

- Coercion boolean terjadi luas di control flow.
- `&&` dan `||` bekerja dengan short-circuit dan mengembalikan operand.
- Pilih `||` atau `??` sesuai makna default yang diinginkan.

## Visual Map

![C09 Coercion ke Boolean Map](../assets/C09-coercion-ke-boolean-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C09-coercion-ke-boolean/example.js`
- Panduan: `../examples/C09-coercion-ke-boolean/README.md`


