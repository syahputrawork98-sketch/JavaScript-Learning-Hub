# Content Structure
## Buku 01 - JavaScript Tutorial

Dokumen ini adalah acuan struktur isi untuk `01-javascript-tutorial`.

## Tujuan Buku

Buku 01 berfungsi sebagai pengantar JavaScript untuk pemula.

Target utama:
- memahami sintaks dasar JavaScript
- menulis program sederhana
- mengenali pola dasar penyusunan program

Out of scope:
- runtime internals (execution context, event loop, closure internals)
- object internals mendalam (descriptor internal, prototype internals detail)
- pembahasan engine atau optimasi

## Urutan Belajar

Urutan mengikuti alur:
`program -> syntax dasar -> komposisi program`

1. mulai dari program paling sederhana
2. pahami elemen sintaks satu per satu
3. gabungkan elemen menjadi program modular
4. tangani error dasar

## Struktur Direktori Target

```text
01-javascript-tutorial/
  README.md
  CHANGELOG.md
  docs/
    README.md
    writing-rules.md
    content-structure.md
    topic-template.md
  chapters/
    README.md
    01-program-pertama.md
    02-variables.md
    03-data-types.md
    04-operators.md
    05-conditionals.md
    06-loops.md
    07-functions.md
    08-arrays.md
    09-objects.md
    10-modules.md
    11-error-handling.md
  examples/
    README.md
  assets/
```

## Daftar Bab dan Cakupan

1. `01-program-pertama`: cara menjalankan JavaScript dan `console.log`
2. `02-variables`: `let`, `const`, pengenalan `var`, deklarasi, inisialisasi, reassignment
3. `03-data-types`: number, string, boolean, null, undefined
4. `04-operators`: arithmetic, comparison, logical, assignment
5. `05-conditionals`: `if`, `else if`, `else`, ternary
6. `06-loops`: `for`, `while`, `break`, `continue`
7. `07-functions`: declaration, parameter, return, arrow function dasar
8. `08-arrays`: akses elemen, mutasi dasar, iterasi
9. `09-objects`: object literal, property, method dasar
10. `10-modules`: `export` dan `import` dasar
11. `11-error-handling`: `try`, `catch`, `throw` dasar

## Aturan Konsistensi

- tiap bab mengikuti `docs/topic-template.md`
- contoh kode kecil, fokus satu konsep per blok
- istilah teknis konsisten lintas bab
- hindari overlap ke buku 02-07 kecuali catatan singkat "dibahas lanjut di buku lain"

## Roadmap Visualisasi (SVG)

Target minimum buku 01: setiap bab memiliki minimal 1 SVG inti (`*-map.svg`).

Status implementasi saat ini:

- `01-program-pertama`: `assets/01-program-pertama-flow-map.svg` (tersedia)
- `02-variables`: `assets/02-variables-let-const-var-map.svg` (tersedia)
- `03-data-types`: `assets/03-data-types-basics-map.svg` (tersedia)
- `04-operators`: `assets/04-operators-basics-map.svg` (tersedia)
- `05-conditionals`: `assets/05-conditionals-decision-flow-map.svg` (tersedia)
- `06-loops`: `assets/06-loops-control-flow-map.svg` (tersedia)
- `07-functions`: `assets/07-functions-input-process-output-map.svg` (tersedia)
- `08-arrays`: `assets/08-arrays-basics-map.svg` (tersedia)
- `09-objects`: `assets/09-objects-literal-property-method-map.svg` (tersedia)
- `10-modules`: `assets/10-modules-export-import-flow-map.svg` (tersedia)
- `11-error-handling`: `assets/11-error-handling-try-catch-throw-map.svg` (tersedia)
