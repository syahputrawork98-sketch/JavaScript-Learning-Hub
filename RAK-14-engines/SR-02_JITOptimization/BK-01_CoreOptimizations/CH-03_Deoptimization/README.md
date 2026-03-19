# CH-03: Deoptimization (Bailing out)

Deoptimization adalah proses di mana V8 terpaksa membuang Machine Code yang sudah dioptimasi oleh TurboFan dan kembali ke interpreter Ignition.

## 🛑 Mengapa Terjadi?
JavaScript sangat dinamis. Jika TurboFan membuat asumsi tipe data yang ternyata salah di kemudian hari, ia tidak bisa melanjutkan eksekusi kode mesin yang salah.

**Penyebab Umum:**
1. **Tipe Data Berubah**: Fungsi yang biasanya menerima `Number` tiba-tiba menerima `String`.
2. **Hidden Class Berubah**: Struktur objek yang masuk ke fungsi optimasi tidak lagi konsisten.
3. **Array Holes**: Operasi pada array yang memiliki "lubang" (sparse arrays) seringkali memicu bailout.

## 📉 Efek Performa
Deoptimization sangat mahal karena V8 harus:
1. Menghentikan eksekusi.
2. Memulihkan state (registers & stack) untuk Ignition.
3. Kembali menjalankan bytecode yang lebih lambat.

Jika sebuah fungsi sering mengalami deoptimization, V8 mungkin memutuskan untuk tidak mengoptimalkannya lagi untuk sementara waktu.

---
*Kembali ke [BK-01](../README.md)*
