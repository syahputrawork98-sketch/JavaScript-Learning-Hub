# Track Boundaries

Repository ini dibagi menjadi beberapa **buku** yang masing-masing membahas domain tertentu dalam JavaScript.

Pembagian ini bertujuan untuk:

* menjaga struktur pengetahuan tetap jelas
* menghindari duplikasi materi
* memudahkan navigasi antar topik
* menjaga fokus setiap buku

Dokumen ini menjelaskan **batas domain setiap buku** dan jenis pertanyaan yang dijawab oleh masing-masing track.

---

# Prinsip Pembagian Domain

Setiap buku dalam repository ini dirancang untuk menjawab **satu jenis pertanyaan utama** tentang JavaScript.

Contoh:

* bagaimana sintaks JavaScript digunakan?
* bagaimana JavaScript menjalankan kode?
* bagaimana asynchronous task dijadwalkan?
* bagaimana object dan prototype bekerja?
* bagaimana nilai dan referensi direpresentasikan?

Dengan pendekatan ini, setiap buku memiliki **fokus konseptual yang jelas**.

---

# 01 JavaScript Tutorial

**Pertanyaan utama**

Bagaimana menggunakan sintaks dasar JavaScript untuk menulis program?

**Fokus**

Track ini memperkenalkan penggunaan dasar bahasa JavaScript.

Topik yang termasuk:

* variables
* functions
* objects
* arrays
* conditionals
* loops
* modules
* error handling

Track ini berfungsi sebagai **fondasi penggunaan bahasa** sebelum masuk ke pembahasan runtime.

**Hal yang tidak dibahas**

Track ini tidak membahas secara mendalam:

* Execution Context
* Closure mechanics
* Event Loop
* Prototype internals

Topik tersebut dibahas di track lain.

---

# 02 JavaScript Runtime First Principles

**Pertanyaan utama**

Bagaimana JavaScript menjalankan kode secara internal?

Track ini membangun mental model tentang **execution model JavaScript**.

Topik utama:

* Execution Context
* Lexical Environment
* Scope
* Closures
* Hoisting
* this binding
* Call Stack

Fokus track ini adalah memahami **bagaimana engine mengevaluasi program JavaScript**.

**Hal yang tidak dibahas**

Track ini tidak membahas secara detail:

* Event Loop
* Promise scheduling
* asynchronous task execution

Topik tersebut dibahas dalam track asynchronous.

---

# 03 Asynchronous JavaScript Model

**Pertanyaan utama**

Bagaimana JavaScript menjalankan operasi asynchronous?

Track ini menjelaskan mekanisme scheduling task dalam runtime JavaScript.

Topik utama:

* Event Loop
* Task Queue
* Microtask Queue
* Promises
* Async/Await
* Job Queue

Fokusnya adalah memahami **urutan eksekusi asynchronous code**.

**Hal yang tidak dibahas**

Track ini tidak membahas kembali secara mendalam:

* bagaimana Execution Context dibuat
* bagaimana closure bekerja

Topik tersebut dijelaskan di track runtime fundamentals.

---

# 04 JavaScript Object Model

**Pertanyaan utama**

Bagaimana object bekerja dalam JavaScript?

JavaScript menggunakan sistem object berbasis prototype.

Topik utama:

* objects
* property descriptors
* prototype chain
* [[Prototype]]
* constructors
* new operator
* class syntax

Track ini menjelaskan **mekanisme inheritance dan object composition dalam JavaScript**.

**Hal yang tidak dibahas**

Track ini tidak membahas secara mendalam:

* execution context
* asynchronous behavior
* memory management

---

# 05 JavaScript Memory and References

**Pertanyaan utama**

Bagaimana nilai dan object direpresentasikan dalam runtime JavaScript?

Track ini membantu memahami bug yang sering muncul karena misunderstanding tentang referensi dan mutasi.

Topik utama:

* primitive values
* reference values
* referential equality
* mutation vs immutability
* object identity
* garbage collection (high level)

Track ini fokus pada **bagaimana data direpresentasikan dan direferensikan dalam runtime**.

---

# 06 JavaScript Runtime Exercises

**Pertanyaan utama**

Bagaimana melatih pemahaman runtime behavior JavaScript melalui eksperimen kode?

Track ini berisi kumpulan latihan yang dirancang untuk memperkuat mental model tentang:

* closure behavior
* this binding edge cases
* asynchronous execution order
* object mutation behavior

Latihan biasanya meminta pembaca untuk **memprediksi output kode sebelum dijalankan**.

---

# 07 JavaScript Specification Companion

**Pertanyaan utama**

Bagaimana konsep JavaScript yang telah dipelajari berhubungan dengan definisi formal dalam ECMAScript specification?

Track ini membantu pembaca memahami istilah yang digunakan dalam spesifikasi seperti:

* Execution Context
* Environment Record
* Lexical Environment
* Abstract Operations
* Internal Slots

Tujuannya bukan menggantikan spesifikasi, tetapi membantu **membaca spesifikasi dengan lebih mudah**.

---

# Hubungan Antar Track

Beberapa konsep JavaScript muncul di lebih dari satu track.

Contoh:

Closure muncul di:

* Runtime First Principles
* Asynchronous JavaScript Model
* Runtime Exercises

Namun setiap track membahas konsep tersebut dari perspektif yang berbeda.

Contoh:

Runtime First Principles
menjelaskan **bagaimana closure terbentuk dalam Lexical Environment**

Asynchronous Model
menjelaskan **bagaimana closure digunakan dalam callback dan Promise**

Runtime Exercises
melatih pemahaman closure melalui eksperimen kode

Dengan pendekatan ini, repository dapat menjelaskan konsep JavaScript secara **komprehensif tanpa duplikasi materi yang tidak perlu**.
