# Closure Retention dan Memory Traps

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/closure-retention-memory-traps-map.svg`](../assets/closure-retention-memory-traps-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`7` pada Buku 05.
- Prasyarat langsung: `06-copy-strategies-shallow-vs-deep.md`.
- Lanjut setelah ini: `08-weakmap-weakset-dan-ephemeral-cache.md`.

Prasyarat topik:
- Sudah paham closure dasar.
- Sudah paham leak pattern umum (listener/interval/cache).

Referensi remedial:
- [`01-memory-lifecycle-garbage-collection.md`](./01-memory-lifecycle-garbage-collection.md)
- [`05-memory-leak-patterns-dan-cleanup.md`](./05-memory-leak-patterns-dan-cleanup.md)

Kamus mini topik:
- `[baru]` Closure retention: closure menahan data scope luar lebih lama.
- `[baru]` Captured variable: variabel luar yang tertangkap closure.
- `[baru]` Retention trap: pola yang tanpa sadar menahan object besar.

## Pengantar Singkat Topik
Closure sangat berguna, tapi jika menahan data besar tanpa lifecycle jelas, bisa menyebabkan kebocoran memori yang sulit dideteksi.

## 1) Big Picture
Banyak memory issue bukan karena cache eksplisit, tetapi karena closure callback yang terus hidup pada listener/interval. Topik ini membantu mengenali trap tersebut dan menerapkan pola cleanup.

## 2) Small Picture
1. Closure menyimpan akses ke variabel scope luar.
2. Jika callback hidup lama, data yang tercapture ikut hidup.
3. Listener/interval yang tidak dilepas menjaga closure tetap reachable.
4. Kurangi data capture atau putus lifecycle callback saat selesai.

## 3) Wireframe
```text
[closure buat callback] -> [callback dipasang lama] -> [captured data tertahan]
[cleanup callback] -> [closure jadi unreachable] -> [eligible GC]
```

## 4) Analogi
Closure seperti kantong yang dibawa petugas. Selama petugas bertugas, isi kantong ikut terbawa walau tidak dipakai lagi.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: audit event/listener callback yang menahan state besar.
- Alasan pakai: mencegah kebocoran halus pada aplikasi long-running.

## 6) Contoh Sederhana
```js
function mountBigHandler(data) {
  function onClick() {
    console.log(data.length);
  }
  window.addEventListener('click', onClick);

  return () => window.removeEventListener('click', onClick);
}
```

### Bedah Output (Langkah Demi Langkah)
1. `onClick` menutup (capture) `data`.
2. Selama listener aktif, `data` tetap reachable.
3. `removeEventListener` melepas jalur reference ke callback.
4. Setelah cleanup dan tanpa reference lain, data bisa eligible GC.

## 7) Jebakan Umum
- Capture object besar padahal callback butuh sebagian kecil data.
- Menambah listener berulang tanpa unmount cleanup.
- Menyimpan closure dalam cache global tanpa strategi release.

## 8) Prediksi Output Drill
```js
let big = new Array(100000).fill(1);
const stop = (() => {
  const captured = big;
  return () => captured.length;
})();

big = null;
console.log(stop() > 0);
```

### Kunci Jawaban Drill
- Output: `true`
- Alasan: closure `stop` masih menahan `captured`.

## 9) Debug Story
Kasus: memory naik setiap pindah halaman meski komponen sudah ditutup.
Langkah debug:
1. Audit listener/interval pada mount/unmount.
2. Cek closure yang capture state besar.
3. Tambahkan cleanup wajib dan minimalkan captured payload.

## 10) Checkpoint
- [ ] Bisa menjelaskan kenapa closure bisa menahan memori.
- [ ] Bisa menemukan trap closure pada callback long-lived.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi closure dasar di buku 02.
2. Ulangi topik 05 buku ini.

