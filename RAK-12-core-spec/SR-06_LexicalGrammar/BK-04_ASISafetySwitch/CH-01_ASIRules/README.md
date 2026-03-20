# CH-01: The ASI Safety Switch (Automatic Integrity)

> **"Teknisi terkadang lupa memasang sakelar pemutus. `Automatic Semicolon Insertion` (ASI) adalah 'Sakelar Keamanan Otomatis' — protokol darurat di mana Hub secara otomatis menyisipkan titik-koma (`;`) untuk mencegah tabrakan sinyal antar baris."**

*Pemetaan ECMA-262: Clause 12 (Automatic Semicolon Insertion)*

## 1. Mental Model: "The Safety Switch"

Bayangkan kabel energi yang mengalir dari atas ke bawah. Tanpa sakelar (`;`), dua kabel yang berbeda bisa bersentuhan dan menyebabkan arus pendek.
- ASI adalah robot kecil yang berpatroli saat Parsing.
- Jika robot melihat dua sinyal yang tidak mungkin disambungkan secara logika, dia akan langsung memasang sakelar `;` di sela-selanya.

## 🏗️ The ASI Robot Logic

```mermaid
graph TD
    S[Sinyal Baru] --> Parser{Legal Syntax?}
    Parser -->|No| ASI{ASI Rules Apply?}
    Parser -->|Yes| Next[Continue Parsing]
    
    ASI -->|Yes: LineTerminator/}/End| Insert[Insert ; and Retry]
    ASI -->|No| Error[Throw SyntaxError]
    
    Insert --> Next
```

## 🔍 Prosedur Teknis

1.  **Tabrakan Sinyal (The Offending Token)**: Jika token berikutnya menyebabkan kesalahan tata bahasa, Hub memasang `;`.
2.  **Akhir Aliran (End of Stream)**: Jika sinyal habis, Hub otomatis menutupnya dengan `;`.
3.  **Produksi Terbatas (Restricted Productions)**: Jika ada pemutus baris (Line Terminator) setelah kata kunci tertentu (seperti `return`, `throw`, `break`, `continue`), Hub **WAJIB** memasang `;` seketika.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Aturan 3: Restricted Production
function getEnergy() {
    return 
    100; // ASI AKTIF DI SINI! Hub membaca: 'return;'
}
console.log(getEnergy()); // undefined (Energi 100 terbuang!)

// Solusi: Letakkan beban di baris yang sama
function fixedEnergy() {
    return 100; 
}
```

---

## Arsitek Mindset: Kepastian Manual

Sebagai arsitek Hub:
- Jangan terlalu bergantung pada Robot ASI. Selalu pasang sakelar `;` secara manual di setiap akhir instruksi untuk menjamin integritas sirkuit Anda, terutama jika Anda berencana melakukan minifikasi (pemancara energi padat).
- Perhatikan baris yang dimulai dengan `[` atau `(`. Tanpa `;` di baris sebelumnya, Hub mungkin mencoba menyambungkannya menjadi panggilan fungsi atau akses array yang tidak sah.

---
*Status: [status.md](../../../docs/status.md)*
