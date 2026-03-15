# Chapter 04: Grammar Notation Basic

Bagaimana spesifikasi menuliskan aturan-aturan CFG tersebut? Mereka menggunakan sistem notasi produksi yang sangat spesifik.

## 1. Bentuk Produksi

Sebuah aturan biasanya ditulis dalam bentuk:
*Non-terminal* **:** *Daftar Alternatif*

## 2. Parameter dan Kondisi

JS memiliki fitur canggih di mana satu aturan tata bahasa bisa berperilaku berbeda tergantung konteks. Contohnya: `[Yield]` parameter. Jika sebuah fungsi adalah generator, spek mengaktifkan jalur tata bahasa yang mengizinkan kata kunci `yield`.

### Analogi Singkat: "Gerbang Adaptif"
Bayangkan sebuah gerbang jalan tol. Di siang hari (Konteks Normal), mobil biasa boleh lewat. Di jam sibuk (Konteks Generator), hanya bus khusus yang boleh lewat jalur tersebut. Simbol `[Yield]` adalah saklar yang menentukan aturan gerbang mana yang berlaku.

## 3. Simbol Opsional (`opt`)

Menunjukkan bahwa sebuah bagian dalam produksi boleh ada atau tidak ada. Ini adalah alasan mengapa `;` sering kali bersifat opsional di mata tata bahasa (walaupun diatur juga oleh ASI).
