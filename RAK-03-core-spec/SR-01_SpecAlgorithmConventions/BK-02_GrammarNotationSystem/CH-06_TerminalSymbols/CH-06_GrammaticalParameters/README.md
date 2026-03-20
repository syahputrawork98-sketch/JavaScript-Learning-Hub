# Chapter 06: Grammatical Parameters

Ini adalah salah satu fitur paling canggih dalam Blueprint JS. Satu aturan tata bahasa bisa memiliki "Saklar" (Parameter) yang mengubah perilakunya berdasarkan konteks di mana ia berada.

*Mental Model: "Saklar Konteks Arsitektur"*

## 1. Notasi Parameter (`[Param]`)

Parameter ditulis dalam kurung siku di sebelah nama Non-terminal. Parameter yang paling sering muncul adalah:
- **`[Yield]`**: Apakah kita sedang berada di dalam Generator?
- **`[Await]`**: Apakah kita sedang berada di dalam Async Function?
- **`[In]`**: Apakah kita sedang berada di dalam header loop `for...in`?

## 2. Cara Kerja: "Propagasi Saklar"

Jika sebuah fungsi ditandai sebagai `async`, engine akan menyalakan saklar `[Await]`. Saklar ini kemudian "turun" ke seluruh aturan di bawahnya.

**Contoh Produksi:**
`Statement[Await, Yield] : ...`

Artinya: Aturan `Statement` ini bisa berperilaku berbeda jika saklar `Await` atau `Yield` menyala. Jika `Await` menyala, maka kata kunci `await` akan dianggap sebagai Terminal yang valid, bukan lagi sekadar nama variabel biasa.

## 3. Shorthand: `_` prefix

Dalam spesifikasi terbaru, Anda akan melihat notasi seperti `Statement_{+Await}`. Tanda `+` berarti "nyalakan", dan `~` berarti "matikan".

Memahami parameter ini menjelaskan mengapa Anda tidak bisa menggunakan `yield` di luar generator; bukan karena engine "pintar", tapi karena Blueprint tata bahasanya secara fisik tidak menyediakan jalur tersebut jika saklar `Yield` mati.
