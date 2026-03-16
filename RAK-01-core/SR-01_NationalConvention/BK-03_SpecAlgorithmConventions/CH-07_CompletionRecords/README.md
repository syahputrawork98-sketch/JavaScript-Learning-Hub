# Chapter 07: Completion Records & Shorthands

Salah satu bagian tersulit dalam membaca spesifikasi adalah memahami bagaimana "Error" dan "Abrupt completion" ditangani. Spesifikasi menggunakan konsep *Completion Record*.

## 1. Apa itu Completion Record?

Bayangkan setiap langkah algoritma tidak hanya mengembalikan nilai, tetapi juga "status".
- **Normal**: Semuanya baik-baik saja, ini nilainya.
- **Abrupt**: Ada masalah (Break, Continue, Return, atau Throw).

## 2. Shorthands: ? dan !

Untuk menghindari penulisan "Jika langkah ini gagal, kembalikan error" di setiap baris, spesifikasi menggunakan simbol:

### Analogi Singkat: "Pemeriksa Paspor"

1. **Simbol `?` (ReturnIfAbrupt)**:
   - Seperti petugas imigrasi yang memeriksa paspor. Jika paspor bermasalah (Abrupt), Anda langsung dideportasi (Return error). Jika oke, Anda boleh lewat dengan nilai tersebut.
   
2. **Simbol `!` (Never Abrupt)**:
   - Seperti jalur VIP untuk warga negara asli. Petugas yakin 100% jalur ini tidak akan bermasalah. Kita mengambil nilainya secara langsung karena spek menjamin operasi ini tidak akan melempar error.

## 3. Mengapa Ini Penting?

Tanpa memahami `?`, Anda akan bingung melihat kode spesifikasi yang seolah-olah mengabaikan error. Sebenarnya, simbol `?` itu sendiri adalah mekanisme penanganan error yang disingkat.
