# 03 - Environment Record, Scope, dan Closure

## Tujuan
Memetakan scope chain dan closure ke model formal environment record.

## Fokus Istilah
- Lexical Environment
- Environment Record
- Declarative Environment Record
- Outer reference

## Mapping ke Spec
- Lexical Environments: `https://tc39.es/ecma262/#sec-lexical-environments`
- Environment Records: `https://tc39.es/ecma262/#sec-environment-records`

## Contoh Mapping Praktik
- Variabel lokal function disimpan pada declarative environment record function itu.
- Closure menyimpan referensi ke environment di saat function dibuat.
- Lookup identifier berjalan dari environment aktif ke outer environment.

## Jebakan Umum
- Mengira closure menyalin nilai semua variabel, bukan referensi environment.
- Mengabaikan perbedaan binding `let/const` terhadap fase inisialisasi.
