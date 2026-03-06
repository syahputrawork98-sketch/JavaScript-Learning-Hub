# 04 - Object Mutation Drills (Answer Key)

## Level 1
Output:
```txt
99
99
```
Alasan: `a` dan `b` menunjuk object yang sama.

## Level 2
Output:
```txt
Bima
Bima
```
Alasan: spread pada level atas hanya shallow copy; `user` masih reference yang sama.

## Level 3
Output:
```txt
Lia 3
Mila 3
```
Alasan: `profile` sudah di-copy terpisah, tetapi `tags` masih berbagi reference dengan `source`.
Perbaikan: copy juga `tags` (`tags: [...source.tags]`) atau gunakan deep clone sesuai kebutuhan.
