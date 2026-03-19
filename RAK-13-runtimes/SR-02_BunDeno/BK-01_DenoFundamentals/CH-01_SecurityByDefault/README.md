# CH-01: Security by Default (URL Imports)

Salah satu perbedaan terbesar Deno adalah filosofi "Secure by Default".

## 🛡️ Sandbox Model
Deno tidak memiliki akses ke file, network, atau environment variable kecuali diizinkan secara eksplisit melalui flag saat eksekusi.

**Contoh eksekusi:**
```bash
deno run --allow-net server.ts
```

## 🌐 URL Imports
Deno tidak menggunakan `node_modules`. Ia memuat dependensi langsung dari URL.

```javascript
import { serve } from "https://deno.land/std/http/server.ts";
```

---
*Kembali ke [BK-01](../README.md)*
