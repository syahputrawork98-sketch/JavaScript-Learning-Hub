# CH-02: Built-In Structures & Intrinsics

> **"Infrastruktur Bawaan. `Built-In Structures & Intrinsics` membedah objek-objek 'sakti' yang disediakan oleh Hub tepat saat sirkuit Realm diinisialisasi."**

**Source Hub**: 
- [ECMA-262: Well-Known Intrinsic Objects](https://tc39.es/ecma262/#sec-well-known-intrinsic-objects)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Intrinsics** adalah sekumpulan objek dan fungsi fundamental (seperti `%Object.prototype%`, `%Array%`, `%Error%`) yang harus ada di setiap **Realm**. Mereka adalah "perlengkapan standar" yang dipasang oleh Hub sebelum script pertama Anda mulai dialiri daya.

---

## 2. Visualisasi Sistem: Intrinsic Realm Mapping

```mermaid
graph TD
    RealmA[Realm A Context] --> I1["%Object% (In A)"]
    RealmB[Realm B Context] --> I2["%Object% (In B)"]
    
    I1 == I2 --> Result[False: Different Identity]
```

---

## 3. Mekanisme & Hubungan

### Ekosistem Intrinsik (Clause 6.1.7.4)
1. **Identity Isolation**: Objek intrinsik seperti `Array` di satu iframe berbeda referensi dengan `Array` di frame utama. Ini disebut isolasi Realm, memastikan sirkuit satu tab tidak mengganggu tab lain.
2. **Immutable Prototypes**: Beberapa objek intrinsik (seperti `%Object.prototype%`) dilindungi ketat agar strukturnya tidak bisa dirubah secara ilegal, menjaga stabilitas seluruh ekosistem Hub.
3. **Cross-Rack Linking**: Intrinsics adalah basis dari **RAK-05** (Runtime APIs). Semua API seperti `fetch` atau `DOM` dibangun di atas fondasi intrinsik yang didefinisikan di sini.

---

## 4. Arsitek Mindset
Jangan pernah memodifikasi prototipe intrinsik (`Object.prototype`) karena ia adalah sirkuit global yang digunakan oleh seluruh komponen sistem. Modifikasi di sini dapat menyebabkan kecelakaan sirkuit (*collision*) yang sulit dilacak.

---

## 5. Lab Praktis
Eksperimen di folder `examples/` membedah pilar utama:
1.  **[Intrinsic Realms](./examples/01_intrinsic_realms.js)**: Membuktikan isolasi identitas objek bawaan antar konteks eksekusi yang berbeda.

---
*Status: [status.md](../../../../../status.md)*
