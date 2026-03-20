# CH-04: Higher-order Functions (Energy Orchestrators)

> **"Higher-order Functions adalah 'Orkestrator Energi' yang tidak melakukan pekerjaan kasar sendiri, melainkan mengatur dan mengoordinasikan unit-unit fungsi lain untuk menyelesaikan tugas besar."**

Jika fungsi biasa adalah pekerja, maka Higher-order Function (HOF) adalah manajer atau konduktor orkestra.

## 1. Mental Model: "Energy Orchestrators"

Bayangkan Anda memiliki sebuah ban berjalan (*conveyor belt*) di Hub Energi. Anda tidak ingin membangun ban berjalan baru setiap kali jenis barangnya berubah. Anda membangun satu ban berjalan standar (HOF), lalu Anda tinggal memasang "robot pekerja" (Callback Function) yang berbeda ke atasnya.

Sebuah fungsi disebut Higher-order jika ia melakukan salah satu atau kedua hal ini:
1.  **Menerima fungsi lain sebagai argumen.**
2.  **Mengembalikan fungsi sebagai hasilnya.**

![Higher-order Orchestrator](./assets/higher_order_orchestrator.svg)

---

## 2. Abstraksi Pengulangan

Alih-alih menulis `for` loop secara manual setiap saat, HOF memungkinkan kita menulis **apa** yang ingin kita lakukan, bukan **bagaimana** melakukannya step-by-step.

```javascript
const powerGrids = [100, 200, 300];

// Tanpa HOF (Imperatif)
const boostedGrids = [];
for (let i = 0; i < powerGrids.length; i++) {
    boostedGrids.push(powerGrids[i] * 1.5);
}

// Dengan HOF (Deklaratif)
const boostedGridsHOF = powerGrids.map(grid => grid * 1.5);
```

---

## 3. Komposisi Fungsi (Unit Assembly)

HOF memungkinkan Anda merakit fungsi kecil menjadi sistem yang besar. Ini seperti modul *plug-and-play* di Hub Energi.

```javascript
function withEnergyFilter(fn) {
    return function(input) {
        if (input < 0) return "Error: Arus Negatif";
        return fn(input);
    };
}

const processEnergy = (n) => `Arus: ${n}MW`;
const secureProcess = withEnergyFilter(processEnergy);

console.log(secureProcess(500));  // Output: Arus: 500MW
console.log(secureProcess(-100)); // Output: Error: Arus Negatif
```

---

## Arsitek Mindset: Berpikir di Level Tinggi

Sebagai arsitek, HOF adalah senjata rahasia Anda untuk membuat kode yang ringkas, mudah dibaca, dan mudah diuji (*testable*). Dengan memisahkan **logika orkestrasi** (HOF) dari **logika eksekusi** (Callback), Anda menciptakan sistem yang sangat fleksibel terhadap perubahan kebutuhan di masa depan.

---

## Hands-on: Orkestrasi Grid Otomatis
Buka file `examples/hof_lab.js` untuk melihat bagaimana kita membangun sistem penyaringan dan transformasi energi massal menggunakan pola Higher-order Functions.

---
*Status: [status.md](../../../status.md)*
