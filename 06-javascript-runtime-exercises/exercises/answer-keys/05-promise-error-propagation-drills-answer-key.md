# 05 - Promise Error Propagation Drills (Answer Key)

## Level 1
Output:
```txt
start
caught: boom
final: recovered
```
Alasan: `throw` membuat Promise jadi rejected; `catch` memulihkan chain dengan `return "recovered"`.

## Level 2
Output:
```txt
handle: gagal
selesai
```
Alasan: rejection dari `await` ditangkap `catch`, lalu eksekusi lanjut ke baris berikutnya.

## Level 3
Output:
```txt
catch-1 A
catch-2 B
catch-final C
```
Alasan: `throw` dan `Promise.reject` sama-sama meneruskan state rejected ke handler berikutnya.
