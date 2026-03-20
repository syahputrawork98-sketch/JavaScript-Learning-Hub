# CH-01: Object Constructors (The Blueprints)

> **"Jika objek adalah perangkat fisik di Hub Energi Anda, maka Konstruktor adalah Cetak Biru (Blueprint) yang menentukan bagaimana perangkat tersebut dibangun."**

Dalam JavaScript, kita sering membutuhkan banyak objek yang memiliki struktur serupa (misalnya, ribuan sensor atau ratusan generator). Alih-alih membuatnya satu per satu secara manual, kita menggunakan **Constructor Functions** untuk memproduksi objek secara massal dan konsisten.

## 1. Mental Model: "Manual Cetak Biru"

Bayangkan Anda adalah seorang insinyur. Anda tidak membangun setiap generator dari nol tanpa rencana. Anda membuat satu manual instruksi (Konstruktor), lalu setiap kali Anda membutuhkan generator baru, Anda tinggal memanggil tim produksi (`new`) untuk membuatkannya berdasarkan manual tersebut.

- **Constructor**: Manual atau Cetak Biru.
- **`new` Keyword**: Tombol "Produksi" yang menciptakan unit nyata dari cetak biru tersebut.
- **Instance**: Unit fisik (Objek) hasil produksi.

---

## 2. Membuat Konstruktor Pertama Anda

Konstruktor adalah fungsi biasa, tetapi secara konvensi, namanya selalu diawali dengan **Huruf Kapital**.

```javascript
function PowerGenerator(id, capacity) {
    this.id = id;
    this.capacity = capacity;
    this.status = "OFF";
    
    this.activate = function() {
        this.status = "ON";
        console.log(`Generator ${this.id} is now ONLINE.`);
    };
}
```

---

## 3. Memproduksi Objek dengan `new`

Gunakan kata kunci `new` untuk membuat unit baru dari cetak biru tersebut:

```javascript
const gen01 = new PowerGenerator("G-01", "500kW");
const gen02 = new PowerGenerator("G-02", "750kW");

gen01.activate(); // Output: Generator G-01 is now ONLINE.
```

Tanpa `new`, `this` akan merujuk pada objek global (window/global), yang akan merusak sistem Anda. Selalu gunakan `new` untuk memulai proses produksi.

---

## Arsitek Mindset: Standarisasi Unit

Sebagai arsitek sistem, menggunakan konstruktor memastikan bahwa setiap unit "Generator" di Hub Anda memiliki properti dan metode yang seragam. Ini memudahkan pemeliharaan (maintenance) dan skalabilitas sistem saat Hub Anda tumbuh dari 10 menjadi 10.000 perangkat.

---

## Hands-on: Pabrik Sensor Otomatis
Buka file `examples/constructor_factory.js` untuk melihat bagaimana kita memproduksi massal sensor suhu untuk Hub Energi kita.

---
*Status: [status.md](../../../../status.md)*
