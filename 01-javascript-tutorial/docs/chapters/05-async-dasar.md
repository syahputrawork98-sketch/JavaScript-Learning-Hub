# Bab 5 - Async Dasar

## 1. Tujuan Bab
Setelah bab ini, kamu harus bisa:
- Memahami perbedaan alur sync dan async secara praktis.
- Menggunakan `setTimeout`, Promise, dan `async/await` untuk kasus sederhana.
- Menangani error async dasar dengan `try/catch`.
- Menjaga alur program tetap jelas saat ada proses "menunggu".

Indikator terukur:
- [ ] Bisa prediksi urutan output pada contoh async dasar.
- [ ] Bisa menulis alur ambil data sederhana dengan `async/await` + error handling.

## 2. Gambaran Besar
Di dunia nyata, banyak proses tidak langsung selesai:
- Ambil data dari API.
- Tunggu response server.
- Delay proses tertentu.

Kalau semua dipaksa sinkron, aplikasi jadi tidak responsif.
Karena itu JavaScript pakai pola async supaya program tetap jalan sambil menunggu hasil.

## 3. Gambaran Kecil
### Sync vs Async
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

Output:
- `A`
- `C`
- `B`

### Promise Dasar
```js
const janji = new Promise((resolve, reject) => {
  const sukses = true;

  if (sukses) {
    resolve("Data berhasil diambil");
  } else {
    reject("Gagal ambil data");
  }
});

janji
  .then((hasil) => console.log(hasil))
  .catch((err) => console.log(err));
```

### `async/await`
```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function jalankan() {
  console.log("Mulai");
  await delay(1000);
  console.log("Selesai 1 detik");
}

jalankan();
```

### Error Handling Async
```js
function fetchDataDummy(isError) {
  return new Promise((resolve, reject) => {
    if (isError) reject(new Error("Server error"));
    else resolve({ id: 1, nama: "Produk A" });
  });
}

async function loadData() {
  try {
    const data = await fetchDataDummy(false);
    console.log(data);
  } catch (err) {
    console.log("Terjadi error:", err.message);
  }
}

loadData();
```

## 4. Analogi Sederhana
Bayangkan kamu pesan makanan:
- Kamu pesan (request), lalu menunggu.
- Sambil menunggu, kamu masih bisa ngobrol atau kerja hal lain.
- Saat makanan datang, kamu lanjut langkah berikutnya.

Kenapa relevan:
- Async di JS bekerja dengan ide yang sama: jangan blokir semua aktivitas saat menunggu.

Batas analogi:
- Di kode, urutan eksekusi dan handling error harus ditulis eksplisit, tidak otomatis seperti kebiasaan manusia.

## 5. Contoh Kode Inti
Kasus: simulasi ambil data user lalu tampilkan status loading.

```js
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nama: "Syahputra", role: "student" });
    }, 1200);
  });
}

async function renderUser() {
  console.log("Loading user...");

  try {
    const user = await getUser();
    console.log("User ditemukan:", user.nama);
    console.log("Role:", user.role);
  } catch (err) {
    console.log("Gagal load user:", err.message);
  } finally {
    console.log("Proses selesai");
  }
}

renderUser();
```

Prediksi output:
1. `Loading user...`
2. (setelah sekitar 1.2 detik) `User ditemukan: Syahputra`
3. `Role: student`
4. `Proses selesai`

Alasan teknis:
- `await` menunggu Promise `getUser()` selesai.
- `try/catch` menjaga alur aman jika Promise reject.
- `finally` tetap jalan baik sukses maupun gagal.

## 6. Debug Corner
Gejala error umum:
- Nilai hasil Promise terbaca `Promise { <pending> }` atau `undefined`.

Contoh salah:
```js
async function ambilNama() {
  const user = getUser(); // lupa await
  console.log(user.nama); // undefined
}
```

Masalah:
- `getUser()` mengembalikan Promise, bukan object final.
- Properti `.nama` belum ada karena data belum resolve.

Perbaikan:
```js
async function ambilNama() {
  const user = await getUser();
  console.log(user.nama);
}
```

Langkah diagnosis cepat:
1. Cek function async sudah pakai `await` di Promise penting.
2. Cek ada `try/catch` untuk Promise yang bisa gagal.
3. Log urutan eksekusi untuk lihat titik delay.

## 7. Latihan Bertahap
### Level 1 - Dasar
1. Buat fungsi `delay(ms)` lalu tampilkan "Mulai" dan "Selesai" setelah 1 detik.
2. Ubah contoh agar delay jadi 2 detik.

### Level 2 - Menengah
1. Buat Promise yang resolve nilai total belanja, lalu tampilkan dengan `then`.
2. Ulangi kasus yang sama pakai `async/await`.

### Level 3 - Menantang
1. Buat simulasi `getUser()` dan `getOrders(userId)` lalu jalankan berurutan dengan `async/await`.
2. Tambahkan skenario error dan tangani dengan `try/catch` yang rapi.

## 8. Checkpoint Lulus Bab
- [ ] Bisa jelaskan kenapa output async bisa tidak berurutan seperti kode tulisannya.
- [ ] Bisa menulis Promise sederhana dan menangani sukses/gagal.
- [ ] Bisa menulis alur async dengan `async/await` + `try/catch`.
- [ ] Bisa memperbaiki bug karena lupa `await`.

## 9. Ringkasan Bab
1. Async membantu program tetap responsif saat menunggu proses lambat.
2. `async/await` membuat alur async lebih mudah dibaca daripada rantai `then` panjang.
3. Error async wajib ditangani agar aplikasi tidak gagal diam-diam.
