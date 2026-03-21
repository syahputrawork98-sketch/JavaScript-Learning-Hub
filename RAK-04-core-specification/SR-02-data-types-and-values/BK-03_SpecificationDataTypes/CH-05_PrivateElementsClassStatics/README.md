# CH-05: Private Elements and Class Statics

> **"Enkapsulasi Sirkuit Privat. `Private Elements and Class Statics` membedah mekanisme perlindungan data tingkat tinggi menggunakan Private Names dan Static Blocks."**

**Source Hub**: 
- [ECMA-262: PrivateElement Specification Type](https://tc39.es/ecma262/#sec-privateelement-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Untuk mencapai enkapsulasi sejati yang tidak bisa ditembus oleh alat refleksi manapun, Hub menyediakan **Private Names** (ditandai dengan `#`). Secara internal, ini direpresentasikan oleh **PrivateElement** Record. Selain itu, **Static Blocks** memungkinkan inisialisasi sirkuit statis yang kompleks tepat saat kelas didefinisikan pertama kali di tumpukan memori.

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
1.  **Private Name Uniqueness**: Setiap deklarasi `#field` menciptakan identitas unik yang terdaftar di slot internal kelas. Nama `#id` di Kelas A tidak akan pernah bertabrakan dengan `#id` di Kelas B karena Hub membandingkan identitas aslinya, bukan kemiripan teks namanya.
2.  **Hard Encapsulation**: Berbeda dengan konvensi `_underscore`, Private Elements benar-benar tidak terlihat oleh `Object.keys()` atau `Proxy`. Ia adalah sirkuit tertutup yang hanya bisa dibuka oleh kunci (scope) dari dalam kelas itu sendiri.
3.  **Static Logic Startup**: Static Initialization Blocks memberikan arsitek tempat yang aman untuk menyiapkan data statis yang membutuhkan logika kompleks (seperti pengunduhan konfigurasi atau inisialisasi sirkuit dependen) sebelum instance pertama kelas dibuat.

---

## 4. Arsitek Mindset
Gunakan Private Elements saat Anda sedang membangun modul inti yang sangat sensitif (misal: penanganan kunci enkripsi). Gunakan Static Blocks untuk menjaga kebersihan logika kelas Anda sehingga kode inisialisasi tidak berceceran di luar lingkup kelas.

---

## 5. Lab Praktis
Eksperimen di folder `examples/` membedah dua pilar utama:
1.  **[Private Identity](./examples/01_private_identity.js)**: Membuktikan keunikan absolut dari identitas privat meskipun memiliki nama yang sama.
2.  **[Static Boot](./examples/02_static_boot.js)**: Demonstrasi penggunaan blok inisialisasi statis untuk persiapan sirkuit kelas yang kompleks.

---
*Status: [status.md](../../../../../status.md)*
