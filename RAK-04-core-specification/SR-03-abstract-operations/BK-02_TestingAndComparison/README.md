# Buku 02: Testing and Comparison

Buku ini membedah mekanisme evaluasi perbandingan di JavaScript. Fokus utamanya adalah memahami bagaimana *engine* menentukan apakah dua nilai dianggap "sama" atau "berbeda" berdasarkan hirarki operasi abstrak yang didefinisikan dalam ECMA-262.

## Mengapa Mempelajari Ini?
Kebingungan antara `==` (Loose Equality) dan `===` (Strict Equality) adalah "tradisi" bagi pemula, namun bagi seorang *Senior Architect*, ini adalah tentang memahami algoritma perbandingan internal seperti `IsStrictlyEqual` dan `IsLooselyEqual`. Pemahaman ini krusial untuk menghindari bug logika dan optimasi performa *engine*.

## Daftar Bab

1. **[Bab 01: Mekanika Strict Equality (===)](./CH-01_IsStrictlyEqualMechanics/)**
2. **[Bab 02: Mekanika Loose Equality (==)](./CH-02_IsLooselyEqualMechanics/)**
3. **[Bab 03: Mekanika SameValue (Pondasi Internal)](./CH-03_SameValueMechanics/)**
 (Planned)

## Prasyarat Pembaca
- **[RAK-01-javascript/SR-01-javascript/SR-01-get-started-core / 03_abstract_operations / Buku 01: Type Conversion](../01_type_conversion/)**: Memahami bagaimana tipe data berubah secara otomatis sebelum dibandingkan.
