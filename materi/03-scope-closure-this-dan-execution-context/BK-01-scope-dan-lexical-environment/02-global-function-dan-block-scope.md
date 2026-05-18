# Bab 02 — Global, Function, dan Block Scope

Setelah memahami esensi dasar scope sebagai aturan akses, sekarang kita akan membedah tiga jenis batasan wilayah scope di JavaScript: **Global Scope**, **Function Scope**, dan **Block Scope**. Kita juga akan mengungkap perilaku kontroversial keyword `var` yang sering menimbulkan kebingungan bagi developer.

---

## Tujuan Bab
Setelah menyelesaikan bab ini, Anda akan:
*   Paham karakteristik dan batas-batas wilayah **Global Scope**, **Function Scope**, dan **Block Scope**.
*   Mengerti perbedaan fundamental perilaku deklarasi antara keyword `var`, `let`, dan `const`.
*   Tahu mengapa `var` mengabaikan batasan blok (*block scope*) dan bahaya bug yang diakibatkannya.
*   Mampu menulis deklarasi variabel yang aman dan terisolasi dengan benar menggunakan `let` dan `const`.

---

## Inti Cepat
> JavaScript membagi daerah kekuasaan menjadi tiga tingkat: **Global** (seluruh aplikasi), **Function** (terkurung di dalam fungsi), dan **Block** (terkurung di antara kurung kurawal `{ }`). Keyword modern `let` dan `const` tunduk pada ketiga tingkatan scope ini. Sebaliknya, keyword legacy `var` **menolak** mematuhi Block Scope dan hanya tunduk pada Global atau Function Scope saja.

---

## Masalah yang Diselesaikan
Sebelum era standar ES6 (tahun 2015), JavaScript hanya memiliki dua jenis scope: **Global** dan **Function**. Keyword yang tersedia saat itu hanya `var`. 

Ketiadaan **Block Scope** pada `var` memicu malapetaka koding:
1.  **Variabel Bocor:** Variabel di dalam blok percabangan `if` atau perulangan `for` bocor keluar dan mencemari kode di luar blok.
2.  **Variabel Terganti Secara Tidak Sengaja:** Variabel counter index perulangan `i` menimpa satu sama lain, merusak alur eksekusi logika.
3.  **Hoisting yang Menjebak:** Variabel dapat diakses sebelum dideklarasikan tanpa menghasilkan error, melainkan mengembalikan nilai misterius `undefined`.

Diciptakannya `let` dan `const` beserta **Block Scope** menyelamatkan JavaScript dari anomali-anomali ini.

---

## Analogi
Mari kita analogikan jenis scope ini sebagai tingkatan wilayah kedaulatan hukum:
*   **Global Scope** seperti **Ruang Publik Kota / Taman Kota**. Siapa saja boleh masuk, membawa barang, dan mengubah tata letak barang di taman tersebut. Polusi sangat mudah terjadi.
*   **Function Scope** seperti **Rumah Pribadi**. Hanya orang yang diundang ke dalam rumah (eksekusi fungsi) yang bisa berinteraksi dengan barang-barang di dalamnya.
*   **Block Scope** seperti **Kamar Mandi / Kubikel Toilet di dalam rumah**. Begitu pintu kubikel dikunci (kurung kurawal `{ }`), orang di luar kubikel sama sekali tidak boleh tahu apa yang terjadi di dalam, bahkan jika mereka tinggal di rumah yang sama. Begitu Anda keluar kubikel, apa yang ada di dalam kubikel tetap tertinggal di dalam kubikel.

---

## Batas Analogi
Analogi kubikel membantu visualisasi isolasi yang ketat. Namun, analogi ini memiliki batas teknis:
*   Di JavaScript, variabel `var` bertindak seperti "asap" di dalam kubikel toilet. Meskipun pintu kubikel ditutup rapat `{ }`, asap `var` tetap menyelinap keluar memenuhi seluruh rumah (fungsi) karena `var` tidak mengenal batas kubikel.
*   Hanya `let` dan `const` yang berperilaku seperti barang padat yang terkunci rapat di dalam kubikel.

---

## Penjelasan Naratif
Mari kita pelajari ketiga wilayah scope ini secara santai:

### 1. Global Scope
Wilayah terluar dari kode Anda. Jika Anda mendeklarasikan variabel di luar fungsi atau blok apa pun, variabel tersebut masuk ke Global Scope. Variabel ini hidup selamanya selama halaman web atau proses Node.js berjalan.
*Bahayanya:* Terlalu banyak variabel global membuat aplikasi Anda rentan bentrok dan lambat.

### 2. Function Scope
Setiap kali Anda menulis kata kunci `function` dan membuka kurung kurawal `{ ... }`, Anda mendirikan kedutaan besar yang terisolasi. Variabel apa pun (`var`, `let`, atau `const`) yang lahir di dalam fungsi tidak akan pernah bisa dilihat oleh wilayah global di luar.

