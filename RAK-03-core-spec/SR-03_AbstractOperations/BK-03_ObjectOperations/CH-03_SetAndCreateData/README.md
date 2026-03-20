# CH-03: Set & CreateDataProperty (The Flow Regulators)

> **"Mengisi daya ke sebuah tangki (`Set`) berbeda dengan memasang tangki baru di Grid (`CreateDataProperty`). `Flow Regulators` adalah serangkaian aturan internal yang menentukan apakah energi kita akan mengisi tangki yang sudah ada atau menciptakan infrastruktur baru."**

*Pemetaan ECMA-262: Clause 7.3.4 & 7.3.5 (Set & CreateDataProperty)*

## 🏗️ The Property Assignment Logic

```mermaid
graph TD
    Input[Set O, P, V, Receiver] --> Internal[Call O.[[Set]](P, V, Receiver)]
    Internal --> Success[Return Result]
```

## 1. Mental Model: "The Flow Regulators"

- **`Set(O, P, V)`**: Seperti mencoba menuangkan air ke pipa `P`. Jika pipa `P` di mesin `O` ternyata tersambung ke tangki cadangan di mesin Induk (`Prototype`), maka `Set` akan mencari tangki tersebut dan mengisinya (atau menciptakan tangki baru di `O` sendiri jika aturan `Shadowing` berlaku).
- **`CreateDataProperty(O, P, V)`**: Seperti menempelkan tangki baru secara paksa tepat di permukaan mesin `O`. Ia tidak peduli dengan pipa-pipa di mesin Induk. Ini adalah operasi yang lebih "murni" dan langsung.

---

## 2. Perbedaan Operasional

| Operasi | Trigger di JS | Perilaku terhadap Prototype |
| :--- | :--- | :--- |
| **Set** | `obj.prop = 42` | Bisa memicu `setter` di Prototype. |
| **CreateDataProperty** | `Object.defineProperty(...)` | Mengabaikan `setter` di Prototype; selalu buat di objek target. |

---

## 3. Kenapa Ini Penting? (Lab Case)

Jika Prototype memiliki properti "read-only", operasi `Set` standar (`=`) akan gagal mengisi daya, sedangkan `CreateDataProperty` mungkin bisa memasang tangki baru untuk menimpa aturan lama (tergantung konfigurasi `Configurable`).

---

## Arsitek Mindset: Pengaturan State

Sebagai arsitek Hub:
- Gunakan penugasan standar (`=`) untuk pembaruan data rutin yang menghargai kontrak arsitektur mesin.
- Gunakan `Object.defineProperty` (CreateDataProperty) saat Anda sedang membangun fondasi mesin Hub yang butuh konfigurasi spesifik (seperti membuat properti yang tidak bisa dihapus atau tidak terlihat oleh scanner sensor).

---
*Status: [status.md](../../../docs/status.md)*
