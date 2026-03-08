# Aturan Penulisan Materi

Dokumen ini menjelaskan aturan penulisan materi di seluruh repository.

Tujuannya adalah menjaga agar semua buku dalam repository ini memiliki:

- gaya penjelasan yang konsisten
- istilah teknis yang akurat
- struktur materi yang jelas
- kedalaman penjelasan yang memadai

Repository ini dirancang sebagai **knowledge base JavaScript jangka panjang**, sehingga setiap materi harus ditulis dengan pendekatan yang sistematis dan presisi.

---

# Prinsip Dasar Penulisan

## Fokus pada JavaScript

Materi dalam repository ini harus berfokus pada:

- JavaScript sebagai bahasa
- runtime behavior JavaScript
- execution model JavaScript
- asynchronous model
- object model
- memory dan references

Framework seperti React, Next.js, atau library lain bukan fokus utama repository ini.

Framework hanya boleh disebut jika diperlukan sebagai konteks tambahan.

---

## Gunakan Terminologi Resmi

Gunakan istilah teknis yang sesuai dengan konsep JavaScript.

Untuk istilah struktur repository, gunakan istilah `buku` secara konsisten.
Hindari penggunaan istilah `track` untuk menyebut unit materi utama.

Contoh istilah yang sering digunakan:

- Execution Context
- Lexical Environment
- Closure
- Scope
- Hoisting
- this binding
- Event Loop
- Task Queue
- Microtask Queue
- Prototype Chain
- Referential Equality
- Garbage Collection

Jika terdapat istilah populer yang tidak presisi, istilah tersebut harus diluruskan.

---

## Penjelasan Harus Sistematis

Penjelasan materi harus:

- terstruktur
- mudah diikuti
- tidak terlalu santai
- fokus pada clarity dan precision

Tujuan utama adalah membantu pembaca memahami **mekanisme JavaScript**, bukan sekadar menghafal API.

---

# Struktur Penjelasan Konsep

Untuk topik konseptual, penjelasan sebaiknya mengikuti struktur berikut:

1. **Official Term**  
   Nama konsep sesuai terminologi JavaScript.

2. **Definisi Formal**  
   Penjelasan singkat tentang definisi konsep tersebut.

3. **Mental Model Sederhana**  
   Cara memahami konsep secara intuitif tanpa kehilangan akurasi.

4. **Cara Kerja Internal**  
   Penjelasan bagaimana mekanisme tersebut bekerja dalam runtime JavaScript.

5. **Kenapa Konsep Ini Ada**  
   Penjelasan mengapa mekanisme tersebut diperlukan dalam bahasa JavaScript.

6. **Contoh Kode Sederhana**  
   Contoh kode kecil yang menunjukkan perilaku konsep tersebut.

7. **Common Misconception**  
   Penjelasan miskonsepsi yang sering terjadi terkait konsep tersebut.

Tidak semua topik harus menggunakan judul yang identik, tetapi pola berpikir ini sebaiknya tetap diikuti.

---

# Aturan Contoh Kode

Contoh kode harus memenuhi beberapa kriteria berikut:

- kecil dan fokus
- hanya menjelaskan satu konsep utama
- mudah dijalankan
- tidak dipenuhi detail yang tidak relevan

Contoh kode tidak boleh terlalu kompleks hingga mengaburkan konsep yang sedang dijelaskan.

---

# Aturan Cakupan Penjelasan

Materi sebaiknya tidak berhenti pada:

- cara menggunakan fitur JavaScript

Materi juga harus menjelaskan:

- mengapa perilaku tersebut terjadi
- bagaimana runtime JavaScript memproses kode tersebut
- bagaimana konsep tersebut berhubungan dengan konsep lain

Jika relevan, penjelasan dapat menghubungkan konsep dengan:

- Execution Context
- Lexical Environment
- Scope Chain
- Event Loop
- Object Model

---

# Aturan Visualisasi SVG

Visualisasi SVG digunakan untuk mempercepat pemahaman mental model.

Aturan dasarnya:

- setiap topik idealnya memiliki minimal 1 SVG inti (`*-map.svg`)
- SVG harus menjelaskan konsep, bukan dekorasi
- isi diagram harus sinkron dengan materi topik yang sedang dibahas
- jika materi berubah signifikan, SVG terkait wajib diperbarui

## Standar Kualitas SVG

Setiap SVG harus:

- terbaca jelas pada ukuran normal README (desktop dan mobile)
- memiliki hirarki visual yang jelas (judul, node utama, alur)
- menggunakan kontras warna yang aman dan konsisten
- menjaga teks tetap ringkas, teknis, dan akurat

Hindari:

- diagram terlalu padat
- terlalu banyak warna tanpa fungsi
- label panjang yang sulit dipindai

## Aturan Emoji pada SVG

Emoji diperbolehkan untuk memperkuat identitas visual, dengan batasan:

- emoji digunakan secara terkontrol (maksimal 1-3 per SVG)
- emoji hanya dipakai pada judul atau label level atas
- node teknis inti tetap memakai istilah formal tanpa emoji
- jangan gunakan emoji jika membuat diagram terasa ramai atau ambigu

## Penamaan dan Lokasi File

- simpan SVG di folder `assets/` pada buku terkait
- gunakan nama deskriptif dan konsisten, misalnya: `execution-context-lifecycle-map.svg`
- untuk topik yang punya lebih dari satu visual, gunakan suffix yang jelas

## Integrasi ke Materi

- setiap SVG harus direferensikan dari `README.md` buku dan/atau file topik terkait
- tambahkan 1 kalimat konteks sebelum/after diagram agar pembaca tahu fungsi diagram

---

# Hal yang Perlu Dihindari

Beberapa hal berikut sebaiknya dihindari dalam penulisan materi:

- penjelasan yang terlalu dangkal
- tutorial framework yang tidak relevan
- analogi yang berpotensi membangun mental model yang salah
- istilah yang tidak presisi
- contoh kode yang tidak menjelaskan konsep dengan jelas

---

# Konsistensi Antar Buku

Semua buku dalam repository ini sebaiknya menjaga konsistensi dalam:

- gaya bahasa
- tingkat kedalaman
- penggunaan istilah teknis
- struktur penjelasan

Konsistensi ini penting agar repository tetap terasa sebagai **satu kumpulan buku yang terhubung**, bukan kumpulan artikel yang terpisah.

---

# Tujuan Akhir Penulisan

Tujuan penulisan materi dalam repository ini adalah membantu pembaca membangun **mental model JavaScript yang benar dan tahan lama**.

Materi tidak hanya menjelaskan **apa yang terjadi dalam kode JavaScript**, tetapi juga **mengapa perilaku tersebut terjadi dalam runtime JavaScript**.
