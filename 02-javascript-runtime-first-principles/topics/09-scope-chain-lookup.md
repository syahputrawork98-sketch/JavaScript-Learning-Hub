# Scope Chain Lookup

## Tujuan Pembelajaran

Setelah mempelajari topik ini, pembaca dapat:
- menjelaskan urutan pencarian identifier dari local ke global
- mengenali efek shadowing pada hasil lookup
- membedakan `undefined` dan `ReferenceError` saat lookup gagal

## Konsep Utama

- identifier resolution
- scope chain
- outer environment reference
- shadowing
- unresolvable reference

## Penjelasan

Saat JavaScript menemukan identifier, engine mencari nilainya bertahap:
1. cek lexical environment saat ini
2. jika tidak ada, naik ke outer environment
3. ulangi sampai global environment
4. jika tetap tidak ada, hasilnya `ReferenceError`

Lookup berhenti di temuan pertama. Ini sebabnya shadowing bisa "menutup" nilai dari scope luar.

## Contoh Kode

### Contoh 1 - Lookup Naik ke Outer Scope

```javascript
const name = "global"

function outer() {
  const name = "outer"

  function inner() {
    console.log(name)
  }

  inner()
}

outer() // outer
```

### Contoh 2 - Shadowing yang Mengubah Sumber Nilai

```javascript
const x = "global"

function a() {
  const x = "a"
  function b() {
    console.log(x)
  }
  b()
}

a()          // a
console.log(x) // global
```

### Contoh 3 - Mini Kasus: Unresolvable Reference

```javascript
function readConfig() {
  // console.log(appConfig) // ReferenceError jika tidak ada di semua scope
  const appConfig = "local"
  console.log(appConfig)
}

readConfig()
```

## Analogi Singkat (Opsional)

Scope chain seperti mencari dokumen berjenjang: mulai dari meja sendiri, lalu atasan, lalu arsip pusat. Begitu ketemu, pencarian berhenti.

## Eksperimen Kode

Ubah nama variabel lokal dan lihat apakah lookup masih mengambil nilai yang sama.

```javascript
const role = "global-role"

function run() {
  const role = "local-role"
  function print() {
    console.log(role)
  }
  print()
}

run()
console.log(role)
```

Pertanyaan refleksi:
1. Kenapa output dalam `print` bukan `global-role`?
2. Bedanya kapan muncul `undefined` dan kapan `ReferenceError`?

## Common Misconception (Opsional)

- `undefined` tidak selalu berarti variabel tidak ada; bisa jadi variabel ada tapi nilainya memang `undefined`.
- Engine tidak melompati scope lokal begitu saja jika nama sudah ditemukan.

## Cakupan dan Batasan

- Dibahas di topik ini: lookup identifier pada lexical scope chain.
- Tidak dibahas di topik ini: prototype chain lookup (dibahas di track 04).

## Latihan

1. Buat nested function 3 tingkat dan lacak sumber nilai satu variabel.
2. Buat contoh shadowing disengaja lalu jelaskan outputnya.
3. Buat satu contoh yang menghasilkan `ReferenceError` karena identifier benar-benar tidak ada.

## Ringkasan

- Identifier dicari dari scope lokal ke luar secara berantai.
- Shadowing membuat lookup berhenti lebih cepat di scope lokal.
- Memahami lookup chain mempercepat debug bug variabel pada runtime.

## Lanjut Setelah Ini

- Track lanjutan object lookup: [../../04-javascript-object-model/topics/03-prototype-chain-lookup.md](../../04-javascript-object-model/topics/03-prototype-chain-lookup.md)
