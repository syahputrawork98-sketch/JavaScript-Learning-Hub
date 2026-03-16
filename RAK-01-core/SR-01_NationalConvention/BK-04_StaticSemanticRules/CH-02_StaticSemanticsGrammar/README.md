# CH-02: Grammar Static Semantics

Jika CH-01 membahas tentang "Inspektur", maka CH-02 membahas tentang "Buku Peraturan" yang dibawa inspektur tersebut saat melihat Blueprint Tata Bahasa.

## Mental Model: "Catatan Kaki pada Blueprint"
Bayangkan sebuah Blueprint arsitektur. Di dekat gambar tangga, ada catatan kaki kecil: *"Tangga tidak boleh lebih tinggi dari 3 meter jika tanpa pegangan tangan"*.
- **Blueprint:** Adalah Grammar (Bentuk tangga).
- **Catatan Kaki:** Adalah *Static Semantics* (Aturan keselamatannya).

---

## 1. Menghubungkan Bentuk ke Aturan
Grammar (Klausa 5.1) sangat ahli dalam mendefinisikan *bagaimana* kode ditulis. Namun, ia kurang ahli dalam mendefinisikan *apa yang dilarang* dalam konteks tertentu. 

*Static Semantics* "menempel" pada produksi grammar. Contohnya, pada produksi variabel `LexicalBinding`, terdapat aturan statis yang melarang penggunaan nama variabel yang sama dengan keyword cadangan (*Reserved Words*).

## 2. Aturan Rantai (Recursive Mapping)
Aturan semantik statis seringkali bersifat rekursif.
- "Sebuah `Block` memiliki aturan semantik X."
- Aturan X berkata: "Jalankan aturan Y untuk setiap `Statement` di dalam `Block` ini."
Inilah cara spesifikasi memastikan seluruh pohon kode Anda (AST) aman dari ujung ke ujung.

## 3. Peran dalam Optimasi
Mesin JavaScript modern (V8, Turbofan) sangat bergantung pada hasil analisis grammar statis ini. Jika semantik statis menjamin bahwa sebuah variabel tidak akan pernah berubah (*Constant binding*), mesin bisa melakukan optimasi gila-gilaan tanpa perlu mengeceknya lagi saat runtime.

---

## Mengapa Arsitek Harus Tahu Ini?
Anda akan sering menemui *Early Errors* yang terasa aneh jika hanya melihat teks. Memahami link antara grammar dan semantik membantu Anda melakukan *debugging* pada level bahasa, bukan sekadar level kode.

---

## Tantangan Kecil
Mengapa Anda tidak bisa menulis `await` di luar fungsi async (sebelum era Top-level Await)?
(Jawabannya: Karena tata bahasa `UnaryExpression` memiliki aturan semantik statis yang mengecek flag **[Await]**. Jika flag tersebut tidak aktif di level grammar, semantik statis akan memicu error).

---
> [!IMPORTANT]
> **Key Takeaway:** Grammar mendefinisikan **Struktur**, sedangkan Static Semantics mendefinisikan **Legitimasi** dari struktur tersebut.
