# CH-02: Throwing Errors (Triggering Alarms)

> **"Terkadang, Anda sebagai pengelola Hub harus memutuskan kapan sebuah situasi dianggap sebagai 'Keadaan Darurat' dan mengaktifkan alarm secara manual. Pernyataan `throw` adalah tombol alarm yang menghentikan arus seketika dan mengirim sinyal ke Kotak Sekering terdekat."**

Pernyataan `throw` memungkinkan kita untuk membuat (*trigger*) pengecualian kustom ketika kondisi tertentu tidak terpenuhi.

## 1. Mental Model: "Triggering Alarms"

Bayangkan Anda memantau sensor suhu. Jika suhu mencapai titik didih, Anda tidak ingin menunggu sistem 'meledak' secara alami. Anda secara proaktif **menekan tombol alarm** (`throw`) untuk memberitahu sistem bahwa ada bahaya besar.

- **`throw`**: Menekan tombol alarm.
- **`Error` Object**: Laporan resmi kenapa alarm ditekan.

---

## 2. Menggunakan Throw

JavaScript dapat melempar nilai apa pun (string, number, objek), namun secara standar kita melempar objek `Error` agar mendapatkan informasi pelacakan (*stack trace*) yang lengkap.

```javascript
function cekOksigen(level) {
    if (level < 20) {
        throw new Error("LEVEL OKSIGEN TERLALU RENDAH!");
    }
    return "Tingkat Oksigen Aman.";
}

try {
    console.log(cekOksigen(10));
} catch (e) {
    console.warn("ALARM BERBUNYI:", e.message);
}
```

---

## 3. Custom Error Types

Dalam Hub yang besar, Anda mungkin ingin membedakan antara "Alarm Bahan Bakar" dan "Alarm Pintu Terbuka". Anda bisa mengidentifikasinya lewat pesan atau jenis objeknya.

---

## Arsitek Mindset: Defensive Programming

Sebagai arsitek Hub:
- Gunakan `throw` untuk memvalidasi input fungsi. Jangan biarkan data "beracun" (invalid) masuk lebih dalam ke dalam sirkuit inti.
- Melempar error proaktif di awal (*fail fast*) jauh lebih baik daripada membiarkan sistem berjalan dengan data yang salah dan menyebabkan bug misterius di kemudian hari.

---

## Hands-on: Lab Tombol Alarm
Buka file `examples/alarm_trigger_lab.js` untuk berlatih membangun sistem validasi kaku yang secara otomatis memicu alarm saat mendeteksi input energi yang tidak masuk akal.

---
*Status: [status.md](../../../status.md)*
