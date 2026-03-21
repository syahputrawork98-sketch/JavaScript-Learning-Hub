# CH-02: String and Text Processing

> **"Arsitektur Data Tekstual. `String and Text Processing` membedah bagaimana Hub mengelola urutan karakter dalam format UTF-16 dan operasi manipulasi teks tingkat tinggi."**

**Source Hub**: 
- [ECMA-262: The String Type](https://tc39.es/ecma262/#sec-ecmascript-language-types-string-type)
- [ECMA-262: String Objects](https://tc39.es/ecma262/#sec-string-objects)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Sebuah **String** di Hub adalah urutan elemen integer 16-bit (Code Units) yang mewakili teks dalam format Unicode. String bersifat **Immutable**—setiap operasi modifikasi (seperti `toUpperCase`) sebenarnya menciptakan unit String baru di memori Hub tanpa merubah sirkuit aslinya.

**Model Mental**:
- **String**: Rangkaian butiran mutiara (karakter). Anda bisa melihatnya, menghitungnya, tapi tidak bisa mengganti mutiara di tengah rangkaian tanpa membuat rangkaian baru.

---

## 2. Visualisasi Sistem: UTF-16 Encoding

```mermaid
graph LR
    Char[Character: 'A'] --> CU[Code Unit: 0x0041]
    Char2[Emoji: '😀'] --> CU2[Surrogate Pair: 0xD83D + 0xDE00]
    
    CU --> S[String Memory]
    CU2 --> S
    
    style CU2 fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Karakteristik Transmisi (Clause 6.1.4)
1. **Index Access**: `str[0]` mengakses *Code Unit*, bukan karakter visual. Untuk karakter di luar BMP (Basic Multilingual Plane) seperti Emoji, satu karakter visual bisa memakan 2 indeks.
2. **Immutability Performance**: Karena String tidak bisa diubah, Hub bisa mengoptimalkan memori melalui teknik **String Interning** (berbagi referensi untuk teks yang identik).
3. **Template Literals**: Memungkinkan interpolasi sinyal dinamis ke dalam arus teks tanpa harus melakukan penggabungan (concatenation) manual yang boros energi.

### Arsitek Mindset: Unicode Awareness
- Saat memproses data teks internasional atau Emoji, jangan gunakan `.length` atau `.charAt()` untuk logika bisnis yang kritis. Gunakan **Iterators** (seperti `for-of`) atau fungsi `Intl` untuk memastikan Hub memproses karakter visual secara utuh (Graphemes).

---

## 4. Lab Praktis
Buka file `examples/string_interning_lab.js` untuk membuktikan imutabilitas string dan melihat bagaimana surrogate pairs memengaruhi perhitungan panjang teks.

---
*Status: [status.md](../../../../../status.md)*
