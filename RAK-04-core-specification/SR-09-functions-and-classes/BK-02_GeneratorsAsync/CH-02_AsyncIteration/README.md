# CH-02: Async Generators and Iterators

> **"Aliran data yang tak terbatas dan asinkron. `Async Generators and Iterators` menggabungkan keterulangan iterasi dengan waktu tunggu asinkron."**

**Source Hub**: 
- [ECMA-262: Async Generator Function Definitions](https://tc39.es/ecma262/#sec-async-generator-function-definitions)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Async Generators** (`async function*`) adalah kombinasi antara Generator dan Async Function. Ia mengembalikan **AsyncIterator**. Perbedaannya dengan iterator biasa adalah metode `.next()` miliknya mengembalikan Promise yang akan resolve menjadi `{ value, done }`.

**Model Mental**:
Bayangkan sebuah kran air pintar. Airnya tidak keluar terus-menerus. Setiap kali Anda putar kran (Next), kran tersebut akan memberitahu Anda lewat radio (Promise) bahwa air sedang disiapkan. Begitu air siap, radio berbunyi dan air pun keluar.

---

## 2. Visualisasi Sistem: Async For-Of Loop

```mermaid
graph TD
    ForStart[for await...of] --> Call[Call asyncIterator.next()]
    Call --> Wait[Await the returned Promise]
    Wait -- Resolved --> Process[Process the value]
    Process --> Call
    
    style Wait fill:#fff9c4,stroke:#fbc02d
    style Process fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Antrean Internal (Clause 15.6)
1. **[[AsyncGeneratorQueue]]**: Karena permintaan asinkron bisa datang lebih cepat dari hasil produksinya, Hub mengelola antrean internal untuk permintaan `.next()`.
2. **yield vs await**: Di dalam generator asinkron, Anda bisa menggunakan keduanya. `yield` mengirim balik data melalui Promise, sementara `await` menunggu data masuk dari luar.
3. **Symbol.asyncIterator**: Protokol standar yang memberitahu Hub bahwa objek ini bisa digunakan di dalam loop `for await...of`.

### Arsitek Mindset: Data Streaming
- Gunakan Async Generators untuk menangani aliran data yang besar (seperti log file atau stream video). Dengan pola ini, Hub tidak perlu memuat seluruh data ke memori Warehouse sekaligus; ia hanya memproses satu bagian kecil data saat benar-benar dibutuhkan.

---

## 4. Lab Praktis
Buka file `examples/01_async_infinite_stream.js` untuk melihat aliran nilai yang dihasilkan oleh async generator secara bertahap.

---
*Status: [x] Complete | [status.md](../../../../../status.md)*
