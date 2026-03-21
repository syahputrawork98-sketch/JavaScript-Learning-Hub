# CH-02: Dynamic Routing (On-Demand Sockets)

> **"Beberapa bagian Hub yang sangat besar tidak perlu dinyalakan terus-menerus untuk menghemat daya. `Dynamic Routing` adalah 'Soket Fleksibel' (On-Demand Sockets)—mekanisme untuk memanggil modul hanya saat dibutuhkan selama runtime."**

*Pemetaan ECMA-262: Clause 13.3.10 (Import Calls)*

## 1. Mental Model: "The Plug-and-Play Socket"

Berbeda dengan `import` statis yang harus berada di puncak blueprint, `import()` dinamis adalah sebuah **Function Call** (Panggilan Fungsi):
- Ia mengembalikan **Promise** yang melokalisasi modul saat sinyal dipanggil.
- Ia bisa diletakkan di dalam `if`, `function`, atau dipicu oleh event tertentu (seperti user menekan tombol).

---

## 2. Code Splitting

Ini adalah teknik utama untuk optimasi daya Hub. Anda bisa membagi blueprint aplikasi menjadi potongan-potongan kecil. Sinyal untuk "Sektor B" hanya akan didistribusikan dari server jika user benar-benar berjalan menuju Sektor B.

---

## 3. Praktik Lapangan (Lab)

```javascript
async function loadHeavyModule() {
    console.log("Requesting extra power...");
    const module = await import('./heavy_generator.js');
    module.activate();
}

btn.onclick = loadHeavyModule;
```

---

## Arsitek Mindset: Efisiensi Transmisi

Sebagai arsitek Hub:
- Gunakan **Dynamic Routing** untuk fitur-fitur yang jarang digunakan atau komponen yang sangat besar (seperti grafik berat atau modul analisis data) untuk mempercepat waktu booting awal Hub.
- Perhatikan bahwa setiap panggilan `import()` menciptakan request jaringan baru. Jangan memanggilnya terlalu sering di dalam loop yang intensif karena bisa menyebabkan beban berlebih pada jalur komunikasi.

---
*Status: [status.md](../../../docs/status.md)*
