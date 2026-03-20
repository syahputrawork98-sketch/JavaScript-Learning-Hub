# Buku 03: Realms and Agents (The Grid Zones)

Buku ini mengeksplorasi batas-batas terluar dari eksekusi kode. **Realms** dan **Agents** menentukan di mana kode hidup, bagaimana ia diisolasi dari kode lain, dan bagaimana ia dijadwalkan untuk berjalan.

## 🏗️ Struktur Infrastruktur

1.  **[Bab 01: Global Realms](./CH-01_GlobalRealms/)**: Zona isolasi yang memiliki set objek intrinsik dan objek globalnya sendiri (misal: satu `iframe` adalah satu Realm).
2.  **[Bab 02: Agents & Jobs](./CH-02_AgentsAndJobs/)**: Entitas yang memiliki thread eksekusi sendiri dan bagaimana *Job Queue* (Microtasks) dikelola.

## 🔍 Arsitek Insight
Bagi pengembang tingkat lanjut, memahami Realms sangat krusial saat bekerja dengan plugin, sandbox, atau komunikasi antar-frame. Sementara itu, pemahaman tentang Agents dan Jobs adalah kunci untuk menguasai asinkronitas dan performa concurrency di JavaScript.

---
*Status: Gold Standard Upgrade in Progress*
