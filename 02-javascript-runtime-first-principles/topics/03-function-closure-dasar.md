# Function dan Closure Dasar

## Tujuan Pembelajaran

Setelah mempelajari topik ini, pembaca dapat:
- menjelaskan peran function sebagai unit eksekusi reusable
- memahami closure sebagai mekanisme penyimpanan akses lexical scope
- membuat fungsi stateful sederhana berbasis closure

## Konsep Utama

- function declaration dan function expression
- parameter dan argument
- return value
- closure

## Penjelasan

Function memecah logika jadi unit yang bisa dipanggil berulang.

Closure terjadi saat function dalam tetap bisa mengakses variabel dari scope luar, bahkan setelah outer function selesai dieksekusi.

Ini penting untuk runtime reasoning karena state bisa "bertahan" lewat closure tanpa menyimpan global variable.

## Contoh Kode

### Contoh 1 - Function Dasar dengan Parameter dan Return

```javascript
function add(a, b) {
  return a + b
}

console.log(add(3, 4)) // 7
```

### Contoh 2 - Closure Counter

```javascript
function createCounter() {
  let count = 0

  return function () {
    count += 1
    return count
  }
}

const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2
```

### Contoh 3 - Mini Kasus: Factory Adder

```javascript
function makeAdder(base) {
  return function (value) {
    return base + value
  }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(2))  // 7
console.log(add10(2)) // 12
```

## Analogi Singkat (Opsional)

Closure seperti membawa kunci laci pribadi. Walau ruangan asal sudah ditutup, selama kuncinya masih ada, isi laci tetap bisa diakses.

## Eksperimen Kode

Coba buat dua instance closure dan bandingkan state-nya.

```javascript
function createStepCounter(step) {
  let total = 0
  return function () {
    total += step
    return total
  }
}

const c1 = createStepCounter(1)
const c2 = createStepCounter(2)

console.log(c1(), c1(), c1())
console.log(c2(), c2())
```

Pertanyaan refleksi:
1. Kenapa `c1` dan `c2` tidak berbagi state?
2. Apa risiko jika closure menyimpan terlalu banyak data?

## Common Misconception (Opsional)

- Closure bukan fitur khusus async; closure terjadi juga di kode sinkron biasa.
- Outer function selesai bukan berarti semua variabelnya langsung hilang.

## Cakupan dan Batasan

- Dibahas di topik ini: closure dasar untuk state kecil dan reasoning runtime.
- Tidak dibahas di topik ini: memory retention traps lanjutan.

## Latihan

1. Buat function `makeMultiplier(factor)` yang mengembalikan function pengali.
2. Buat dua multiplier berbeda (`x2`, `x3`) lalu uji outputnya.
3. Jelaskan kenapa hasilnya berbeda walau bentuk function sama.

## Ringkasan

- Function membuat logika reusable.
- Closure menjaga akses ke lexical scope saat function dibuat.
- Closure berguna untuk membangun state privat sederhana tanpa global variable.

## Lanjut Setelah Ini

- [04-this-binding-dasar.md](./04-this-binding-dasar.md)
