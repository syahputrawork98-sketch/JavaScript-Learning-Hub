# CH-02: Flow Sensors (Getters and Setters)

> **"Terkadang akses ke data harus difilter atau dimonitor secara ketat. `Getters & Setters` adalah 'Sensor Aliran' (Flow Sensors)—unit pengaman yang mencegat upaya pembacaan atau penulisan energi pada properti objek."**

*Pemetaan ECMA-262: Clause 15.4.3*

## 1. Mental Model: "The Access Filter"

- **Getter (`get`)**: Sensor yang aktif saat seseorang mencoba "Membaca" nilai. Ia bisa mengolah data mentah internal sebelum mengirimkannya ke luar.
- **Setter (`set`)**: Sensor yang aktif saat seseorang mencoba "Menulis" nilai. Ia bisa melakukan validasi sinyal (misal: menolak angka negatif) sebelum menyimpannya ke memori internal.

---

## 2. Abstraksi Arsitektur

Dengan menggunakan sensor ini, teknisi luar merasa mereka hanya mengakses properti biasa (`hub.voltage`), padahal di balik layar ada logika kompleks (Sensor) yang bekerja tanpa mereka sadari (*Encapsulation*).

---

## 3. Praktik Lapangan (Lab)

```javascript
const powerLine = {
    _rawVoltage: 0,
    
    get voltage() {
        return `${this._rawVoltage} Volts`; // Formatting sensor
    },
    
    set voltage(v) {
        if (v < 0) throw new Error("LOW_POWER_FAIL"); // Validation sensor
        this._rawVoltage = v;
    }
};

powerLine.voltage = 220;
console.log(powerLine.voltage); // "220 Volts"
```

---

## Arsitek Mindset: Keamanan Data

Sebagai arsitek Hub:
- Gunakan `Getters/Setters` untuk melindungi integritas data internal. Jangan biarkan kabel internal diakses langsung jika salah input bisa merusak sistem.
- Jangan melakukan tugas yang "berat" (seperti request jaringan) di dalam Getter. Teknisi mengharapkan pembacaan properti berlangsung instan tanpa rugi daya yang besar.

---
*Status: [status.md](../../../docs/status.md)*
