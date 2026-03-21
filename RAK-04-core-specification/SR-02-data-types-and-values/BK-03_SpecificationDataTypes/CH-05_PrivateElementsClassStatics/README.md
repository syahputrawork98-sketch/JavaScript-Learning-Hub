# CH-05: Private Elements and Class Statics

> **"Enkapsulasi Sirkuit Privat. `Private Elements and Class Statics` membedah mekanisme perlindungan data tingkat tinggi di dalam kelas menggunakan Private Names dan Static Blocks."**

**Source Hub**: 
- [ECMA-262: PrivateElement Specification Type](https://tc39.es/ecma262/#sec-privateelement-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Untuk mencapai enkapsulasi sejati, Hub menyediakan **Private Names** (ditandai dengan `#`). Secara internal, ini direpresentasikan oleh **PrivateElement** Record. Private Name tidak bisa diakses dari luar kelas melalui peretasan identitas manapun. Selain itu, **Static Blocks** memungkinkan inisialisasi sirkuit statis yang kompleks di dalam konteks kelas.

**Model Mental**:
- **Private Element**: Brankas di dalam kamar. Hanya penghuni kamar yang punya kunci biometriknya. Tidak bisa dilihat oleh tamu dari jendela manapun.
- **Static Block**: Upacara inisialisasi gedung sebelum penghuni pertama masuk.

---

## 2. Visualisasi Sistem: Private Access Validation

```mermaid
graph TD
    Code[obj.#secret] --> Check{Is it inside Class Scope?}
    Check -->|No| Err[SyntaxError: Private field access outside class]
    Check -->|Yes| Lookup[Fetch Private Name from [[PrivateElements]] Slot]
    
    style Err fill:#f8bbd0,stroke:#880e4f
    style Lookup fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Kapsul Kelas (Clause 6.2.9 - 6.2.12)
1. **Private Name Uniqueness**: Setiap deklarasi `#field` menciptakan identitas unik. Jika dua kelas memiliki nama `#secret`, mereka tetap merujuk ke slot internal yang berbeda di bawah Hub.
2. **Static Initialization Blocks**: Dijalankan tepat saat kelas didefinisikan. Ia memiliki akses ke private members kelas tersebut, memungkinkan pola arsitektur "Private Granting" yang canggih.
3. **Internal Brand Check**: Hub menggunakan rujukan internal untuk memastikan bahwa `#field` hanya diakses pada instance yang benar-benar memiliki field tersebut (menghindari "spoofing" instance).

### Arsitek Mindset: Hard Encapsulation
- Berhenti menggunakan konvensi `_private` (underscore). Gunakan sirkuit `#private` sejati untuk menjamin bahwa rahasia arsitektur Anda tidak bisa dibongkar oleh teknisi lain melalui refleksi (`Object.keys` atau `getOwnPropertyNames`).

---

## 4. Lab Praktis
Buka file `examples/private_encapsulation_lab.js` untuk membuktikan bahwa private fields tidak bisa ditembus oleh Proxy atau metode refleksi dan bagaimana static blocks menginisialisasi status kelas secara atomik.

---
*Status: [status.md](../../../../../status.md)*
