# CH-01: Reachability Atlas (The Connectivity Rule)

> **"Hub tidak akan menghancurkan apa pun yang masih memiliki jalur koneksi ke pusat kendali. `Reachability Atlas` adalah 'Aturan Konektivitas'—protokol yang menentukan apakah sebuah objek masih dianggap 'Dapat Dijangkau' atau sudah menjadi 'Isolasi'."**

*Pemetaan Konseptual Arsitektur Hub*

## 1. Mental Model: "The Roots of Energy"

Hub memulai pencarian dari titik-titik fundamental yang disebut **Roots**:
- **Global Objects**: Variabel di `globalThis`.
- **Active Stack**: Variabel lokal dan parameter dalam fungsi yang sedang berjalan.
- **Module Records**: Impor dan ekspor yang aktif.

Selama sebuah objek bisa ditelusuri kembali ke salah satu **Roots** ini melalui rantai kabel (referensi), objek tersebut dianggap **Reachable** (Dapat Dijangkau) dan akan dipertahankan. Jika jalur terputus, objek tersebut masuk ke wilayah isolasi.

---

## 2. Reference Chains

Konektivitas bisa bersifat langsung atau tidak langsung:
- **Direct**: `A -> B`.
- **Indirect**: `A -> B -> C`. (Jika A adalah Root, maka B dan C aman).
- **Circular**: `B -> C -> B`. (Jika tidak ada Root yang terhubung ke B atau C, maka keduanya akan didaur ulang bersama).

---

## 3. Praktik Lapangan (Lab)

```javascript
let rootNode = { detail: "I am a root" }; // Reachable (via variable)
let island = { node: "Isolated" };        // Reachable (via variable)

island = null; // Tali ke 'island' putus. Objek {node: "Isolated"} menjadi UNREACHABLE.
```

---

## Arsitek Mindset: Mempertahankan Aliran

Sebagai arsitek Hub:
- Fokuslah pada **Roots**. Hati-hati dengan menaruh terlalu banyak data di variabel Global, karena mereka adalah Roots yang tidak pernah mati selama Hub berjalan, sehingga semua data yang terhubung ke sana tidak akan pernah didaur ulang (Memory Leak).
- Pahami bahwa siklus referensi melingkar (Circular References) bukan lagi masalah bagi Hub modern selama mereka terputus dari Roots. Hub cukup cerdas untuk mendeteksi "pulau" data yang terisolasi dan membersihkan semuanya sekaligus.

---
*Status: [status.md](../../../docs/status.md)*
