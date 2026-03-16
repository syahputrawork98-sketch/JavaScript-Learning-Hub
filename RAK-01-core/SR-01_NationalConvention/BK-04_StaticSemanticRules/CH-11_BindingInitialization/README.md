# CH-11: Binding Initialization

Bagaimana JavaScript memastikan bahwa variabel yang dideklarasikan lewat *Destructuring* benar-benar valid? Mari kita bedah aturan **Static Binding** yang menjaga proses inisialisasi ini.

## Mental Model: "Kontrak Penyerahan Kunci"
Bayangkan Anda sedang menyewa apartemen (Scope).
- **Binding:** Adalah proses pendaftaran nama Anda di resepsionis (Environment Record).
- **Initialization:** Adalah proses penyerahan kunci fisik kepada Anda.
**Static Binding Rules** memastikan bahwa kontrak pendaftaran Anda sudah benar secara hukum (seperti tidak ada nama duplikat) sebelum kunci diserahkan.

---

## 1. Lexical vs Var Binding
Spesifikasi memiliki dua cara utama dalam mendaftarkan nama:
- **Var-style Binding:** Bersifat fleksibel, bisa didaftarkan ulang (Redeclared) dalam scope yang sama.
- **Lexical-style Binding (`let`, `const`):** Sangat ketat. Aturan statis melarang adanya pendaftaran ulang nama yang sama di scope yang sama.

## 2. Destructuring Validation
Saat Anda menulis `const { a, b: { c } } = data;`, spesifikasi menjalankan rentetan algoritma statis:
1. **BindingPattern: BoundNames:** Algoritma ini menarik semua nama (`a`, `c`) yang akan didaftarkan.
2. **Early Error Check:** Jika ada nama yang sama (misal: `const {a, a} = obj`), mesin akan memicu `SyntaxError`.
3. **IsDestructuring:** Memastikan pola destructuring-nya valid secara tata bahasa.

## 3. The TDZ (Temporal Dead Zone) Link
Meskipun TDZ adalah fenomena runtime, keberadaannya dimungkinkan karena **analisis statis**. Mesin JS sudah tahu di mana letak deklarasi `let/const` Anda, sehingga ia bisa memasang "Jebakan" (Trap) di area sebelum deklarasi tersebut.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami mekanisme binding membantu Anda mengerti mengapa pola-pola seperti *Hoisting* bekerja berbeda antara `var` dan `let`. Arsitek yang baik tahu kapan sebuah nama variabel mulai "Hidup" di memori dan kapan dia siap untuk "Digunakan".

---

## Tantangan Kecil
Perhatikan kode ini:
```javascript
let { a: x, b: x } = { a: 1, b: 2 };
```
Apakah ini valid?
(Jawabannya: **Tidak**. Meskipun propertinya berbeda (`a` dan `b`), keduanya menargetkan **BindingName** yang sama yaitu `x`. Aturan statis **BoundNames** akan mendeteksi duplikasi `x` dan melempar `SyntaxError`).

---
> [!IMPORTANT]
> **Key Takeaway:** Binding adalah proses hukum (Pendaftaran nama), sedangkan Initialization adalah proses fisik (Pengisian nilai). Keduanya dipantau ketat oleh semantik statis.
