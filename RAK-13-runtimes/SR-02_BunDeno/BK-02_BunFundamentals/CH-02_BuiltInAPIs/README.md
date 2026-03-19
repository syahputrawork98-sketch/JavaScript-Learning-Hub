# CH-02: Bun's Built-in APIs (SQLite, HTTP)

Bun tidak hanya menjalankan JavaScript, ia juga menyediakan perkakas lengkap yang biasanya membutuhkan library pihak ketiga.

## 🛠️ API Bawaan
- **Bun.serve()**: Server HTTP super-cepat yang mendukung WebSockets secara native.
- **Bun.sql**: Driver SQLite yang sangat cepat dan mudah digunakan.
- **Bun.file()**: API pembacaan file yang jauh lebih cepat dibanding `fs` Node.js.

## 🧩 Contoh Server HTTP
```javascript
Bun.serve({
  fetch(req) {
    return new Response("Hello from Bun!");
  },
  port: 3000,
});
```

---
*Kembali ke [BK-02](../README.md)*
