# Chapter 11: Async Conventions

Chapter ini membedah sub-clause 5.2.12 dari ECMA-262. Kita akan masuk ke dunia Agents, Jobs, dan bagaimana eksekusi asinkronus dikelola.

*Mental Model: "Manajemen Pesanan Layanan Pesan Antar"*

## 1. Agents (Agen)

Dalam spesifikasi, sebuah **Agent** adalah unit yang memiliki *execution context stack*, set data internal, dan *event loop* sendiri.

- **Analogi**: Bayangkan sebuah restoran (Agent). Restoran ini punya koki (Execution Context) dan daftar pesanan (Event Loop). Restaurant A tidak tahu apa yang sedang dimasak di Restaurant B kecuali ada kurir (Shared Memory/Communication) di antara mereka.
- **Web Workers**: Di browser, setiap Web Worker adalah Agent yang berbeda.

## 2. Jobs dan Job Queues

Apa yang kita kenal sebagai "Microtasks" disebut **Jobs** dalam spesifikasi.

- **Job**: Sebuah operasi abstrak yang dijadwalkan untuk dieksekusi saat tidak ada konteks eksekusi yang sedang berjalan.
- **Job Queue**: Antrean pesanan yang menunggu koki selesai dengan pesanan saat ini. Spesifikasi menjamin bahwa Jobs akan dijalankan secara berurutan dalam satu antrean.

## 3. Mapping ke Event Loop

Meskipun istilah "Event Loop" lebih populer di kalangan pengembang, spesifikasi menggunakan istilah **RunJobs** untuk menjelaskan proses pengambilan Job dari antrean dan mengeksekusinya hingga kosong.

- **Promises**: Saat sebuah Promise selesai (`resolved`), ia mendaftarkan sebuah *Job* baru ke dalam antrean.

Memahami Agen dan Job adalah fondasi untuk menguasai perilaku asinkronus yang sangat kompleks di JavaScript, terutama saat berurusan dengan *SharedArrayBuffer* dan *Atomics*.
