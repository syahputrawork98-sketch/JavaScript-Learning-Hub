# Example C19

Contoh runnable untuk bab **C19 - Declarations dan Variable Statement**.

## Tujuan Example

Folder ini membantu pembaca membedakan `const`, `let`, dan `var`, termasuk jebakan scope `var` dan arti sebenarnya dari `const`.

## Daftar File

- `example.js` menunjukkan `const`, `let`, dan kebocoran scope `var`.
- `example-02.js` fokus pada pitfall `var`.
- `example-03.js` menunjukkan bahwa `const` pada object tidak berarti object-nya immutable total.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan tiga jenis declaration sekaligus:

- `const` untuk binding yang tidak di-reassign
- `let` untuk binding yang bisa diperbarui
- `var` dengan karakter scope yang lebih longgar

Bagian `var legacy` sangat penting karena nilainya tetap bisa dibaca di luar block `if`.

### `example-02.js`

Contoh ini memperkuat jebakan `var`:

```js
if (true) {
  var leaked = 'visible';
  let safe = 'block-only';
}
```

Pembaca bisa langsung melihat bahwa `safe` bersifat block-scoped, sedangkan `leaked` tidak.

### `example-03.js`

File ini menunjukkan hal yang sangat sering disalahpahami:

```js
const state = { count: 0 };
state.count += 1;
```

`const` tidak melarang mutasi isi object. Ia hanya menjaga agar binding `state` tidak diarahkan ke object lain.

## Catatan Belajar

- Perbedaan `var` vs `let`/`const` lebih terasa di scope daripada sekadar “bisa diubah atau tidak”.
- `const` tidak sama dengan immutable object.
- Untuk code modern, `let` dan `const` hampir selalu lebih aman dijadikan kebiasaan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
