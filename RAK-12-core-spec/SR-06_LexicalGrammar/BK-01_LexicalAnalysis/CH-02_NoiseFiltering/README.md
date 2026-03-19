# CH-02: Noise Filtering (WhiteSpace & Comments)

> **"Dalam arus energi yang padat, banyak sinyal yang sebenarnya tidak memiliki daya. `Noise Filtering` adalah 'Penyaring Kebisingan' — proses mengidentifikasi dan membuang WhiteSpace serta Komentar agar Engine bisa fokus pada token perintah yang murni."**

*Pemetaan ECMA-262: Clause 11.2 & 11.4 (WhiteSpace & Comments)*

## 1. Mental Model: "The Noise Filter"

Bayangkan Hub memiliki saringan magnetik di pintu masuk.
- **WhiteSpace**: Ruang kosong, tab, dan spasi. Ini adalah "jarak aman" antar komponen agar tidak terjadi arus pendek (syntax error).
- **Comments**: Penjelasan teknis dari teknisi (`//` atau `/* */`). Hub melihatnya, mencatatnya untuk teknisi manusia, tapi segera membuangnya sebelum masuk ke reaktor pusat.

---

## 2. Jenis Kebisingan (Noise Types)

1.  **WhiteSpace**: Spasi biasa (U+0020), Tab (U+0009), dan karakter spasi Unicode lainnya.
2.  **Line Terminators**: Pemutus baris (LF, CR). Ini sangat kritis karena bisa memicu **ASI** (Automatic Semicolon Insertion).
3.  **Comments**:
    - *Single Line*: Membuang semua sinyal sampai bertemu pemutus baris.
    - *Multi Line*: Membuang blok sinyal sampai bertemu penutup `*/`.

---

## 3. Praktik Lapangan (Lab)

```javascript
/* 
   [NOISE] Ini adalah komentar blok. 
   Hub akan membuang seluruh teks ini.
*/

const power = 100; // [NOISE] Komentar baris tunggal

      // [NOISE] WhiteSpace berlebih
console.log(power);
```

---

## Arsitek Mindset: Kebersihan Jalur

Sebagai arsitek Hub:
- Jangan takut memberikan komentar yang mendalam di dalam kode. Hub akan membuangnya dengan sangat cepat, sehingga tidak akan memperlambat eksekusi di reaktor pusat.
- Gunakan alat **Minifier** untuk membuang seluruh kebisingan ini sebelum mengirim skrip ke Grid publik, guna menghemat *bandwidth* transmisi energi.

---
*Status: [status.md](../../../docs/status.md)*
