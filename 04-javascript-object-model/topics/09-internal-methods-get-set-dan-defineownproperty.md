# Internal Methods [[Get]], [[Set]], dan [[DefineOwnProperty]]

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)\n- Visual map: [`../assets/internal-methods-get-set-defineownproperty-map.svg`](../assets/internal-methods-get-set-defineownproperty-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`9` pada Track 04.
- Prasyarat langsung: `08-property-descriptors-lanjutan-dan-defineproperty.md`.
- Lanjut setelah ini: `10-this-method-dispatch-dan-object-context.md`.

Prasyarat topik:
- Sudah paham prototype chain dan property descriptor.
- Sudah paham lookup property dasar.

Referensi remedial:
- [`03-prototype-chain-lookup.md`](./03-prototype-chain-lookup.md)
- [`08-property-descriptors-lanjutan-dan-defineproperty.md`](./08-property-descriptors-lanjutan-dan-defineproperty.md)

Kamus mini topik:
- `[baru]` `[[Get]]`: operasi internal saat membaca properti.
- `[baru]` `[[Set]]`: operasi internal saat menulis properti.
- `[baru]` `[[DefineOwnProperty]]`: operasi internal mendefinisikan properti own.
- `[ulang]` Receiver: object yang menjadi target assignment dalam chain.

## Pengantar Singkat Topik
Topik ini menjembatani perilaku syntax object sehari-hari dengan operasi internal model object di specification.

## 1) Big Picture
Kalau kamu hanya melihat `obj.x` dan `obj.x = v`, banyak kasus edge tampak "aneh". Dengan memahami internal methods, kamu bisa menjelaskan kenapa lookup/assignment bisa berbeda saat ada prototype dan descriptor tertentu.

## 2) Small Picture
1. Read property memicu `[[Get]]` dan bisa naik ke prototype chain.
2. Write property memicu `[[Set]]` dan mempertimbangkan descriptor target.
3. Definisi properti eksplisit lewat `defineProperty` memicu `[[DefineOwnProperty]]`.
4. Hasil write tergantung writable/configurable serta posisi properti di chain.
5. Behavior konsisten, bukan kebetulan runtime.

## 3) Wireframe
```text
Alur utama:
[obj.prop read/write] -> [[Get]]/[[Set]] -> hasil berdasarkan descriptor+prototype

Alur jalan:
[descriptor jelas] -> [behavior prediktif]

Alur error:
[salah asumsi write ke inherited prop] -> [nilai tidak berubah/ter-shadow] -> [bug state]
```

## 4) Analogi
Seperti sistem izin bertingkat: baca izin cek dari ruangan sekarang ke ruangan induk; tulis izin bisa ditolak jika kunci ruangan induk read-only.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: debugging prototype edge case, desain API object ketat.
- Alasan pakai: memahami akar perilaku object tanpa trial-and-error.
- Kapan tidak dipakai: untuk use case pemula sekali, detail ini bisa ditunda.

## 6) Contoh Sederhana
```js
const proto = {};
Object.defineProperty(proto, 'x', {
  value: 1,
  writable: false,
});

const obj = Object.create(proto);
obj.x = 2;
console.log(obj.x);
```

### Bedah Output (Langkah Demi Langkah)
1. `obj` tidak punya own `x`, tapi prototype punya `x` non-writable.
2. Assignment `obj.x = 2` memicu `[[Set]]` dan gagal override secara normal.
3. Read `obj.x` lewat `[[Get]]` tetap kembali ke nilai prototype.
4. Output tetap `1`.

## 7) Jebakan Umum
- Mengira assignment ke inherited property selalu membuat own property baru.
- Tidak cek descriptor inherited property saat write gagal.
- Mengabaikan strict mode ketika assignment invalid.

## 8) Prediksi Output Drill
```js
const p = { y: 10 };
const o = Object.create(p);
console.log(o.y);
o.y = 20;
console.log(o.y, p.y);
```

### Kunci Jawaban Drill
- Output: `10` lalu `20 10`
- Alasan: assignment membuat own `y` di `o` (shadowing), `p.y` tetap 10.

## 9) Debug Story
Kasus: value object tidak berubah walau assignment sudah dipanggil.
Langkah debug:
1. Cek apakah property berasal dari prototype.
2. Cek descriptor inherited property (writable/configurable).
3. Cek apakah assignment membuat own property atau gagal senyap.

## 10) Checkpoint
- [ ] Bisa menjelaskan read/write property lewat model internal methods.
- [ ] Bisa memprediksi hasil assignment pada inherited property.
- [ ] Bisa mendiagnosis bug shadowing vs non-writable property.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `03-prototype-chain-lookup.md`.
2. Ulangi `08-property-descriptors-lanjutan-dan-defineproperty.md`.
3. Praktikkan `Object.getOwnPropertyDescriptor` saat debugging.

