# 06 - Event Loop Batching and Starvation Drills (Answer Key)

## Level 1
Output:
```txt
sync
micro-1
micro-2
timer
```
Alasan: microtask selalu dikosongkan sebelum pindah ke macrotask timer.

## Level 2
Output:
```txt
start
micro 1
micro 2
micro 3
timer done
```
Alasan: tiap microtask menjadwalkan microtask berikutnya sehingga timer tertunda sampai rangkaian selesai.

## Level 3
Output:
```txt
S
M1
M2
T1
M-in-T1
T2
```
Alasan: microtask global (`M1`,`M2`) selesai dulu, lalu timer. Microtask yang dibuat dalam callback timer (`M-in-T1`) dieksekusi sebelum timer berikutnya.
