# CH-03: Date Object (Temporal Management)

> **"Segala aktivitas di Hub Energi membutuhkan pelacakan waktu yang presisi. Date Object adalah instrumen utama kita untuk mengukur momen dan durasi."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- **Technical Reference**: [ECMA-262 - Date Objects](https://tc39.es/ecma262/#sec-date-objects)

## 🎓 Senior Terminology
- **Epoch Time**: Titik awal perhitungan waktu di dunia komputer (1 Januari 1970 00:00:00 UTC).
- **Unix Timestamp**: Jumlah milidetik (atau detik) yang berlalu sejak Epoch Time hingga saat ini.
- **Timezone Offset**: Selisih waktu antara waktu lokal sistem dengan waktu standar UTC.

## 1. Mental Model: "The Chronometer"

Banyangkan **Date Object** sebagai **Kronometer Universal** di Hub Energi kita. Ia tidak hanya mencatat waktu lokal, tapi juga menghubungkan kita ke aliran waktu universal (UTC) yang dimulai sejak "Ledakan Besar Digital" (Epoch) pada 1 Januari 1970. Setiap milidetik yang berlalu adalah denyut nadi yang dicatat oleh Kronometer ini.

![The Chronometer](./assets/chronometer.svg)

---

## 2. Mengambil Waktu (Getter Methods)

Untuk membaca data dari Kronometer, kita menggunakan metode *Getter*:
- **`getFullYear()`**: Tahun (4 digit).
- **`getMonth()`**: Bulan (0-11) — **Peringatan**: Januari adalah `0`.
- **`getDate()`**: Tanggal (1-31).
- **`getDay()`**: Hari dalam seminggu (0-6).
- **`getTime()`**: Unix Timestamp (milidetik sejak Epoch).

---

## 3. Mengatur Waktu (Setter Methods)

Anda bisa memutar jarum jam Kronometer secara manual:
- **`setFullYear(2030)`**: Melompat ke masa depan.
- **`setHours(0, 0, 0)`**: Mengatur ulang ke tengah malam.

```javascript
const event = new Date();
event.setMonth(11); // Mengatur ke Desember
```

---

## 4. UTC vs Waktu Lokal

JavaScript selalu mencatat waktu dalam UTC di latar belakang, tapi menampilkannya dalam waktu lokal sistem Anda.

**Arsitek Mindset**: Dalam aplikasi Hub yang terdistribusi, **selalu simpan dan kirim waktu dalam format UTC** (misal: `toISOString()`). Lakukan konversi ke waktu lokal hanya saat data akan ditampilkan ke pengguna untuk menghindari kebingungan zona waktu (*Timezone Hell*).

---

## Hands-on: Penjadwal Reset Hub
Buka file `examples/date_lab.js` untuk membuat script yang menghitung sisa waktu hingga jadwal reset mingguan Hub berikutnya menggunakan manipulasi objek Date.

---
*Back to [Numbers & Dates](../README.md)*
