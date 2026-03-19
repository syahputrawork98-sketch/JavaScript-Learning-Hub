# CH-02: Call Stack Mechanics (The Terminal Stack)

> **"Hub tidak menjalankan semua perintah sekaligus. Ia menggunakan 'Tumpukan Terminal' (The Terminal Stack) — sebuah mekanisme LIFO (Last-In, First-Out) yang memastikan hanya satu terminal yang aktif memproses data pada satu waktu."**

*Pemetaan ECMA-262: Clause 8.3 (Execution Contexts)*

## 1. Mental Model: "The Terminal Stack"

Bayangkan sebuah tumpukan baki di kafetaria Hub.
- Saat Anda memanggil fungsi, Hub menaruh baki baru (Execution Context) di atas tumpukan.
- Hub hanya fokus mengerjakan apa yang ada di **baki paling atas**.
- Setelah selesai, baki paling atas dibuang (Pop), dan Hub kembali mengerjakan baki di bawahnya.

---

## 2. Alur Kerja Stack

1.  **Global Context**: Baki pertama yang selalu ada di dasar tumpukan.
2.  **Function Call**: Menumpuk baki baru setiap kali fungsi dipanggil.
3.  **Stack Overflow**: Terjadi jika baki ditumpuk terus-menerus (misal: rekursi tanpa henti) hingga melampaui batas fisik rak Hub.

![The Context Stack](./assets/execution_context_stack.svg)

---

## 3. Praktik Lapangan (Lab)

```javascript
function sectorA() {
    console.log("Di dalam Sektor A");
    sectorB(); // Menumpuk baki B di atas A
    console.log("Kembali ke Sektor A");
}

function sectorB() {
    console.log("Di dalam Sektor B");
}

sectorA(); // Eksekusi dimulai
```

---

## Arsitek Mindset: Manajemen Aliran

Sebagai arsitek Hub:
- Gunakan Stack Trace (Error stack) untuk melacak urutan baki saat terjadi kegagalan di Grid.
- Hindari fungsi yang terlalu dalam (Deep Nesting) agar Stack tetap ringan dan cepat diproses oleh Engine Hub.

---
*Status: [status.md](../../../docs/status.md)*
