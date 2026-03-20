# Buku 02: Environment Records (The Variable Ledger)

Buku ini membedah mekanisme internal yang digunakan JavaScript untuk menyimpan variabel, fungsi, dan binding `this`. **Environment Record** adalah fondasi dari apa yang kita kenal sebagai "Scope".

## 🏗️ Peta Jalan Scope

Environment Record bukan sekadar objek JSON biasa; ini adalah abstraksi spesifikasi yang memiliki struktur hierarkis:

1.  **[Bab 01: Declarative & Object Records](./CH-01_DeclarativeAndObjectRecords/)**: Perbedaan antara variabel modern (`let`/`const`) dan binding objek global.
2.  **[Bab 02: Function Environments](./CH-02_FunctionEnvironments/)**: Bagaimana argumen dan `super` dikelola di dalam fungsi.
3.  **[Bab 03: The Outer Link](./CH-03_TheOuterLink/)**: Mekanisme rantai scope (*Scope Chain*) yang menghubungkan satu lingkungan ke lingkungan luar.

## 🔍 Mengapa Ini Penting?
Memahami Environment Records memungkinkan kita memahami secara teknis mengapa variabel bisa diakses di satu tempat tapi tidak di tempat lain, serta bagaimana *closures* mempertahankan akses ke memori meskipun fungsi induknya sudah selesai dieksekusi.

---
*Status: Gold Standard Upgrade in Progress*
