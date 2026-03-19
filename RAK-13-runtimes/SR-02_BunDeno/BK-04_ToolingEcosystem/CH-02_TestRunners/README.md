# CH-02: Test Runners (Bun test vs Deno test)

Ucapkan selamat tinggal pada Jest atau Mocha yang berat untuk dikonfigurasi.

## 🧪 Deno Test
Deno memiliki test runner bawaan yang mendukung `permissions` selama pengetesan.
```bash
deno test --allow-net
```

## ⚡ Bun Test
Bun memiliki test runner yang kompatibel dengan Jest (mendukung `expect()`) namun jauh lebih cepat.
```bash
bun test
```

---
*Kembali ke [BK-04](../README.md)*
