# Chapter 06: Value Notation & Identity

Bagaimana spesifikasi merujuk pada data internal yang tidak bisa diakses langsung oleh pengembang melalui kode? Inilah tempat di mana **Slots, Fields, and Internal Methods** dijelaskan.

## 1. Internal Slots (`[[Notation]]`)

Ditulis dalam kurung siku ganda, `[[SlotName]]` adalah data yang "ditempelkan" pada objek namun murni milik *engine*.

### Analogi Singkat: "Label Pabrik"
Bayangkan sebuah ponsel. Layar adalah apa yang Anda sentuh (Public API), tapi di dalamnya ada "Label Pabrik" (Internal Slot) yang mencatat IMEI dan suhu baterai. Anda tidak bisa mengubah label itu secara langsung, tapi label itu menentukan perilaku ponsel.

## 2. Fields dan Records

Spesifikasi menggunakan *Records* (seperti objek JS namun murni struktural) untuk menyimpan sekumpulan data terkait. Setiap bagian dari Record disebut *Field*.

## 3. Internal Methods

Metode yang dipanggil oleh spesifikasi untuk menjalankan operasi murni. Misalnya, saat Anda memanggil `obj.prop`, spesifikasi memerintahkan engine menjalankan internal method `[[Get]]`.

Memahami notasi ini adalah kunci untuk membaca bedah mendalam di **SR-05_OrdinaryAndExoticObjects**.
