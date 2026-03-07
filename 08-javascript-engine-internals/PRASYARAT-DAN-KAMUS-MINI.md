# Prasyarat dan Kamus Mini - Buku 08

## Prasyarat Global
- Sudah memahami execution context, call stack, closure, dan event loop dasar (buku 02/03).
- Sudah memahami object/prototype dan memory/reference behavior dasar (buku 04/05).
- Nyaman membaca eksperimen kode kecil dan membandingkan output/performa.

## Kamus Mini Engine
- Parsing: proses ubah source code menjadi struktur sintaks.
- AST (Abstract Syntax Tree): representasi struktur program.
- Bytecode: instruksi intermediate sebelum/selama eksekusi engine.
- JIT (Just-in-Time): kompilasi runtime untuk jalur eksekusi yang panas.
- Deoptimization: fallback dari optimized code ke baseline/interpreter.
- Hidden class / shape: metadata struktur object untuk optimasi property access.
- Inline cache: cache jalur akses property/call-site untuk percepatan lookup.

## Rujukan Lintas Buku
- Runtime first principles: `../02-javascript-runtime-first-principles/topics/`
- Object model: `../04-javascript-object-model/topics/`
- Memory and references: `../05-javascript-memory-and-references/topics/`
