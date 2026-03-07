# Call Stack, Web APIs, dan Queues

## Tujuan Pembelajaran

Setelah mempelajari topik ini, pembaca dapat:
- menjelaskan peran call stack, Web APIs, dan queue pada runtime
- memprediksi urutan output sync dan async sederhana
- mengidentifikasi penyebab callback terlambat dieksekusi

## Konsep Utama

- call stack
- stack frame
- Web APIs
- queue handoff
- run-to-completion

## Penjelasan

JavaScript menjalankan kode sinkron di call stack (LIFO).

Untuk operasi async (timer, I/O), callback tidak langsung masuk stack:
1. callback didaftarkan ke Web APIs
2. saat siap, callback masuk queue
3. callback dipindah ke stack hanya jika stack kosong

Aturan kunci: run-to-completion. Satu frame selesai dulu sebelum frame berikutnya diproses.

## Contoh Kode

### Contoh 1 - Urutan Dasar Sync + Timer

```javascript
console.log("A")

setTimeout(() => {
  console.log("B")
}, 0)

console.log("C")
// output: A, C, B
```

### Contoh 2 - Stack Tertahan oleh Kerja Sinkron Berat

```javascript
function heavy() {
  const end = Date.now() + 30
  while (Date.now() < end) {}
}

console.log("start")
setTimeout(() => console.log("timer"), 0)
heavy()
console.log("end")
// output: start, end, timer
```

### Contoh 3 - Mini Kasus: Callback Pipeline Sederhana

```javascript
function fetchMock(callback) {
  setTimeout(() => callback("data-ready"), 10)
}

console.log("request")
fetchMock((result) => {
  console.log("callback:", result)
})
console.log("after-register")
```

## Analogi Singkat (Opsional)

Call stack seperti kasir yang melayani satu pelanggan aktif. Web APIs seperti bagian dapur. Pesanan dari dapur baru bisa diambil kasir saat pelanggan aktif selesai.

## Eksperimen Kode

Ubah durasi `heavy` dan lihat dampaknya ke timing callback.

```javascript
function heavy(ms) {
  const end = Date.now() + ms
  while (Date.now() < end) {}
}

setTimeout(() => console.log("timer done"), 0)
heavy(100)
console.log("main done")
```

Pertanyaan refleksi:
1. Kenapa timer 0 ms tidak langsung tampil?
2. Bagaimana kerja sinkron berat memengaruhi UX?

## Common Misconception (Opsional)

- `setTimeout(..., 0)` bukan jaminan callback dieksekusi paling awal.
- Queue bukan bagian call stack; callback harus menunggu handoff.

## Cakupan dan Batasan

- Dibahas di topik ini: model umum stack-api-queue untuk reasoning runtime.
- Tidak dibahas di topik ini: prioritas queue async detail lanjutan (dibahas di track 03).

## Latihan

1. Buat contoh urutan log sync + `setTimeout`.
2. Tambahkan loop berat dan catat perubahan urutan/timing output.
3. Jelaskan jalur callback dari registrasi sampai eksekusi.

## Ringkasan

- Kode sinkron berjalan di call stack.
- Callback async menunggu di queue sampai stack kosong.
- Memahami handoff stack-queue penting untuk debug timing issue.

## Lanjut Setelah Ini

- [09-scope-chain-lookup.md](./09-scope-chain-lookup.md)
- Track lanjutan async: [03-asynchronous-javascript-model/topics](../../03-asynchronous-javascript-model/topics/)
