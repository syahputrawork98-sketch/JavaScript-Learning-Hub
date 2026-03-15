# Bab 02: Reference Behavior (Alamat Memori vs Nilai)

Salah satu sumber bug paling umum di JavaScript adalah kesalahpahaman tentang bagaimana objek dan array disimpan. Tidak seperti tipe primitif (String, Number) yang disimpan sebagai "Nilai", objek disimpan sebagai **Referensi** (Clause 6.1.7 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Tipe Primitif** adalah **Uang Tunai**. Jika kamu memberikan Rp10.000 ke temanmu, sekarang ada dua lembar uang. Jika temanmu membakar uangnya, uangmu tetap aman.  
> **Tipe Objek** adalah **Alamat Rumah**. Jika kamu memberikan alamat rumahmu ke temanmu, sekarang ada dua orang yang tahu alamat tersebut. Jika temanmu mengecat pintu rumah itu menjadi merah, saat kamu pulang, kamu akan melihat pintu rumahmu juga sudah merah.

> **Analogi Panjang (Google Docs):**  
> Bayangkan kamu sedang mengerjakan sebuah dokumen.
> - **Primitif (Pass by Value)**: Kamu mengunduh dokumen itu sebagai file `.docx` dan mengirimkannya via email. Sekarang ada dua file yang identik. Jika temanmu mengedit filenya, file di komputermu tidak berubah.
> - **Objek (Pass by Reference)**: Kamu mengirimkan *link* (tautan) Google Docs. Sekarang ada dua orang yang memegang tautan yang sama. Kedua orang ini melihat dan mengedit **satu dokumen yang sama** di internet. Siapapun yang melakukan perubahan, perubahan itu akan terlihat oleh semua pemegang tautan.

---

## Bagaimana Referensi Bekerja?

Saat kamu menulis `const a = { n: 1 }`, variabel `a` tidak berisi objek tersebut secara fisik. Variabel `a` berisi **Alamat Memori** (Pointer) yang menunjuk ke lokasi objek tersebut di dalam *Memory Heap*.

### Efek pada Perbandingan (Equality)
Karena yang dibandingkan adalah "Alamat Tautan", bukan "Isi Dokumen", maka dua objek yang terlihat kembar tetap dianggap berbeda:
```javascript
const obj1 = { id: 1 };
const obj2 = { id: 1 };
console.log(obj1 === obj2); // false (Alamat rumahnya berbeda)
```

### Efek pada Mutasi
Saat kamu mengirim objek ke sebuah fungsi, kamu sebenarnya mengirimkan "Salinan Alamat-nya". Karena fungsinya sekarang memegang alamat yang sama, perubahan apapun di dalam fungsi akan memengaruhi objek asli di luar fungsi.

## Cara Menghindari Jebakan Referensi

Untuk menghindari perubahan yang tidak disengaja, seorang Senior Architect biasanya melakukan **Cloning (Penggandaan)**:
- **Shallow Clone**: Menggunakan Spread Operator `{...obj}`. Hanya lapis pertama yang disalin.
- **Deep Clone**: Menggunakan `structuredClone()` untuk menyalin objek beserta seluruh anak-cucunya secara total.

## Contoh Eksekusi
Lihat pembuktian mutasi referensi dan teknik *cloning* yang aman pada folder [examples/](./examples/).
