# CH-01: GetV & Get (The Access Pistons)

> **"Membaca data dari sebuah unit Hub tidak sesederhana menghubungkan kabel. `GetV` dan `Get` adalah 'Piston Akses' (The Access Pistons) — mekanisme internal yang menentukan apakah kita sedang mengambil daya dari referensi mentah atau dari mesin yang sudah terpasang."**

*Pemetaan ECMA-262: Clause 7.3.1 & 7.3.2 (GetV & Get)*

## 1. Mental Model: "The Access Pistons"

Bayangkan Anda ingin mengambil data dari sebuah modul.
- **`Get(O, P)`**: Anda sudah berada di depan mesin (`Object` `O`). Anda menarik tuas properti `P`.
- **`GetV(V, P)`**: Anda hanya punya alamat atau sinyal mentah (`Value` `V`). Jika `V` ternyata Primitif (bukan Object), `GetV` akan melakukan transmutasi sementara memanggil `ToObject(V)` sebelum menarik tuas properti `P`. Itulah sebabnya `"abc".length` bisa mengembalikan hasil.

---

## 2. Aliran Internal Get(O, P)

1.  Pastikan `P` adalah Property Key yang valid (String atau Symbol).
2.  Panggil metode internal **`O.[[Get]](P, O)`**.
3.  `[[Get]]` akan mencari di dalam mesin `O`. Jika tidak ketemu, ia akan turun ke denah dasar (`[[Prototype]]`) dan mencari di sana.

---

## 3. Praktik Lapangan (Lab)

```javascript
/* Di level spec */
const s = "GRID";
console.log(s.length); // GetV("GRID", "length") dipanggil.

const hub = { sector: "ALPHA" };
console.log(hub.sector); // Get(hub, "sector") dipanggil.
```

---

## Arsitek Mindset: Biaya Akses

Sebagai arsitek Hub:
- Sadarilah bahwa setiap kali Anda mengetik `.` (dot), Hub menjalankan rangkaian algoritma `Get` yang mungkin melibatkan pencarian panjang di rantai prototipe.
- Gunakan variabel lokal untuk menyimpan Propery yang sering diakses agar Hub tidak perlu menjalankan "Piston Akses" berulang kali ke properti yang sama.

---
*Status: [status.md](../../../docs/status.md)*