### 3. Block Scope
Blok adalah potongan kode apa pun yang dibatasi oleh sepasang kurung kurawal `{ }`. Ini termasuk blok `if`, `else`, loop `for`, loop `while`, atau bahkan kurung kurawal kosong tanpa kata kunci di depannya. 
Variabel yang dideklarasikan dengan `let` atau `const` di dalam blok hanya hidup selama eksekusi berada di dalam blok tersebut. Begitu baris eksekusi keluar dari blok, variabel itu dihancurkan. Secara umum, binding block tidak lagi bisa diakses setelah keluar dari block. Namun jika ada closure yang menangkap binding tersebut, engine dapat mempertahankan environment terkait selama masih dibutuhkan.

---

## Penjelasan Teknis
Bagaimana engine mengevaluasi perbedaan ini?
*   **var (Function/Global Scoped):** Ketika compile phase, engine memindahkan deklarasi `var` ke tingkat teratas dari fungsi terdekat (atau ke Global Scope jika di luar fungsi). Blok `{ }` seperti `if` atau `for` sama sekali diabaikan. Ini disebut proses *Hoisting*.
*   **let & const (Block Scoped):** Saat kompilasi, engine menaruh `let` dan `const` ke dalam kategori *Block Lexical Environment* khusus. Engine mendirikan batasan ketat pada sepasang kurung kurawal `{ }` terdekat. 
*   **Temporal Dead Zone (TDZ):** Selain membatasi scope, `let` dan `const` tidak di-inisialisasi dengan `undefined` saat hoist. Mereka masuk ke area terlarang TDZ sejak awal blok dibaca hingga deklarasi dieksekusi atau binding diinisialisasi. Mencoba membaca mereka di TDZ akan memicu `ReferenceError`.

---

## Contoh Kode

Mari kita bandingkan perilaku ketiga scope ini:

```javascript
// ==========================================
// 1. GLOBAL SCOPE DEMO
// ==========================================
const globalVar = "Aku Global";

function tesGlobal() {
  console.log(globalVar); // OK: Dapat diakses dari dalam fungsi
}
tesGlobal();

// ==========================================
// 2. FUNCTION SCOPE DEMO
// ==========================================
function buatRahasia() {
  const rahasiaFungsi = "123-Fungsi";
  var rahasiaVar = "123-Var";
}
// console.log(rahasiaFungsi); // ERROR: ReferenceError
// console.log(rahasiaVar);    // ERROR: ReferenceError (var pun terkurung di dalam fungsi!)

// ==========================================
// 3. BLOCK SCOPE DEMO (var vs let/const)
// ==========================================
if (true) {
  var bocooranVar = "Aku bocor!";
  const amanConst = "Aku aman terkunci!";
  let amanLet = "Aku juga terkunci!";
}

console.log(bocooranVar); // OK: var tidak mengenal block scope! Output: "Aku bocor!"
// console.log(amanConst);   // ERROR: ReferenceError
// console.log(amanLet);     // ERROR: ReferenceError
```

---

## Bedah Kode
Mari kita bedah secara spesifik bagian **Block Scope Demo**:
*   **Baris 27 (`if (true) { ... }`):** Kita mendirikan blok percabangan. kurung kurawal ini bertindak sebagai pemisah dunia luar dan dalam bagi `let` dan `const`.
*   **Baris 28 (`var bocooranVar = ...`):** Engine memproses deklarasi `var`. Karena `var` mengabaikan blok, engine seolah-olah memindahkan deklarasi `var bocooranVar` ke baris paling atas Global Scope.
*   **Baris 29 & 30 (`const amanConst = ...` dan `let amanLet = ...`):** Engine mencatat bahwa kedua variabel ini hanya terdaftar pada *Block Lexical Environment* milik blok `if` saat ini.
*   **Baris 33 (`console.log(bocooranVar)`):** Eksekusi sudah di luar blok `if`. Namun karena `bocooranVar` di-hoist ke global scope, nilainya berhasil dicetak dengan mulus. Ini adalah kebocoran scope!
*   **Baris 34 & 35 (`console.log(amanConst / amanLet)`):** Panggilan ini berada di luar wilayah kekuasaan blok `if`. Engine mencari di lingkungan Global, tidak menemukannya, dan langsung memicu error demi keamanan sistem.

---

## Cara Kerja di Balik Layar

Mari kita visualisasikan bagaimana engine menyusun lingkungan memori saat mengeksekusi blok kode:

```text
Saat eksekusi berada di dalam blok IF:
+--------------------------------------------+
| Global Lexical Environment                 |
| - globalVar: "Aku Global"                  |
| - bocooranVar: "Aku bocor!" (di-hoist)     |
|                                            |
|   +------------------------------------+   |
|   | Block Lexical Environment (IF)     |   |
|   | - amanConst: "Aku aman terkunci!"  |   |
|   | - amanLet: "Aku juga terkunci!"    |   |
|   | - [Outer Reference] -> Global      |   |
|   +------------------------------------+   |
+--------------------------------------------+

Saat eksekusi keluar dari blok IF:
+--------------------------------------------+
| Global Lexical Environment                 |
| - globalVar: "Aku Global"                  |
| - bocooranVar: "Aku bocor!"                |
|                                            |
|   [Block Lexical Environment DIHANCURKAN]  |
+--------------------------------------------+
```

