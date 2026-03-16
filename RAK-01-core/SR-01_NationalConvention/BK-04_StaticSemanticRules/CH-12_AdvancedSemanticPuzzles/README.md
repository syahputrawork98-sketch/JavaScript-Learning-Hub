# CH-12: Advanced Semantic Puzzles

Selamat! Anda telah sampai di bab terakhir. Untuk menguji apakah Anda sudah benar-benar menjadi seorang **Spec-Literate Architect**, mari kita hadapi beberapa teka-teki logika yang didasarkan pada aturan statis ECMA-262 yang paling membingungkan.

---

## Puzzle 1: The Identical Twins
Perhatikan kode berikut:
```javascript
function demo() {
  var x = 1;
  let x = 2;
}
```
**Pertanyaan:** Apakah kode ini melempar error saat dijalankan, atau saat diparse? Mengapa?
**Jawaban:** Error saat **Diparse (Early Error)**. Algoritma `TopLevelLexicallyDeclaredNames` akan mendeteksi `x` dari `let` dan membandingkannya dengan `TopLevelVarDeclaredNames`. Karena mereka bentrok, `SyntaxError` muncul seketika.

---

## Puzzle 2: The Forbidden Function
```javascript
"use strict";
if (true) {
  function foo() {}
}
```
**Pertanyaan:** Apakah ini valid di Strict Mode?
**Jawaban:** **Tergantung Versi Spec**. Dahulu (ES5), deklarasi fungsi di dalam blok dilarang dalam strict mode. Namun, di ES6+, ini diperbolehkan dan memiliki *Block Scope*. Ini adalah contoh bagaimana **Static Semantics** berevolusi untuk melegalkan pola yang dulu dianggap berbahaya.

---

## Puzzle 3: The Async Ghost
```javascript
const obj = {
  get data() { return 1; },
  async set data(v) { }
};
```
**Pertanyaan:** Di mana letak kesalahannya?
**Jawaban:** **Early Error pada Setter**. Spesifikasi melarang *Accessor* (Getter/Setter) menjadi asinkron. Mesin JS akan menolak objek ini bahkan sebelum baris pertama dieksekusi.

---

## Puzzle 4: The Label Trap
```javascript
L: for (let i of [1]) {
  function inner() {
    break L;
  }
}
```
**Pertanyaan:** Mengapa kode ini melempar error *"Illegal break statement"*?
**Jawaban:** Karena label `L` berada di scope luar fungsi `inner`. Aturan **Static Semantics: ContainsUndefinedBreakTarget** memeriksa apakah target label berada di dalam unit fungsi yang sama. Anda tidak bisa `break` menembus batas fungsi secara statis.

---

## Penutup Sub-Rak SR-01
Dengan menyelesaikan **BK-04**, Anda kini telah menguasai seluruh pilar **National Convention**:
1. **Fondasi:** Istilah dasar (BK-01).
2. **Notasi:** Blueprint bahasa (BK-02).
3. **Mekanisme:** Alur algoritma (BK-03).
4. **Aturan:** Validasi statis (BK-04).

Anda sekarang siap untuk melangkah ke **SR-02: Data Types and Values** untuk membedah bagaimana memori JavaScript benar-benar dikelola oleh spesifikasi.

---
*Status: Completed (Versi v3.01.01.12)*
