# Bab 01: Internal Slots & Methods (Operasi Rahasia)

Setiap objek di JavaScript bukan sekadar "kantong data". Di balik layar, *Engine* memperlakukan objek sebagai entitas yang memiliki perilaku otomatis. Perilaku ini dijalankan melalui **Internal Methods** seperti `[[Get]]` dan `[[Put]]` (Clause 10.1 pada ECMA-262), yang biasanya tidak bisa kita akses langsung tapi bisa kita rasakan efeknya.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Object** adalah **Mesin Penjual Otomatis (Vending Machine)**. Kamu tidak bisa melihat kabel atau motor di dalamnya. Kamu hanya menekan tombol (titik `.`). Di dalam mesin, sebuah robot kecil bernama **`[[Get]]`** akan bangun, mencari barang yang kamu minta, dan menyerahkannya padamu. Jika barangnya tidak ada, robot itu akan naik ke lantai atas (Prototype) untuk mencarinya lagi.

> **Analogi Panjang (Resepsionis Hotel):**  
> Bayangkan kamu berinteraksi dengan sebuah Hotel (Object).
> - **Internal Method `[[Get]]`**: Saat kamu bertanya "Di mana kunci kamar 302?", resepsionis menjalankan prosedur internal: Cek daftar tamu -> Jika ada, berikan kunci -> Jika tidak ada, cek apakah ada catatan khusus (Properti di prototype). Prosedur ini otomatis dan tersembunyi.
> - **Internal Method `[[Put]]`**: Saat kamu menitipkan barang, resepsionis menjalankan prosedur: Cek apakah tempat penyimpanan tersedia -> Jika ya, simpan dan beri label -> Jika sudah ada barang yang sama, ganti dengan yang baru.
> - **Internal Slots**: Seperti brankas rahasia di belakang meja resepsionis yang hanya bisa dibuka oleh staf hotel (Engine). Kamu tahu brankas itu ada (misal: slot `[[Prototype]]`), tapi kamu tidak punya kuncinya.

---

## Apa itu Internal Methods?

Internal methods adalah "algoritma internal" yang dipanggil oleh *Engine* saat kamu melakukan operasi dasar pada objek. Beberapa yang paling penting adalah:

| Method | Kapan Dipanggil? | Tugas Utama |
| :--- | :--- | :--- |
| **`[[Get]]`** | `obj.prop` atau `obj['prop']` | Mengambil nilai properti. Jika tidak ada, ia menelusuri rantai prototype. |
| **`[[Put]]`** | `obj.prop = value` | Menyimpan atau mengubah nilai properti. |
| **`[[HasProperty]]`** | `'prop' in obj` | Mengecek apakah objek (atau prototipenya) memiliki properti tersebut. |
| **`[[Delete]]`** | `delete obj.prop` | Menghapus properti dari objek. |

## Apa itu Internal Slots?

**Internal Slots** (ditulis dengan kurung siku ganda, misal `[[Prototype]]`) adalah variabel internal yang menyimpan status objek. Mereka bukan properti biasa dan tidak bisa diakses via `for...in` atau `Object.keys()`.
- Contoh: `[[Prototype]]` menyimpan referensi ke objek induk.
- Contoh: `[[Extensible]]` menyimpan status apakah objek boleh ditambah properti baru atau tidak.

## Mengapa Arsitek Harus Peduli?

Memahami operasi rahasia ini adalah kunci untuk menguasai topik lanjutan seperti **Getters/Setters**, **Proxy**, dan **Object Inheritance**. Kamu tidak lagi melihat `obj.a` sebagai hal yang sederhana, melainkan sebagai sebuah pemanggilan fungsi internal engine yang kompleks.

## Contoh Eksekusi
Lihat bagaimana kita bisa "merasakan" kehadiran `[[Get]]` dan `[[Put]]` melalui *Accessors* pada folder [examples/](./examples/).
