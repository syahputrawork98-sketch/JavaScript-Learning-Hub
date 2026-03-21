# CH-02: `package.json` (The Project Manifest)

> **"Setiap Hub yang menggunakan paket luar harus memiliki manifestasi — sebuah file `package.json` yang mencatat identitas, skrip, dan daftar kargo (dependensi) sistem tersebut."**

## 🔗 Source Hub
- **Primary Source**: [npm Documentation - package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- **Technical Guide**: [Working with package.json](https://nodesource.com/blog/the-anatomy-of-a-package-json/)

## 🎓 Senior Terminology
- **Project Metadata**: Informasi dasar tentang proyek seperti nama, versi, lisensi, dan deskripsi singkat.
- **Custom Scripts**: Daftar perintah pendek yang didefinisikan untuk menjalankan tugas-tugas otomatis (seperti `npm start` atau `npm test`).
- **DevDependencies**: Daftar paket yang hanya dibutuhkan selama tahap pengembangan (seperti alat pengetesan) dan tidak disertakan dalam versi produksi.

## 1. Mental Model: "The Logistics Manifest"

Bayangkan **`package.json`** sebagai **Manifes Logistik** resmi Hub Energi Anda. File ini mencatat segalanya: siapa pemimpin Hub (Author), apa nama proyeknya, apa saja kargo (Dependensi) yang dibutuhkan, dan instruksi khusus (Scripts) untuk menyalakan atau menguji sistem. Tanpa manifes ini, npm tidak akan tahu bagaimana cara membangun kembali Hub Anda dari nol.

![Logistics Manifest](./assets/package_json.svg)

---

## 2. Daftar Kargo (Dependencies)

Ada dua kategori utama kargo dalam manifes:
- **`dependencies`**: Komponen inti yang **harus ada** agar Hub bisa beroperasi (misal: mesin database).
- **`devDependencies`**: Alat bantu yang hanya dibutuhkan teknisi saat membangun atau mengetes Hub (misal: alat ukur, tester sirkuit).

```json
"dependencies": {
  "express": "^4.18.2"
},
"devDependencies": {
  "jest": "~29.0.0"
}
```

---

## 3. Simbol Versi (`^` & `~`)

Perhatikan simbol di depan nomor versi:
- **`^` (Caret)**: "Boleh diperbarui ke fitur baru (Minor), asalkan tidak merusak (Major)."
- **`~` (Tilde)**: "Hanya perbarui jika ada perbaikan kecil (Patch)."

---

## 4. Instruksi Otomatis (Scripts)

Bagian `scripts` memungkinkan Anda membuat perintah pendek untuk tugas yang rumit:

```json
"scripts": {
  "start": "node index.js",
  "build": "webpack --mode production",
  "test": "jest"
}
```
Cukup panggil `npm run build`, dan sistem akan menjalankan perintah panjang di belakangnya secara otomatis.

---

## Arsitek Mindset: Gembok Logistik (`package-lock.json`)

Setiap kali Anda memasang paket, npm akan membuat atau memperbarui file **`package-lock.json`**. Jangan pernah menghapusnya! File ini adalah "Gembok Logistik" yang mencatat versi eksak (hingga bit terakhir) dari setiap dependensi. Ini menjamin bahwa jika teknisi lain membangun Hub yang sama di tempat lain, hasilnya akan 100% identik dengan milik Anda.

---

## Hands-on: Lab Manifes Proyek
Buka file `examples/package_json_lab.json` untuk melihat bedah anatomi manifes proyek Hub yang lengkap dan mencoba menambahkan skrip kustom Anda sendiri.

---
*Back to [Package Ecosystem](../README.md)*
