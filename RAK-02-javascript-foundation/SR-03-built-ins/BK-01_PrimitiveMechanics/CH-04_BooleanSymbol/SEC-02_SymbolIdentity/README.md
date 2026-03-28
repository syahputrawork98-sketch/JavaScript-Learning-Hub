# SEC-02: Symbol Identity (The Secret Key)

> **"`Symbol` memberi JavaScript satu alat yang sangat spesifik: identitas unik yang tidak mudah bertabrakan dengan nama properti biasa."**

## Source Hub
- [MDN Web Docs - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [MDN Web Docs - Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties#symbols)

## Formal Definition
`Symbol` adalah primitive unik yang sering dipakai sebagai kunci properti atau penanda identitas.

## Mental Model
Bayangkan `Symbol` sebagai kunci rahasia: dua kunci dengan deskripsi sama tetap bukan kunci yang sama.

```mermaid
flowchart LR
    A[Symbol()] --> B[unique identity]
    B --> C[object property key]
    D[Symbol.for()] --> E[shared global key]
```

## Mekanisme Praktis
- `Symbol()` selalu menghasilkan identitas baru.
- `Symbol.for()` memakai registri global jika Anda memang ingin simbol bersama.
- Properti berbasis simbol membantu menghindari collision nama.

## Arsitek Mindset
- Gunakan simbol untuk metadata internal atau kontrak khusus yang tidak ingin bercampur dengan properti biasa.
- Jangan memakainya hanya untuk terlihat canggih; pastikan ada alasan identitas yang nyata.

## Lab Praktis
Lihat properti simbolik di [identity_lab.js](../examples/identity_lab.js).

---
*Status: [status.md](../../../status.md)*
