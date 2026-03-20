# Buku 03: Specification Data Types

*Pemetaan ECMA-262: Clause 6.2 (Specification Types)*

## Mental Model: "Indikator Internal Hub" (The Internal Gauges)
Bayangkan Anda membuka panel kontrol rahasia di dalam Hub. Anda melihat berbagai indikator (Gauges), baki penyimpanan internal (Records), dan sensor status (Completion Records) yang tidak pernah dilihat oleh teknisi luar.
- **Records**: Baki penyimpanan statis untuk mengelompokkan data internal.
- **Lists**: Saluran aliran data yang berurutan.
- **Completion Records**: Sensor yang memberitahu mesin apakah sebuah sirkuit baru saja selesai dijalankan, mengalami malfungsi (Throw), atau diputus sengaja (Return).
Memahami unit-unit internal ini adalah syarat mutlak untuk membaca blueprint (Spesifikasi) resmi dari TC39.

## Daftar Isi Bab (Spec-Mapped)

1.  **[CH-01_SpecificationTypesOverview](./CH-01_SpecificationTypesOverview/)**: Apa itu Meta-values?
2.  **[CH-02_EnumType](./CH-02_EnumType/)**: Himpunan nilai konstan dalam spec.
3.  **[CH-03_ListAndRecord](./CH-03_ListAndRecord/)**: Struktur data fundamental spesifikasi.
4.  **[CH-04_SetAndRelation](./CH-04_SetAndRelation/)**: Operasi himpunan pada spec.
5.  **[CH-05_CompletionRecord](./CH-05_CompletionRecord/)**: Bagaimana spec menangani Return, Continue, Break, dan Error.
6.  **[CH-06_CompletionOps](./CH-06_CompletionOps/)**: NormalCompletion, ThrowCompletion, dan UpdateEmpty.
7.  **[CH-07_ReferenceRecord](./CH-07_ReferenceRecord/)**: Rahasia di balik variabel dan properti.
8.  **[CH-08_ReferenceRecordOps](./CH-08_ReferenceRecordOps/)**: GetValue, PutValue, dan IsPrivateReference.
9.  **[CH-09_PropertyDescriptor](./CH-09_PropertyDescriptor/)**: Struktur internal untuk atribut properti.
10. **[CH-10_EnvironmentRecords](./CH-10_EnvironmentRecords/)**: Bagaimana scope disimpan secara internal.
11. **[CH-11_AbstractClosures](./CH-11_AbstractClosures/)**: Definisi formal dari fungsi anonim internal.
12. **[CH-12_DataBlocks](./CH-12_DataBlocks/)**: Array buffer tingkat rendah (Byte data).
13. **[CH-13_DataBlockOps](./CH-13_DataBlockOps/)**: CreateByteDataBlock dan CopyDataBlockBytes.
14. **[CH-14_PrivateElement](./CH-14_PrivateElement/)**: Komponen kelas private.
15. **[CH-15_ClassFieldDefinition](./CH-15_ClassFieldDefinition/)**: Definisi field pada kelas.
16. **[CH-16_PrivateNames](./CH-16_PrivateNames/)**: Mekanisme identitas nama private.
17. **[CH-17_ClassStaticBlockDefinition](./CH-17_ClassStaticBlockDefinition/)**: Blok statis pada kelas.

---
*Status: Gold Standard 💎*
