# Topic Template

Dokumen ini mendefinisikan **struktur standar untuk setiap topik atau bab** dalam buku `01-javascript-tutorial`.

Template ini bertujuan untuk memastikan bahwa seluruh materi:

- konsisten
- sistematis
- mudah dibaca
- mudah dikembangkan
- memiliki alur pembelajaran yang jelas

Tidak semua bagian wajib digunakan.  
Beberapa bagian bersifat **opsional** dan digunakan hanya jika memang membantu penjelasan konsep.

---

# Struktur Topik

Struktur umum topik adalah sebagai berikut.


Judul Topik
Tujuan Pembelajaran
Big Picture (opsional)
Konsep Utama
Kenapa Konsep Ini Ada (opsional)
Penjelasan
Diagram Konsep / SVG (opsional)
Analogi Singkat (opsional)
Contoh Kode
Eksperimen Kode
Common Misconception (opsional)
Cakupan dan Batasan Topik (opsional)
Hubungan dengan Topik Lain (opsional)
Latihan
Ringkasan


---

# Judul Topik

Judul harus mencerminkan konsep utama yang dibahas.

Contoh:

Variables

atau

Functions

---

# 🎯 Tujuan Pembelajaran

Bagian ini menjelaskan **apa yang akan dipahami pembaca setelah menyelesaikan topik ini**.

Contoh:

```md
## 🎯 Tujuan Pembelajaran

Setelah mempelajari topik ini, pembaca diharapkan dapat:

- memahami apa itu variabel
- mendeklarasikan variabel dalam JavaScript
- menggunakan `let` dan `const`
- mengubah nilai variabel dalam program
🧭 Big Picture (Opsional)

Bagian ini menjelaskan posisi konsep dalam konteks program JavaScript secara umum.

Tujuannya membantu pembaca melihat gambaran besar sebelum masuk ke detail.

Contoh:

## 🧭 Big Picture

Dalam program JavaScript, kita sering perlu menyimpan nilai untuk digunakan kembali.

Variabel memungkinkan program menyimpan nilai tersebut sehingga dapat digunakan di berbagai bagian program.
📌 Konsep Utama

Bagian ini merangkum konsep utama yang akan dibahas dalam topik.

Contoh:

## 📌 Konsep Utama

- variable declaration
- variable initialization
- reassignment
- let
- const
❓ Kenapa Konsep Ini Ada (Opsional)

Bagian ini menjelaskan alasan keberadaan konsep dalam bahasa JavaScript.

Fokusnya adalah:

problem apa yang diselesaikan

situasi apa yang membutuhkan konsep ini

Contoh:

## ❓ Kenapa Konsep Ini Ada

Program sering membutuhkan tempat untuk menyimpan nilai sementara.

Variabel memungkinkan program menyimpan nilai tersebut sehingga dapat digunakan kembali atau diubah selama program berjalan.
📖 Penjelasan

Bagian ini berisi penjelasan konsep secara sistematis.

Penjelasan harus:

bertahap

jelas

fokus pada penggunaan bahasa JavaScript

tidak terlalu panjang dalam satu paragraf

Contoh:

## 📖 Penjelasan

Variabel digunakan untuk menyimpan nilai dalam program.

Dalam JavaScript, variabel dapat dideklarasikan menggunakan:

- `let`
- `const`
- `var`
🧩 Diagram Konsep (Opsional)

Jika suatu konsep lebih mudah dipahami secara visual, gunakan diagram sederhana.

Diagram sebaiknya dibuat menggunakan SVG.

Simpan file SVG di folder:

assets/

Contoh penggunaan:

## 🧩 Diagram Konsep

![Variable Concept](../assets/variable-concept.svg)

Diagram harus:

sederhana

fokus pada satu konsep

tidak terlalu dekoratif

🪜 Analogi Singkat (Opsional)

Analogi dapat membantu pembaca memahami konsep secara intuitif.

Namun analogi hanya digunakan sebagai alat bantu, bukan pengganti penjelasan teknis.

Contoh:

## 🪜 Analogi Singkat

Variabel dapat dianggap seperti kotak penyimpanan yang memiliki label.

Label tersebut adalah nama variabel, dan isi kotak adalah nilai yang disimpan.
💻 Contoh Kode

Bagian ini berisi contoh penggunaan konsep dalam kode JavaScript.

Contoh kode harus:

pendek

fokus pada satu konsep

mudah dibaca

Contoh:

## 💻 Contoh Kode

```javascript
let age = 20
const name = "Andi"

console.log(age)
console.log(name)

---

# 🧪 Eksperimen Kode

Bagian ini mendorong pembaca **mencoba kode secara langsung**.

Eksperimen membantu pembaca memahami perilaku program.

Contoh:

```md
## 🧪 Eksperimen Kode

Coba jalankan kode berikut.

```javascript
let count = 1

count = 2

console.log(count)

Pertanyaan:

Apa yang terjadi jika nilai count diubah beberapa kali?


---

# ⚠️ Common Misconception (Opsional)

Bagian ini menjelaskan kesalahan pemahaman yang sering terjadi.

Contoh:

```md
## ⚠️ Common Misconception

Banyak orang mengira bahwa `const` berarti nilai tidak dapat berubah.

Yang sebenarnya tidak dapat berubah adalah **binding variabel**, bukan selalu nilai di dalamnya.
🔎 Cakupan dan Batasan Topik (Opsional)

Bagian ini menjelaskan apa yang dibahas dan apa yang tidak dibahas dalam topik ini.

Ini penting untuk menjaga fokus pembelajaran.

Contoh:

## 🔎 Cakupan dan Batasan Topik

Topik ini hanya membahas deklarasi dan penggunaan variabel.

Pembahasan tentang bagaimana variabel disimpan di memori akan dibahas pada buku lain dalam repository ini.
🔗 Hubungan dengan Topik Lain (Opsional)

Bagian ini menjelaskan hubungan konsep dengan topik lain dalam buku.

Contoh:

## 🔗 Hubungan dengan Topik Lain

Variabel sering digunakan bersama dengan:

- functions
- objects
- arrays
📝 Latihan

Bagian ini berisi latihan sederhana untuk memperkuat pemahaman.

Contoh:

## 📝 Latihan

1. Buat variabel bernama `name` dan isi dengan nama Anda.
2. Buat variabel `age` dengan nilai angka.
3. Cetak kedua variabel tersebut menggunakan `console.log`.
📚 Ringkasan

Bagian ini merangkum konsep yang telah dipelajari.

Contoh:

## 📚 Ringkasan

Pada topik ini kita mempelajari:

- apa itu variabel
- cara mendeklarasikan variabel
- penggunaan `let` dan `const`
- bagaimana variabel digunakan dalam program
Aturan Visual

Untuk menjaga konsistensi visual dalam buku ini, gunakan aturan berikut.

Emoji

Emoji digunakan untuk membantu pembaca mengenali struktur topik.

Contoh penggunaan:

Emoji	Fungsi
🎯	tujuan pembelajaran
🧭	big picture
📌	konsep utama
📖	penjelasan
💻	contoh kode
🧪	eksperimen
⚠️	misconception
📝	latihan
📚	ringkasan

Gunakan emoji secara konsisten dan tidak berlebihan.

Diagram

Jika menggunakan diagram:

gunakan SVG

simpan di folder assets

fokus pada satu konsep

hindari dekorasi berlebihan

Diagram harus membantu memahami hubungan konsep, bukan hanya mempercantik halaman
