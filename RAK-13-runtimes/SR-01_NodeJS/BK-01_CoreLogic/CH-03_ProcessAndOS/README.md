# CH-03: Process & OS Integration (IPC & Signals)

Node.js memberikan kontrol penuh terhadap interaksi dengan sistem operasi melalui objek `process`.

## 🔋 Objek `process`

`process` adalah objek global yang menyediakan informasi dan kontrol atas proses Node.js yang sedang berjalan.

- `process.env`: Mengakses environment variables.
- `process.argv`: Argumen baris perintah.
- `process.pid`: ID Proses.
- `process.exit()`: Mengakhiri proses.

## 📡 Signal Handling

Node.js dapat menangkap sinyal OS seperti `SIGINT` (Ctrl+C) atau `SIGTERM`.

```javascript
process.on('SIGINT', () => {
  console.log('Menutup server dengan aman...');
  process.exit();
});
```

---
*Kembali ke [BK-01](../README.md)*
