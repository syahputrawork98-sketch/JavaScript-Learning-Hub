# 07 - Barrel Pattern Tradeoff dan Anti-pattern

## Tujuan
Memahami manfaat dan risiko barrel file pada project modular.

## Fokus Istilah
- Barrel module
- Re-export fan-out
- Dependency visibility

## Mapping Konsep
- Barrel memudahkan ergonomi import dari satu titik.
- Barrel bisa menyamarkan dependency nyata dan memperbesar coupling.
- Barrel efektif jika domain boundary jelas dan terkendali.

## Workflow Baca (Topik Ini)
1. Audit modul yang sering di-import bersamaan.
2. Evaluasi apakah barrel memperjelas atau menyamarkan dependency.
3. Batasi barrel pada domain jelas (bukan global dumping).
4. Verifikasi dampak terhadap maintainability.

## Mini Mapping Contoh
```js
// ui/index.js (barrel)
export { Button } from "./button.js";
export { Input } from "./input.js";
export { Modal } from "./modal.js";
```
Cara baca:
1. Konsumen import dari satu titik.
2. Mudah dipakai, tapi perlu kontrol agar tidak jadi keranjang semua export.
3. Pastikan barrel tidak menyembunyikan dependency lintas domain.

## Checkpoint
- [ ] Bisa menjelaskan kapan barrel membantu dan kapan merugikan.
- [ ] Bisa menyebutkan anti-pattern barrel yang umum.
- [ ] Bisa merancang aturan penggunaan barrel untuk tim.

## Jebakan Umum
- Barrel global untuk seluruh aplikasi tanpa domain boundary.
- Re-export berlapis sehingga asal simbol sulit dilacak.
