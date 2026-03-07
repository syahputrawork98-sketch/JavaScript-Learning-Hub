# Memory Leak Patterns dan Cleanup

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/memory-leak-patterns-cleanup-map.svg`](../assets/memory-leak-patterns-cleanup-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`5` pada Buku 05.
- Prasyarat langsung: `04-referential-equality.md`.
- Lanjut setelah ini: `06-copy-strategies-shallow-vs-deep.md`.

Prasyarat topik:
- Sudah paham memory lifecycle dan reachability.

Referensi remedial:
- [`01-memory-lifecycle-garbage-collection.md`](./01-memory-lifecycle-garbage-collection.md)
- [`04-referential-equality.md`](./04-referential-equality.md)

Kamus mini topik:
- `[baru]` Retention path: jalur reference yang menahan object tetap hidup.
- `[baru]` Cleanup: tindakan melepas resource/reference setelah selesai dipakai.
- `[ulang]` Memory leak: object tetap reachable meski sudah tidak dibutuhkan.

## Pengantar Singkat Topik
Topik ini membahas pola leak paling umum dan strategi cleanup praktis agar konsumsi memori tidak terus naik saat aplikasi berjalan lama.

## 1) Big Picture
Leak biasanya datang dari lifecycle yang tidak ditutup: listener, interval, cache, atau closure panjang umur. Dengan checklist leak pattern, kamu bisa mencegah masalah performa sebelum jadi insiden production.

## 2) Small Picture
1. Listener yang tidak dilepas menahan reference object UI/state.
2. Interval/timeout berulang tanpa clear menahan closure.
3. Cache tanpa batas menahan data lama terus-menerus.
4. Cleanup yang konsisten membuat object jadi unreachable saat waktunya.

## 3) Wireframe
```text
[resource dibuat] -> [dipakai] -> [wajib cleanup] -> [eligible GC]
[tidak cleanup] -> [reference tertahan] -> [leak]
```

## 4) Analogi
Leak seperti keran air yang tidak ditutup: bocornya kecil, dampaknya besar jika dibiarkan lama.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: audit performa memori pada app long-running.
- Alasan pakai: mencegah degradasi performa bertahap.

## 6) Contoh Sederhana
```js
function mount() {
  const id = setInterval(() => {
    // do work
  }, 1000);

  return function unmount() {
    clearInterval(id);
  };
}

const cleanup = mount();
cleanup();
```

### Bedah Output (Langkah Demi Langkah)
1. `setInterval` membuat proses berulang yang menahan callback reference.
2. `cleanup` memanggil `clearInterval` untuk melepas resource.
3. Tanpa cleanup, callback bisa terus hidup lebih lama dari yang diperlukan.

## 7) Jebakan Umum
- Lupa cleanup listener pada unmount/dispose.
- Cache tanpa eviction policy.
- Menaruh data besar di global state tanpa lifecycle jelas.

## 8) Prediksi Output Drill
```js
let data = new Array(100000).fill({ big: true });
let hold = data;

data = null;
console.log(hold.length > 0);
```

### Kunci Jawaban Drill
- Output: `true`
- Data belum eligible GC karena masih direferensikan `hold`.

## 9) Debug Story
Kasus: tab browser makin berat setelah dipakai 1 jam.
Langkah debug:
1. Ambil heap snapshot berkala.
2. Cari object yang naik terus dan cek retention path.
3. Tambahkan cleanup listener/interval/cache eviction.
4. Verifikasi ulang tren memori setelah perbaikan.

## 10) Checkpoint
- [ ] Bisa menyebut minimal 3 leak pattern umum.
- [ ] Bisa menentukan titik cleanup untuk listener/interval/cache.
- [ ] Bisa membaca gejala leak dari pola penggunaan memori.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 01.
2. Latih satu kasus listener + cleanup.


