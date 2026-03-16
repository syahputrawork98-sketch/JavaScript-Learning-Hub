# Chapter 05: Optional & Alternates

Blueprint arsitektur sering kali memiliki bagian yang bersifat pilihan atau variasi. Dalam tata bahasa spesifikasi, hal ini ditunjukkan melalui simbol `opt` dan pola "one of".

*Mental Model: "Pilihan Bahan dalam Blueprint"*

## 1. Simbol `opt` (Optional)

Ditulis sebagai subscript kecil di sebelah kanan Non-terminal, `opt` berarti elemen tersebut boleh ada atau tidak ada sama sekali.

**Contoh: `VariableDeclaration : BindingIdentifier Initializer opt`**
Artinya: Anda bisa mendeklarasikan variabel *dengan* atau *tanpa* nilai awal.
- `let x;` (Tanpa Initializer) -> Valid.
- `let x = 10;` (Dengan Initializer) -> Valid.

## 2. Pola "one of" (Satu dari...)

Jika sebuah Non-terminal memiliki banyak Terminal alternatif yang pendek-pendek, spesifikasi menggunakan frase "one of".

**Contoh:**
```
AssignmentOperator : one of
  = *= /= %= += -= <<= >>= >>>= &= ^= |= **=
```
Ini jauh lebih ringkas daripada menulis setiap operator di baris baru.

## 3. Penanda `[empty]` (Kosong)

Terkadang, sebuah aturan produksi secara eksplisit mengizinkan "tidak ada apa-apa". Ini biasanya muncul dalam daftar elemen yang dipisahkan koma, seperti di dalam Array Literal: `[1, , 3]`. Bagian kosong di antara koma disebut sebagai `[empty]`.

Memahami simbol opsional ini membantu Anda mengerti mengapa JavaScript begitu fleksibel dalam penulisan sintaksnya.
