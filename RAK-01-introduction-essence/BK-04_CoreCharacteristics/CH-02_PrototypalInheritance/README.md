# CH-02: Prototypal Inheritance (The Gene)

**"Warisan Tanpa Kelas (Asli)"**
*Target: Memahami mekanisme pewarisan berbasis prototipe dalam waktu < 2 menit.*

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- **Deep Dive**: [JavaScript.info - Prototypes & Inheritance](https://javascript.info/prototypes)

## 1. Definisi & Konsep (The Logic)
Berbeda dengan Java atau C++ yang menggunakan *Class-based Inheritance*, JavaScript menggunakan **Prototypal Inheritance**. Setiap objek memiliki tautan internal ke objek lain (prototipenya) untuk mewarisi properti dan metode.

### Terminologi Utama (Senior Terms)
- **Prototype Chain**: Rantai objek yang dicari oleh engine saat mencoba mengakses properti yang tidak ada pada objek itu sendiri.
- **`__proto__` / `[[Prototype]]`**: Tautan internal yang menghubungkan antrian objek.
- **Behavior Delegation**: Konsep di mana objek "mendelegasikan" tugas ke prototipenya daripada menduplikasi fungsi.

## 2. Rasionalitas (Why & How?)
Mekanisme ini jauh lebih hemat memori dan fleksibel dibanding sistem kelas tradisional. Anda bisa mengubah perilaku ribuan objek secara instan hanya dengan memodifikasi prototipenya.

### Analogi Mendalam
Bayangkan sebuah **Resep Keluarga**. Anda tidak perlu menulis ulang resep itu di setiap buku masak yang Anda miliki. Anda cukup memiliki satu "Resep Utama" (Prototype). Setiap kali Anda ingin memasak, Anda merujuk ke Resep Utama tersebut. Jika ada perubahan di Resep Utama, semua anggota keluarga yang merujuk ke sana akan langsung mendapatkan update cara memasak yang baru.

## 3. Implementasi Utama (The Lab)
> [!NOTE]
> Unit ini tidak membutuhkan Lab Praktis/Visualisasi karena bersifat penjelasan sejarah/konsep naratif (RAK-01 Exception).

## 4. Model Mental Visual (The Assets)
> [!NOTE]
> Unit ini tidak membutuhkan Lab Praktis/Visualisasi karena bersifat penjelasan sejarah/konsep naratif (RAK-01 Exception).

---
*Back to [Core Characteristics](../README.md)*
