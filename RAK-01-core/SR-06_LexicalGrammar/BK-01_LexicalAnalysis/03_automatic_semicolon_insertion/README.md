# Bab 03: Automatic Semicolon Insertion (ASI)

JavaScript memiliki fitur kontroversial yang mencoba membantu pengembang: jika Anda lupa menaruh titik koma (`;`), *Engine* akan mencoba menebak dan menambahkannya secara otomatis. Mekanisme ini disebut **Automatic Semicolon Insertion** atau **ASI** (Clause 12.10 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **ASI** adalah **Fitur Auto-Correct** pada keyboard ponsel. Ia sangat membantu saat kamu mengetik cepat, tapi sesekali ia mengubah kata "Halo" menjadi "Hala" dan merusak makna pesanmu.

> **Analogi Panjang (Pelayan Hotel yang Terlalu Rajin):**  
> Bayangkan kamu menginap di hotel mewah dan memiliki seorang Pelayan (Engine).
> - Kamu sedang menulis surat perintah di atas meja. Setiap kali kamu berhenti menulis dan menarik napas (Pindah baris), pelayan itu akan langsung datang dan menaruh sebuah Penutup Surat (Titik koma) di akhir kalimatmu.
> - **Masalahnya**: Kadang kamu berhenti menarik napas karena ingin melanjutkan kalimat di baris baru. Tapi pelayan itu terlanjur menutup suratmu. Akibatnya, lanjutan kalimatmu di baris bawah dianggap sebagai surat baru yang tidak nyambung.
> - Pelayan ini sangat rajin, tapi ia tidak bisa membaca pikiranmu. Ia hanya mengikuti 3 aturan baku.

---

## 3 Aturan Emas ASI

*Engine* akan menyisipkan titik koma secara otomatis jika:

1. **Terbentur Token Ilegal**: Saat *Engine* menemukan token yang tidak cocok dengan tata bahasa (misal: pindah baris yang membuat kode tidak valid), ia akan mencoba menaruh `;` sebelum token tersebut.
2. **Menemukan Kurawal Tutup**: Jika ada `}` dan sebelumnya tidak ada `;`, maka `;` akan disisipkan.
3. **Akhir Program**: Saat mencapai akhir file, `;` akan otomatis ditambahkan ke instruksi terakhir.

## Jebakan Terkenal: Restricted Productions

Ada beberapa perintah yang **DILARANG** dipisahkan dengan baris baru karena akan memicu ASI seketika. Perintah ini disebut *Restricted Productions*:
- `return`
- `throw`
- `yield`
- `continue`
- `break`

Jika Anda menulis `return` lalu pindah baris sebelum menulis nilainya, JavaScript akan menganggap Anda menulis `return;` (mengembalikan undefined).

## Mengapa Arsitek Harus Peduli?

Memahami ASI bukan berarti Anda harus selalu memakai `;` atau tidak memakainya sama sekali. Memahami ASI berarti Anda **tahu kapan titik koma akan muncul** dan menghindari bug "Misterius" seperti nilai return yang hilang atau error "is not a function" saat menggunakan IIFE.

## Contoh Eksekusi
Lihat bagaimana `return` bisa menipu Anda dan bagaimana IIFE bisa hancur tanpa titik koma pada folder [examples/](./examples/).
