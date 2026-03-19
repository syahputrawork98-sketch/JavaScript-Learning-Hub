# CH-04: Context Components (The Internal Wiring)

> **"Setiap terminal aktif (Execution Context) memiliki 'Kabel Internal' (Internal Wiring) yang menghubungkannya ke gudang data. Memahami perbedaan antara Lexical dan Variable Environment adalah kunci untuk memahami transisi teknis dari `var` ke era modern `let/const`."**

*Pemetaan ECMA-262: Clause 8.3 & 9.1*

## 1. Mental Model: "The Internal Wiring"

Bayangkan sebuah baki (Context) yang memiliki dua kompartemen penyimpanan:
- **LexicalEnvironment (Ruang Modern ⚡)**: Menyimpan variabel `let`, `const`, dan fungsi. Ruang ini sangat dinamis dan mematuhi aturan Block Scope.
- **VariableEnvironment (Ruang Klasik 🕯️)**: Khusus untuk variabel `var`. Ruang ini lebih kaku dan hanya peduli pada Function Scope.

---

## 2. Struktur Komponen Context

Di level spesifikasi, sebuah *Execution Context* berisi:
1.  **LexicalEnvironment**: Pointer ke Environment Record aktif saat ini (bisa berubah saat masuk ke blok `{}`).
2.  **VariableEnvironment**: Pointer ke Environment Record tempat `var` dilabuhkan (tetap merujuk ke fungsi terluar).
3.  **PrivateEnvironment**: (Terbaru!) Untuk menyimpan private fields `#` pada class.

---

## 3. Praktik Lapangan (Lab)

```javascript
function techLog() {
    var v1 = "KABEL_LAMA"; // Disimpan di VariableEnvironment
    let l1 = "KABEL_BARU"; // Disimpan di LexicalEnvironment
    
    if (true) {
        let l1 = "KABEL_INTERNAL"; // Menciptakan LexicalEnvironment baru hanya untuk blok ini!
        console.log(l1); // "KABEL_INTERNAL"
    }
    console.log(l1); // "KABEL_BARU" (Kembali ke LexicalEnvironment fungsi)
}
```

---

## Arsitek Mindset: Dinamika Ruang Lingkup

Sebagai arsitek Hub:
- Sadarilah bahwa setiap kali Anda membuat blok `{ ... }` dengan `let/const`, Hub secara efisien menukar "Kabel internal" (LexicalEnvironment) dengan yang baru tanpa harus membuat "Baki" (Context) baru.
- Pengetahuan ini membantu Anda menghindari bug "Variable Shadowing" di mana dua kabel memiliki nama yang sama di kompartemen yang berbeda.

---
*Status: [status.md](../../../docs/status.md)*
