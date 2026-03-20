# Lab: Decision Guide (Which Runtime?)

Gunakan diagram ini untuk menentukan runtime mana yang paling cocok dengan kebutuhan spesifik Anda.

```mermaid
graph TD
    Start[Mulai Proyek Baru] --> Legacy{Butuh library lama /<br/>Ecosystem besar?}
    Legacy -->|Ya| Node[Node.js]
    Legacy -->|Tidak| Speed{Utamakan kecepatan /<br/>Tooling ringkas?}
    
    Speed -->|Ya| Bun[Bun]
    Speed -->|Tidak| Secure{Utamakan keamanan /<br/>Standard Web API?}
    
    Secure -->|Ya| Deno[Deno]
    Secure -->|Tidak| Node
    
    style Node fill:#2ecc71,stroke:#333
    style Bun fill:#3498db,stroke:#333
    style Deno fill:#f1c40f,stroke:#333
```

## 📋 Ringkasan Rekomendasi
- **Node.js**: Pilihan aman untuk enterprise, library stabil, dan tim besar.
- **Bun**: Pilihan tepat untuk startup, microservices, dan performa I/O ekstrim.
- **Deno**: Pilihan ideal untuk cloud functions, script mandiri, dan lingkungan yang mementingkan keamanan sandbox.
