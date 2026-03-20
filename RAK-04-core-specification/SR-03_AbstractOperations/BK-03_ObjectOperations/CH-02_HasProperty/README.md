# CH-02: HasProperty (The Component Scanner)

```mermaid
graph TD
    Input[HasProperty O, P] --> Check{Type Check}
    Check -->|Not Object| Error[Assertion Fail]
    Check -->|Object| Prot[Call O.[[HasProperty]](P)]
    Prot --> Result[Return Result]
```

## 🔍 Mekanisme Operasional

> **"Sebelum memasukkan daya ke sebuah pipa, teknisi harus memastikan pipa tersebut memang terpasang. `HasProperty` adalah 'Pemindai Komponen' (The Component Scanner) yang mendeteksi keberadaan slot properti, baik di permukaan mesin maupun di dalam desain prototipenya."**

*Pemetaan ECMA-262: Clause 7.3.11 (HasProperty)*

## 1. Mental Model: "The Component Scanner"

Bayangkan Anda menggunakan scanner X-Ray pada sebuah mesin Hub.
- **`HasProperty` (Operator `in`)**: Scanner menembus seluruh lapisan mesin, termasuk denah arsitektur dari pabrik (Prototype). Jika pipa tersebut ada di lapisan manapun, scanner berbunyi bip.
- **`HasOwnProperty`**: Scanner hanya memindai permukaan luar mesin yang Anda pegang. Ia mengabaikan denah arsitektur dasar.

---

## 2. Algoritma Scanner

Saat `"pipe" in machine` dijalankan:
1.  Panggil metode internal **`machine.[[HasProperty]]("pipe")`**.
2.  Mesin akan mengecek dirinya sendiri. Jika tidak ada, ia akan bertanya pada Parent-nya (`[[Prototype]]`).
3.  Proses berlanjut sampai ke "Akar Hub" (`Object.prototype`) atau sampai ditemukan.

---

## 3. Praktik Lapangan (Lab)

```javascript
const genericHub = { power: 100 };
const myHub = Object.create(genericHub);
myHub.status = "ACTIVE";

console.log("status" in myHub); // true (Ada di permukaan)
console.log("power" in myHub);  // true (Ada di arsitek induk / Prototype)
console.log(myHub.hasOwnProperty("power")); // false (Hanya pengecekan permukaan)
```

---

## Arsitek Mindset: Keamanan Properti

Sebagai arsitek Hub:
- Gunakan operator `in` (HasProperty) jika Anda ingin tahu apakah sebuah fitur tersedia bagi mesin tersebut, tidak peduli dari mana asalnya.
- Gunakan `Object.hasOwn()` (modern) untuk memastikan data tersebut benar-benar milik unit spesifik itu dan bukan warisan dari sistem global, untuk menghindari manipulasi Grid yang tidak sengaja.

---
*Status: [status.md](../../../docs/status.md)*
