# Buku 04: ASI Safety Switch (The Automatic Semicolon)

Buku ini membedah mekanisme pertahanan terakhir Hub: **Automatic Semicolon Insertion (ASI)**. Ini adalah algoritma yang secara otomatis memasang pemisah sinyal jika teknisi lupa menempatkannya.

## 🏗️ Sistem Keselamatan

1.  **[Bab 01: ASI Rules & Logic](./CH-01_ASIRules/)**: Tiga aturan utama kapan Hub akan memasang titik koma otomatis.
2.  **[Bab 02: ASI Procedures](./CH-02_ASIProcedures/)**: Prosedur teknis penanganan ambiguitas leksikal.

## 🔍 Arsitek Insight
Meskipun ASI sangat membantu, ia adalah "Robot Penolong" yang terkadang salah paham. Memahami aturan berekali-kali di mana ASI GAGAL (seperti di depan `[` atau `(`) sangat penting untuk mencegah korsleting instruksi.

---
*Status: Gold Standard Upgrade in Progress*
