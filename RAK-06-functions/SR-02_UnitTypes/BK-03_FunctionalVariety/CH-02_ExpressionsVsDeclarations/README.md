# CH-02: Expressions vs Declarations (Stationary vs Mobile Stations)

> **"Di dalam Hub, ada unit yang dibangun permanen sebagai bagian dari struktur dasar (Declarations) dan ada unit yang bisa dipindah-pindahkan atau disimpan dalam kontainer (Expressions). Mengetahui kapan menggunakan masing-masing adalah kunci fleksibilitas Hub."**

JavaScript memungkinkan kita mendefinisikan fungsi melalui pernyataan (Declaration) atau ekspresi (Expression).

## 1. Mental Model: "Stationary vs Mobile Stations"

- **Function Declaration (Stationary)**: Seperti menara pemancar permanen. Karena mekanisme **Hoisting**, tower ini sudah bisa digunakan di seluruh Hub bahkan sebelum blueprint-nya dibaca lengkap dari atas ke bawah.
- **Function Expression (Mobile)**: Seperti generator portabel yang disimpan di dalam kontainer (variabel). Anda tidak bisa menggunakannya sebelum mesin itu benar-benar diletakkan dan diinisialisasi di baris tersebut.

---

## 2. Perbedaan Krusial (Hoisting)

```javascript
/* STATIONARY: Bisa dipanggil di atas */
broadcast("Hello Grid!"); 

function broadcast(msg) { console.log(msg); }

/* MOBILE: Tidak bisa dipanggil di atas */
// mobileStation(); // ERROR!

const mobileStation = function() { console.log("Broadcasting..."); };
```

---

## 3. Anonymous vs Named Expressions

Fungsi di dalam ekspresi seringkali tidak bernama (anonymous), tapi memberi nama pada ekspresi mempermudah pelacakan saat melakukan prosedur perbaikan (debugging) di dalam log sistem Hub.

---

## Arsitek Mindset: Ketertiban Blueprint

Sebagai arsitek Hub:
- Gunakan **Declarations** untuk fungsi-fungsi utama yang menjadi infrastruktur dasar aplikasi agar mudah diakses.
- Gunakan **Expressions** untuk fungsi yang hanya dibutuhkan secara situasional, dikirim sebagai argumen ke sirkuit lain, atau untuk menjaga agar logaritma tetap tertutup/lokal (encapsulated).

---

## Hands-on: Lab Stasiun Kerja
Buka file `examples/fn_compare_lab.js` untuk melihat eksperimen bagaimana "Menara Permanen" sudah menyala sejak awal sementara "Generator Portabel" butuh persiapan sebelum digunakan.

---
*Status: [status.md](../../../status.md)*
