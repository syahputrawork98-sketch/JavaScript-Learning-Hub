# CH-09: Parameter Validation

Fungsi adalah unit terkecil dari logika. Untuk memastikan fungsi tersebut "Sehat", spesifikasi memiliki serangkaian aturan statis untuk memvalidasi parameternya bahkan sebelum fungsi tersebut dipanggil.

## Mental Model: "Pemeriksaan Slot Input"
Bayangkan sebuah mesin produksi. Sebelum mesin dijalankan, operator (Static Semantics) memeriksa slot inputnya.
- Apakah ada dua slot dengan label yang sama? (**Duplicate Parameters**)
- Apakah ada slot yang menuntut input khusus yang dilarang? (**Restricted Bindings**)
- Apakah pengaturan slotnya aman untuk mode kecepatan tinggi? (**Strict Mode vs Simple Parameters**)

---

## 1. Aturan Duplikasi Parameter
Spesifikasi memiliki algoritma **IsSimpleParameterList**. 
- Pada fungsi standar (Non-strict), duplikasi parameter seperti `function(a, a) {}` diperbolehkan (kecuali pada arrow function atau method).
- Namun, begitu Anda menggunakan **'use strict'**, algoritma **Static Semantics: Early Errors** akan segera memicu `SyntaxError` jika ada nama parameter yang sama.

## 2. Parameter vs "use strict"
Inilah fakta teknis yang sering mengejutkan:
> Jika Anda menggunakan *Default Parameter*, *Rest Parameter*, atau *Destructuring* (Non-simple parameters), Anda dilarang menulis `'use strict'` di dalam body fungsi tersebut.
```javascript
function sum(a = 1, b = 2) {
  "use strict"; // EARLY ERROR: SyntaxError
  return a + b;
}
```
**Mengapa?** Karena spesifikasi harus mengetahui apakah sebuah fungsi itu "Strict" **sebelum** ia memproses parameter-parameternya. Jika 'use strict' ada di dalam, terjadi dilema "Ayam atau Telur".

## 3. Restricted Identifiers
Anda dilarang menggunakan `eval` atau `arguments` sebagai nama parameter dalam *Strict Mode*. Keduanya adalah "Kata Terlarang" yang dilindungi oleh aturan semantik statis untuk menjaga integritas scope.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami aturan parameter membantu Anda mendesain API yang bersih. Anda akan tahu mengapa fitur-fitur modern (seperti destructuring) membawa "kedisiplinan" otomatis yang mencegah error-error konyol yang dulu sering terjadi di JavaScript lama.

---

## Tantangan Kecil
Apa yang terjadi jika Anda menulis `(a, b, ...a) => {}`?
(Jawabannya: **Early Error**. Arrow functions selalu dilarang memiliki parameter duplikat, terlepas dari apakah mereka di strict mode atau tidak).

---
> [!IMPORTANT]
> **Key Takeaway:** Parameter bukan sekadar variabel, tapi pintu masuk logika yang validitasnya dijaga ketat oleh bahasa.
