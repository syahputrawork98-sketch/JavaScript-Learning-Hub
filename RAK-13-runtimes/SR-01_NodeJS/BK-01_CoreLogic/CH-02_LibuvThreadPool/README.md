# CH-02: Libuv Thread Pool (I/O & Worker Threads)

Meskipun JavaScript single-threaded, Node.js dapat melakukan operasi berat (seperti enkripsi atau kompresi) secara paralel menggunakan **Libuv Thread Pool**.

## 🏗️ Arsitektur

Libuv menyediakan sekumpulan thread (default: 4 thread) yang digunakan untuk menangani tugas-tugas yang tidak dapat dilakukan oleh kernel sistem secara asynchronous.

### Tugas yang masuk ke Thread Pool:
- **Filesystem (FS)**: Operasi baca/tulis file.
- **DNS**: `dns.lookup()`.
- **Crypto**: `crypto.pbkdf2()`, `crypto.randomBytes()`.
- **Zlib**: Kompresi data.

## 🚀 Optimasi: UV_THREADPOOL_SIZE

Anda dapat meningkatkan jumlah thread dengan mengatur environment variable:
```bash
SET UV_THREADPOOL_SIZE=8 && node app.js
```

---
*Kembali ke [BK-01](../README.md)*
