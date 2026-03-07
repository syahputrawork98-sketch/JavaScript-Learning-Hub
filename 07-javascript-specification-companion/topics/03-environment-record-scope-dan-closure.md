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

## Workflow Baca (Topik Ini)
1. Baca konsep Lexical Environment sebagai pasangan record + outer reference.
2. Bedakan jenis Environment Record yang relevan untuk variabel/fungsi.
3. Telusuri lookup identifier dari environment aktif ke outer chain.
4. Validasi dengan snippet closure.

## Contoh Mapping Praktik
- Variabel lokal function disimpan pada declarative environment record function itu.
- Closure menyimpan referensi ke environment saat function dibuat.
- Lookup identifier berjalan dari environment aktif ke outer environment.

## Mini Mapping Contoh
```js
function outer() {
  let x = 10;
  return function inner() {
    return x;
  };
}

const f = outer();
console.log(f());
```
Cara baca:
1. Petakan environment saat `outer` dieksekusi.
2. Catat bahwa `inner` menyimpan akses ke environment `outer`.
3. Verifikasi kenapa `x` tetap bisa diakses setelah `outer` selesai.

## Checkpoint
- [ ] Bisa menjelaskan bedanya value copy vs environment reference pada closure.
- [ ] Bisa menjelaskan urutan lookup identifier ke outer environment.
- [ ] Bisa memetakan satu bug scope ke istilah environment record.

## Jebakan Umum
- Mengira closure menyalin nilai semua variabel.
- Mengabaikan perbedaan binding `let/const` terhadap fase inisialisasi.
