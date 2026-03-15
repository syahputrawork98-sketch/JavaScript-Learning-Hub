# Bab 03: Null vs Undefined (Filosofi Kekosongan)

Dalam JavaScript, terdapat dua cara untuk menyatakan bahwa sesuatu itu "kosong" atau "tidak ada": **undefined** dan **null**. Meskipun tampak mirip dan sering kali bisa saling menggantikan dalam perbandingan longgar (`==`), secara filosofis dan teknis mereka sangat berbeda.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> - **Undefined** adalah **Kotak yang Belum Dibuka**. Kita tidak tahu isinya apa karena belum ada yang menaruh barang di sana.
> - **Null** adalah **Kotak yang Sengaja Dikosongkan**. Kita sudah membukanya, membuang isinya, dan memberi label "Kosong".

> **Analogi Panjang (Kursi di Restoran):**  
> Bayangkan sebuah susunan kursi di restoran:
> - **Undefined**: Kursi ini belum dipesan dan belum ada namanya. Jika kamu bertanya "Siapa yang duduk di sini?", jawabannya adalah "Belum tahu" (*undefined*). Ini adalah kondisi *default*.
> - **Null**: Kursi ini sudah dipesan, tapi pemesannya membatalkan kunjungan. Pelayan menaruh tanda "KOSONG" di atas kursi tersebut. Kamu tahu kursi itu kosong karena pelayan *sengaja* menandainya sebagai kosong (*null*). Ini adalah sebuah *aksi*.

---

## 1. Undefined (Kekosongan Tanpa Niat)

`undefined` adalah tipe data primitif yang muncul secara otomatis oleh *Engine* JavaScript.
- **Variabel tanpa nilai**: `let x;` maka `x` bernilai `undefined`.
- **Properti objek yang tidak ada**: `{ name: "JS" }.age` bernilai `undefined`.
- **Fungsi tanpa return**: Fungsi yang tidak mengembalikan nilai secara eksplisit akan me-return `undefined`.

## 2. Null (Kekosongan yang Disengaja)

`null` adalah nilai primitif (meskipun `typeof` berkata lain—lihat Bab 04) yang diberikan secara manual oleh programmer.
- Digunakan untuk menunjukkan bahwa sebuah variabel yang seharusnya berisi objek, saat ini **sengaja tidak memiliki nilai**.
- Sering digunakan sebagai *reset* atau pembersihan referensi memori.

---

## Perbandingan Teknis (ECMA-262)

| Kriteria | `undefined` | `null` |
| :--- | :--- | :--- |
| **Tipe Data** | `undefined` | `object` (Hasil dari bug sejarah `typeof`) |
| **Konversi Angka** | `NaN` | `0` |
| **Filosofi** | "Tidak ada nilai karena memang belum ada." | "Tidak ada nilai karena saya mengosongkannya." |

## Loose vs Strict Equality
Hati-hati saat membandingkan keduanya!
```javascript
console.log(null == undefined);  // true (Keduanya "kosong")
console.log(null === undefined); // false (Tipenya berbeda)
```

## Rekomendasi Senior Architect
- Jangan pernah memberikan nilai `undefined` secara manual. Biarkan JavaScript yang melakukannya.
- Jika kamu ingin mengosongkan nilai, gunakan `null`. Ini memberikan sinyal kepada anggota tim lain bahwa "Saya sengaja mengosongkan ini".

## Contoh Eksekusi
Lihat pembuktian perbedaan perilaku `null` dan `undefined` pada folder [examples/](./examples/).
