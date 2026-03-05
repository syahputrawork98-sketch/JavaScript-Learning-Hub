# Prasyarat: Promise Dasar

## Tujuan
- Paham Promise merepresentasikan hasil async di masa depan.
- Paham alur dasar `.then()` dan `.catch()`.

## Contoh Ringkas
```js
function getData() {
  return Promise.resolve('data siap');
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Bedah Singkat
1. Promise bisa `fulfilled` atau `rejected`.
2. `.then()` dipakai saat sukses.
3. `.catch()` dipakai saat gagal.

## Checklist Cepat
- [ ] Bisa baca alur Promise sederhana.
- [ ] Tahu kenapa `.catch()` tetap perlu disiapkan.
