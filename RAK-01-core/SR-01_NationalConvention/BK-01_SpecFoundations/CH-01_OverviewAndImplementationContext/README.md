# CH-01: Overview & Implementation Context

Selamat datang di jantung spesifikasi. Sebelum kita membedah objek dan variabel, kita harus paham bagaimana spesifikasi "berbicara" dengan dunia luar. (Clause 4.4.1 - 4.4.3).

## 1. Implementation-approximated (4.4.1)
Beberapa fitur di JavaScript tidak memiliki hasil yang "pasti" secara matematis di semua mesin. Spesifikasi memberikan panduan perilaku ideal, tapi membolehkan mesin (seperti V8 atau SpiderMonkey) untuk melakukan pendekatan (misalnya pada tingkat presisi perhitungan tertentu).

## 2. Implementation-defined (4.4.2)
Ini adalah fitur yang perilakunya diserahkan sepenuhnya kepada pembuat mesin JS. Spesifikasi hanya mengatakan "Fitur ini ada", tapi detail teknisnya bisa berbeda antar browser.

## 3. Host-defined (4.4.3)
Sama seperti *implementation-defined*, tapi merujuk pada **Lingkungan** (Host) tempat JS berjalan, seperti Web Browser, Node.js, atau Deno. Contoh: `console.log` adalah fitur yang didefinisikan oleh Host, bukan oleh inti bahasa ECMAScript itu sendiri.

---
> [!IMPORTANT]
> **Architect Mindset:** Jangan pernah berasumsi bahwa fitur Host-defined akan berperilaku sama persis di setiap lingkungan. Selalu cek dokumentasi Host (seperti MDN untuk Browser atau dokumentasi resmi Node.js).
