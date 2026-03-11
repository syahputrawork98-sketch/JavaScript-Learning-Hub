# C28 - [14.12] switch Statement

## Tujuan

Bab ini bertujuan memahami `switch` untuk branching multi-kasus secara terstruktur.

## Kenapa Bab Ini Penting

`switch` membantu saat keputusan berdasarkan satu nilai dengan banyak cabang.

Tanpa disiplin `break`, `switch` mudah menimbulkan bug fallthrough.

## Konsep Inti

### 1. Struktur Dasar `switch`

```js
switch (status) {
  case 'ok':
    ...
    break;
  default:
    ...
}
```

### 2. Perbandingan Menggunakan Strict Equality

`switch` membandingkan case dengan nilai ekspresi secara ketat.

### 3. Fallthrough Bisa Sengaja atau Tidak Sengaja

Tanpa `break`, eksekusi lanjut ke case berikutnya.

### 4. `default` untuk Jalur Fallback

`default` menangani nilai yang tidak cocok case mana pun.

## Praktik yang Direkomendasikan

- Tambahkan `break` secara eksplisit (kecuali fallthrough sengaja).
- Gunakan komentar pada fallthrough yang disengaja.
- Jika kondisi tidak berbasis satu nilai, pertimbangkan `if/else`.

## Kesalahan Umum

- Lupa `break`.
- Menaruh terlalu banyak logika berat di setiap case.
- Menggunakan `switch` padahal kondisi kompleks tidak cocok.

## Checkpoint Cepat

1. Kapan `switch` lebih cocok dari `if/else`?
2. Apa efek jika `break` tidak ditulis?
3. Kapan fallthrough dianggap valid?

## Analogi Singkat

Switch itu seperti mesin pilihan jalur yang membaca satu kode lalu menjalankan cabang yang cocok. Ia terasa mudah, tetapi butuh disiplin `break` agar alurnya tidak bocor ke case berikutnya.

## Ringkasan

- `switch` efektif untuk branching berdasarkan satu nilai.
- Disiplin `break` penting untuk mencegah bug.
- `default` wajib dipikirkan sebagai jalur aman.

## Visual Map

![C28 - [14.12] switch Statement Map](../assets/C28-switch-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C28-switch-statement/example.js
- Panduan: ../examples/C28-switch-statement/README.md
