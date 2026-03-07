# 01 - Engine Pipeline: Parse, AST, Bytecode

## Tujuan
Memahami alur dasar bagaimana JavaScript engine mengubah source code menjadi eksekusi runtime.

## Fokus Istilah
- Parser
- AST
- Bytecode
- Execution pipeline

## Mapping Konsep
- Source code dibaca parser.
- Parser membangun AST.
- AST dikompilasi menjadi bytecode.
- Bytecode dieksekusi oleh interpreter, lalu bisa dioptimasi oleh tier lanjutan.

## Workflow Baca (Topik Ini)
1. Mulai dari satu snippet JavaScript kecil.
2. Bayangkan struktur sintaksnya sebagai AST (statement, expression, call).
3. Pahami bahwa engine tidak mengeksekusi string source langsung.
4. Hubungkan hasil parse ke bytecode lalu ke eksekusi.

## Mini Mapping Contoh
```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```
Cara baca:
1. Parser mengenali declaration `function add` dan call expression `add(2, 3)`.
2. Struktur ini dibentuk ke AST.
3. AST dikompilasi ke bytecode untuk dieksekusi.
4. Jika fungsi sering dipanggil, engine bisa mengoptimasi jalurnya.

## Checkpoint
- [ ] Bisa menjelaskan kenapa AST diperlukan sebelum eksekusi.
- [ ] Bisa menjelaskan peran bytecode pada pipeline engine modern.
- [ ] Bisa menghubungkan call frequency dengan peluang optimasi.

## Jebakan Umum
- Mengira engine langsung mengeksekusi source text tanpa tahap intermediate.
- Menganggap optimasi selalu aktif sejak pemanggilan pertama.
