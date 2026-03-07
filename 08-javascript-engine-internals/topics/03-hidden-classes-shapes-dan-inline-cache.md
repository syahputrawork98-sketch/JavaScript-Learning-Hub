# 03 - Hidden Classes, Shapes, dan Inline Cache

## Tujuan Pembelajaran
- Memahami kenapa stabilitas shape object berdampak langsung ke kecepatan akses properti.
- Bisa membedakan call-site monomorphic, polymorphic, dan megamorphic secara praktis.
- Bisa merancang struktur object agar hot path lebih ramah optimizer.

## Konsep Utama
- Hidden class / shape
- Inline cache (IC)
- Monomorphic / polymorphic / megamorphic call-site
- Shape transition

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`3` pada Buku 08.
- Prasyarat langsung: `02-interpreter-vs-jit-tiering.md`.
- Lanjut setelah ini: `04-optimization-dan-deoptimization-triggers.md`.

Prasyarat topik:
- Sudah memahami pipeline parse -> AST -> bytecode.
- Sudah memahami konsep tiering (baseline/interpreter ke optimized tier).

Kamus mini topik:
- `[baru]` Shape transition: perubahan metadata struktur object saat properti berubah.
- `[baru]` Monomorphic call-site: satu call-site melihat shape yang sama secara konsisten.
- `[baru]` Polymorphic call-site: satu call-site melihat beberapa shape terbatas.
- `[baru]` Megamorphic call-site: satu call-site melihat terlalu banyak shape sehingga IC sulit efektif.

## 1) Big Picture
Banyak bottleneck JavaScript bukan karena operasi matematis berat, tapi karena akses properti terjadi di jalur panas dengan bentuk object yang tidak stabil. Engine mengandalkan hidden class/shape untuk membuat akses properti cepat. Ketika call-site membaca shape yang konsisten, inline cache dapat mengambil jalur cepat. Ketika shape campur-aduk, cache menjadi kompleks dan performa sering turun.

Intinya: bukan cuma "berapa banyak object", tetapi "seberapa konsisten bentuk object yang melewati call-site yang sama".

## 2) Small Picture
1. Engine menyimpan metadata bentuk object (shape) berdasarkan urutan/properti yang dimiliki.
2. Saat sebuah call-site membaca `o.x`, engine mencoba menyimpan jalur akses cepat pada inline cache.
3. Jika call-site menerima object dengan shape sama berulang, IC cenderung stabil (monomorphic).
4. Jika shape bertambah banyak, IC harus menangani banyak jalur (polymorphic/megamorphic).
5. Semakin tidak stabil shape di hot path, semakin besar peluang deopt atau fallback jalur lambat.

## 3) Wireframe
```text
Jalur ideal:
[shape konsisten] -> [IC stabil] -> [property access cepat]

Jalur menurun:
[shape bercampur] -> [IC makin kompleks] -> [latensi naik]

Jalur buruk:
[shape sangat beragam] -> [megamorphic call-site] -> [optimasi sulit dipertahankan]
```

## 4) Dipakai untuk Apa + Alasan
- Dipakai untuk: audit performa object-heavy code (transform data, serializer, renderer, adapter API).
- Alasan pakai: sering memberi dampak nyata pada p95 latency dan CPU hotspot tanpa mengubah fitur bisnis.
- Kapan tidak dipakai: bukan prioritas saat jalur kode tidak panas atau bottleneck utamanya I/O/network.

## 5) Contoh Kode
### Contoh A - Shape Stabil (lebih ramah IC)
```js
function readTotal(order) {
  return order.total + 1;
}

function makeOrder(total, tax) {
  // Urutan properti konsisten
  return { total, tax };
}

const a = makeOrder(100, 10);
const b = makeOrder(200, 20);

for (let i = 0; i < 200000; i++) {
  readTotal(i % 2 === 0 ? a : b);
}
```

Bedah:
1. `readTotal` adalah call-site akses `order.total`.
2. Object yang masuk punya shape serupa.
3. Jalur IC biasanya lebih mudah stabil.

