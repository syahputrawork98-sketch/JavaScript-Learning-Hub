# CH-10: Strict Mode Semantic

Sejak ES5, JavaScript memperkenalkan "Mode Disiplin" yang disebut **Strict Mode**. Di balik layar, mode ini bukan sekadar mengubah pesan error, tapi mengubah seluruh **Peta Semantik Statis** dari kode Anda.

## Mental Model: "Kacamata Infra Merah Inspektur"
Saat `'use strict'` diaktifkan, inspektur (Static Semantics) memakai kacamata infra merah. 
- Hal-hal yang sebelumnya "Terlihat Oke" atau "Dibiarkan saja" (Silent fail) sekarang terlihat sebagai pelanggaran serius.
- Banyak aturan yang tadinya hanya diperiksa saat jalan (*Runtime*), kini ditarik ke depan untuk diperiksa saat parse (*Static*).

---

## 1. Bagaimana Strict Mode Terpicu?
Spesifikasi menentukan status "Strict" melalui:
- Instruksi `"use strict";` di awal script atau fungsi.
- Berada di dalam **Class Body** (Selalu strict).
- Berada di dalam **Module** (Selalu strict).

## 2. Perubahan Aturan Statis Utama
Dalam mode strict, beberapa hal berikut menjadi **Early Error (SyntaxError)**:
1. **Duplicate Property Names:** Menulis `{ a: 1, a: 2 }` (Dahulu error, sekarang sudah dilunakkan di ES6+, namun tetap menjadi catatan sejarah penting).
2. **Octal Literals:** Menulis angka dengan prefix `0` (seperti `010`) dilarang. Gunakan `0o10`.
3. **Delete on Variables:** Mencoba `delete x;` pada variabel yang ada.
4. **Reserved Words as Binding:** Menggunakan keyword seperti `implements`, `interface`, `package`, `private`, `protected`, `public`, `static`, atau `yield` sebagai nama variabel.

## 3. Restricted Scoping
Strict mode melarang penggunaan `with`. Mengapa? Karena `with` merusak **Static Scoping**. Tanpa `with`, mesin JS bisa memetakan setiap variabel secara statis 100%. Dengan `with`, mesin tidak tahu sebuah variabel merujuk ke objek mana sampai kode benar-benar jalan.

---

## Mengapa Arsitek Harus Tahu Ini?
Modern JavaScript (Class & Module) **selalu strict**. Dengan memahami semantik statis di mode strict, Anda sedang mempelajari cara kerja JavaScript masa depan. Anda akan terbiasa menulis kode yang "Terpeta dengan Jelas" (Statically Analyzable), yang sangat disukai oleh mesin untuk optimasi performa.

---

## Tantangan Kecil
Jika saya menulis `"use strict";` di tengah-tengah fungsi (setiap baris ke-10), apakah dia akan bekerja?
(Jawabannya: **Tidak**. Spesifikasi mewajibkan *Directive Prologue* (seperti use strict) berada di puncak scope. Jika ada statement lain sebelumnya, dia hanya dianggap sebagai string biasa yang tidak berguna).

---
> [!IMPORTANT]
> **Key Takeaway:** Strict Mode adalah cara kita memberi tahu mesin: "Tolong periksa kode saya lebih ketat agar tidak ada kejutan di kemudian hari".
