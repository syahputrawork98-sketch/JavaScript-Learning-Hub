# Example C28

Contoh runnable untuk bab **C28 - switch Statement**.

## Tujuan Example

Folder ini menunjukkan percabangan `switch`, pentingnya `break`, dan contoh fallthrough yang disengaja.

## Daftar File

- `example.js` menunjukkan `switch` dasar dengan beberapa `case`.
- `example-02.js` menunjukkan fallthrough yang disengaja.
- `example-03.js` menunjukkan `default` pada kode yang tidak cocok.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan bentuk `switch` yang paling aman untuk pemula:

```js
switch (role) {
  case 'admin':
    ...
    break;
  case 'editor':
    ...
    break;
}
```

Setiap `case` ditutup dengan `break` agar tidak lanjut ke cabang berikutnya tanpa sengaja.

### `example-02.js`

Contoh ini menunjukkan fallthrough yang disengaja:

```js
case 3:
  label += 'advanced ';
case 2:
  label += 'intermediate ';
```

Tujuannya agar pembaca paham bahwa jatuh ke `case` berikutnya bukan selalu bug, tetapi harus sangat sadar dan jelas niatnya.

### `example-03.js`

File ini menunjukkan kegunaan `default`:

```js
default:
  console.log('unknown');
```

Pembaca diajak melihat bahwa `switch` yang baik tetap punya jalur cadangan saat nilai tidak cocok dengan `case` mana pun.

## Catatan Belajar

- `switch` cocok saat membandingkan satu nilai terhadap banyak kemungkinan tetap.
- `break` adalah bagian penting dari banyak penggunaan `switch`.
- Fallthrough valid, tetapi sebaiknya dipakai dengan sangat sengaja.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
