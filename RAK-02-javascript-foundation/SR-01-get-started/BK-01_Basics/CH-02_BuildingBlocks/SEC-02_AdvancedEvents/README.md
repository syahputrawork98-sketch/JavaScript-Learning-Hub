# CH-02: Advanced Events (The Sensor Array)

> **"Sebuah Hub yang cerdas tidak hanya menunggu klik, ia mendeteksi setiap getaran, ketukan, dan sinyal data yang dikirimkan pengguna."**

Dalam bab sebelumnya, kita sudah mengenal klik tombol. Sekarang, kita akan membangun **Sensor Array** — sistem yang memantau berbagai jenis interaksi pengguna untuk memberikan respons yang lebih halus dan canggih.

## 1. Mental Model: "Sensor Array"

Bayangkan Hub Anda memiliki berbagai jenis sensor:
- **Keyboard Sensor (`keydown`)**: Mendeteksi "Command Data" yang diketik pengguna.
- **Motion Sensor (`mousemove`)**: Melacak posisi "Maintenance Drone" (kursor mouse).
- **Batch Data Sensor (`submit`)**: Memproses kiriman data massal dari formulir.

---

## 2. Mendeteksi Isi Sinyal: Event Object

Setiap kali event terjadi, JavaScript mengirimkan **Data Paket** yang berisi detail kejadian. Kita bisa menangkapnya dalam parameter fungsi (biasanya dinamai `e` atau `event`).

```javascript
document.addEventListener("keydown", (event) => {
    console.log(`Tombol ditekan: ${event.key}`);
});
```

---

## 3. Kontrol Aliran: `preventDefault()`

Beberapa komponen memiliki perilaku bawaan (default) yang kadang perlu kita interupsi. Contohnya: Formulir (`<form>`) akan me-refresh halaman saat dikirim. Kita menggunakan `preventDefault()` agar koneksi data tidak terputus.

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Jangan refresh sirkuit!
    // Proses data secara internal
});
```

---

## 4. Target Sinyal: `event.target`

Kita bisa mengetahui komponen spesifik mana yang mengirimkan sinyal, bahkan jika kita mendengarkan di area yang lebih luas.

```javascript
document.body.addEventListener("click", (event) => {
    console.log(`Sinyal datang dari: ${event.target.tagName}`);
});
```

---

## Arsitek Mindset: User Experience Kinect

Sebagai arsitek, interaksi yang baik adalah yang terasa responsif. Gunakan event `input` untuk validasi daya secara *real-time* daripada menunggu tombol kirim ditekan. Semakin cepat feedback yang diberikan sistem, semakin "berenergi" pengalaman pengguna.

---

## Hands-on: Dashboard Sensor
Buka file `examples/sensor_array_demo.html` untuk mencoba dashboard yang memantau ketikan keyboard dan input formulir secara langsung.

---
*Status: [status.md](../../../../status.md)*
