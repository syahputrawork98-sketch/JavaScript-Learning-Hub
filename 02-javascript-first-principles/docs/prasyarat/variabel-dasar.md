# Prasyarat: Variabel Dasar (`let`, `const`, `var`)

## Tujuan
- Paham beda penggunaan `let`, `const`, dan `var`.
- Bisa deklarasi dan update nilai variabel secara benar.

## Contoh Ringkas
```js
let age = 20;
age = 21; // boleh

const name = 'Ari';
// name = 'Bima'; // error

var city = 'Bandung'; // legacy, hindari untuk kode modern
```

## Bedah Singkat
1. `let` untuk nilai yang bisa berubah.
2. `const` untuk binding yang tidak boleh di-assign ulang.
3. `var` punya perilaku lama (hoisting/function scope), pakai jika ada alasan khusus.

## Checklist Cepat
- [ ] Bisa memilih kapan pakai `let` dan `const`.
- [ ] Tahu kenapa `var` dihindari di kode modern.
