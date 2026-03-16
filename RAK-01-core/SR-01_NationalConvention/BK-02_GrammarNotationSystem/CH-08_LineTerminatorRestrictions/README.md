# Chapter 08: Line Terminator Restrictions

Inilah rahasia di balik salah satu fitur paling kontroversial sekaligus paling membantu di JavaScript: **Automatic Semicolon Insertion (ASI)**. Semuanya berawal dari aturan "No Line Terminator Here".

*Mental Model: "Zona Terlarang Baris Baru"*

## 1. Notasi: `[no LineTerminator here]`

Jika Anda melihat notasi ini di antara dua simbol dalam blueprint, artinya spesifikasi **melarang** adanya baris baru (Enter) di posisi tersebut.

## 2. Contoh Klasik: Kata Kunci `return`

Salah satu jebakan paling umum bagi pemula:
```javascript
return
{
  name: "JS"
};
```
JS akan menganggap ini sebagai `return;` dan baris berikutnya diabaikan.

**Aturan Spek:**
`ReturnStatement : return [no LineTerminator here] Expression opt ;`

Karena ada larangan baris baru tepat setelah `return`, maka jika parser menemukan baris baru, ia menyimpulkan bahwa Expression tersebut tidak ada (kosong) dan langsung menyisipkan titik koma (ASI).

## 3. Lokasi Larangan Lainnya

Larangan ini juga muncul pada:
- Antara parameter dan `=>` pada Arrow Function.
- Setelah operator `yield`, `break`, atau `continue`.
- Sebelum operator update `++` atau `--`.

Memahami "Zona Terlarang" ini membuat Anda tidak lagi kaget dengan perilaku ASI dan bisa menulis kode yang lebih aman secara struktural.
