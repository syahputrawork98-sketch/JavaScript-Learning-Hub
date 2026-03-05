# Closure Patterns

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`1` pada Advanced.
- Prasyarat langsung: `foundations/03-function-closure-dasar.md`.
- Lanjut setelah ini: `02-this-binding-lanjutan.md`.

Prasyarat topik:
- Sudah paham closure dasar (counter, factory function).
- Sudah paham scope dan lexical environment.

Referensi remedial:
- [`../foundations/03-function-closure-dasar.md`](../foundations/03-function-closure-dasar.md)
- [`../docs/prasyarat/function-dasar.md`](../docs/prasyarat/function-dasar.md)

Kamus mini topik:
- `[baru]` Factory function: function yang menghasilkan object/function baru.
- `[baru]` Encapsulation: menyembunyikan detail internal, expose API yang dibutuhkan saja.
- `[baru]` Data privacy: menjaga state internal agar tidak bisa diubah sembarangan dari luar.
- `[baru]` Stale closure: closure yang menyimpan nilai lama saat context sudah berubah.
- `[ulang]` Closure: fungsi yang tetap bisa akses lexical scope saat dibuat.

## Pengantar Singkat Topik
Closure patterns adalah cara memanfaatkan closure untuk membangun modul kecil dengan state privat dan API publik yang jelas. Pola ini sering dipakai saat butuh enkapsulasi tanpa harus langsung memakai class.

## 1) Big Picture
Topik ini membahas pola closure tingkat lanjut untuk membuat state privat, API yang bersih, dan logika modular tanpa class.

## 2) Small Picture
1. Buat outer function sebagai ruang privat state.
2. Simpan state penting di variabel lokal outer function.
3. Return object/function yang menjadi public API.
4. Public API berinteraksi dengan state via closure.
5. Dari luar, state tidak bisa diakses langsung kecuali lewat API tersebut.

## 3) Wireframe
```text
Alur utama:
[Create module()] -> [state privat dibuat] -> [public API di-return]

Alur jalan:
[API dipanggil] -> [closure akses state internal] -> [state berubah terkontrol]

Alur error:
[nilai closure stale / validasi lemah] -> [state tidak sesuai ekspektasi] -> [output salah]
```

## 4) Analogi
Bayangkan mesin vending:
- Bagian dalam mesin (stok, uang, logika) = state privat closure.
- Tombol di luar mesin = public API.
Orang luar hanya bisa tekan tombol, tidak bisa langsung otak-atik komponen dalam.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: module kecil, cache sederhana, rate limiter, stateful utilities.
- Alasan pakai: mengurangi global state, mencegah perubahan data liar, dan menjaga kontrak API.
- Kapan tidak dipakai: jika state besar/kompleks dan tim butuh pola lebih eksplisit (misalnya class/store pattern).

## 6) Contoh Sederhana
```js
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;

  function deposit(amount) {
    if (amount <= 0) return 'Jumlah harus lebih dari 0';
    balance += amount;
    return balance;
  }

  function withdraw(amount) {
    if (amount > balance) return 'Saldo tidak cukup';
    balance -= amount;
    return balance;
  }

  function getBalance() {
    return balance;
  }

  return { deposit, withdraw, getBalance };
}

const acc = createBankAccount(100);
console.log(acc.getBalance()); // 100
console.log(acc.deposit(50));  // 150
console.log(acc.withdraw(40)); // 110
console.log(acc.balance);      // undefined
```

### Bedah Output (Langkah Demi Langkah)
1. `createBankAccount(100)` membuat scope baru dengan `balance = 100`.
2. Method `deposit/withdraw/getBalance` menutup akses ke `balance` lewat closure.
3. Saat `deposit(50)`, `balance` internal jadi `150`.
4. Saat `withdraw(40)`, `balance` internal jadi `110`.
5. `acc.balance` `undefined` karena `balance` tidak diexpose sebagai property publik.

## 7) Jebakan Umum
- Menaruh terlalu banyak tanggung jawab dalam satu closure besar.
- Lupa validasi input sehingga state internal mudah rusak.
- Menganggap closure otomatis lebih baik untuk semua kasus.
- Terkena stale closure saat nilai yang ditutup tidak disegarkan sesuai alur.

## 8) Prediksi Output Drill
```js
function createLimiter(limit) {
  let count = 0;
  return function () {
    if (count >= limit) return 'blocked';
    count += 1;
    return `ok-${count}`;
  };
}

const hit = createLimiter(2);
console.log(hit());
console.log(hit());
console.log(hit());
```

### Kunci Jawaban Drill
- `hit()` pertama -> `ok-1`
- `hit()` kedua -> `ok-2`
- `hit()` ketiga -> `blocked`
- Alasan: `count` disimpan di closure dan tetap hidup antar pemanggilan.

## 9) Debug Story
Kasus: cache function selalu mengembalikan data lama walau input sudah berubah.
Langkah debug:
1. Cek variabel apa saja yang disimpan closure dan kapan nilainya diupdate.
2. Pastikan key cache dibentuk dari input terbaru, bukan variabel lama.
3. Tambahkan log key + state cache tiap panggilan untuk menemukan stale closure.

## 10) Checkpoint
- [ ] Bisa membuat module sederhana dengan state privat memakai closure.
- [ ] Bisa menjelaskan kapan closure dipakai untuk encapsulation.
- [ ] Bisa mengidentifikasi risiko stale closure pada kode async/callback.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi dulu `foundations/03-function-closure-dasar.md`.
2. Ubah contoh bank account: tambah method `transfer` tanpa membuka `balance`.
3. Latih satu pola kecil: buat `createToggle()` dengan state privat boolean.
