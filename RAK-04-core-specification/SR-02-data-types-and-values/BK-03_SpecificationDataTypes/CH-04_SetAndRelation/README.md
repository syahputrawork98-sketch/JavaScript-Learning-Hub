# CH-04: Set and Relation Specification Types

Dalam logika matematika, kita sering harus memastikan apakah suatu elemen unik atau bagaimana hubungan antara dua hal. Spesifikasi menggunakan **Set** dan **Relation** (Clause 6.2.3).

## Mental Model: "Himpunan Eksklusif dan Peta Hubungan"
- **Set:** Seperti sebuah grup WhatsApp pribadi. Seseorang tidak bisa masuk dua kali ke grup yang sama. Isinya unik.
- **Relation:** Seperti silsilah keluarga. Dia menjelaskan hubungan antara A dan B (misal: A adalah anak dari B).

---

## 1. Set Type
Set digunakan saat spesifikasi ingin menjamin tidak ada duplikasi data.
- **Contoh Penggunaan:** Saat mesin JS menarik daftar nama variabel dalam sebuah fungsi (`BoundNames`), ia menggunakan Set untuk memastikan tidak ada nama yang tercatat dua kali.

## 2. Relation Type
Relation adalah sekumpulan pasangan terurut (*ordered pairs*).
- **Contoh Penggunaan:** Spesifikasi menggunakan Relation untuk melacak hubungan antara modul-modul yang saling mengimpor, atau urutan prioritas dalam penanganan error.

## 3. Operasi pada Set/Relation
Spesifikasi sering melakukan operasi matematika standar seperti:
- **Member of:** Apakah X ada di dalam Set?
- **Union:** Menggabungkan dua Set.
- **Subset:** Apakah Set A adalah bagian dari Set B?

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami Set dan Relation di level spesifikasi membantu Anda memahami mengapa beberapa perilaku JavaScript terasa sangat "Matematika". Misalnya, mengapa sebuah modul hanya dieksekusi sekali meskipun di-import berkali-kali? Karena spesifikasi melacaknya dalam sebuah **Set** (himpunan unik) dari modul yang sudah dimuat.

---

## Tantangan Kecil
Apa perbedaan antara `List` (CH-03) dan `Set` (CH-04)?
(Jawabannya: **List** peduli pada urutan dan mengizinkan duplikasi (seperti daftar belanja). **Set** tidak peduli pada urutan tapi melarang duplikasi (seperti koleksi benda unik)).

---
> [!NOTE]
> **Key Takeaway:** Set menjamin keunikan, Relation menjamin keterhubungan. Keduanya adalah alat logika untuk menjaga integritas data spesifikasi.
