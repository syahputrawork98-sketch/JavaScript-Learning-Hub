# Bab 02: Short-Circuit Evaluation (Sekring Pengaman)

JavaScript memiliki cara kerja yang sangat efisien dalam mengevaluasi logika `AND` (`&&`) dan `OR` (`||`). Ia tidak selalu mengevaluasi seluruh ekspresi jika ia sudah menemukan jawabannya di tengah jalan. Mekanisme ini disebut **Short-Circuit Evaluation** (Clause 13.13 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Short-Circuit** adalah **Sekring Pengaman (Fuse)**. Jika arus listrik di bagian depan sudah terdeteksi bermasalah, sekring akan putus dan menghentikan aliran listrik ke bagian belakang rumah. Engine JavaScript melakukan hal yang sama: jika jawaban akhir sudah pasti, ia "memutus" proses evaluasi dan tidak membaca sisa kodenya.

> **Analogi Panjang (Filter Keamanan Bandara):**  
> Bayangkan kamu sedang melewati dua pos pemeriksaan di Bandara.
> - **Logika AND (`&&`)**: Kamu harus lolos Pos 1 DAN Pos 2. Jika di Pos 1 kamu sudah terdeteksi membawa barang terlarang (*Falsy*), petugas langsung mengusirmu. Petugas di Pos 2 tidak akan pernah melihatmu.
> - **Logika OR (`||`)**: Kamu cukup lolos di Pos 1 ATAU Pos 2. Jika di Pos 1 kamu sudah terbukti sebagai diplomat (*Truthy*), petugas langsung mempersilakanmu lewat. Petugas di Pos 2 tidak perlu lagi memeriksa paspormu karena satu bukti saja sudah cukup.
> - Petugas yang "malas" namun efisien inilah gambaran *Short-Circuit Evaluation*.

---

## Logika AND (`&&`)

Engine akan mengevaluasi dari kiri ke kanan.
- Jika menemukan nilai **Falsy**, ia langsung mengembalikan nilai tersebut dan **berhenti**.
- Jika nilai pertama **Truthy**, ia akan lanjut mengevaluasi dan mengembalikan nilai kedua.

**Penggunaan Praktis**: Menjalankan fungsi hanya jika objeknya ada.
`user && user.login();`

## Logika OR (`||`)

Engine akan mengevaluasi dari kiri ke kanan.
- Jika menemukan nilai **Truthy**, ia langsung mengembalikan nilai tersebut dan **berhenti**.
- Jika nilai pertama **Falsy**, ia akan lanjut mengevaluasi dan mengembalikan nilai kedua.

**Penggunaan Praktis**: Memberikan nilai *default*.
`const name = inputName || "Guest";`

## Pendatang Baru: Nullish Coalescing (`??`)

Operator `||` memiliki kelemahan: ia menganggap `0`, `""`, dan `false` sebagai nilai yang harus diganti. Padahal terkadang kita ingin nilai tersebut tetap ada. 
**Operator `??`** hanya akan melakukan short-circuit jika nilainya benar-benar `null` atau `undefined`.

## Mengapa Arsitek Harus Peduli?

Short-circuiting bukan sekadar cara menulis kode yang lebih pendek. 
1. **Performa**: Menghindari pemanggilan fungsi berat jika tidak diperlukan.
2. **Keamanan**: Mencegah error "cannot read property of undefined" dengan melakukan pengecekan di sisi kiri.
3. **Clean Code**: Menggantikan blok `if-else` yang panjang dengan ekspresi satu baris yang elegan.

## Contoh Eksekusi
Lihat bagaimana fungsi "berat" tidak akan pernah dipanggil jika sekring sudah putus pada folder [examples/](./examples/).
