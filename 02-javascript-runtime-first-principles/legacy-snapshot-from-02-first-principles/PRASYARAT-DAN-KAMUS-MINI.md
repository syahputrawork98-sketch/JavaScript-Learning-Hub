# Prasyarat dan Kamus Mini

File ini adalah ringkasan cepat untuk dibaca ulang kapan saja saat lupa istilah dasar JavaScript.

## Cara Pakai
1. Baca bagian `Prasyarat Global` sebelum mulai level baru.
2. Saat menemukan istilah asing di materi, cek bagian `Kamus Mini`.
3. Jika buntu saat belajar, ulang baca file ini selama 5-10 menit lalu lanjut lagi.

## Prasyarat Global

### Sebelum Foundations
- Bisa menjalankan JavaScript sederhana di browser console atau Node.js.
- Paham dasar variabel: `let`, `const`, `var`.
- Paham `if`, function dasar, dan `console.log`.

### Sebelum Advanced
- Sudah lulus seluruh topik Foundations.
- Bisa menjelaskan `scope`, `hoisting`, `closure`, `this` dasar.
- Bisa memprediksi output kode JS sederhana tanpa menjalankan.

### Sebelum Internals
- Sudah lulus seluruh topik Advanced.
- Paham Promise dan `async/await` secara praktik.
- Siap membaca alur eksekusi langkah demi langkah.

## Kamus Mini
- Assignment: proses memberi nilai ke variabel.
- Binding: hubungan antara nama variabel/fungsi dengan nilainya.
- Closure: function yang masih bisa mengakses lexical scope saat dibuat.
- Coercion: perubahan tipe data otomatis atau eksplisit.
- Context (execution context): lingkungan saat kode dieksekusi.
- Declaration: deklarasi variabel/fungsi.
- Event Loop: mekanisme penjadwalan eksekusi async di JavaScript runtime.
- Hoisting: pemrosesan deklarasi lebih awal pada creation phase.
- Lexical Scope: scope berdasarkan posisi penulisan kode.
- Microtask Queue: antrean prioritas tinggi (contoh: callback Promise).
- Primitive: nilai dasar yang disalin sebagai nilai.
- Reference: nilai yang menyimpan acuan ke object/fungsi/array.
- Scope Chain: rantai pencarian variabel dari scope lokal ke luar.
- TDZ (Temporal Dead Zone): fase saat `let/const` belum boleh diakses.
- Truthy/Falsy: nilai yang dievaluasi `true`/`false` dalam konteks boolean.

## Ringkasan Kilat
- Gunakan `===` sebagai default perbandingan.
- Hindari `var` untuk kode modern kecuali ada alasan kuat.
- Pahami bedanya nilai primitive vs reference untuk menghindari bug state.
- Saat bingung async, pecah alurnya ke: call stack -> microtask -> task queue.
