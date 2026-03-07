# Closure Patterns

## Tujuan Pembelajaran

Setelah mempelajari topik ini, pembaca dapat:
- menerapkan closure untuk membuat state privat
- membangun API kecil yang terkontrol lewat factory function
- mengenali risiko stale closure pada alur callback

## Konsep Utama

- factory function
- encapsulation dengan closure
- state privat
- stale closure

## Penjelasan

Closure patterns dipakai saat kita ingin menyimpan state tanpa mengekspos semua detail internal.

Pola umum:
1. outer function membuat state internal
2. outer function mengembalikan function/object sebagai public API
3. API berinteraksi dengan state lewat closure

Manfaat utama:
- data privat lebih aman
- API lebih kecil dan fokus
- mengurangi ketergantungan global state

## Contoh Kode

### Contoh 1 - State Privat Sederhana

```javascript
function createCounter() {
  let count = 0

  return {
    inc() {
      count += 1
      return count
    },
    get() {
      return count
    }
  }
}

const c = createCounter()
console.log(c.inc()) // 1
console.log(c.inc()) // 2
console.log(c.get()) // 2
```

### Contoh 2 - Factory Function dengan Validasi

```javascript
function createWallet(initial = 0) {
  let balance = initial

  return {
    deposit(amount) {
      if (amount <= 0) return "invalid"
      balance += amount
      return balance
    },
    withdraw(amount) {
      if (amount > balance) return "insufficient"
      balance -= amount
      return balance
    }
  }
}
```

### Contoh 3 - Mini Kasus: Rate Limiter Closure

```javascript
function createLimiter(limit) {
  let count = 0

  return function () {
    if (count >= limit) return "blocked"
    count += 1
    return `ok-${count}`
  }
}

const hit = createLimiter(2)
console.log(hit()) // ok-1
console.log(hit()) // ok-2
console.log(hit()) // blocked
```

## Analogi Singkat (Opsional)

Closure pattern seperti mesin vending: bagian dalam mesin (stok/logika) tidak bisa diakses langsung, pengguna hanya memakai tombol API di luar.

## Eksperimen Kode

Buat dua instance module dari factory yang sama dan bandingkan state-nya.

```javascript
const c1 = createLimiter(1)
const c2 = createLimiter(3)

console.log(c1(), c1())
console.log(c2(), c2(), c2(), c2())
```

Pertanyaan refleksi:
1. Kenapa setiap instance punya state terpisah?
2. Kapan closure bisa jadi masalah memory jika tidak hati-hati?

## Common Misconception (Opsional)

- Closure pattern bukan otomatis lebih baik daripada class; pilih sesuai kompleksitas kasus.
- State privat bukan berarti bebas dari bug, validasi tetap wajib.

## Cakupan dan Batasan

- Dibahas di topik ini: closure pattern untuk module kecil stateful.
- Tidak dibahas di topik ini: memory leak patterns mendalam.

## Latihan

1. Buat `createToggle()` yang mengembalikan `true/false` bergantian.
2. Buat `createScoreBoard()` dengan method `add(point)` dan `getTotal()`.
3. Uji dua instance berbeda dan jelaskan kenapa tidak saling memengaruhi.

## Ringkasan

- Closure pattern membantu enkapsulasi state secara sederhana.
- Factory function cocok untuk membuat instance dengan state privat masing-masing.
- Tetap perlu validasi agar state internal tidak rusak.

## Lanjut Setelah Ini

- [06-this-binding-lanjutan.md](./06-this-binding-lanjutan.md)
