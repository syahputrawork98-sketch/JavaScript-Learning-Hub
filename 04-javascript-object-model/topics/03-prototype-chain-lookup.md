# Prototype Chain Lookup

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/prototype-chain-lookup-map.svg`](../assets/prototype-chain-lookup-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`3` pada Track 04.
- Prasyarat langsung: `02-prototype-chain-lanjutan.md`.
- Lanjut setelah ini: `04-property-descriptors-dasar.md`.

Prasyarat topik:
- Sudah paham object/prototype dasar dan prototype chain lanjutan.
- Sudah paham perbedaan lookup identifier vs lookup property.

Referensi remedial:
- [`01-object-prototype-dasar.md`](./01-object-prototype-dasar.md)
- [`02-prototype-chain-lanjutan.md`](./02-prototype-chain-lanjutan.md)
- [`../../02-javascript-runtime-first-principles/topics/09-scope-chain-lookup.md`](../../02-javascript-runtime-first-principles/topics/09-scope-chain-lookup.md)

Kamus mini topik:
- `[baru]` `[[Prototype]]` slot: referensi internal object ke prototype-nya.
- `[baru]` Own property check: pemeriksaan property langsung milik object saat ini.
- `[baru]` Lookup miss: kondisi property tidak ditemukan di satu level prototype.
- `[baru]` Terminal null: akhir prototype chain ketika parent bernilai `null`.
- `[ulang]` Shadowing: property lokal menutupi property bernama sama di prototype.

## Pengantar Singkat Topik
Prototype chain lookup membahas langkah mesin saat mencari property pada object beserta jalur naik ke parent prototype. Topik ini membantu membedakan masalah data tidak ada, tertutup shadowing, atau memang berhenti di `null`.

## 1) Big Picture
Masalah pada kode berbasis object sering muncul ketika kita salah menebak dari level mana property diambil. Topik ini menjelaskan urutan lookup property: cek own property, naik ke `[[Prototype]]`, dan berhenti saat ketemu atau mencapai terminal `null`. Setelah paham, kamu bisa mengambil keputusan desain object yang lebih aman, menghindari mutasi tak sengaja di level prototype, dan debug lookup miss dengan cepat.

## 2) Small Picture
1. Saat `obj.prop` diakses, engine cek dulu own property di `obj`.
2. Jika miss, engine baca `[[Prototype]]` internal dari `obj`.
3. Di parent prototype, engine ulangi proses cek property.
4. Jika ketemu di salah satu level, nilai langsung dikembalikan.
5. Jika terus miss sampai prototype `null`, hasil akhir `undefined`.

## 3) Wireframe
```text
Alur utama:
[akses obj.prop] -> [cek own property] -> [naik `[[Prototype]]` berantai] -> [nilai ditemukan]

Alur jalan:
[prop ada di parent prototype] -> [lookup berhenti di level parent] -> [nilai dipakai]

Alur error:
[asumsi prop milik own object] -> [ternyata dari prototype shared] -> [mutasi/override salah target]
```

## 4) Analogi
Bayangkan mencari alat kerja:
- Laci pribadi = own property.
- Lemari tim = parent prototype.
- Gudang kantor = prototype level atas.
Kamu cek dari yang paling dekat dulu; kalau ketemu, berhenti, tidak lanjut ke gudang lain.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: debugging inheritance object, audit shadowing, dan validasi sumber property.
- Alasan pakai: memperjelas asal nilai property sehingga perubahan behavior lebih terkontrol.
- Kapan tidak dipakai: tidak perlu mendalam untuk object flat tanpa pewarisan.

## 6) Contoh Sederhana
```js
const base = { role: 'user', canEdit: false };
const manager = Object.create(base);
manager.team = 'A';

console.log(manager.team);    // A (own)
console.log(manager.role);    // user (prototype)
console.log(manager.canEdit); // false (prototype)
console.log(manager.level);   // undefined (lookup miss sampai null)
```

### Bedah Output (Langkah Demi Langkah)
1. `manager.team` ditemukan langsung sebagai own property.
2. `manager.role` tidak ada di own, lookup naik ke `base` dan menemukan `role`.
3. `manager.canEdit` juga ditemukan di `base`.
4. `manager.level` miss di `manager`, miss di `base`, lalu chain berakhir di `null`.
5. Karena terminal `null`, hasil akhir `undefined`.

## 7) Jebakan Umum
- Mengira `obj.prop` selalu membaca data milik object sendiri.
- Mengubah prototype shared tanpa sadar efeknya ke banyak turunan.
- Salah memakai `in` saat sebenarnya butuh cek own property (`hasOwnProperty`/`Object.hasOwn`).

## 8) Prediksi Output Drill
```js
const grand = { a: 1 };
const parent = Object.create(grand);
parent.b = 2;
const child = Object.create(parent);
child.a = 9;

console.log(child.a);
console.log(child.b);
console.log(child.c);
```

### Kunci Jawaban Drill
- `child.a` -> `9` (own property shadowing)
- `child.b` -> `2` (ditemukan di parent)
- `child.c` -> `undefined` (miss sampai `null`)
- Alasan: lookup selalu dari level child ke atas hingga ketemu atau chain habis.

## 9) Debug Story
Kasus: flag permission tiba-tiba berubah di banyak object turunan.
Langkah debug:
1. Cek apakah property tersebut sebenarnya berasal dari prototype shared.
2. Audit perubahan terbaru apakah ada mutasi langsung ke prototype parent.
3. Pindahkan property yang harus unik ke own property masing-masing object.
4. Tambahkan test untuk membedakan behavior own vs inherited.

## 10) Checkpoint
- [ ] Bisa melacak asal property: own atau inherited.
- [ ] Bisa menjelaskan kapan lookup berhenti dan kapan lanjut ke parent.
- [ ] Bisa menghindari bug akibat mutasi prototype shared.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `01-object-prototype-dasar.md`.
2. Ulangi `02-prototype-chain-lanjutan.md`.
3. Latih tiga skenario: own hit, inherited hit, dan lookup miss.


