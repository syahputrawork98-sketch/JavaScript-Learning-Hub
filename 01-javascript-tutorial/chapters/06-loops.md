# 06 - Loops

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca dapat:
- mengulang proses dengan `for` dan `while`
- menghentikan atau melompati iterasi dengan `break` dan `continue`
- menghindari loop yang berjalan tanpa henti

## Konsep Utama

- `for`
- `while`
- `break`
- `continue`

## Penjelasan

Loop dipakai saat kita perlu menjalankan blok kode berulang.

Dua bentuk dasar:
- `for`: cocok saat jumlah pengulangan sudah jelas
- `while`: cocok saat pengulangan bergantung pada kondisi

Kontrol loop:
- `break`: keluar dari loop lebih cepat
- `continue`: lewati iterasi saat ini dan lanjut ke iterasi berikutnya

Selalu pastikan kondisi loop bisa berhenti agar tidak menjadi infinite loop.

## Contoh Kode

### Contoh 1 - Dasar for Loop

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-", i)
}

// Output:
// Iterasi ke- 1
// Iterasi ke- 2
// Iterasi ke- 3
// Iterasi ke- 4
// Iterasi ke- 5
```

### Contoh 2 - Dasar while Loop Lengkap

```javascript
let count = 1
let total = 0

while (count <= 5) {
  total += count
  console.log("count:", count, "total:", total)
  count++
}

console.log("Total akhir:", total)
// Output akhir: Total akhir: 15
```

### Contoh 3 - Mini Kasus Lengkap: break dan continue

```javascript
for (let n = 1; n <= 12; n++) {
  if (n === 6) {
    continue // lewati angka 6
  }

  if (n === 11) {
    break // berhenti saat n = 11
  }

  console.log("Diproses:", n)
}

// Output yang tercetak:
// 1, 2, 3, 4, 5, 7, 8, 9, 10
```

## Analogi Singkat (Opsional)

Loop seperti memeriksa daftar tugas satu per satu. `break` berarti berhenti lebih awal, sedangkan `continue` berarti lewati satu tugas dan lanjut ke tugas berikutnya.

## Eksperimen Kode

Perhatikan efek `continue` dan `break` pada alur iterasi.

```javascript
for (let n = 1; n <= 10; n++) {
  if (n === 4) {
    continue
  }

  if (n === 8) {
    break
  }

  console.log(n)
}
```

Pertanyaan refleksi:
1. Angka mana yang tidak tercetak karena `continue`?
2. Kenapa loop berhenti di `8`?

## Cakupan dan Batasan

- Dibahas di bab ini: loop dasar dan kontrol alur iterasi.
- Tidak dibahas di bab ini: iterasi lanjutan pada koleksi kompleks dan async iteration.

## Latihan

1. Cetak angka 1-10 dengan `for`.
2. Cetak angka genap 2-20 dengan `while`.
3. Ubah loop agar melewati angka 6 dan berhenti di angka 12.

## Ringkasan

- Loop membantu menghindari penulisan kode berulang.
- `for` dan `while` dipilih berdasarkan kebutuhan kondisi pengulangan.
- `break` dan `continue` memberi kontrol tambahan pada alur iterasi.
