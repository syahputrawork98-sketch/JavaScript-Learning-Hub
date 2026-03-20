# CH-01: Hidden Classes (Shapes)

Karena JavaScript adalah bahasa dinamis, properti objek bisa ditambah atau dihapus kapan saja. V8 menangani ketidakpastian ini dengan teknik cerdas bernama **Hidden Classes** (sering disebut sebagai "Shapes" oleh engine lain).

## 🧩 Masalah: Dinamisme Properti
Di bahasa statis seperti C++, offset memori untuk properti objek sudah ditentukan secara tetap saat kompilasi. Di JS, V8 tidak tahu di mana lokasi memori properti `x` jika objek `obj` berubah-ubah strukturnya.

## 🛠️ Solusi: Transition Tree
Setiap kali Anda membuat objek atau menambah properti, V8 membuat/mengaitkan objek tersebut dengan "Hidden Class" khusus yang memetakan nama properti ke offset memori.

```mermaid
graph TD
    Empty[HC0: Empty] -->|add 'a'| A[HC1: {a}]
    A -->|add 'b'| AB[HC2: {a, b}]
    Empty -->|add 'b'| B[HC3: {b}]
    B -->|add 'a'| BA[HC4: {b, a}]
    
    style AB fill:#2ecc71,stroke:#333
    style BA fill:#f1c40f,stroke:#333
```

## 📜 Aturan Emas (Architect's Rules)
Untuk performa maksimal, ikuti pedoman ini:
1. **Inisialisasi Properti di Constructor**: Selalu tambahkan semua properti di awal (didalam constructor) daripada menambahkannya secara dinamis nanti.
2. **Jaga Urutan Properti**: Jika dua objek memiliki properti yang sama tapi ditambahkan dalam **urutan yang berbeda**, mereka akan memiliki Hidden Class yang berbeda (seperti HC2 dan HC4 pada diagram di atas).
3. **Hindari Menghapus Properti**: Menggunakan `delete obj.prop` akan merusak Hidden Class dan memaksa V8 masuk ke **Dictionary Mode** (Hash Table) yang jauh lebih lambat.

> [!IMPORTANT]
> **Internalist Insight**: Ketika objek berbagi Hidden Class yang sama, TurboFan bisa melakukan optimasi akses properti yang sangat cepat karena ia sudah tahu persis di offset memori mana nilai tersebut berada.

---
*Lihat Lab: [Transisi Hidden Class](./examples/hidden_class_transition.js)*  
*Kembali ke [BK-01](../README.md)*
