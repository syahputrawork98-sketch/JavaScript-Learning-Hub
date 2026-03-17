# CH-11: The BigInt Type & Objects

Solusi untuk keterbatasan angka 64-bit: **BigInt**. (Clause 4.4.28 - 4.4.30).

## 1. BigInt Value & Type (4.4.28 - 4.4.29)
Berbeda dengan `Number` yang berbasis floating-point, **BigInt Type** adalah himpunan semua integer matematika (angka bulat) dengan presisi arbitrer (tidak terbatas selama memori tersedia).

## 2. BigInt Object (4.4.30)
Pembungkus objek untuk nilai BigInt. 

---
## Number vs BigInt:
| Fitur | Number | BigInt |
| :--- | :--- | :--- |
| Presisi | Terbatas (IEEE 754) | Tidak Terbatas |
| Floating Point | Ya | Tidak (Hanya Bulat) |
| Simbol | `123` | `123n` |

---
> [!IMPORTANT]
> BigInt dan Number tidak bisa dicampur secara langsung dalam operasi matematika tanpa konversi eksplisit. Ini untuk mencegah hilangnya presisi secara tidak sengaja.
