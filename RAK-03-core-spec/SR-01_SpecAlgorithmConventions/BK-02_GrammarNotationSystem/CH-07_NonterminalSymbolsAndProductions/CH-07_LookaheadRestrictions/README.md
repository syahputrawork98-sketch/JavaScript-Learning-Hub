# Chapter 07: Lookahead Restrictions

Kadang-hui, blueprint arsitektur butuh aturan: "Anda boleh membangun dinding ini, ASALKAN di depan sana tidak ada pipa air." Dalam tata bahasa, ini disebut **Lookahead Restriction**.

*Mental Model: "Larangan Melihat ke Depan"*

## 1. Notasi: `[lookahead ∉ { ... }]`

Ini adalah instruksi bagi Parser untuk mengintip token berikutnya tanpa mengambilnya. Jika token berikutnya ada dalam daftar larangan (`∉`), maka aturan produksi tersebut dianggap tidak valid.

## 2. Contoh Kasus: Ekspresi Fungsi vs Pernyataan Fungsi

Pernah bertanya mengapa Anda tidak bisa memulai baris kode dengan `function() {}` tanpa tanda kurung?

**Aturan Spek:**
`ExpressionStatement : [lookahead ∉ { { , function , async , class }] Expression ;`

Artinya: Sebuah *ExpressionStatement* (pernyataan yang berupa ekspresi) **TIDAK BOLEH** dimulai dengan kata kunci `function`. Jika parser melihat `function` di awal, ia dipaksa untuk menganggapnya sebagai `FunctionDeclaration`, bukan ekspresi.

## 3. Kegunaan

Lookahead digunakan untuk menghilangkan ambiguitas. Tanpa aturan ini, parser akan bingung menentukan apakah `{}` adalah sebuah Blok Kode (Statement) atau Object Literal (Expression).

Arsitek senior menggunakan pemahaman lookahead ini untuk menulis kode yang "Parser-friendly" dan menghindari jebakan sintaksis yang membingungkan.
