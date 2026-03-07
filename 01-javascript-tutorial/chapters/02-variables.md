# 02 - Variables

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca dapat:
- mendeklarasikan variabel dengan `let` dan `const`
- memahami perbedaan reassignment pada `let` dan `const`
- memilih nama variabel yang jelas dan deskriptif

## Konsep Utama

- deklarasi variabel
- inisialisasi nilai
- reassignment
- `let` dan `const`

## Penjelasan

Variabel adalah nama untuk menyimpan nilai agar bisa dipakai ulang di bagian kode lain.

Dua kata kunci utama yang dipakai di buku ini:
- `let`: nilai bisa diubah (reassign)
- `const`: binding tidak bisa diassign ulang

Contoh:
- `let score = 10` lalu `score = 20` adalah valid
- `const appName = "Learn JS"` lalu `appName = "X"` akan error

Gunakan `const` sebagai default. Pakai `let` jika memang butuh nilai berubah.

## Contoh Kode

```javascript
let age = 20
age = 21

const userName = "Sita"

console.log(age)      // 21
console.log(userName) // Sita
```

## Analogi Singkat (Opsional)

Variabel seperti label pada kotak. `let` berarti isi kotak boleh diganti, sedangkan `const` berarti label harus tetap menunjuk ke kotak yang sama.

## Eksperimen Kode

Coba ubah nilai pada `let`, lalu coba assign ulang `const` dan lihat error-nya.

```javascript
let level = 1
level = 2

const course = "JavaScript Dasar"
// course = "JavaScript Lanjutan" // uncomment untuk melihat error

console.log(level)
console.log(course)
```

Pertanyaan refleksi:
1. Kenapa `level` bisa berubah tetapi `course` tidak?
2. Kapan sebaiknya kamu memakai `let`?

## Cakupan dan Batasan

- Dibahas di bab ini: deklarasi dan penggunaan `let`/`const`.
- Tidak dibahas di bab ini: hoisting dan perbedaan detail dengan `var` pada level runtime.

## Latihan

1. Buat variabel `city` dengan `const` dan isi nama kota.
2. Buat variabel `counter` dengan `let`, lalu ubah nilainya 2 kali.
3. Cetak semua variabel ke console.

## Ringkasan

- Variabel menyimpan nilai agar kode mudah dibaca dan dikelola.
- `const` dipakai sebagai default, `let` dipakai saat nilai perlu berubah.
- Penamaan variabel yang jelas membantu mencegah bug dasar.
