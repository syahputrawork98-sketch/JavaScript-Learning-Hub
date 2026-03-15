# Bab 01: String Internals (Representasi & Immutability)

Dalam JavaScript, *String* bukan sekadar kumpulan huruf. Berdasarkan spesifikasi **ECMA-262**, String didefinisikan secara formal sebagai urutan **16-bit unsigned integer values** yang dikenal sebagai **Code Units**.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> String itu seperti **Batu Prasasti**. Sekali dipahat, isinya tidak bisa diubah. Jika ingin tulisan baru, kita harus mengambil batu baru dan mulai memahat lagi dari awal.

> **Analogi Panjang (Kereta Digital 16-Bit):**  
> Bayangkan *String* adalah sebuah kereta api digital. Setiap gerbong kereta tersebut memiliki kapasitas penyimpanan tepat **16-bit**. 
> - Huruf-huruf umum (seperti 'A', 'B') cukup disimpan dalam **satu gerbong**.
> - Namun, karakter yang lebih mewah dan berat (seperti Emoji 🚒) membutuhkan **dua gerbong** yang dirangkai khusus (yang kita sebut sebagai **Surrogate Pairs**) agar bisa diangkut.
> - Kereta ini meluncur di jalur **UTF-16**. Jika kamu mencoba merubah nomor kursi di tengah jalan, masinis akan menolak; kamu harus membuat kereta baru dengan nomor kursi yang diinginkan.

---

## Representasi Internal: UTF-16 Code Units

JavaScript menggunakan skema pengkodean **UTF-16**. Setiap elemen dalam String dianggap sebagai satu **Code Unit**.
- **BMP (*Basic Multilingual Plane*)**: Karakter umum dalam rentang `\u0000` hingga `\uFFFF`. Menempati 1 *Code Unit*.
- **Surrogate Pairs**: Karakter di luar BMP (seperti Emoji atau simbol Matematika kuno) yang menempati 2 *Code Unit* (total 32-bit).

### Aturan `.length`
Properti `.length` di JavaScript sebenarnya tidak menghitung jumlah karakter manusia, melainkan menghitung jumlah **Code Units**. Inilah alasan mengapa `'A'.length` adalah 1, tetapi `'🚀'.length` adalah 2.

## Sifat Mutlak: Immutability

Setiap *Internal Slot* pada String di JavaScript bersifat **Immutable** (tidak dapat dirubah).
- Saat kita melakukan operasi manipulasi (seperti `.toUpperCase()` atau `.slice()`), *Engine* tidak mengubah memori asli.
- *Engine* akan melakukan alokasi memori baru untuk membuat String baru hasil manipulasi tersebut.
- Hal ini memungkinkan optimasi **String Interning**, di mana *Engine* menghemat RAM dengan membagikan referensi yang sama untuk string literatur yang identik secara nilai.

## Contoh Eksekusi
Lihat pembuktian teknis mengenai *Surrogate Pairs* dan kegagalan mutasi String pada folder [examples/](./examples/).
