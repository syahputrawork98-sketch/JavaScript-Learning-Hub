# 11 - Error Handling

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca dapat:
- memahami error sebagai bagian normal dari program
- menangani error dengan `try...catch`
- membuat error sendiri menggunakan `throw`

## Konsep Utama

- `try`
- `catch`
- `throw`
- objek `Error`

## Penjelasan

Error handling dipakai agar program tidak langsung berhenti tanpa pesan yang jelas saat terjadi masalah.

Alur dasar:
- `try`: blok kode yang berpotensi error
- `catch`: blok untuk menangkap dan menangani error
- `throw`: membuat error secara sengaja saat kondisi tidak valid

Dengan error handling, kita bisa memberi pesan yang lebih informatif dan menjaga alur aplikasi tetap terkontrol.

## Contoh Kode

### Contoh 1 - Dasar try catch

```javascript
try {
  const result = JSON.parse("{invalid json}")
  console.log(result)
} catch (error) {
  console.log("Terjadi error parsing:", error.message)
}
```

### Contoh 2 - Throw Error untuk Validasi Input

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Pembagi tidak boleh 0")
  }

  return a / b
}

try {
  console.log(divide(10, 2)) // 5
  console.log(divide(10, 0)) // error
} catch (error) {
  console.log("Gagal menjalankan operasi:", error.message)
}
```

### Contoh 3 - Mini Kasus: Validasi Data Pengguna

```javascript
function registerUser(name, age) {
  if (!name) {
    throw new Error("Nama wajib diisi")
  }

  if (age < 17) {
    throw new Error("Usia minimal 17 tahun")
  }

  return `User ${name} berhasil didaftarkan`
}

try {
  const message = registerUser("Rina", 20)
  console.log(message)
} catch (error) {
  console.log("Registrasi gagal:", error.message)
}
```

## Analogi Singkat (Opsional)

Error handling seperti prosedur darurat. Saat ada masalah, program tidak panik, tapi masuk ke jalur penanganan agar tetap aman dan informatif.

## Eksperimen Kode

Coba ganti input function agar memicu error dan non-error.

```javascript
function getDiscount(percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Persentase diskon harus 0-100")
  }

  return percent / 100
}

try {
  console.log(getDiscount(25))
  console.log(getDiscount(120))
} catch (error) {
  console.log("Input tidak valid:", error.message)
}
```

Pertanyaan refleksi:
1. Kenapa `throw` berguna untuk validasi input?
2. Apa risiko jika error tidak ditangani sama sekali?

## Cakupan dan Batasan

- Dibahas di bab ini: error handling dasar untuk kode sinkron.
- Tidak dibahas di bab ini: propagation async error lanjutan dan error boundary pada framework.

## Latihan

1. Buat function `parseNumber(text)` yang melempar error jika input bukan angka.
2. Tangkap error function itu dengan `try...catch`.
3. Tampilkan pesan sukses jika parsing berhasil, dan pesan error jika gagal.

## Ringkasan

- Error handling membantu program tetap terkontrol saat terjadi masalah.
- `try...catch` menangkap error dari blok yang berisiko.
- `throw` dipakai untuk menandai kondisi tidak valid secara eksplisit.
