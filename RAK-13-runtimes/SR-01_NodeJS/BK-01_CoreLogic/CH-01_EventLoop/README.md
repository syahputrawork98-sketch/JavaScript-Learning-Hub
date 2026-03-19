# CH-01: Event Loop (Phases & Timers)

Event Loop adalah mekanisme yang memungkinkan Node.js melakukan operasi I/O non-blocking—meskipun JavaScript bersifat single-threaded—dengan mendelegasikan operasi tersebut ke kernel sistem atau ke thread pool (Libuv).

## 🧩 Mental Model: The Rotating Ferris Wheel

Bayangkan Event Loop sebagai sebuah kincir ria (ferris wheel) yang terus berputar. Setiap kursi di kincir tersebut adalah fase tertentu yang menangani jenis callback tertentu.

## 🔄 Fase Event Loop

Node.js memiliki 6 fase utama dalam Event Loop:

1. **Timers**: Mengeksekusi callback dari `setTimeout()` dan `setInterval()`.
2. **Pending Callbacks**: Menangani callback I/O yang ditunda (misal: error sistem seperti TCP ECONNREFUSED).
3. **Idle, Prepare**: Digunakan secara internal oleh Node.js.
4. **Poll**: Mengambil event I/O baru (file read, network connections) dan mengeksekusi callbacknya.
5. **Check**: Mengeksekusi callback dari `setImmediate()`.
6. **Close Callbacks**: Menangani callback penutupan (misal: `socket.on('close', ...)`).

## ⚡ microTask Queue (The Special Pass)

Ada dua queue khusus yang dieksekusi **di antara setiap fase**:
- `process.nextTick()` (Prioritas Tertinggi)
- `Promise` callbacks (Microtasks)

## 🛠️ Lab: Event Loop Ordering

Lihat contoh praktis di [examples/01-event-loop/order.js](../../../examples/01-event-loop/order.js) untuk melihat urutan eksekusi secara langsung.

---
*Kembali ke [BK-01](../README.md)*
