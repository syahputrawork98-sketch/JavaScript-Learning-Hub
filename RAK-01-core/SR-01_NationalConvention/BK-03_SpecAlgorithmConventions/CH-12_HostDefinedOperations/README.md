# Chapter 12: Host-Defined Operations

JavaScript tidak hidup sendirian. Ia butuh rumah (Host). Rumah ini bisa berupa **Browser** atau **Node.js**.

## 1. Apa itu Host-Defined?

Spesifikasi JS (ECMA-262) sangat pintar; ia tahu ia tidak bisa menentukan segalanya. Kadang spek berkata: "Bagian ini diserahkan kepada *Host* untuk menentukannya."

### Analogi Singkat: "Konektor Universal"
Spek JS adalah mesin kopi yang canggih. Tapi spesifikasi tidak menentukan dari mana airnya berasal (apakah dari galon atau keran otomatis). Spek hanya menyediakan "Konektor Universal". Browser (Host) akan menyambungkan keran air ke konektor tersebut.

## 2. Contoh Nyata

- **Module Loading**: Spek menentukan *bagaimana* modul dieksekusi, tapi Host yang menentukan *bagaimana* file modul dicari di harddisk atau melalui internet.
- **Job Queues**: Spek menentukan alur antrean, tapi Host yang memberikan infrastruktur untuk menjalankannya.

Sebagai arsitek, Anda harus tahu di mana batas aturan "Bahasa" berakhir dan di mana aturan "Runtime/Host" dimulai.
