# CH-11: Identity and Values

Mengapa `[] === []` hasilnya `false`, tapi `42 === 42` hasilnya `true`? Jawabannya terletak pada konsep **Identity** yang didefinisikan secara formal di spesifikasi.

## Mental Model: "Klon vs Barang yang Sama"
- **Value (Primitif):** Bayangkan dua butir telur yang identik. Jika isinya sama, mereka dianggap sama.
- **Identity (Object):** Bayangkan dua orang kembar identik. Meskipun wajahnya sama (isi properti sama), mereka adalah dua individu yang berbeda. Jika individu A dipukul, individu B tidak merasa sakit.

---

## 1. Kesamaan Nilai (Value Equality)
Untuk tipe primitif (String, Number, Boolean, dll), spesifikasi menggunakan algoritma **SameValue** atau **Strict Equality**.
- Dua nilai dianggap sama jika mereka merepresentasikan data yang sama persis dalam himpunan tipenya.

## 2. Identitas Objek (Object Identity)
Setiap kali Anda membuat objek baru (misal: `{}` atau `[]`), spesifikasi memerintahkan mesin untuk mengalokasikan "identitas unik" di memori.
- `obj1 === obj2` hanya akan bernilai `true` jika keduanya merujuk ke **identitas unik yang sama**.

## 3. Konsep Nilai Matematika (Mathematical Value)
Spesifikasi sering menggunakan istilah *Mathematical Value* untuk memisahkan angka abstrak dengan representasi teknisnya di komputer.
- Angka `10` dalam desimal dan `0xA` dalam heksadesimal memiliki *Mathematical Value* yang sama.

---

## Mengapa Arsitek Harus Tahu Ini?
Kesalahan memahami identitas objek adalah sumber utama bug "Memory Leak" dan "Side Effects" di aplikasi besar. Saat Anda mengoper objek ke fungsi lain, Anda tidak sedang mengoper nilainya, melainkan **identitasnya**. Perubahan di dalam fungsi akan mengubah objek aslinya.

---

## Tantangan Kecil
Bagaimana dengan `NaN === NaN`?
(Jawabannya: **false**. Meskipun secara matematis mereka sama-sama "Bukan Angka", spesifikasi mendefinisikan bahwa untuk operator `===`, `NaN` tidak pernah sama dengan dirinya sendiri. Gunakan `Object.is()` untuk mengecek kesamaan identitas yang lebih presisi).

---
> [!NOTE]
> **Key Takeaway:** Primitif dibandingkan berdasarkan "Apa isinya?", sedangkan Objek dibandingkan berdasarkan "Di mana dia berada (di memori)?".
