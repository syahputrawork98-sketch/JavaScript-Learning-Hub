# CH-10: Interactive Hub (Basic Browser Interaction)

> **"Browser adalah Panel Kontrol Visual tempat energi JavaScript diwujudkan menjadi aksi nyata yang bisa dilihat dan dirasakan."**

Hingga bab ini, kita hanya melihat hasil kerja JavaScript di dalam log terminal (hitam-putih). Namun, kekuatan sesungguhnya dari JavaScript adalah kemampuannya untuk berinteraksi dengan **Browser** (Peramban) dan mengubah tampilan halaman secara instan (Kinetic).

## 1. Mental Model: "Panel Kontrol & Sinyal"

Bayangkan halaman web Anda sebagai sebuah mesin Hub fisik:
- **DOM (Document Object Model)**: Ibarat **Panel Kontrol** fisik dengan banyak tombol, lampu, dan layar. JavaScript bisa menyentuh dan mengubah komponen ini.
- **Events**: Ibarat **Sinyal** yang muncul saat pengguna menekan tombol atau menggeser tuas.

---

## 2. Menemukan Komponen: DOM Selection

Sebelum mengubah sesuatu, JavaScript harus "menemukan" komponen di panel kontrol menggunakan alamat uniknya (ID atau Class):

```javascript
const hubStatus = document.querySelector("#status-display");
const activationBtn = document.querySelector(".btn-active");
```

---

## 3. Mendengarkan Sinyal: Event Listeners

Setelah menemukan tombol, kita harus memberitahu JavaScript apa yang harus dilakukan jika tombol tersebut ditekan:

```javascript
activationBtn.addEventListener("click", () => {
    hubStatus.textContent = "HUB ACTIVE";
    hubStatus.style.color = "green";
});
```

---

## Arsitek Mindset: Jembatan Visual

Sebagai arsitek, JavaScript adalah jembatan antara logika internal (data) dan visual eksternal (UI). Jangan biarkan logika Anda terkunci di terminal. Gunakan DOM untuk memberikan feedback instan kepada pengguna. Inilah yang membuat sebuah web terasa "hidup" dan "berenergi".

---

## Hands-on: Mengaktifkan Hub Visual
Buka file `examples/interactive_hub.html` di browser Anda untuk melihat bagaimana tombol "Activate Hub" mengubah status visual menggunakan JavaScript.

---
*Status: [status.md](../../../../status.md)*
