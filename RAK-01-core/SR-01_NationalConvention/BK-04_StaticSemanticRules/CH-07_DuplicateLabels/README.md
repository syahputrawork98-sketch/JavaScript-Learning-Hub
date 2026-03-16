# CH-07: Duplicate Labels and Jump Targets

Dalam JavaScript, kita bisa memberikan "Nama" pada blok kode atau perulangan menggunakan label. Namun, spesifikasi sangat ketat dalam mengatur bagaimana label ini boleh digunakan.

## Mental Model: "Alamat Drop-off yang Unik"
Bayangkan Anda adalah seorang kurir (`break` atau `continue`). Anda harus mengantarkan paket ke sebuah alamat (Label).
- Jika ada dua rumah dengan alamat yang sama persis di satu jalan (Scope), Anda akan bingung. Inilah **Early Error: Duplicate Label**.
- Jika Anda disuruh mengantar paket ke alamat yang tidak ada di peta, Anda juga akan protes. Inilah **Early Error: Undefined Jump Target**.

---

## 1. Aturan Statis `LabelledStatement`
Menurut spesifikasi, setiap kali Anda mendefinisikan label, mesin JS menjalankan algoritma **Static Semantics: ContainsDuplicateLabels**.
- Jika sebuah label didefinisikan di dalam statement yang sudah memiliki label dengan nama yang sama, mesin akan melempar `SyntaxError`.

## 2. Validasi Break dan Continue
Pernahkah Anda mencoba melakukan `break` tapi muncul error *"Illegal break statement"*? Itu dideteksi secara statis melalui algoritma:
- **ContainsUndefinedBreakTarget:** Mengecek apakah target label pada `break` benar-benar ada di scope luar.
- **ContainsUndefinedContinueTarget:** Sama seperti break, tapi khusus untuk `continue` (yang hanya boleh menargetkan perulangan).

## 3. Batasan Scope Label
Label memiliki scope yang terbatas pada statement yang mendahuluinya. Anda tidak bisa melompat (*jump*) ke label yang berada di dalam fungsi lain atau di tingkat yang tidak terlihat secara leksikal.

---

## Mengapa Arsitek Harus Tahu Ini?
Meskipun penggunaan label jarang dilakukan di kode modern, memahami aturan statisnya membantu Anda mengerti bagaimana "Control Flow" di JavaScript dikunci secara aman oleh spesifikasi agar tidak terjadi lompatan kode yang kacau (*Spaghetti code*).

---

## Tantangan Kecil
Perhatikan kode ini:
```javascript
L: {
  console.log("Start");
  break L;
  console.log("End");
}
```
Apakah `break` di atas valid?
(Jawabannya: **Ya**. `break` boleh digunakan di dalam blok berlabel biasa. Namun, jika Anda ganti menjadi `continue L`, maka akan terjadi **Early Error**, karena `continue` hanya boleh menargetkan statement perulangan/iterasi).

---
> [!IMPORTANT]
> **Key Takeaway:** Aturan label memastikan bahwa setiap "Lompatan" kode memiliki tujuan yang jelas dan unik.
