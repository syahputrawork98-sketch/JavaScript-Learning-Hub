# CH-01: Security by Default (The Sandbox Model)

Filosofi utama Deno adalah keamanan. Tidak seperti Node.js yang memiliki akses bebas ke sistem Anda, Deno menjalankan kode di dalam **Sandbox** yang terisolasi.

## 🛡️ Permission System (Opt-in)
Secara default, naskah Deno tidak dapat menyentuh apa pun di luar memorinya sendiri.

```mermaid
graph TD
    Script[TS/JS Script] --> SB{Deno Sandbox}
    SB -->|Blocked by Default| FS[File System]
    SB -->|Blocked by Default| NET[Network]
    SB -->|Blocked by Default| ENV[Env Variables]
    
    User((User)) -->|--allow-read| SB
    User -->|--allow-net| SB
    
    style SB fill:#3498db,stroke:#333
    style FS fill:#e74c3c,stroke:#333
    style NET fill:#e74c3c,stroke:#333
```

## 🔐 Bendera Izin (Flags)
Beberapa flag yang paling sering digunakan:
- `--allow-read`: Membaca file.
- `--allow-write`: Menulis file.
- `--allow-net`: Akses internet/jaringan.
- `--allow-env`: Membaca environment variables.
- `--allow-run`: Menjalankan sub-proses.

> [!IMPORTANT]
> **Granular Control**: Anda dapat membatasi izin ke spesifik file atau domain, misalnya: `deno run --allow-read=/tmp --allow-net=google.com server.ts`. Ini jauh lebih aman daripada memberikan akses global.

---
*Lihat Lab: [Tes Sandbox](./examples/deno_secure.ts)*  
*Kembali ke [BK-01](../README.md)*
