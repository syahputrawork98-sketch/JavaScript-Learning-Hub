# Bab 03: Mekanika SameValue & SameValueZero

Meskipun `===` sudah sangat ketat, ternyata JavaScript masih memiliki dua algoritma perbandingan lain yang lebih "presisi" untuk kasus-kasus khusus. Algoritma ini adalah **SameValue** (Clause 7.2.10) dan **SameValueZero** (Clause 7.2.11).

Kedua algoritma ini tidak memiliki operator simbolis (seperti `==` atau `===`), namun digunakan secara internal oleh metode modern seperti `Object.is()`, `Array.prototype.includes()`, serta struktur data `Map` dan `Set`.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> Jika `===` adalah Scanner Sidik Jari, maka **SameValue** adalah **Uji DNA**. Dia jauh lebih dalam dan tidak bisa dikelabui oleh kosmetik apapun. Dia bisa membedakan bahkan antara "Nol Positif" dan "Nol Negatif".

> **Analogi Panjang (Kaca Pembesar Detektif):**  
> Bayangkan seorang detektif sedang meneliti dua butir debu yang tampak identik.
> - Menggunakan kacamata biasa (`===`), detektif melihat `NaN` dan `NaN` sebagai dua hal yang berbeda (karena aturan historis JS). Dia juga melihat `+0` dan `-0` sebagai hal yang sama.
> - Menggunakan **Kaca Pembesar SameValue**, detektif bisa melihat bahwa `NaN` sebenarnya adalah partikel yang identik. Dia juga bisa melihat perbedaan muatan energi antara `+0` dan `-0`, sehingga menganggap keduanya **berbeda**.
> - **SameValueZero** adalah detektif yang sedikit lebih santai; dia setuju bahwa `NaN` itu sama, tapi dia malas membedakan `+0` dan `-0`.

---

## Tabel Perbandingan Algoritma

| Skenario Perbandingan | `==` (Loose) | `===` (Strict) | `SameValue` (`Object.is`) | `SameValueZero` (`includes`) |
| :--- | :---: | :---: | :---: | :---: |
| `NaN` vs `NaN` | false | false | **true** | **true** |
| `+0` vs `-0` | true | true | **false** | **true** |
| `"42"` vs `42` | true | false | false | false |

## Mengapa Algoritma Ini Ada?

1. **SameValue (`Object.is`)**: Digunakan saat kamu butuh kepastian absolut yang tidak bisa diberikan oleh `===`. Sangat berguna untuk memastikan fungsionalitas matematika atau pengecekan identitas yang murni.
2. **SameValueZero**: Digunakan secara internal oleh `Set`, `Map`, dan `Array.prototype.includes`. Alasan utamanya adalah: **Kita ingin programmer bisa menemukan `NaN` di dalam sebuah Array atau Set**.
   - Jika `Set` menggunakan `===`, maka kita bisa memasukkan `NaN` berkali-kali (karena `NaN !== NaN`), dan itu akan merusak logika "unik" pada Set.

## Contoh Penggunaan Praktis
```javascript
const values = [1, NaN, 3];

// Masalah dengan indexOf (Menggunakan Strict Equality)
console.log(values.indexOf(NaN)); // -1 (Gagal ketemu!)

// Solusi dengan includes (Menggunakan SameValueZero)
console.log(values.includes(NaN)); // true (Berhasil ketemu!)
```

## Contoh Eksekusi
Lihat pembuktian perbedaan antara `Object.is`, `includes`, dan operator normal pada folder [examples/](./examples/).
