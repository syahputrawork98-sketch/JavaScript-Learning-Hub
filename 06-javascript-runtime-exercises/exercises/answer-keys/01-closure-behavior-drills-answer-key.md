# 01 - Closure Behavior Drills (Answer Key)

## Level 1
Output:
```txt
1
2
1
```
Alasan: `c1` dan `c2` berasal dari eksekusi `buatCounter()` yang berbeda sehingga punya lexical environment berbeda.

## Level 2
Output:
```txt
Halo Budi
Hai Budi
```
Alasan: closure menangkap `prefix` masing-masing instance (`"Halo"` dan `"Hai"`).

## Level 3
Output:
```txt
index 4
index 4
index 4
```
Alasan: `var i` shared untuk semua handler; saat dipanggil loop sudah selesai (`i === 4`).
Perbaikan minimal: ganti `var` jadi `let` atau bungkus `i` per iterasi dengan IIFE.
