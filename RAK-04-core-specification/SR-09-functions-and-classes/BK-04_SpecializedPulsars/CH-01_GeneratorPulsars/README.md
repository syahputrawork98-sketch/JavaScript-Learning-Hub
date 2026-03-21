# CH-01: Generator Pulsars (Iterative Energy)

> **"Terkadang aliran energi tidak perlu dikirimkan sekaligus. `Generator Pulsars` adalah 'Pulsar Iteratif' (Iterative Energy)—generator khusus yang bisa menghentikan produksinya di tengah jalan dan melanjutkannya kembali saat dibutuhkan."**

*Pemetaan ECMA-262: Clause 15.5*

## 1. Mental Model: "The Pauseable Plant"

Generator ditandai dengan tanda bintang (`function*`). Ia tidak langsung menjalankan kode saat dipanggil, melainkan mengembalikan sebuah **Iterator Objects**.
- **`yield`**: Titik pemberhentian (Pause). Ia mengirimkan sinyal keluar dan membekukan seluruh status internal generator.
- **`.next()`**: Pemicu kelanjutan (Resume). Ia membangunkan generator untuk melanjutkan ke `yield` berikutnya.

---

## 2. Aliran Data Dua Arah

Generator adalah satu-satunya unit yang mengizinkan komunikasi dua arah di tengah eksekusi. Anda bisa mengirimkan energi BARU ke dalam generator melalui argumen di dalam `.next(value)`, yang akan diterima oleh variabel di sisi kiri `yield`.

---

## 3. Praktik Lapangan (Lab)

```javascript
function* energyPulsar() {
    console.log("Pulsar Start");
    yield "PULSE_1"; // Pausing...
    console.log("Pulsar Resumed");
    yield "PULSE_2";
    return "PULSE_COMPLETE";
}

const it = energyPulsar();
console.log(it.next().value); // "PULSE_1"
console.log(it.next().value); // "PULSE_2"
```

---

## Arsitek Mindset: Iterasi Kustom

Sebagai arsitek Hub:
- Gunakan **Generators** saat Anda berurusan dengan aliran data yang sangat besar (seperti membaca file raksasa baris demi baris) agar memori Hub tidak kehabisan daya.
- Paham bahwa generator adalah fondasi bagi banyak pustaka manajemen state dan aliran asinkron yang kompleks di dalam ekosistem Grid.

---
*Status: [status.md](../../../docs/status.md)*
