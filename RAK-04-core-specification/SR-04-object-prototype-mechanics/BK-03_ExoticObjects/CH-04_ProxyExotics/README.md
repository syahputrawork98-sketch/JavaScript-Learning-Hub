# CH-04: Proxy Exotics (The Interceptor Shield)

![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Perisai Intersepsi: Objek Eksotis Paling Powerfull yang Mendefinisikan Ulang Seluruh Hubungan Internal Antar Objek Melalui Mekanisme Trap."**

---

## 🌐 Source Hub
- **Parent Book**: [BK-03: Exotic Objects](../README.md)
- **Primary Source**: [ECMA-262: Proxy Exotic Objects (Clause 10.5)](https://tc39.es/ecma262/#sec-proxy-exotic-objects)

---

## 🌓 1. Essence: The Narrative

### The Ultimate Interceptor
**Proxy Exotic Object** adalah satu-satunya objek di JavaScript yang dapat mengubah perilaku **semua** 14 metode internal esensial. Ia bertindak sebagai perisai transparan di depan objek lain (**Target**). Setiap kali operasi dilakukan pada Proxy, ia akan memicu fungsi khusus (**Trap**) yang didefinisikan dalam objek **Handler**.

### Invariants Enforcement
Meskipun Proxy sangat fleksibel, mesin JavaScript tetap menjaga integritas data melalui **Invariants of Internal Methods**. Proxy tidak boleh memberikan hasil yang "mustahil" (misal: melaporkan properti tidak ada padahal aslinya imutabel dan ada). Jika dilanggar, engine akan melempar `TypeError` untuk menjaga stabilitas memori.

---

## 🗺️ 2. Visual Logic: The Interception Flow

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Req[Operation: e.g. deleteProperty] --> P[Proxy Object]
    P --> H{Is 'delete' trap defined?}
    H -- Yes --> Act[Run Handler.deleteProperty]
    H -- No --> Forward[Forward to Target Object]
    
    Act --> Result[Boolean Return]
    Forward --> Result
---

## Arsitek Mindset: Biaya Keamanan

Sebagai arsitek Hub:
- Gunakan Proxy untuk validasi data, logging otomatis, atau membuat objek "Virtual" yang datanya diambil dari sumber jauh saat diakses.
- Waspadalah terhadap **Overhead Performa**. Setiap akses melalui Perisai Pencegat memerlukan eksekusi fungsi JavaScript tambahan, yang jauh lebih lambat daripada akses langsung ke terminal `Ordinary`.

---
*Status: [status.md](../../../docs/status.md)*
