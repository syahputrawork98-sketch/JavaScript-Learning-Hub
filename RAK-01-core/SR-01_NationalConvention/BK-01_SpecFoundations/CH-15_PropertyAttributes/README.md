# CH-15: Property Attributes

Jika properti adalah "Pintu", maka **Attributes** adalah "Gembok" dan "Alarm"-nya. Mari kita bedah Clause 4.4.40.

## Definisi Attribute
Atribut adalah nilai internal yang mendefinisikan karakteristik sebuah properti. Atribut menentukan apakah properti tersebut bisa:
- Diubah nilainya (`Writable`)
- Muncul di dalam loop (`Enumerable`)
- Dihapus atau diubah aturannya (`Configurable`)

Atribut bukanlah properti itu sendiri, melainkan "Meta-data" yang menempel pada properti.

---
> [!IMPORTANT]
> Memahami atribut adalah kunci untuk menguasai `Object.defineProperty` dan memahami mengapa objek seperti `Math` atau `JSON` punya perilaku yang sangat kaku (tidak bisa di-delete).
