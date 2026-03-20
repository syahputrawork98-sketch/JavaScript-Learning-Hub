# CH-13: Data Block Operations

Bagaimana spesifikasi menginstruksikan mesin untuk membuat atau memindahkan data biner? Mari kita lihat algoritma di Clause 6.2.9.1 - 6.2.9.3.

---

## 1. CreateByteDataBlock ( size )
Ini adalah perintah penciptaan.
1. Mesin meminta sistem operasi menyediakan memori sebesar `size` byte.
2. Jika memori penuh, lempar `RangeError`.
3. Jika berhasil, isi setiap byte dengan `0`.
4. Kembalikan sebuah Data Block baru.

## 2. CreateSharedByteDataBlock ( size )
Mirip dengan di atas, namun memori yang disediakan harus bersifat "Shared" (Bisa dibagikan antar Worker). 
> *Insight Arsitek:* Karena bersifat shared, operasi pada blok ini harus sangat hati-hati (Atomic) agar tidak terjadi perebutan data (*Race Conditions*).

## 3. CopyDataBlockBytes ( toBlock, toIndex, fromBlock, fromIndex, count )
Inilah algoritma "Copy-Paste" biner.
- Ia memindahkan `count` buah byte dari posisi `fromIndex` di sumber ke posisi `toIndex` di tujuan.
- Operasi ini harus sangat cepat karena sering digunakan saat Anda memanggil `.slice()` pada sebuah ArrayBuffer.

---

## Mengapa Arsitek Harus Tahu Ini?
Operasi ini menjelaskan mengapa pembuatan buffer yang sangat besar bisa memicu `RangeError` (CH-01). Ini juga memberi tahu Anda bahwa meng-copy buffer adalah operasi linear ($O(n)$) yang menghabiskan daya CPU. Arsitek yang bijak akan menghindari copy data yang tidak perlu dengan menggunakan teknik *Transferable Objects*.

---

## Tantangan Kecil
Dapatkah kita meng-copy data ke luar batas `size` sebuah Data Block?
(Jawabannya: **TIDAK**. Spesifikasi memiliki proteksi ketat. Jika `toIndex + count` melebihi ukuran block, operasi tersebut ilegal. Namun, di level bahasa (JavaScript), proteksi ini sudah dibungkus rapi sehingga tidak terjadi *Buffer Overflow* yang membahayakan sistem).

---
> [!IMPORTANT]
> **Key Takeaway:** Alokasi dan Copy adalah dua operasi terberat di level Data Block. Lakukan dengan hemat!
