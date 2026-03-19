# CH-03: Safety Vault (The Jailing Mechanism)

> **"Dalam Grid yang berbahaya, sirkuit bisa meledak kapan saja. `try...catch...finally` adalah 'Safety Vault' (Jaring Pengaman)—kontainer khusus yang mengurung malfungsi agar tidak meluas ke seluruh Hub."**

*Pemetaan ECMA-262: Clause 15.2 (v2025)*

## 1. Mental Model: "The Three Chambers"

1.  **`try` Chamber**: Area isolasi tempat Anda menjalankan instruksi berisiko tinggi.
2.  **`catch` Chamber**: Ruang intervensi. Jika `try` meledak, sinyal `throw` dialirkan ke sini secara otomatis untuk dinetralkan.
3.  **`finally` Chamber**: Protokol pembersihan wajib. Arus akan PASTI melewati ruang ini, baik eksekusi sukses maupun gagal. Sangat krusial untuk memutus koneksi atau melepas kunci memori.

---

## 2. Interaksi Kritis: Finally vs Return

Ini adalah jebakan kognitif paling sering di Hub:
Jika Anda menempatkan `return` di dalam `finally`, Hub akan mengabaikan `return` yang ada di dalam `try` atau `catch`. Sinyal dari `finally` memiliki prioritas transmisi terakhir yang mutlak.

---

## 3. Praktik Lapangan (Lab)

```javascript
function safetyCheck() {
    try {
        console.log("Entering Risk Zone...");
        return "SUCCESS_SIGNAL";
    } catch (err) {
        return "ERROR_NEUTRALIZED";
    } finally {
        console.log("Cleanup Protocol: DONE");
        // Jika return ditaruh di sini, ia akan menimpa "SUCCESS_SIGNAL"
    }
}

console.log(safetyCheck());
```

---

## Arsitek Mindset: Keamanan Lapis Baja

Sebagai arsitek Hub:
- Jangan biarkan blok `catch` kosong. Ini seperti mematikan alarm alarm bahaya tanpa memeriksa kerusakannya (*Swallowing Errors*).
- Gunakan `finally` untuk melepas sumber daya penting (seperti koneksi database atau file handle) agar memori Hub tidak bocor meskipun terjadi ledakan di tengah proses.

---
*Status: [status.md](../../../docs/status.md)*
