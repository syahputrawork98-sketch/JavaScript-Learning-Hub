# CH-08: Primitive Types

Walaupun fokus utama kita adalah arsitektur objek, kita tidak boleh melupakan "Warga Negara Dasar" di dunia spesifikasi: Primitif. Mari kita lihat bagaimana spesifikasi mendefinisikan mereka secara singkat.

## Mental Model: "Batu Bata Mentah"
Primitif adalah material dasar pembangunan. Mereka tidak punya laci (properti) dan tidak bisa diubah (*Immutable*). Anda tidak bisa mengecat batu bata ini; Anda hanya bisa menggantinya dengan batu bata yang baru.

---

## 7 Primitif Utama (Language Types)

1. **Undefined:** Digunakan ketika sebuah variabel belum diberi nilai. (Himpunan dengan anggota tunggal: `undefined`).
2. **Null:** Digunakan untuk menunjukkan ketiadaan nilai secara sengaja. (Himpunan dengan anggota tunggal: `null`).
3. **Boolean:** Tipe logika. (Himpunan: `true`, `false`).
4. **String:** Urutan kode Unicode 16-bit. Sangat penting untuk manipulasi teks dan key pada objek.
5. **Number:** Format IEEE 754 64-bit. Termasuk nilai spesial seperti `NaN` dan `Infinity`.
6. **BigInt:** Digunakan untuk angka bulat dengan presisi arbitrer (tidak terbatas 64-bit).
7. **Symbol:** Nilai unik yang tidak bisa diduplikasi, sering digunakan sebagai "Hidden Key" pada objek agar tidak bentrok dengan properti lain.

---

## Karakteristik Primitif di Mata Spek
1. **Identitas Berdasarkan Nilai:** Dua string `"hello"` adalah identik karena isinya sama. Berbeda dengan Objek yang identitasnya berdasarkan referensi memori.
2. **No Internal Methods:** Primitif tidak punya `[[Get]]` atau `[[Set]]`. Saat Anda mencoba mengakses properti pada primitif, JavaScript menciptakan "Wrapper Object" sementara (Autoboxing).

---

## Mengapa Arsitek Harus Tahu Ini?
Pemilihan tipe data yang tepat (misal: String vs Symbol untuk key, atau Number vs BigInt untuk presisi) berdampak besar pada arsitektur data dan performa aplikasi Anda.

---

## Tantangan Kecil
Mengapa `typeof null === "object"`?
(Jawabannya: Ini adalah "Legacy Bug" dari versi awal JavaScript yang tidak diperbaiki demi menjaga kompatibilitas ke belakang. Di spesifikasi, **Null** adalah tipe datanya sendiri, terpisah dari **Object**).

---
> [!IMPORTANT]
> **Key Takeaway:** Primitif adalah atom dari bahasa JavaScript. Mereka sederhana, efisien, dan menjadi dasar dari setiap struktur data yang lebih kompleks.
