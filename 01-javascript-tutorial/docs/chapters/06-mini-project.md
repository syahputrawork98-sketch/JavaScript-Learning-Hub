# Bab 6 - Mini Project

## 1. Tujuan Bab
Setelah bab ini, kamu harus bisa:
- Menggabungkan konsep variabel, function, array/object, loop, dan async dalam satu alur.
- Menyusun mini app dengan struktur kode yang rapi dan mudah dibaca.
- Menangani validasi input dan error dasar.
- Menjelaskan keputusan teknis utama pada implementasi project.

Indikator terukur:
- [ ] Mini app berjalan end-to-end.
- [ ] Kamu bisa menjelaskan alur data dari input sampai output.

## 2. Gambaran Besar
Bab ini adalah tahap integrasi.
Kalau bab 1-5 itu bagian-bagian mesin, bab 6 adalah merakit semua bagian jadi produk utuh.

Mini project yang kita pakai: `Task Manager Sederhana`.
Fitur utamanya:
- Tambah task.
- Tampilkan task.
- Tandai selesai.
- Simulasi simpan data async.

## 3. Gambaran Kecil
### Requirement Minimum
- Data task disimpan dalam array of object.
- Tiap task punya: `id`, `title`, `done`.
- Ada function terpisah untuk tiap aksi utama.
- Ada loop untuk render daftar task.
- Ada async function simulasi simpan (`setTimeout` + Promise).

### Struktur Function
- `buatTask(title)`
- `tambahTask(title)`
- `tampilkanTask()`
- `selesaikanTask(id)`
- `simpanTaskAsync()`
- `main()`

## 4. Analogi Sederhana
Bayangkan kamu punya papan tugas harian:
- Array = daftar catatan tempel.
- Object = detail satu catatan.
- Function = aturan kerja (nambah, ceklist, tampilkan).
- Async = proses "arsipkan" yang butuh waktu.

Kenapa relevan:
- Ini gambaran kecil dari aplikasi nyata: ada data, proses, kondisi, dan alur tunggu.

Batas analogi:
- Di kode, konsistensi struktur data penting. Kalau satu field salah nama, seluruh alur bisa error.

## 5. Contoh Kode Inti
```js
let nextId = 1;
const tasks = [];

function buatTask(title) {
  return {
    id: nextId++,
    title,
    done: false,
  };
}

function tambahTask(title) {
  if (!title || title.trim() === "") {
    console.log("Judul task tidak boleh kosong");
    return;
  }

  const taskBaru = buatTask(title.trim());
  tasks.push(taskBaru);
  console.log(`Task ditambahkan: ${taskBaru.title}`);
}

function tampilkanTask() {
  if (tasks.length === 0) {
    console.log("Belum ada task");
    return;
  }

  console.log("\nDaftar Task:");
  for (const task of tasks) {
    const status = task.done ? "[x]" : "[ ]";
    console.log(`${status} (${task.id}) ${task.title}`);
  }
}

function selesaikanTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    console.log("Task tidak ditemukan");
    return;
  }

  task.done = true;
  console.log(`Task selesai: ${task.title}`);
}

function simpanTaskAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task berhasil disimpan (simulasi)");
    }, 1000);
  });
}

async function main() {
  tambahTask("Belajar variabel");
  tambahTask("Belajar function");
  tambahTask("Belajar async");

  tampilkanTask();

  selesaikanTask(2);
  tampilkanTask();

  const pesan = await simpanTaskAsync();
  console.log("\n" + pesan);
}

main();
```

Prediksi output ringkas:
1. Tiga task ditambahkan.
2. Daftar awal ditampilkan dengan status belum selesai.
3. Task id 2 ditandai selesai.
4. Daftar terbaru menampilkan status task id 2 = selesai.
5. Setelah delay sekitar 1 detik, muncul pesan simpan berhasil.

Alasan teknis:
- Array of object dipakai untuk data list + detail.
- `find` dipakai untuk mencari task berdasarkan `id`.
- `async/await` dipakai supaya alur simpan async tetap mudah dibaca.

## 6. Debug Corner
Gejala error umum:
- Task tidak pernah ketemu saat `selesaikanTask(id)`.

Contoh salah:
```js
function selesaikanTask(id) {
  const task = tasks.find((item) => item.id == id); // longgar, rawan bug
  task.done = true;
}
```

Masalah:
- Perbandingan longgar (`==`) bisa menutupi mismatch tipe data.
- Kalau `task` tidak ketemu, akses `task.done` akan error.

Perbaikan:
```js
function selesaikanTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    console.log("Task tidak ditemukan");
    return;
  }

  task.done = true;
}
```

Langkah diagnosis cepat:
1. Log nilai `id` yang dikirim.
2. Log isi `tasks` saat fungsi dipanggil.
3. Pastikan pakai perbandingan ketat `===`.

## 7. Latihan Bertahap
### Level 1 - Dasar
1. Tambahkan fitur hapus task berdasarkan `id`.
2. Tampilkan jumlah task selesai vs belum selesai.

### Level 2 - Menengah
1. Tambahkan filter: tampilkan hanya task yang belum selesai.
2. Tambahkan validasi agar judul minimal 3 karakter.

### Level 3 - Menantang
1. Simulasikan `loadTaskAsync()` yang mengisi data awal task dari Promise.
2. Pisahkan kode menjadi 2 file: `task-service.js` dan `app.js` (struktur modular sederhana).

## 8. Checkpoint Lulus Bab
- [ ] Mini project bisa dijalankan tanpa error runtime utama.
- [ ] Semua fitur minimum berjalan sesuai requirement.
- [ ] Bisa jelaskan kenapa data dipilih dalam format array of object.
- [ ] Bisa menunjukkan minimal 1 bug yang ditemukan dan cara memperbaikinya.

## 9. Ringkasan Bab
1. Mini project adalah bukti integrasi konsep, bukan sekadar kumpulan snippet.
2. Struktur function yang jelas membuat fitur lebih mudah dikembangkan.
3. Validasi + error handling dasar wajib ada walaupun project masih sederhana.
