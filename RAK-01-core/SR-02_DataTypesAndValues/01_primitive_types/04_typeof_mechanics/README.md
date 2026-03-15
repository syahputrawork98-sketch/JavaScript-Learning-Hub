# Bab 04: typeof Mechanics (Deteksi Tipe)

Operator `typeof` adalah alat paling dasar untuk menginspeksi tipe data di JavaScript. Namun, di balik kesederhanaannya, ia menyimpan beberapa "ranjau darat" teknis dan bug sejarah yang telah bertahan selama lebih dari dua dekade.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> `typeof` adalah **Sinar-X Keamanan Bandara**. Dia mencoba menebak jenis barang di dalam koper tanpa membukanya. Sebagian besar tebakannya akurat, tapi terkadang Sinar-X ini salah mengira "Botol Air Kosong" (*null*) sebagai "Benda Padat Berbahaya" (*object*).

> **Analogi Panjang (Tim Forensik yang Buru-Buru):**  
> Bayangkan tim forensik yang harus mengidentifikasi ribuan sampel zat dalam waktu singkat.
> - Mereka memiliki protokol cepat: jika zatnya cair dan bening, beri label "Cairan" (misal: String).
> - Protokol ini bekerja dengan sangat baik untuk zat-zat baru. Tapi ada satu zat tua dari zaman prasejarah (zat *null*). Karena bug pada mikroskop pertama mereka, zat *null* ini selalu terdeteksi memiliki bit yang mirip dengan "Benda Organik" (*object*).
> - Meskipun sekarang mereka tahu itu salah, labelnya tidak bisa diganti karena ribuan laporan penelitian di seluruh dunia sudah terlanjur menggunakan label tersebut. Itulah **typeof null === "object"**.

---

## 1. Daftar Hasil `typeof` (ECMA-262)

Berikut adalah daftar hasil resmi yang dikembalikan oleh operator `typeof` berdasarkan Clause 13.5.3:

| Tipe Nilai | Hasil `typeof` |
| :--- | :--- |
| **Undefined** | `"undefined"` |
| **Null** | **`"object"`** (Peringatan: Bug Sejarah!) |
| **Boolean** | `"boolean"` |
| **Number** | `"number"` |
| **BigInt** | `"bigint"` |
| **String** | `"string"` |
| **Symbol** | `"symbol"` |
| **Function** | `"function"` (Meskipun fungsi adalah objek) |
| **Object (lainnya)** | `"object"` |

## 2. Bug Sejarah: typeof null

Mengapa `typeof null` adalah `"object"`?
Pada awal pembuatan JavaScript, nilai disimpan dalam unit 32-bit. Beberapa bit pertama digunakan sebagai "Type Tag". Tag untuk objek adalah `000`. Karena `null` direpresentasikan sebagai pointer kosong (semuanya nol), maka ia secara tidak sengaja terdeteksi memiliki tag `000`.

Upaya untuk memperbaiki bug ini di masa lalu (ECMAScript 6) ditolak karena akan merusak jutaan situs web yang sudah ada (fokus pada *Backward Compatibility*).

## 3. Pengecekan Aman (Standard Senior)

Karena keterbatasan `typeof`, seorang Senior Architect menggunakan pola pengecekan yang lebih defensif:

```javascript
// Mengecek apakah sebuah nilai benar-benar Objek (bukan null)
function isRealObject(val) {
    return val !== null && typeof val === "object";
}
```

## Contoh Eksekusi
Lihat pembuktian daftar hasil `typeof` dan cara menghindari jebakan `null` pada folder [examples/](./examples/).
