# Bab 01: Mekanika IsStrictlyEqual (===)

Dalam JavaScript, perbandingan paling aman dan paling sering direkomendasikan adalah **Strict Equality** (`===`). Di balik layar, *Engine* menjalankan algoritma **Abstract Operation `IsStrictlyEqual(x, y)`** (Clause 7.2.14 pada ECMA-262).

Berbeda dengan "saudaranya" yang longgar (`==`), `IsStrictlyEqual` tidak pernah melakukan konversi tipe data (*Coercion*). Jika tipenya berbeda, hasilnya langsung `false`.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> `IsStrictlyEqual` adalah **Scanner Sidik Jari**. Dia tidak hanya melihat bentuk wajahmu (Nilai), tapi juga memeriksa KTP-mu (Tipe Data). Jika salah satu tidak cocok, pintu tetap terkunci (`false`).

> **Analogi Panjang (Tim Verifikasi Berlapis):**  
> Bayangkan kamu sedang mengantre di bandara internasional. Kamu menunjukkan paspor dan tiketmu.
> - Petugas pertama memeriksa **Warna Paspor** (Tipe Data). Jika kamu membawa paspor merah (String) tapi tiketmu untuk pemegang paspor biru (Number), dia langsung menyuruhmu pulang tanpa melihat nama di paspornya.
> - Jika Warna Paspor cocok, petugas kedua baru memeriksa **Nama di Paspor** (Nilai). Hanya jika keduanya (Warna & Nama) identik, kamu diizinkan lewat.
> - *Pengecualian Khusus:* Ada satu penumpang misterius bernama **NaN**. Dia punya paspor unik yang bahkan tidak cocok dengan sidik jarinya sendiri. Jadi `NaN === NaN` akan selalu ditolak oleh petugas.

---

## Logika Algoritma `IsStrictlyEqual(x, y)`

Berdasarkan spesifikasi ECMA-262, inilah langkah-langkah yang diambil *Engine*:

1. **Cek Tipe Data**: Jika `Type(x)` berbeda dengan `Type(y)`, return **false**. (Inilah mengapa `"42" === 42` adalah `false`).
2. **Jika Tipe Numerik (Number)**:
   - Jika `x` adalah `NaN`, return **false**.
   - Jika `y` adalah `NaN`, return **false**.
   - Jika `x` sama nilainya dengan `y`, return **true**.
   - Jika `x` adalah `+0` dan `y` adalah `-0`, return **true**.
3. **Jika Tipe Lain**:
   - Untuk **String**: Harus memiliki urutan *Code Units* yang identik.
   - Untuk **Boolean**: Harus keduanya `true` atau keduanya `false`.
   - Untuk **Object**: Harus merujuk ke **Referensi Memori** yang sama (*Same Reference*).

## Mengapa === Selalu Lebih Baik?

1. **Predictability**: Kamu tidak perlu menghafal tabel *coercion* yang rumit.
2. **Performance**: *Engine* tidak perlu membuang siklus CPU untuk menebak-nebak konversi tipe data.
3. **Safety**: Menghindari bug "Falsy Trap" (seperti `0 == false` yang menghasilkan `true`, padahal secara logika bisnis mungkin berbeda).

### Contoh Identitas Referensi (Object)
```javascript
let a = { id: 1 };
let b = { id: 1 };
let c = a;

console.log(a === b); // false (Nilai sama, tapi "Paspor" Referensi Memori berbeda)
console.log(a === c); // true (Keduanya merujuk ke "Orang" yang sama di memori)
```

## Contoh Eksekusi
Lihat pembuktian teknis mengenai perilaku `IsStrictlyEqual`, kasus `NaN`, dan perbandingan referensi objek pada folder [examples/](./examples/).
