# CH-04: Async Iterators (Future Energy Streams)

> **"Beberapa aliran energi di Hub tidak datang secara instan. Menunggu muatan dari sektor jauh membutuhkan kesabaran. Async Iterators adalah 'Aliran Energi Masa Depan' (Future Energy Streams) yang memungkinkan kita memproses data yang datang secara asinkron dengan kemudahan ban berjalan."**

Async iterators dan loop `for await...of` adalah cara modern untuk menangani aliran data asinkron (*streams*).

## 1. Mental Model: "Future Energy Streams"

Bayangkan ban berjalan yang tidak bermesin. Robot di ujung ban menekan tombol `next()`, namun alih-alih mendapatkan paket data langsung, ia mendapatkan "Tanda Terima Janji" (Promise). Ban berjalan hanya akan bergerak saat energi akhirnya tiba dari pembangkit listrik jauh.

---

## 2. Protokol Asinkron

Berbeda dengan iterator biasa, `next()` pada async iterator mengembalikan sebuah **Promise** yang akan melakukan *resolve* ke objek `{ value, done }`.

```javascript
const asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            async next() {
                const data = await fetchFromGrid(); // Menunggu data
                return { value: data, done: false };
            }
        };
    }
};
```

---

## 3. for await...of

Simbol ban berjalan otomatis khusus untuk aliran asinkron. Ia secara otomatis menunggu setiap promise selesai sebelum memberikan nilai ke badan loop.

```javascript
async function processStream(stream) {
    for await (const pulse of stream) {
        console.log(`Mengolah Energi: ${pulse}`);
    }
}
```

---

## Arsitek Mindset: Kesabaran Grid

Sebagai arsitek Hub:
- Gunakan `for await...of` saat Anda menarik data dari jaringan, sensor eksternal, atau file sistem yang dibaca per baris.
- Pastikan Anda menangani kesalahan (`try...catch`) karena aliran energi asinkron lebih rentan terhadap kegagalan transmisi dibandingkan aliran lokal.

---

## Hands-on: Lab Aliran Masa Depan
Buka file `examples/async_iter_lab.js` untuk mensimulasikan penerimaan paket energi dari sensor jauh secara bertahap menggunakan bantuan `async`.

---
*Status: [status.md](../../../status.md)*
