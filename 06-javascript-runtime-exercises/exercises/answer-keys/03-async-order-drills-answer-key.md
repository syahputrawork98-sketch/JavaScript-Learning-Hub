# 03 - Async Order Drills (Answer Key)

## Level 1
Output:
```txt
A
D
C
B
```
Alasan: kode sync jalan dulu, lalu microtask (`Promise.then`), lalu macrotask (`setTimeout`).

## Level 2
Output:
```txt
0
1
3
2
```
Alasan: `await` memecah fungsi; lanjutan setelah `await` masuk microtask.

## Level 3
Output:
```txt
S
E
M1
T1
M-in-T1
T2
```
Alasan: microtask awal (`M1`) habis dulu. Timer `T1` terdaftar lebih dulu dari `T2`, dan microtask baru dari `T1` dijalankan sebelum timer berikutnya.
