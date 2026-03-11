# Strategi Analogi B01-B04

Dokumen ini memetakan strategi analogi lintas `B01-B04` agar penulisan analogi tidak seragam secara kaku, tetapi tetap konsisten secara editorial.

## Prinsip Utama

- Setiap chapter minimal memiliki satu analogi.
- Opsi yang tersedia: `## Analogi Singkat`, `## Analogi`, atau keduanya.
- `Analogi Singkat` cocok untuk konsep yang cukup sederhana dan hanya butuh jembatan intuitif cepat.
- `Analogi` cocok untuk konsep yang abstrak, bertahap, atau rawan disalahpahami tanpa penjelasan yang lebih dalam.
- Jika sebuah chapter memakai keduanya, `Analogi Singkat` berfungsi sebagai hook cepat, lalu `Analogi` memperdalam pemahaman dan memberi batas analogi.

## Legend

- `Singkat`: cukup `## Analogi Singkat`
- `Panjang`: cukup `## Analogi`
- `Dua`: gunakan `## Analogi Singkat` lalu `## Analogi`

## B01

| Chapter | Rekomendasi | Catatan |
| --- | --- | --- |
| C01 Lexical Fundamentals | Panjang | Fondasi membaca source code dan token lebih aman jika ada batas analogi. |
| C02 Whitespace, Line Terminator, dan Comments | Singkat | Konsep relatif langsung, cukup hook cepat. |
| C03 Identifiers dan Reserved Words | Panjang | Perlu analogi plus batas konteks grammar. |
| C04 Literals Dasar | Singkat | Konsep pengenalan bentuk nilai bisa dijembatani singkat. |
| C05 Blocks dan Struktur File | Singkat | Lebih dekat ke organisasi kode dasar. |
| C06 Strict Mode Dasar | Panjang | Perlu menjelaskan bahwa aturan lebih ketat tidak sama dengan mode keamanan umum. |
| C07 Numeric Literals Lanjutan | Singkat | Fokus pada bentuk penulisan angka, tidak terlalu berlapis. |
| C08 String Literals dan Escape Sequences | Dua | Hook cepat membantu, lalu analogi panjang penting untuk escape dan jebakan sintaks. |
| C09 Template Literals dan Tagged Template Dasar | Dua | Tagged template cukup abstrak untuk pemula. |
| C10 Regular Expression Literals Dasar | Panjang | Perlu batas analogi kuat karena regex mudah menyesatkan. |
| C11 Automatic Semicolon Insertion (ASI) | Dua | Konsepnya kontraintuitif dan rawan salah paham. |
| C12 Unicode dan Identifiers Internasional | Singkat | Fokus utamanya pengenalan aturan dan dampak keterbacaan. |
| C13 Reserved Words Contextual dan Future | Panjang | Konteks grammar dan future reservation butuh pembingkaian hati-hati. |
| C14 Hashbang dan Host Text Conventions | Singkat | Konsep cukup sempit dan host-oriented. |
| C15 Lexical Goals dan Ambiguity Dasar | Dua | Salah satu topik paling abstrak di B01. |

## B02

| Chapter | Rekomendasi | Catatan |
| --- | --- | --- |
| C01 Values dan Types Overview | Singkat | Sebagai peta besar, analogi cepat sudah cukup. |
| C02 Primitive Types Dasar | Singkat | Konsep pengenalan dasar. |
| C03 Non-Primitive dan Reference Intro | Panjang | Perlu batas analogi yang jelas agar referensi tidak disalahartikan. |
| C04 typeof dan Deteksi Tipe Praktis | Singkat | Fokus lebih praktis daripada konseptual. |
| C05 Truthy, Falsy, dan Konteks Boolean | Dua | Sering bertabrakan dengan intuisi sehari-hari. |
| C06 Equality Strict vs Loose | Dua | Perlu hook cepat dan analogi panjang karena edge case banyak. |
| C07 Coercion ke Number | Panjang | Konversi dan `NaN` perlu batas analogi. |
| C08 Coercion ke String | Singkat | Konsep cukup mudah dibayangkan. |
| C09 Coercion ke Boolean | Singkat | Bisa dijembatani cepat lewat metafora ON/OFF. |
| C10 null vs undefined | Dua | Perbedaan halus dan sering tertukar. |
| C11 NaN, Infinity, dan Negative Zero | Panjang | Nilai edge case butuh analogi hati-hati. |
| C12 Coercion Debugging Checklist | Singkat | Lebih prosedural daripada abstrak. |

## B03

