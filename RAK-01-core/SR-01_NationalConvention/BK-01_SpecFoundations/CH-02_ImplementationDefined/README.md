# CH-02: Implementation-Defined vs Host-Defined

Pernahkah Anda bertanya-tanya mengapa `console.log` tidak ada di spesifikasi ECMA-262, padahal setiap browser mempunyainya? Jawabannya ada pada batasan antara *Language* dan *Environment*.

## Mental Model: "Spesifikasi Konsol Game vs Game-nya"
Bayangkan ECMA-262 adalah spesifikasi hardware konsol (misal: tombol yang tersedia, cara memproses data). Namun, isi dari game itu sendiri (misal: karakter, level) ditentukan oleh pengembang gamenya.

Dalam spesifikasi, ada tiga istilah "Area Abu-abu" yang harus Anda kuasai:

---

## 1. Implementation-defined
Istilah ini digunakan ketika spesifikasi sengaja memberikan kebebasan bagi pembuat mesin JavaScript (V8, JavaScriptCore, Spidermonkey) untuk menentukan detailnya sendiri.
- **Contoh:** Algoritma pengurutan `Array.prototype.sort` dulu bersifat *implementation-defined* (boleh stabil atau tidak), sebelum akhirnya distandardisasi.
- **Ciri di Spec:** Mencantumkan frase *"implementation-defined"* untuk detail tertentu.

## 2. Host-defined (atau Implementation-defined)
Ini adalah "pintu masuk" bagi lingkungan luar (Browser atau Node.js) untuk menyuntikkan fitur mereka sendiri.
- **Contoh:** `console.log`, `setTimeout`, `window`, dan `process`. Ini bukan bagian dari bahasa JavaScript core, tapi disediakan oleh *Host*.
- **Ciri di Spec:** Spec berkata *"as defined by the host environment"*.

## 3. Implementation-approximated
Ini adalah kondisi di mana spesifikasi memberikan angka ideal, namun sadar bahwa mesin JavaScript mungkin hanya bisa mendekatinya karena batasan hardware.
- **Contoh:** Presisi perhitungan matematika tertentu.
- **Ciri di Spec:** Mencantumkan frase *"implementation-approximated"*.

## Mengapa Arsitek Harus Tahu Ini?
Sebagai senior architect, Anda harus bisa membedakan mana perilaku yang dijamin oleh standar (Cross-platform) dan mana perilaku yang bergantung pada lingkungan (Vendor-lock).

> [!IMPORTANT]
> **Host Environment** (seperti Browser) seringkali memiliki aturan tambahan atau objek global yang tidak tercantum di ECMA-262, melainkan di spesifikasi lain seperti [HTML Living Standard](https://html.spec.whatwg.org/).

## Tantangan Kecil
Buka Node.js REPL dan Browser Console. Ketik `global` di Node dan `window` di Browser. Keduanya adalah contoh *Host-defined object* yang bertindak sebagai "Global Object". Apakah mereka sama? Tentu tidak, karena *Host*-nya berbeda!
