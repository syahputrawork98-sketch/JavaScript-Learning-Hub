# CH-04: Static Scope Rules

Bagaimana JavaScript tahu bahwa sebuah variabel merujuk ke "Luar" atau "Dalam"? Hal ini tidak ditentukan secara acak saat jalan, melainkan dipetakan secara statis.

## Mental Model: "Peta Wilayah Kekuasaan"
Bayangkan sebuah peta wilayah. Setiap wilayah (Block, Function, Module) punya batas pagar yang jelas. **Static Scope Rules** adalah hukum yang menentukan:
- Di wilayah mana bendera (Variable) dipasang?
- Siapa yang boleh melihat bendera tersebut?
- Apakah dua bendera dengan nama sama boleh ada di wilayah yang sama?

---

## 1. Lexically Scoped
JavaScript adalah bahasa yang *Lexically Scoped*. Artinya, scope ditentukan oleh posisi fisik kode Anda saat ditulis, bukan saat dipanggil. Algoritma **Static Semantics: VarDeclaredNames** dan **LexicallyDeclaredNames** digunakan untuk memetakan ini.

## 2. Algoritma Pemetaan Scope
Spesifikasi melakukan hal berikut secara statis:
1. **Scan Declarations:** Mencari semua `var`, `let`, `const`, `function`, dan `class`.
2. **Identify Conflicts:** Mengecek apakah ada `let x` dan `var x` di level yang sama. Jika ada, ini adalah **Early Error** (SyntaxError).
3. **Binding Initialization:** Mempersiapkan slot memori internal untuk nama-nama tersebut.

## 3. Shadowing Rules
Aturan statis juga menentukan bagaimana variabel di scope dalam bisa "menutupi" variabel di scope luar (*Shadowing*). Tanpa aturan statis ini, mesin akan bingung variabel mana yang harus digunakan saat ada dua nama yang sama.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami aturan scope statis adalah kunci untuk menghindari bug "Unintended Side Effects". Anda akan tahu pasti variabel mana yang sedang Anda akses hanya dengan melihat struktur kodenya, tanpa perlu menjalankan programnya di kepala.

---

## Tantangan Kecil
Perhatikan kode ini:
```javascript
{
  let x = 1;
  {
    var x = 2; // Apa yang terjadi?
  }
}
```
Hasilnya adalah **SyntaxError**. Mengapa?
(Jawabannya: Karena aturan **Static Semantics** melarang deklarasi `var` (yang sifatnya hoisted ke scope fungsi/global) menembus batas scope `let` yang memiliki nama sama. Ini dideteksi secara statis!).

---
> [!NOTE]
> **Key Takeaway:** Scope di JavaScript adalah tentang **Lokasi Fisik**, bukan waktu eksekusi.