| Chapter | Rekomendasi | Catatan |
| --- | --- | --- |
| C01 Identifiers dan Private Names | Singkat | Konsep dasar penamaan. |
| C02 Primary Expressions | Panjang | Unit dasar sintaks lebih aman diberi batas analogi. |
| C03 Left-Hand-Side Expressions | Panjang | Sulit dibayangkan tanpa analogi yang lebih presisi. |
| C04 Update Expressions | Singkat | Cukup dekat dengan intuisi baca-ubah nilai. |
| C05 Unary Operators | Singkat | Pengenalan keluarga operator. |
| C06 Exponentiation Operator | Singkat | Fokus satu operator dan associativity. |
| C07 Multiplicative Operators | Singkat | Konsep dasar aritmetika. |
| C08 Additive Operators | Panjang | Karena `+` punya dua wajah: angka dan string. |
| C09 Shift Operators | Panjang | Butuh analogi plus pengingat batas 32-bit. |
| C10 Relational Operators | Singkat | Pengenalan dasar perbandingan. |
| C11 Equality Operators | Dua | Edge case dan coercion sangat mudah mengecoh. |
| C12 Binary Bitwise Operators | Panjang | Level bit butuh analogi yang lebih hati-hati. |
| C13 Binary Logical Operators | Panjang | Short-circuit dan pengembalian operand asli sering membingungkan. |
| C14 Conditional Operator | Singkat | Bentuknya cukup ringkas dan terfokus. |
| C15 Assignment Operators | Singkat | Konsep penyimpanan hasil evaluasi relatif langsung. |
| C16 Comma Operator | Panjang | Jarang dipakai dan mudah disalahartikan. |
| C17 Statement Semantics Overview | Panjang | Ini jembatan besar dari expression ke statement. |
| C18 Block Statement | Singkat | Konsep wadah statement cukup langsung. |
| C19 Declarations dan Variable Statement | Panjang | Scope dan binding perlu analogi yang lebih ketat. |
| C20 Empty Statement | Singkat | Topik sempit dan cepat. |
| C21 Expression Statement | Singkat | Cukup dengan hook cepat. |
| C22 If Statement | Singkat | Sangat familiar bagi pemula. |
| C23 Iteration Statements | Singkat | Familiar, tapi tetap perlu jembatan intuitif. |
| C24 Continue Statement | Singkat | Konsep sempit. |
| C25 Break Statement | Singkat | Konsep sempit. |
| C26 Return Statement | Singkat | Familiar dan fokus. |
| C27 With Statement | Panjang | Perlu menekankan ambiguitas resolusi nama. |
| C28 Switch Statement | Singkat | Familiar untuk branching satu nilai. |
| C29 Labelled Statements | Panjang | Topik tidak umum dan rawan kebingungan. |
| C30 Throw Statement | Singkat | Cukup langsung jika dijembatani alarm/error. |
| C31 Try Statement | Panjang | Cleanup dan `finally` layak diberi batas analogi. |
| C32 debugger Statement | Singkat | Topik tooling yang cukup konkret. |

## B04

| Chapter | Rekomendasi | Catatan |
| --- | --- | --- |
| C01 Parameter Lists Dasar dan Early Errors | Panjang | Konsep kontrak input dan early error layak diberi batas analogi. |
| C02 Parameter Lists Initializer dan Expected Argument Count | Panjang | Ada beberapa mekanisme yang saling terkait. |
| C03 Function Definitions Bentuk dan Aturan Strict | Panjang | Aturan validitas bentuk function perlu analogi hati-hati. |
| C04 Function Definitions Runtime Pipeline | Dua | Pipeline runtime cukup abstrak untuk pemula. |
| C05 Arrow Function Bentuk dan Early Errors | Panjang | Sintaks ringkas tapi sensitif, perlu batas analogi. |
| C06 Arrow Function Runtime dan Evaluation | Dua | Lexical capture dan runtime behavior cukup berlapis. |
| C07 Method Definitions Dasar dan Direct Super | Dua | `direct super` biasanya butuh hook cepat plus analogi dalam. |
| C08 Method Definitions Runtime dan Evaluasi | Panjang | Fokus pada timing pembentukan method. |
| C09 Generator Functions Dasar | Dua | Konsep pause-resume sangat terbantu dengan dua lapis analogi. |
| C10 Generator Functions Instantiation dan Evaluation | Dua | State transition per `next()` cukup abstrak. |
| C11 Async Generator Functions Dasar | Dua | Menggabungkan dua model mental sekaligus. |
| C12 Async Generator Functions Instantiation dan Evaluation | Dua | Topik berlapis dan mudah berat bagi pemula. |
| C13 Class Definitions Static Semantics Bagian 1 | Panjang | Static checks class cukup abstrak. |
| C14 Class Definitions Static Semantics Bagian 2 | Panjang | Lanjutan topik abstrak. |
| C15 Class Definitions Static Runtime Bridge | Dua | Ini memang topik jembatan. |
| C16 Class Definitions Runtime Pipeline | Dua | Pipeline class sangat cocok untuk dua lapis analogi. |
| C17 Async Function Definitions Syntax dan Instantiation | Panjang | Perlu menjaga analogi tetap dekat ke semantik async. |
| C18 Async Function Definitions Body dan Evaluation | Dua | `await` dan kelanjutan flow layak diberi dua lapis. |
| C19 Async Arrow Function Definitions End-to-End | Panjang | Gabungan arrow dan async cukup padat, tapi masih bisa dengan satu analogi dalam. |
| C20 Tail Position Calls Dasar Praktis | Panjang | Konsep teoritis dan praktik engine perlu batas analogi jelas. |
