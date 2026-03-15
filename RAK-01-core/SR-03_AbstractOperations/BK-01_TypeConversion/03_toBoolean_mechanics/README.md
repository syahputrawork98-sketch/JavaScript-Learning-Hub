# Bab 03: Mekanika ToBoolean (Gerbang Logika)

Dalam setiap percabangan kode (seperti blok `if`, `while`, atau *Ternary Operator*), JavaScript tidak peduli apakah kamu memberikan angka, teks, atau objek kompleks. *Engine* akan selalu menjalankan **Abstract Operation `ToBoolean`** (Clause 7.1.2 pada ECMA-262).

Tugas operasi ini adalah mengevaluasi (*coerce*) nilai apapun untuk menentukan nasibnya menjadi satu dari dua kepastian absolut: `true` atau `false`.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> `ToBoolean` adalah **Penjaga Pintu (Bouncer) Klub Malam Logika**. Saat kamu datang, dia punya daftar "Blacklist" (Nilai-nilai Falsy). Jika namamu ada di daftar itu, pintu ditutup (`false`). Jika tidak ada di daftar, silakan masuk (`true`).

> **Analogi Panjang (Kurir Estafet Pemalas `&&` dan `||`):**  
> Banyak yang mengira operator logika (`&&` dan `||`) selalu mereturn *Boolean*. KENYATAANNYA TIDAK! Mereka adalah **Kurir Estafet Pemalas**. 
> - **Kurir OR (`||`)**: Pemalas yang akan mengoper barang SETELAH dia menemukan barang pertama yang bagus (*Truthy*). Jika *"Apel" || "Jeruk"*, dia ambil "Apel" lalu lari pulang tanpa peduli "Jeruk".
> - **Kurir AND (`&&`)**: Pekerja teliti yang akan terus berjalan selama barangnya bagus (*Truthy*), tapi langsung pulang membawa barang busuk (*Falsy*) pertama yang ia temukan.
> - Intinya: MEREKA MENGEMBALIKAN BARANG ASLINYA (Operand), BUKAN CAP `TRUE/FALSE`.

---

## Aturan Konversi `ToBoolean` (Daftar Blacklist)

Spesifikasi ECMA-262 sangat elegan di sini. Daripada mendata semua nilai yang *Truthy*, mereka hanya mendata 6 nilai fundamental yang **Falsy** (Blacklist Sang Bouncer). **Selain 6 nilai ini, semuanya adalah `true`!**

### 6 Nilai Falsy Absolute:
1. `undefined`
2. `null`
3. `false`
4. `+0`, `-0`, atau `0n` (BigInt Nol)
5. `NaN` (Not-a-Number)
6. `""` (String Kosong)

*Pengecualian Ajaib:* Tahukah kamu bahwa array kosong `[]` dan objek kosong `{}` adalah **Truthy**? Karena mereka tidak ada di daftar 6 Blacklist di atas!

## Explicit Coercion (`Boolean()` & `!!`)
Untuk menghindari tebak-tebakan implisit, sangat disarankan mengubah data menjadi *Boolean* secara paksa (eksplisit) menggunakan:
1. Fungsi Global: `Boolean(value)`
2. Operator Negasi Ganda (*Double Bang*): `!!value`

```javascript
let isReady = !!1;      // true
let hasName = !!"";     // false (falsy)
let hasData = Boolean([1, 2]); // true
```

## Jebakan Batman: `||` vs `??` (Nullish Coalescing)

Karena `||` menolak *semua* nilai Falsy (termasuk `0` dan `""`), penggunaan `||` untuk menetapkan nilai *default* sering menjadi *bug*!

```javascript
let stock = 0; // Barang habis
let display1 = stock || 10; // "Karena 0 falsy, beri default 10!" -> BUG! (Tampilan jadi 10)

// Solusi Modern: Nullish Coalescing
let display2 = stock ?? 10; // Hanya fallback jika stock undefined/null -> AMAN! (Tampilan jadi 0)
```

## Contoh Eksekusi
Lihat pembuktian daftar *Falsy*, manuver pemalas `&&` dan `||`, serta keandalan `??` pada folder [examples/](./examples/).
