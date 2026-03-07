# Content Philosophy

Dokumen ini menjelaskan **filosofi konten** dari repository ini.

Repository ini dibangun sebagai **knowledge base jangka panjang tentang JavaScript**, dengan fokus utama pada pemahaman bahasa dan runtime behavior JavaScript secara mendalam.

Tujuan utama dari repository ini bukan hanya mengajarkan **cara menggunakan JavaScript**, tetapi membantu membangun **mental model yang benar tentang bagaimana JavaScript bekerja secara internal**.

---

# Tujuan Repository

Repository ini bertujuan untuk membantu memahami beberapa aspek fundamental JavaScript:

* JavaScript sebagai bahasa pemrograman
* bagaimana JavaScript dieksekusi oleh engine
* bagaimana asynchronous behavior bekerja
* bagaimana object model JavaScript dibangun
* bagaimana nilai dan referensi direpresentasikan dalam runtime

Dengan memahami mekanisme fundamental tersebut, pembelajaran teknologi lain dalam ekosistem JavaScript menjadi lebih mudah dipahami.

---

# Fokus Utama

Konten dalam repository ini berfokus pada tiga domain utama.

## JavaScript Language Semantics

Bagian ini membahas bagaimana bahasa JavaScript didefinisikan dan digunakan.

Contoh topik:

* variables
* functions
* objects
* arrays
* modules
* error handling

Fokusnya adalah memahami **bagaimana sintaks JavaScript digunakan dalam program nyata**.

---

## JavaScript Runtime Behavior

Bagian ini menjelaskan bagaimana program JavaScript dijalankan oleh engine.

Topik yang termasuk di dalam domain ini antara lain:

* Execution Context
* Lexical Environment
* Scope
* Closures
* Hoisting
* this binding
* Call Stack

Bagian ini membangun **mental model tentang bagaimana kode dieksekusi**.

---

## Asynchronous Execution Model

JavaScript memiliki model asynchronous yang unik dibandingkan banyak bahasa lain.

Topik yang dibahas antara lain:

* Event Loop
* Task Queue
* Microtask Queue
* Promises
* Async/Await
* Job Queue

Fokusnya adalah memahami **urutan eksekusi kode asynchronous secara deterministik**.

---

# Pendekatan Penjelasan

Repository ini menggunakan pendekatan penjelasan yang menekankan:

* konsep fundamental
* struktur runtime
* hubungan antar mekanisme JavaScript

Penjelasan biasanya akan mencakup:

* definisi konsep
* mental model sederhana
* mekanisme internal yang relevan
* contoh kode kecil untuk memperjelas perilaku bahasa

Pendekatan ini bertujuan untuk membangun **pemahaman konseptual yang stabil**, bukan hanya kemampuan menggunakan API tertentu.

---

# Hubungan dengan ECMAScript Specification

JavaScript secara formal didefinisikan oleh **ECMAScript specification**.

Repository ini tidak berusaha menggantikan spesifikasi tersebut.
Sebaliknya, repository ini berfungsi sebagai **pendamping konseptual** untuk membantu memahami konsep yang terdapat dalam spesifikasi.

Beberapa istilah resmi yang sering digunakan antara lain:

* Execution Context
* Lexical Environment
* Environment Record
* Prototype Chain
* Job Queue

Istilah-istilah tersebut digunakan karena merupakan bagian dari model formal bahasa JavaScript.

---

# Hal yang Bukan Fokus Repository

Beberapa topik secara sengaja tidak menjadi fokus utama repository ini.

## Framework

Framework seperti:

* React
* Next.js
* Vue
* Angular

tidak menjadi fokus utama repository ini.

Framework dipandang sebagai **layer aplikasi di atas JavaScript**, bukan bagian dari mekanisme bahasa JavaScript itu sendiri.

---

## Library Ecosystem

Repository ini juga tidak berfokus pada:

* library populer
* tooling ekosistem
* framework architecture

Topik tersebut penting, tetapi berada di luar fokus utama repository ini.

---

## Tutorial Proyek Aplikasi

Repository ini bukan kumpulan tutorial untuk membuat aplikasi seperti:

* membuat REST API
* membuat web application
* membuat full stack project

Materi dalam repository ini lebih berfokus pada **memahami perilaku bahasa JavaScript** daripada membangun aplikasi tertentu.

---

# Prinsip Penulisan Konten

Konten dalam repository ini mengikuti beberapa prinsip:

**1. Konsep lebih penting daripada API**

Penjelasan berfokus pada konsep fundamental daripada penggunaan API spesifik.

---

**2. Mental model harus akurat**

Analogi yang terlalu menyederhanakan sering menyebabkan miskonsepsi.

Penjelasan dalam repository ini berusaha menjaga mental model yang mendekati perilaku JavaScript yang sebenarnya.

---

**3. Menghindari miskonsepsi populer**

Beberapa penjelasan populer tentang JavaScript sering kali terlalu disederhanakan.

Repository ini berusaha menjelaskan konsep JavaScript dengan pendekatan yang lebih presisi.

---

**4. Menghubungkan konsep dengan runtime behavior**

Banyak perilaku JavaScript baru dapat dipahami jika dikaitkan dengan mekanisme runtime seperti:

* Execution Context
* Lexical Environment
* Scope Chain
* Event Loop

Karena itu, banyak topik dalam repository ini akan merujuk pada mekanisme tersebut.

---

# Repository sebagai Knowledge Base

Repository ini dirancang untuk menjadi **referensi jangka panjang** yang dapat dibaca ulang ketika mempelajari teknologi lain dalam ekosistem JavaScript.

Dengan memahami mekanisme fundamental bahasa JavaScript, developer dapat lebih mudah memahami perilaku framework, library, dan sistem yang dibangun di atas JavaScript.
