# Bab 02: Mekanika Call Stack (Execution Context Stack)

JavaScript adalah bahasa yang *Single-Threaded*, artinya ia hanya bisa melakukan satu hal dalam satu waktu. Untuk melacak di mana ia berada saat ini dalam sebuah program yang kompleks, *Engine* menggunakan sebuah struktur data bernama **Execution Context Stack** ( Clause 9.4 pada ECMA-262), atau yang lebih dikenal sebagai **Call Stack**.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Call Stack** adalah **Tumpukan Piring**. Kamu hanya bisa mencuci piring yang paling atas. Jika kamu selesai mencuci piring itu (fungsi selesai), piring tersebut diangkat, dan kamu bisa melihat piring di bawahnya.

> **Analogi Panjang (Manajemen Tugas Koki):**  
> Bayangkan seorang Koki Tunggal di sebuah dapur mewah.
> - Awalnya, koki sedang mengerjakan tugas utama: **Menyiapkan Dapur** (*Global Execution Context*).
> - Tiba-tiba ada pesanan masuk: **Masak Steak** (*Function Execution Context*). Koki berhenti menyiapkan dapur, menaruh catatan "Masak Steak" di atas meja kerjanya.
> - Saat sedang masak steak, asisten berteriak: **Cek Suhu Oven** (*Nested Function*). Koki berhenti mengurusi steak, menaruh catatan "Cek Suhu" di atas catatan "Masak Steak".
> - Begitu suhu oven dicek, catatan "Cek Suhu" dibuang. Koki kembali melihat catatan di bawahnya: "Masak Steak".
> - Begitu steak matang, catatan itu dibuang, dan koki kembali melakukan tugas "Menyiapkan Dapur".
> - Tumpukan catatan di meja koki itulah **Call Stack**.

---

## Bagaimana Stack Bekerja? (LIFO)

Struktur data ini mengikuti prinsip **LIFO** (*Last In, First Out*).
1. **Push**: Setiap kali sebuah fungsi dipanggil (dievaluasi), sebuah *Execution Context* baru dibuat dan **didorong** ke puncak Stack. 
2. **Pop**: Segera setelah fungsi tersebut selesai dieksekusi (mereturn nilai), konteksnya **dikeluarkan** dari Stack, dan kontrol kembali ke konteks di bawahnya.

## Penjaga Keamanan: Stack Overflow

Call Stack memiliki batas kapasitas. Jika kamu memanggil fungsi secara terus-menerus tanpa pernah menyelesaikannya (misalnya rekursi tanpa henti), tumpukan catatan di meja koki akan menjadi terlalu tinggi dan roboh. Inilah yang menyebabkan error terkenal: **RangeError: Maximum call stack size exceeded**.

## Mengapa Arsitek Harus Peduli?

Call Stack adalah alat debugging paling kuat. Saat terjadi *Error*, JavaScript akan memberikan **Stack Trace**. Membaca Stack Trace berarti kamu sedang membaca sejarah perjalanan *Engine* dari Global Context hingga titik terjadinya kegagalan.

## Contoh Eksekusi
Lihat visualisasi tumpukan piring dan simulasi *Stack Overflow* pada folder [examples/](./examples/).