---

## Kesalahan Umum
Anomali paling berbahaya akibat kebocoran `var` terjadi pada struktur perulangan `for` yang menggunakan callback asynchronous (seperti `setTimeout`):

```javascript
// BUG KLASIK MENGGUNAKAN VAR
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("Nilai i: " + i);
  }, 100);
}
// Output yang diharapkan: "Nilai i: 1", "Nilai i: 2", "Nilai i: 3"
// Output yang SEBENARNYA terjadi: "Nilai i: 4", "Nilai i: 4", "Nilai i: 4"
```
*Mengapa outputnya 4 semua?* 
Karena `var i` tidak memiliki block scope. Hanya ada satu variabel `i` di level global. Loop berjalan sangat cepat hingga selesai (`i` bernilai 4). Ketika waktu tunggu `100ms` selesai dan fungsi *callback* dijalankan, ketiga callback tersebut membaca satu variabel `i` global yang sama yang nilainya sudah terlanjur berubah menjadi 4.

*Solusi penyelamat:* Cukup ubah `var` menjadi `let`. 
```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("Nilai i: " + i);
  }, 100);
}
// Output: "Nilai i: 1", "Nilai i: 2", "Nilai i: 3" (Sukses!)
```
`let` menciptakan lingkungan scope baru yang unik untuk *setiap putaran loop*, mengunci nilai `i` yang benar di setiap putarannya secara aman.

---

## Contoh Project
Berikut adalah modul penjaga status login sederhana yang mengilustrasikan bagaimana block scope melindungi kunci sensitif agar tidak tercemar dari luar:

```javascript
// File: authApp.js
const statusLogin = true;

if (statusLogin) {
  // Token sesi dienkapsulasi dengan aman di dalam blok otentikasi
  const sessionToken = "TOKEN-SENSITIF-998877";
  
  console.log("Otentikasi sukses. Token aktif.");
  
  // Fungsi penanganan event internal
  document.addEventListener("click", function() {
    console.log("Melakukan request dengan token: " + sessionToken);
  });
}

// Upaya pembajakan token dari luar blok
try {
  console.log("Mencoba mencuri token: " + sessionToken);
} catch (e) {
  console.log("Pencurian gagal! Token tidak terjangkau dari luar scope."); 
  // Output: "Pencurian gagal! Token tidak terjangkau dari luar scope."
}
```

> [!NOTE]
> **Catatan:**
> Contoh ini berjalan di environment browser karena memakai `document`. Contoh ini juga merupakan jembatan awal menuju closure, karena callback event listener tetap dapat mengakses `sessionToken` dari scope tempat callback dibuat.

---

## Latihan

### Soal 1: Kebocoran Var
Perhatikan kode di bawah ini:
```javascript
var angka = 10;
if (true) {
  var angka = 20;
  console.log("Di dalam IF: " + angka);
}
console.log("Di luar IF: " + angka);
```
**Pertanyaan:**
Apakah output "Di luar IF" bernilai 10 atau 20? Jelaskan mengapa!

---

### Soal 2: Penyelamatan Let
Perhatikan kode di bawah ini:
```javascript
let skor = 100;
if (true) {
  let skor = 200;
  console.log("Di dalam IF: " + skor);
}
console.log("Di luar IF: " + skor);
```
**Pertanyaan:**
Apakah output "Di luar IF" bernilai 100 atau 200? Mengapa perilakunya berbeda dengan Soal 1?

---

### Soal 3: Temporal Dead Zone (TDZ)
Perhatikan kode di bawah ini:
```javascript
function tesTDZ() {
  console.log(nilai1);
  console.log(nilai2);
  var nilai1 = 10;
  let nilai2 = 20;
}
tesTDZ();
```
**Pertanyaan:**
Apa hasil eksekusi fungsi `tesTDZ()` di atas? Sebutkan baris mana yang akan menghasilkan error dan jelaskan jenis error-nya!

---

## Ringkasan
*   **Global Scope:** Ruang publik terluar. Berumur panjang, rentan polusi bentrok nama.
*   **Function Scope:** Terisolasi ketat di dalam sepasang `{ }` milik fungsi. Baik `var`, `let`, maupun `const` terkurung di sini.
*   **Block Scope:** Terisolasi di antara `{ }` milik blok seperti `if` atau `for`. Hanya `let` dan `const` yang mematuhi batas ini.
*   **Masalah `var`:** Tidak mengenal Block Scope, berpotensi bocor keluar blok, dan rentan terhadap hoisting dengan nilai awal undefined, sedangkan let dan const memiliki Temporal Dead Zone sampai deklarasinya dieksekusi/diinisialisasi.

---

## Lanjut ke Mana
Sekarang kita telah menguasai tiga wilayah scope. Namun, bagaimana JavaScript mencari variabel di antara fungsi-fungsi yang saling bersarang? Di bab berikutnya, kita akan mendalami konsep **Lexical Scope** (aturan pencarian berdasarkan lokasi fisik kode ditulis) dan cara kerja **Scope Chain** (rantai pencarian) di balik layar!
