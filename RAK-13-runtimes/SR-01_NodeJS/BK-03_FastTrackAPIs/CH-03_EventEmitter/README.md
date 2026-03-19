# CH-03: EventEmitter (Pub/Sub Pattern)

Banyak modul inti Node.js (seperti Streams dan HTTP) dibangun di atas modul `events`.

## 🛰️ Mekanisme Emit & Listen

```javascript
const EventEmitter = require('events');
const logger = new EventEmitter();

// Listen
logger.on('log', (message) => {
  console.log('Log diterima:', message);
});

// Emit
logger.emit('log', 'Sistem dijalankan');
```

Ini adalah dasar dari arsitektur event-driven di Node.js.

---
*Kembali ke [BK-03](../README.md)*
