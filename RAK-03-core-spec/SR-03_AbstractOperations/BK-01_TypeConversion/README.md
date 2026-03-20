# Buku 01: Type Conversion (Coercion)

Buku ini membahas secara mendalam tentang mekanisme **Type Conversion** (sering disebut *Coercion*) di JavaScript berdasarkan definisi *Abstract Operations* pada spesifikasi ECMA-262 (Clause 7). 

Berbeda dengan bahasa *strongly-typed* ortodoks yang menolak operasi antar tipe data yang berbeda, JavaScript dirancang dengan filosofi fleksibilitas tinggi. *Engine* JavaScript (seperti V8) akan berusaha sekuat tenaga mengonversi nilai (*Value*) menjadi tipe data yang dibutuhkan oleh operator sebelum menyerah dan melempar *Error*.

## Mengapa Mempelajari Ini?
Memahami operasi abstrak seperti `ToNumber`, `ToString`, dan `ToBoolean` adalah pembeda utama antara pembuat *bug* dan *Senior Architect*. Kesalahan dalam mengevaluasi konversi implisit (seperti `[] + {}` atau `0 == false`) sering menjadi sumber insiden fatal di tahap produksi.

## Daftar Bab (Penyusun Mental Model)

Sepanjang buku ini, kita akan membedah operasi konversi utama:

1. **[Bab 01: Mekanika ToNumber (Konversi Numerik)](./CH-01_ToNumberMechanics/)**
2. **[Bab 02: Mekanika ToString (Representasi Teks)](./CH-02_ToStringMechanics/)**
3. **[Bab 03: Mekanika ToBoolean (Gerbang Logika)](./CH-03_ToBooleanMechanics/)**

## Prasyarat Pembaca
Sebelum menyelami buku ini, pastikan Anda telah menyelesaikan:
- **[RAK-01-javascript/SR-01-javascript/SR-01-get-started-core / SR-02_DataTypesAndValues / Buku 01: Primitive Types](../../SR-02_DataTypesAndValues/BK-01_PrimitiveTypes/)**: Memahami representasi memori dari *String*, *Number*, dll.
