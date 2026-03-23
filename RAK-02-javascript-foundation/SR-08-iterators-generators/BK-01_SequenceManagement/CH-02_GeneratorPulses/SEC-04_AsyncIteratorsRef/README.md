# SEC-04: Async Iterators (The Latency Compensator)

> **"Beberapa aliran energi di Hub tidak datang secara instan. Menunggu muatan dari sektor jauh membutuhkan kesabaran. Async Iterators adalah 'Kompensator Latensi' (Latency Compensator) yang memungkinkan kita memproses data yang datang secara asinkron dengan kemudahan ban berjalan otomatis."**

**Async Iterators** adalah evolusi dari iterator biasa yang dirancang untuk menangani sumber data asinkron. Alih-alih mendapatkan nilai secara instan, pemanggil akan mendapatkan sebuah **Promise** untuk setiap potongan data yang ditarik.

## Source Hub
- [MDN Web Docs - Symbol.asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
- [MDN Web Docs - for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [MDN Web Docs - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

---

## 1. Mental Model: "The Latency Compensator"

Bayangkan ban berjalan di Hub yang terhubung ke pembangkit listrik di planet lain. 
1. Saat robot menekan tombol `next()`, ia tidak langsung mendapatkan kotak energi.
2. Ia mendapatkan sebuah "Tanda Terima Janji" (Promise).
3. Robot (Loop `for await...of`) akan menunggu dengan sabar sampai janji tersebut terpenuhi (*resolved*) dan energi akhirnya tiba. Begitu tiba, ia segera memprosesnya dan menekan tombol `next()` lagi untuk data berikutnya.

![Async Iterator Premium](./assets/async_iterator_premium.svg)

```mermaid
flowchart LR
    A[async iterable] --> B[next()]
    B --> C[Promise]
    C --> D[resolved value]
    D --> E[for await...of consumes]
```

---

## 2. Protokol Asinkron: `Symbol.asyncIterator`

Sebuah objek sah menjadi async iterable jika ia memiliki properti `[Symbol.asyncIterator]`. Metode `next()` di dalamnya harus mengembalikan Promise yang berisi objek `{ value, done }`.

```javascript
const remoteStream = {
    [Symbol.asyncIterator]() {
        return {
            async next() {
                const data = await fetchFromRemote(); 
                return { value: data, done: false };
            }
        };
    }
};
```

---

## 3. Ban Berjalan Otomatis: `for await...of`

Ini adalah instrumen paling efisien untuk mengonsumsi aliran asinkron. Ia melakukan `await` pada setiap promise secara internal sebelum melangkah ke iterasi berikutnya.

```javascript
async function consumeEnergy(stream) {
    for await (const pulse of stream) {
        console.log(`Processing Pulse: ${pulse}`);
    }
}
```

---

## Arsitek Mindset: Kesabaran Grid

Sebagai arsitek Hub:
- **Streaming Data**: Gunakan Async Iterators saat menangani pembacaan file besar baris demi baris, atau menerima rangkaian data dari API (misal: Pagination otomatis).
- **Error Handling**: Aliran asinkron lebih rentan terhadap kegagalan transmisi (jaringan putus, timeout). Selalu bungkus konsumsi streaming dalam `try...catch`.
- **Latency Efficiency**: Dengan async iteration, Hub tidak perlu memblokir seluruh operasinya hanya untuk menunggu satu paket data; ia bisa mengerjakan tugas lain sambil menunggu janji data terpenuhi.

---

## Hands-on: Lab Aliran Masa Depan
Eksperimen dengan penarikan paket energi dari sensor jauh secara bertahap menggunakan bantuan `async` di `examples/async_iter_lab.js`.

---
*Status: [status.md](../../../status.md)*
