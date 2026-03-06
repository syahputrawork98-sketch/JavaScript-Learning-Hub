# Proxy, Reflect Dasar, dan Metaprogramming

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)\n- Visual map: [`../assets/proxy-reflect-metaprogramming-map.svg`](../assets/proxy-reflect-metaprogramming-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`12` pada Track 04.
- Prasyarat langsung: `11-built-in-objects-dan-behavior-khusus.md`.
- Lanjut setelah ini: `../../05-javascript-memory-and-references/topics/01-memory-lifecycle-garbage-collection.md`.

Prasyarat topik:
- Sudah paham descriptor, prototype, dan internal methods secara konsep.
- Sudah paham use case object model level menengah.

Referensi remedial:
- [`08-property-descriptors-lanjutan-dan-defineproperty.md`](./08-property-descriptors-lanjutan-dan-defineproperty.md)
- [`09-internal-methods-get-set-dan-defineownproperty.md`](./09-internal-methods-get-set-dan-defineownproperty.md)

Kamus mini topik:
- `[baru]` Proxy: object pembungkus untuk intercept operasi object.
- `[baru]` Trap: handler untuk operasi tertentu (`get`, `set`, dll).
- `[baru]` Reflect: API standar untuk operasi object low-level.
- `[ulang]` Metaprogramming: kode yang memodifikasi perilaku kode lain.

## Pengantar Singkat Topik
Topik ini menutup track 04 dengan pengantar metaprogramming dasar menggunakan `Proxy` dan `Reflect` secara aman dan terukur.

## 1) Big Picture
`Proxy` sangat kuat, tapi mudah disalahgunakan. Pahami kapan cocok dipakai (validation, logging, access control) dan kapan harus dihindari agar performa/debuggability tetap sehat.

## 2) Small Picture
1. Bungkus target object dengan `new Proxy(target, handler)`.
2. Trap `get/set` bisa intercept read/write.
3. Gunakan `Reflect` untuk meneruskan behavior default.
4. Hindari trap berlebihan tanpa kebutuhan jelas.
5. Dokumentasikan kontrak Proxy karena behavior jadi implicit.

## 3) Wireframe
```text
Alur utama:
[target object] -> [proxy trap] -> [custom behavior + Reflect fallback]

Alur jalan:
[validasi akses/mutasi] -> [error lebih awal] -> [state lebih aman]

Alur error:
[trap terlalu kompleks] -> [sulit debug/perf turun] -> [maintainability buruk]
```

## 4) Analogi
Seperti satpam di lobi gedung: semua request masuk bisa dicek dulu, lalu diteruskan ke ruangan asli jika valid.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: validation layer, debug instrumentation, access control sederhana.
- Alasan pakai: intersep operasi object tanpa ubah call-site pemakai.
- Kapan tidak dipakai: untuk data model sederhana yang cukup dengan function biasa.

## 6) Contoh Sederhana
```js
const user = { name: 'Nina' };

const proxied = new Proxy(user, {
  get(target, prop, receiver) {
    console.log('read:', String(prop));
    return Reflect.get(target, prop, receiver);
  },
});

console.log(proxied.name);
```

### Bedah Output (Langkah Demi Langkah)
1. Akses `proxied.name` masuk trap `get`.
2. Trap mencatat log akses property.
3. `Reflect.get` meneruskan behavior default object.
4. Hasil tetap nilai asli `name`.

## 7) Jebakan Umum
- Trap tidak meneruskan ke `Reflect` sehingga behavior default rusak.
- Memakai Proxy untuk semua object tanpa alasan jelas.
- Mengabaikan biaya debug/performance dari interception berlapis.

## 8) Prediksi Output Drill
```js
const target = { n: 1 };
const p = new Proxy(target, {
  set(obj, key, value) {
    if (key === 'n' && value < 0) return false;
    return Reflect.set(obj, key, value);
  },
});

p.n = 2;
console.log(target.n);
```

### Kunci Jawaban Drill
- Output: `2`
- Alasan: assignment valid, trap meneruskan ke `Reflect.set`.

## 9) Debug Story
Kasus: state object berubah tak terduga setelah menambah Proxy logging.
Langkah debug:
1. Audit trap mana yang mengubah return semantics default.
2. Pastikan trap non-intervensi memakai `Reflect`.
3. Batasi penggunaan Proxy hanya di boundary yang benar-benar perlu.

## 10) Checkpoint
- [ ] Bisa menjelaskan peran Proxy dan Reflect.
- [ ] Bisa membuat trap sederhana tanpa merusak behavior default.
- [ ] Bisa menentukan kapan Proxy layak dipakai dan kapan tidak.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `09-internal-methods-get-set-dan-defineownproperty.md`.
2. Uji trap `get` dan `set` di object kecil.
3. Bandingkan versi kode dengan/ tanpa Proxy dari sisi kompleksitas.