### Contoh B - Shape Campuran (lebih sulit dioptimasi)
```js
function readTotal(order) {
  return order.total + 1;
}

const a = { total: 100, tax: 10 };
const b = { tax: 20, total: 200, coupon: "OFF10" }; // urutan + properti beda
const c = { total: 300 }; // properti berbeda lagi

for (let i = 0; i < 200000; i++) {
  const item = i % 3 === 0 ? a : i % 3 === 1 ? b : c;
  readTotal(item);
}
```

Bedah:
1. Call-site sama, tetapi variasi shape bertambah.
2. IC harus menangani lebih banyak kemungkinan.
3. Hot path jadi lebih rentan melambat.

## 6) Eksperimen Kode
Gunakan benchmark kecil untuk melihat pola stabil vs campuran.

```js
function readX(o) {
  return o.x + 1;
}

function bench(label, factory) {
  const arr = factory();
  const t0 = performance.now();
  let acc = 0;

  for (let i = 0; i < 500000; i++) {
    acc += readX(arr[i % arr.length]);
  }

  const t1 = performance.now();
  console.log(label, (t1 - t0).toFixed(2), "ms", "acc:", acc);
}

bench("stable-shape", () => [{ x: 1, y: 2 }, { x: 3, y: 4 }]);
bench("mixed-shape", () => [{ x: 1, y: 2 }, { y: 4, x: 3, z: 0 }, { x: 5 }]);
```

Catatan:
- Hasil waktu bisa berbeda antar engine/mesin.
- Fokus utama adalah memahami arah tren, bukan angka absolut.

## 7) Jebakan Umum
- Menambah/menghapus properti object secara dinamis di jalur panas.
- Mencampur payload object dari banyak sumber tanpa normalisasi shape.
- Membuat benchmark tanpa kontrol input sehingga kesimpulan menyesatkan.

## 8) Prediksi Output Drill
```js
function readId(u) {
  return u.id;
}

const u1 = { id: 1, name: "A" };
const u2 = { id: 2, name: "B" };
const u3 = { name: "C", id: 3, role: "admin" };

console.log(readId(u1));
console.log(readId(u2));
console.log(readId(u3));
```

### Kunci Jawaban Drill
- Output tetap `1`, `2`, `3`.
- Meski output benar, call-site `readId` melihat shape yang tidak selalu sama.
- Ini contoh klasik: correctness aman, performa bisa terpengaruh.

## 9) Debug Story
Kasus: endpoint transform data melambat setelah integrasi provider baru.
Langkah debug:
1. Profiling menunjukkan hotspot di fungsi akses properti sederhana.
2. Audit payload menemukan shape object berbeda-beda antar provider.
3. Tambahkan langkah normalisasi agar object domain punya shape konsisten.
4. Retest benchmark dan p95 endpoint.
5. Simpan guard: test performa kecil untuk mencegah regresi shape campuran.

## 10) Cakupan dan Batasan
- Dibahas di topik ini: mental model shape/IC dan dampaknya ke hot path.
- Tidak dibahas detail: implementasi internal tiap engine secara spesifik.

## 11) Checkpoint
- [ ] Bisa menjelaskan hubungan shape stability -> IC stability -> performa.
- [ ] Bisa mengenali call-site yang berpotensi polymorphic/megamorphic.
- [ ] Bisa memberi satu strategi normalisasi shape yang realistis di codebase.

## 12) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `01-engine-pipeline-parse-ast-bytecode.md`.
2. Ulangi `02-interpreter-vs-jit-tiering.md`.
3. Jalankan eksperimen pada data kecil, lalu variasikan shape satu per satu.

## Ringkasan
- Hidden class/shape membantu engine mengoptimasi akses properti.
- Inline cache bekerja paling baik saat call-site menerima shape konsisten.
- Kode yang benar secara logika tetap bisa lambat jika shape object tidak stabil di jalur panas.

## Lanjut Setelah Ini
- [04-optimization-dan-deoptimization-triggers.md](./04-optimization-dan-deoptimization-triggers.md)
