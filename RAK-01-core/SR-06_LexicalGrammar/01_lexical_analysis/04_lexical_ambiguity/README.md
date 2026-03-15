# Bab 04: Lexical Ambiguity (Dua Makna)

JavaScript memiliki tantangan unik: beberapa simbol yang sama bisa memiliki arti yang sangat berbeda tergantung konteksnya. Bagaimana *Engine* tahu bahwa `/` adalah pembagian atau awal dari Regex? Jawabannya ada pada Konsep **Goal Symbols** (Clause 12.2 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Lexical Ambiguity** adalah seperti rambu lalu lintas **Angka 80**. Jika kamu berada di Jalan Raya, itu berarti Batas Kecepatan. Jika kamu berada di depan Toko Diskon, itu berarti Potongan Harga. **Goal Symbols** adalah petunjuk jalan yang memberi tahu *Engine* di zona mana ia sedang berada.

> **Analogi Panjang (Kamus Kata Serapan):**  
> Bayangkan kamu sedang membaca sebuah kalimat yang mengandung kata "Bisa".
> - Jika kalimatnya tentang Biologi: "Ular itu memiliki **bisa** yang mematikan." Kamu tahu itu racun.
> - Jika kalimatnya tentang Motivasi: "Kamu pasti **bisa** melakukannya!" Kamu tahu itu kemampuan.
> - *Engine* JavaScript bekerja seperti otak kamu; ia melihat kata-kata di sekitar simbol tersebut untuk menentukan maknanya. Jika sebelumnya adalah sebuah angka, maka `/` kemungkinan besar adalah pembagian. Jika sebelumnya adalah kata kunci `return`, maka `/` kemungkinan besar adalah awal dari Regular Expression.

---

## Masalah Simbol Garis Miring (`/`)

Ini adalah ambiguitas paling terkenal di JavaScript. Simbol `/` bisa menjadi:
1. **DivPunctuator**: Operator pembagian (misal: `10 / 2`).
2. **RegularExpressionLiteral**: Awal dari sebuah Regex (misal: `/abc/g`).

## Strategi Goal Symbols

Untuk menyelesaikan ambiguitas ini, spesifikasi ECMA-262 mendefinisikan beberapa "Goal Symbols" untuk leksing:
- **InputElementDiv**: Digunakan saat *Engine* mengharapkan operator (misal setelah angka atau penutup kurung).
- **InputElementRegExp**: Digunakan saat *Engine* mengharapkan literal (misal setelah kata kunci `return` atau di awal baris).

*Parser* akan memberi tahu *Lexer* "Goal" mana yang harus digunakan saat ini. Tanpa koordinasi ini, JavaScript tidak akan pernah bisa membedakan kode Anda dengan benar.

## Ambiguity lainnya: Kurung Kurawal `{ }`

Kurung kurawal juga ambigu:
- Apakah itu sebuah **Object Literal**? `const a = { x: 1 };`
- Ataukah itu sebuah **Block Statement**? `{ console.log("Halo"); }`

JavaScript biasanya menganggapnya sebagai *Block* jika berada di awal baris, kecuali jika dipaksa menjadi ekspresi (misal dengan membungkusnya dalam kurung biasa).

## Mengapa Arsitek Harus Peduli?

Memahami ambiguitas membantu Anda:
- Menulis Regular Expression dengan aman tanpa takut salah tafsir oleh engine.
- Memahami mengapa IIFE atau Object Literal di awal baris membutuhkan tanda kurung tambahan `()`.
- Menghindari bug sintaks yang sangat halus yang hanya muncul pada kombinasi simbol tertentu.

## Contoh Eksekusi
Lihat tantangan membedakan pembagian vs regex pada folder [examples/](./examples/).
