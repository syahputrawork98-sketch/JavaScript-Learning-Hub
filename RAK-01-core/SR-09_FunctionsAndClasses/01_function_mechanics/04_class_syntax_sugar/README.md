# Bab 04: Class Syntax Sugar (Casing Modern Mesin Klasik)

Sejak ES6, JavaScript memiliki kata kunci `class`. Namun, penting bagi seorang Senior Architect untuk memahami bahwa ini **bukan** kelas sejati seperti di Java. Ini hanyalah "Gula Sintaksis" (*Syntactic Sugar*) di atas sistem Prototype yang sudah kita pelajari (Clause 15.7 - 15.8 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Class** adalah **Casing Modern** untuk ponsel lama. Di dalamnya tetap mesin yang sama (Prototype), tapi dari luar terlihat jauh lebih rapi, elegan, dan mudah digunakan.

> **Analogi Panjang (Konsol Game Retro):**  
> Bayangkan kamu memiliki konsol game lama yang berantakan dengan kabel (Constructor & Prototype manual).
> - **Class Syntax**: Adalah kotak konsol modern yang membungkus semua kabel tersebut. 
> - **`constructor`**: Adalah tombol 'Power' yang menyiapkan mesin saat dinyalakan.
> - **`extends`**: Adalah slot catridge yang memungkinkan konsol baru menggunakan *library* atau kemampuan dari konsol lama secara otomatis.
> - **`super()`**: Adalah kabel penghubung yang harus kamu colokkan ke mesin induk agar fitur-fitur lama bisa mengalir ke mesin baru.

---

## Fitur Utama Class

1. **`constructor`**: Method spesial yang dijalankan saat `new` dipanggil. Tempat inisialisasi *Own Properties*.
2. **Methods**: Secara otomatis ditaruh di Prototype objek.
3. **`extends`**: Memudahkan pembuatan *Prototype Chain* antar "Class".
4. **`super()`**: Memanggil constructor atau method milik indukan.
5. **Static Methods**: Method yang menempel pada "Class" itu sendiri, bukan pada instans objeknya.

## Mengapa Menggunakan Class?

- **Readability**: Jauh lebih mudah dibaca dan dipahami oleh pengembang yang terbiasa dengan bahasa OOP lain.
- **Strict Mode**: Isi dari class secara otomatis berjalan dalam *Strict Mode*.
- **Hoisting**: Berbeda dengan function, `class` **tidak** terkena hoisting. Kamu harus mendefinisikannya sebelum menggunakannya.

## Mengapa Arsitek Harus Peduli?

Seorang Arsitek tidak boleh tertipu oleh indahnya sintaksis:
- Pahami bahwa penulisan `class` yang salah (seperti lupa `super()`) akan menyebabkan error internal pada *Environment Record*.
- Tahu kapan harus menggunakan komposisi (*Composition*) daripada pewarisan (*Inheritance*) meskipun `extends` terlihat sangat mudah digunakan.
- Gunakan `static` untuk fungsi utilitas yang tidak membutuhkan data dari instans objek.

## Contoh Eksekusi
Lihat bagaimana `class` diterjemahkan menjadi Prototype dan penggunaan `super` pada folder [examples/](./examples/).
