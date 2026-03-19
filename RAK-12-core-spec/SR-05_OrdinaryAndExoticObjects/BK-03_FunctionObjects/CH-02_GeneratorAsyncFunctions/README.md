# CH-02: Generators & Async Functions (Specialized Engines)

> **"Beberapa misi memerlukan mesin yang bisa berhenti sejenak atau menunggu pasokan energi. `Generator` dan `Async Functions` adalah 'Mesin Spesialis' (Specialized Engines) — unit eksotis yang memiliki kemampuan untuk menangguhkan dan melanjutkan eksekusi sesuai perintah."**

*Pemetaan ECMA-262: Clause 15 & 27 (Control Abstraction Objects)*

## 1. Mental Model: "The Specialized Engines"

- **Generator (`function*`)**: Mesin yang memiliki tombol "Pause/Resume" (`yield`). Ia tidak memberikan semua tenaga sekaligus, melainkan dalam bentuk pulsa energi satu per satu.
- **Async (`async function`)**: Mesin yang memiliki sensor "Wait" (`await`). Ia akan menangguhkan operasinya dan memberikan kesempatan pada unit lain di Hub sampai pasokan energi (Promise) yang ditunggunya tiba.

---

## 2. Kenapa Mereka Eksotis?

Mereka memiliki **Internal Slots tambahan** untuk menyimpan status eksekusi:
- **`[[GeneratorState]]`**: Status apakah mesin sedang "Executing", "SuspendedStart", "SuspendedYield", atau "Completed".
- **`[[GeneratorContext]]`**: Salinan baki terminal (Execution Context) yang tetap disimpan di rak meskipun mesin sedang berhenti, agar bisa dilanjutkan kembali dengan posisi yang sama.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Mesin Generator
function* powerPulse() {
    yield "LOW";
    yield "MEDIUM";
    yield "HIGH";
}

const gen = powerPulse();
console.log(gen.next().value); // "LOW"
```

---

## Arsitek Mindset: Efisiensi Aliran

Sebagai arsitek Hub:
- Gunakan **Generators** saat Anda berurusan dengan aliran data tak terhingga atau butuh kontrol manual kapan data diproses (seperti sistem antrean beban berat).
- Gunakan **Async Functions** sebagai standar untuk semua operasi yang memerlukan waktu (I/O, akses database) agar teknisi pusat (Main Thread) tidak menganggur menunggu energi yang lambat datang.

---
*Status: [status.md](../../../docs/status.md)*
