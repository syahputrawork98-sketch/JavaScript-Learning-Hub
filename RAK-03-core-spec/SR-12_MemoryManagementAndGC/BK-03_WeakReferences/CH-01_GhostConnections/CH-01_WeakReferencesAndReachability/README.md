# Bab 01: Weak References & Reachability (Tali Tipis)

JavaScript mengelola memori secara otomatis menggunakan *Garbage Collector* (GC). GC hanya menghapus objek yang sudah tidak dapat dijangkau (*Unreachable*). **WeakRef** memungkinkan kita memegang referensi ke objek tanpa menghalangi GC untuk menghapusnya (Clause 28.3 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Regular Reference** adalah **Tali Tambang**. Selama kamu memegang talinya, Kapal (Objek) tidak akan hanyut terbawa arus (GC). **WeakRef** adalah **Tali Tipis** atau **Bayangan Tali**. Kamu bisa melihat ke mana arah kapal tersebut, tapi tali itu sangat rapuh. Jika tidak ada orang lain yang memegang tali tambang ke kapal itu, arus GC akan tetap menghanyutkan kapal tersebut meskipun kamu masih memegang tali tipisnya.

> **Analogi Panjang (Layanan Penitipan Topi):**  
> Bayangkan sebuah restoran dengan layanan penitipan topi:
> - **Strong Reference**: Kamu memberikan topi dan mendapatkan nomor antrean. Restoran wajib menjaga topimu tetap ada selama kamu memegang nomor tersebut.
> - **WeakRef (Ghost Tether)**: Restoran memberimu nomor, tapi dengan syarat: "Jika rak kita penuh dan topi ini tidak dipakai oleh siapa pun di meja makan, kita berhak membuangnya kapan saja." Kamu bisa mengecek ke rak menitipkan topi tersebut menggunakan nomor resimu (`deref()`). Jika topinya masih ada, kamu bisa mengambilnya; jika sudah dibuang, kamu hanya mendapatkan udara kosong (*undefined*).

---

## Mekanika WeakRef

1. **`new WeakRef(target)`**: Membuat referensi lemah ke objek target.
2. **`.deref()`**: Cara untuk menjangkau kembali objek target. Jika objek belum dihapus GC, ia mengembalikan objek tersebut; jika sudah dihapus, ia mengembalikan `undefined`.

## Reachability & GC

Sebuah objek dianggap tetap hidup jika:
- Ia dirujuk langsung oleh variabel di *Execution Context* yang masih aktif.
- Ia dirujuk oleh objek lain yang masih hidup (*Strong reference chain*).
- **Penting**: Dirujuk hanya oleh `WeakRef` **TIDAK** membuatnya tetap hidup.

## Mengapa Arsitek Harus Peduli?

- **Smart Caching**: Kamu bisa membuat cache untuk objek besar (seperti gambar atau hasil query berat). Jika memori hampir penuh, sistem bisa menghapus objek tersebut secara otomatis, dan kamu hanya perlu memproses ulang jika `.deref()` mengembalikan `undefined`.
- **Avoiding Memory Leaks**: Membantu mencegah kebocoran memori pada sistem yang memiliki banyak referensi silang antar objek jangka panjang.

## Contoh Eksekusi
Lihat perilaku `deref()` saat referensi kuat dihapus pada folder [examples/](./examples/).
