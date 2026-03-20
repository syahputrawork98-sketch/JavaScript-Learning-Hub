# Chapter 12: Grammar Puzzles

Setelah mempelajari seluruh notasi dan aturan, saatnya kita menguji pemahaman melalui "Teka-teki Tata Bahasa" yang sering muncul dalam kasus nyata pengembangan JavaScript.

*Mental Model: "Uji Beban Blueprint"*

## 1. Teka-teki ASI (Automatic Semicolon Insertion)

Diberikan kode berikut:
```javascript
a = b + c
(d + e).print()
```
Apakah ini dianggap sebagai dua pernyataan, atau satu pemanggilan fungsi?
**Jawaban**: Karena tidak ada batasan `[no LineTerminator here]` sebelum tanda kurung buka `(`, maka parser akan menggabungkannya menjadi `a = b + c(d + e).print()`. Inilah mengapa tanda kurung di awal baris sangat berbahaya tanpa titik koma sebelumnya.

## 2. Teka-teki `/` (Division vs RegExp)

```javascript
var x = y / z / g;
```
Di sini `/` dianggap sebagai pembagian (Division). Namun:
```javascript
var x = / z / g;
```
Di sini `/` dianggap sebagai awal RegExp literal. Bagaimana parser tahu?
**Jawaban**: Parser melihat konteks sebelumnya. Jika sebelumnya adalah variabel atau angka, ia menggunakan `InputElementDiv`. Jika sebelumnya adalah operator atau kata kunci, ia menggunakan `InputElementRegExp`.

## 3. Kesimpulan Arsitektural

Memahami tata bahasa bukan berarti menghafal ribuan aturan, melainkan memahami **Mekanisme** bagaimana engine membaca niat Anda. Dengan pemahaman ini, Anda akan menulis kode yang lebih bersih, lebih bisa diprediksi, dan benar-benar "Senior".
