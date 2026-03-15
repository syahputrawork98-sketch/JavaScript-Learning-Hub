# Bab 02: ESM Mechanics (Sistem Pipa Air)

Sistem Modul di JavaScript (ESM) menggunakan pendekatan asinkron dan statis. Artinya, *Engine* harus tahu siapa meng-import siapa sebelum satu baris kode pun dijalankan (Clause 16.2 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **ESM Mechanics** adalah **Sistem Pipa Air**. Sebelum air (Data/Logika) mengalir, tukang pipa (Engine) harus memasang semua pipa dan menyambungkannya (*Linking*) dari satu rumah ke rumah lain. Jika ada pipa yang tidak nyambung (*Missing Export*), sistem akan langsung bocor sebelum keran air utama dibuka.

> **Analogi Panjang (Sistem Listrik Gedung):**  
> Bayangkan kamu sedang membangun instalasi listrik di gedung bertingkat:
> - **Construction (Denah)**: Arsitek melihat semua kabel yang dibutuhkan. Jika ada file yang hilang, ia langsung tahu di fase awal.
> - **Instantiation / Linking (Pemasangan Kabel)**: Tukang kabel memasang kabel dari Saklar (Export) ke Lampu (Import). Penting: Ini adalah **Live Binding**. Jika saklar diganti, lampu akan tahu tanpa perlu kabel baru. Ini bukan sekadar menyalin nilai, tapi menyambung koneksi.
> - **Evaluation (Menyalakan Listrik)**: Barulah listrik (Eksekusi) dinyalakan. Arus mengalir melalui kabel yang sudah terpasang rapi.

---

## Jenis Ekspor & Impor

### 1. Named Export (Pipa Berlabel)
Kamu bisa mengirim banyak barang dari satu file, asalkan masing-masing punya label (nama).
`export const data = 1;` 
`import { data } from './file.js';`

### 2. Default Export (Saluran Utama)
Setiap file hanya boleh punya satu ekspor utama. Bisa langsung diterima tanpa perlu kurung kurawal.
`export default function() { ... }`
`import fungsiUtama from './file.js';`

## Sifat Live Binding

Salah satu keunikan ESM dibandingkan CommonJS (Node.js lama) adalah **Live Binding**. Jika modul pengekspor mengubah nilai variabelnya (menggunakan `let`), modul pengimpor akan langsung melihat nilai barunya. Modul pengimpor tidak bisa merubah nilai tersebut (bersifat *Read-only*).

## Mengapa Arsitek Harus Peduli?

Mekanisme statis ESM memungkinkan fitur canggih bagi Arsitek Digital:
- **Tree Shaking**: Alat pembangun (*Bundler*) bisa melihat pipa mana yang tidak pernah dialiri air dan membuangnya dari hasil akhir aplikasi.
- **Circular Dependency Handling**: Karena fase *Linking* dilakukan sebelum *Evaluation*, JavaScript lebih baik dalam menangani ketergantungan yang saling melingkar dibandingkan sistem modul lama.
- **Safety**: Kesalahan penulisan nama impor akan dideteksi di awal (*Early Errors*) sebelum aplikasi berjalan.

## Contoh Eksekusi
Lihat pembuktian *Live Binding* dan perbedaan *Named* vs *Default* pada folder [examples/](./examples/).
