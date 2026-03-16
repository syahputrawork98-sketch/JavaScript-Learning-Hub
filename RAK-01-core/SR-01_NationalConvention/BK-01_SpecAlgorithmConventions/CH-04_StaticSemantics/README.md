# Chapter 04: Static Semantics

Chapter ini membedah sub-clause 5.2.4 dari ECMA-262. Fokus pada "Early Errors" dan validasi yang terjadi sebelum kode benar-benar dijalankan.

*Mental Model: "Pemeriksaan Bahan Sebelum Memasak"*

## 1. Apa itu Static Semantics?

Jika *Runtime Semantics* (CH-03) adalah tentang "apa yang dilakukan kode saat berjalan", maka *Static Semantics* adalah tentang "apakah kode ini valid secara struktural". 

Bayangkan seorang koki yang memeriksa bahan-bahannya. Jika resep meminta "telur dinosaurus", koki akan berhenti bahkan sebelum kompor dinyalakan karena bahan tersebut tidak valid atau tidak tersedia. Begitu juga dengan engine JS; ia melakukan pemeriksaan *Static Semantics* sebelum eksekusi dimulai.

## 2. Early Errors (Error Dini)

Bagian paling penting dari *Static Semantics* adalah *Early Errors*. Ini adalah kesalahan yang membuat program gagal berjalan sama sekali (Syntax Error).

**Contoh Nyata: Duplikasi Parameter**
Dalam *Strict Mode*, Anda tidak boleh memiliki nama parameter yang sama:
```javascript
"use strict";
function sum(a, a) { // Early Error: Duplicate parameter name not allowed in this context
  return a + a;
}
```
Engine menemukan kesalahan ini melalui aturan *Static Semantics* tanpa perlu memanggil fungsi `sum`.

## 3. Kegunaan Lain

Selain menemukan error, *Static Semantics* juga digunakan untuk:
- Menentukan apakah sebuah variabel terikat secara leksikal.
- Menentukan apakah sebuah fungsi adalah *Generator* atau *Async*.
- Mengatur cakupan (Scope) variabel.

Sebagai arsitek, memahami *Static Semantics* membantu Anda mengerti mengapa beberapa kesalahan muncul seketika (saat parse) sementara yang lain baru muncul saat fungsi dipanggil.
