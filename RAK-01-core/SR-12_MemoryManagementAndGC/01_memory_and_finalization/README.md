# Buku 01: Memory and Finalization

Buku ini membedah kontrol memori tingkat lanjut di JavaScript. Kita akan mempelajari bagaimana `WeakRef` memungkinkan kita memegang referensi ke objek tanpa menghalangi objek tersebut dihapus oleh *Garbage Collector*, serta bagaimana `FinalizationRegistry` memberi tahu kita saat sebuah objek telah dihancurkan (Clause 28.3 - 28.4 pada ECMA-262).

## Mengapa Mempelajari Ini?
Seorang Senior Architect harus memahami bahwa memori bukanlah sumber daya tak terbatas. Meskipun JavaScript memiliki GC otomatis, ada kasus-kasus (seperti caching objek besar) di mana kita ingin memegang objek "selama ia masih ada" tapi tidak ingin memaksanya tetap hidup. Memahami `WeakRef` dan `FinalizationRegistry` adalah kunci untuk optimasi memori tingkat dewa.

## Daftar Bab

1. **[Bab 01: Weak References & Reachability (Tali Tipis)](./01_weak_references_and_reachability/)**
2. **[Bab 02: Finalization & Cleanup (Tukang Bersih-bersih)](./02_finalization_and_cleanup/)**

## Prasyarat Pembaca
- **[RAK-01-core / SR-11_StandardBuiltInObjects / Buku 01: Keyed Collections](../../SR-11_StandardBuiltInObjects/01_keyed_collections/)**: Memahami `WeakMap` membantu Anda mengerti perbedaan mendasar antara koleksi lemah dan referensi lemah individual.
