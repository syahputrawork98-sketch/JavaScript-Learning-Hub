# Bab 01: Mekanika ToNumber (Konversi Numerik)

Ketika JavaScript berhadapan dengan operasi matematika (seperti pengurangan `-`, perkalian `*`, atau pembagian `/`), spesifikasi ECMA-262 menginstruksikan *Engine* untuk menjalankan sebuah **Abstract Operation** internal bernama `ToNumber` (Clause 7.1.4).

Operasi absolut ini bertugas memaksa (*coerce*) nilai apa pun menjadi tipe primitif Numerik (Number).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> `ToNumber` (*Number(...)*) adalah **Timbangan Presisi**. Dia menimbang seluruh kargo sekaligus. Jika ada sehelai rambut pun yang bukan angka (seperti teks campur huruf), timbangan akan error (*NaN*).
> Sedangkan `parseInt` adalah **Penyortir Malas**. Dia hanya membaca kargo dari depan sampai bertemu huruf/karakter, lalu membuang sisanya.

> **Analogi Panjang (Satpam Ketat vs Penjaga Longgar):**  
> Bayangkan tipe data lain sebagai orang yang mencoba masuk ke Gedung Kalkulus (Operasi Matematika).
> - Operasi `Number()` atau operator aritmetika mempekerjakan **Satpam Ketat**. Jika kamu bawa ID `'10'` (string murni), kamu disuruh masuk. Jika kamu bawa ID `'10px'` (ada huruf), dia langsung mencap kamu tidak valid (**`NaN`**). Bahkan string kosong `''` diizinkan masuk sebagai `0`.
> - Sebaliknya, fungsi *Global* `parseInt()` adalah **Penjaga Longgar**. Saat melihat `'10px'`, dia hanya membaca angka `10`, mencopot tag `px`, dan membiarkan `10` masuk begitu saja.

---

## Aturan Konversi `ToNumber`

Berdasarkan ECMA-262, inilah yang terjadi saat `ToNumber` dipanggil terhadap tipe data lain:

| Tipe Asal (*Input Object*) | Hasil Operasi `ToNumber` | Keterangan |
| :--- | :--- | :--- |
| **Undefined** | `NaN` | Tidak memiliki representasi numerik. |
| **Null** | `0` | Kekosongan mutlak direpresentasikan 0. |
| **Boolean** | `1` (true) / `0` (false) | Biner murni. |
| **String (Kosong `''`)** | `0` | String tanpa karakter bernilai 0. |
| **String (Numeric `'42'`)** | `42` | Selama seluruhnya angka yang valid. |
| **String (Campur `'12px'`)**| `NaN` | Gagal total, beda dengan `parseInt`. |
| **Object / Array** | Bergantung pada operasi Primitif (`ToPrimitive`) | Biasanya memanggil `valueOf()` lalu `toString()`. Array `[]` menjadi `0`. Array `[1,2]` menjadi `NaN`. |

## Implicit vs Explicit Coercion

Jangan biarkan JavaScript mengambil keputusan otomatis (*Implicit*) jika sumber data berasal dari input eksternal (API / Form). Selalu gunakan cara *Explicit* untuk mencegah *bug*.

### Coercion Implicit (Otomatis)
Dipicu oleh operator matematika seperti `-`, `*`, `/`, dan *Unary Plus* (`+`).
```javascript
let implicit = '8' * 2; // JS otomatis memanggil ToNumber('8') -> 16
let unary    = +'42';   // Cara pintas memanggil ToNumber('42') -> 42
```

### Coercion Explicit (Manual & Aman)
Dipicu oleh konstruktor `Number()` secara langsung.
```javascript
let explicit = Number('8') * 2; // Arsitektur yang jelas dan intent-nya terbaca.
```

## Validasi Kegagalan (NaN)
`ToNumber` tidak pernah melempar *Error* (Crash). Jika gagal, ia mereturn `NaN` (Not-a-Number). **Selalu** gunakan `Number.isNaN()` untuk mengecek kegagalan konversi, BUKAN membandingkannya dengan `NaN` karena di JavaScript, `NaN === NaN` adalah `false`.

## Contoh Eksekusi
Lihat pembuktian teknis mengenai *ToNumber*, perbedaan *parseInt*, dan manuver `NaN` pada folder [examples/](./examples/).
