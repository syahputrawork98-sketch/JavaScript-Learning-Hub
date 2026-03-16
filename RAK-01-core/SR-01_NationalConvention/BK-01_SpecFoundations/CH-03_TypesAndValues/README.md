# CH-03: Types and Values

Dalam spesifikasi, kita sering melihat kalimat seperti: *"If Type(x) is Number..."*. Tapi apa sebenarnya perbedaan antara **Type** dan **Value**? Memahami ini adalah kunci untuk membaca Clause 6.

## Mental Model: "Himpunan (Set) vs Anggota"
Bayangkan sebuah keranjang buah.
- **Type** adalah kategori keranjangnya (misal: "Buah-buahan"). Ini didefinisikan sebagai *himpunan dari nilai-nilai data*.
- **Value** adalah buah apel yang ada di dalamnya. Ini adalah *anggota* dari himpunan tersebut.

---

## 1. Definisi Formal Type
Menurut Clause 4.4, **Type** adalah *"Set of data values as defined in Clause 6"*.
Spesifikasi membagi Type menjadi dua kategori besar:
1. **Language Types:** Tipe yang bisa dilihat langsung oleh pengembang JS (Undefined, Null, Boolean, String, Symbol, Number, BigInt, Object).
2. **Specification Types:** Tipe internal yang hanya digunakan untuk membantu penulisan algoritma (misal: Reference, Completion Record, Property Descriptor). Anda tidak akan pernah bisa mengakses ini di kode JavaScript biasa.

## 2. Definisi Formal Value
**Value** adalah *"Member of a type"*.
- Jika Anda menulis `42`, itu adalah sebuah **Value**.
- Value tersebut memiliki **Type** "Number".

## 3. Kasus Unik: "Undefined"
Inilah yang sering membingungkan:
- **Undefined Type:** Tipe data yang **hanya memiliki tepat satu nilai**.
- **undefined Value:** Satu-satunya nilai yang dimiliki oleh *Undefined Type*.

Hal yang sama berlaku untuk **Null Type** dan **null Value**. Mereka adalah himpunan dengan anggota tunggal (Singleton Set).

---

## Mengapa Pembedaan Ini Penting?
Algoritma spesifikasi seringkali melakukan pengecekan tipe sebelum melakukan operasi.
> *Example:* "If Type(x) is not Object, throw a TypeError exception."

Artinya, algoritma tersebut memastikan bahwa `x` adalah anggota dari himpunan *Object*. Jika `x` ternyata anggota dari himpunan *Number*, maka operasi tersebut akan gagal secara statis atau runtime.

---

## Tantangan Kecil
Coba pikirkan tentang **Boolean**. Berapa banyak **Value** yang ada di dalam **Boolean Type**? (Jawabannya: tepat dua, yaitu `true` dan `false`).

---
> [!NOTE]
> **Catatan Arsitek:** Di JavaScript, kita sering menggunakan `typeof`. Ingat bahwa `typeof` adalah operator bahasa yang *mendekati* konsep Type di spesifikasi, tapi tidak selalu 100% akurat (contoh: `typeof null` menghasilkan `"object"`, padahal di spesifikasi **Null** adalah tipe datanya sendiri).
