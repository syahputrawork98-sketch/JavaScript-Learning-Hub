# CH-02: Scope Chain & Lexical Environment

> **"Scope Chain adalah sistem distribusi energi berlapis. Jika suatu komponen tidak menemukan daya di ruangnya sendiri, ia akan mencari ke ruang di atasnya hingga mencapai Grid Utama (Global Scope)."**

Setelah memahami bagaimana variabel "diangkat" (Hoisting), sekarang kita harus memahami di mana variabel tersebut "hidup" dan siapa saja yang bisa mengaksesnya.

## 1. Mental Model: "Energy Containment Units"

Bayangkan Hub Energi kita memiliki beberapa ruangan:
1.  **Grid Utama (Global Scope)**: Area terbuka yang bisa diakses semua orang.
2.  **Ruang Mesin (Function Scope)**: Area tertutup di dalam fungsi.
3.  **Kotak Kontrol (Block Scope)**: Area sangat kecil di dalam `{ ... }` (seperti `if` atau `for`).

---

## 2. Lexical Environment (Konteks Ruangan)

Setiap kali sebuah fungsi dibuat, ia membawa "Peta Ruangan" tempat ia dilahirkan. Ini disebut **Lexical Environment**. JavaScript menentukan *scope* berdasarkan posisi kode tersebut ditulis di dalam file, bukan di mana ia dipanggil.

---

## 3. Scope Chain: Mencari Daya ke Luar

Jika Anda meminta variabel di dalam **Kotak Kontrol** dan variabel itu tidak ada, sistem akan bertanya ke **Ruang Mesin**. Jika masih tidak ada, ia akan bertanya ke **Grid Utama**. 

**ATURAN EMAS**: Pencarian hanya bisa dilakukan **ke luar/ke atas**, tidak pernah ke dalam/ke bawah.

![Scope Containment](./assets/scope_containment.svg)

```javascript
const mainPower = "1000MW"; // Global Grid

function engineRoom() {
    const localGenerator = "50MW"; // Function Scope
    
    function controlBox() {
        const switchID = "CB-01"; // Block Scope
        
        console.log(switchID);       // Ada di sini
        console.log(localGenerator); // Cari ke luar (engineRoom) -> Ada
        console.log(mainPower);      // Cari ke luar lagi (Global) -> Ada
    }
    
    controlBox();
}

engineRoom();
```

---

## 4. Shadowing (Tumpang Tindih Energi)

Jika Anda mendefinisikan variabel dengan nama yang sama di ruang yang lebih dalam, ia akan "membayangi" variabel di luar. Penutup (shielding) ini mencegah komponen luar mengganggu nilai di dalam.

---

## Arsitek Mindset: Enkapsulasi Energi

Gunakan **Block Scope** (`let` dan `const`) sebanyak mungkin. Ini seperti menempatkan setiap komponen dalam kotak pelindung masing-masing, mencegah kebocoran energi yang bisa merusak komponen lain di ruangan yang sama.

---

## Hands-on: Penjelajahan Lab Berlapis
Lihat file `examples/scope_lab.js` untuk melihat bagaimana fungsi bersarang (nested functions) berburu variabel di sepanjang Scope Chain.

---
*Status: [status.md](../../../status.md)*
