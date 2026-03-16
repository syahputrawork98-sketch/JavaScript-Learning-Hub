# CH-01: Introduction to Spec Terms

Mengapa kita harus peduli dengan definisi formal di Clause 4.4? Mengapa tidak langsung belajar koding saja?

## Mental Model: "Rambu Lalu Lintas di Negara Asing"
Bayangkan Anda sedang belajar mengemudi di negara dengan peraturan yang sangat ketat (Spesifikasi ECMA). Sebelum Anda menyalakan mesin (Algoritma), Anda harus tahu arti dari setiap simbol dan istilah yang digunakan oleh petugas polisi (Komite TC39).

Jika Anda salah mengartikan kata "Object" dalam konteks sehari-hari dengan "Object" dalam konteks Spesifikasi, Anda akan tersesat saat membaca bab-bab yang lebih berat.

---

## 1. Definisi Formal vs Intuisi
Dalam percakapan sehari-hari, "Object" mungkin berarti apapun yang memiliki kurung kurawal `{}`. Namun dalam spesifikasi, **Object** didefinisikan secara lebih abstrak.

| Istilah | Intuisi Umum (Sering Salah) | Definisi Spesifikasi (Benar) |
| :--- | :--- | :--- |
| **Object** | Sesuatu yang punya key/value. | Anggota dari tipe *Object* yang merupakan kumpulan properti. |
| **Type** | Jenis data (string, number). | Himpunan nilai data (Clause 6). |
| **Prototype** | Objek induk. | Objek yang memberikan berbagi properti kepada objek lain. |

## 2. Mengapa Clause 4.4 adalah "Kamus Besar"?
Clause 4.4 di ECMA-262 menyediakan fondasi semantik. Jika sebuah bab menyebutkan *"An exotic object..."*, Anda tidak perlu menebak-nebak apakah itu objek yang "keren" atau "aneh". Anda cukup merujuk ke Clause 4.4 untuk melihat batasan teknisnya.

## 3. Struktur Pengetahuan
Sepanjang buku ini, kita akan membedah istilah-istilah ini satu per satu:
1. **Terminology Dasar:** Implementation-defined, Host-defined.
2. **Object Hierarchy:** Ordinary vs Exotic, Standard vs Built-in.
3. **Behavioral Terms:** Callable, Constructor, Well-known.

---
> [!TIP]
> **Pro-Tip:** Selalu simpan tab [ECMA-262 Clause 4.4](https://tc39.es/ecma262/#sec-terms-and-definitions) terbuka saat Anda mulai mempelajari Sub-Rak Core. Ini adalah kompas Anda.

## Tantangan Kecil
Coba cari kata **"Undefined"** di Clause 4.4. Apakah ada perbedaan antara *Undefined Value* dan *Undefined Type*? (Kita akan bahas ini di CH-03).
