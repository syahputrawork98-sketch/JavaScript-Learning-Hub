# 05 - Dynamic Import dan Code Splitting Konseptual

## Tujuan
Memahami kapan `import()` dipakai dan tradeoff arsitekturnya.

## Fokus Istilah
- Dynamic import
- Lazy load
- Chunk boundary
- Async loading

## Mapping Konsep
- `import()` memindahkan loading/evaluation ke runtime saat dibutuhkan.
- Cocok untuk fitur jarang dipakai atau jalur berat.
- Ada tradeoff: latensi awal fitur vs pengurangan beban startup.

## Workflow Baca (Topik Ini)
1. Identifikasi modul berat/non-kritis startup.
2. Ubah aksesnya ke `import()`.
3. Catat dampak startup dan first-use latency.
4. Tambahkan fallback UX saat modul belum selesai dimuat.

## Mini Mapping Contoh
```js
async function openReport() {
  const { renderReport } = await import("./report.js");
  renderReport();
}
```
Cara baca:
1. `report.js` tidak harus dievaluasi saat startup.
2. Modul dimuat saat `openReport` dipanggil.
3. Alur jadi async dan perlu handling loading/error.

## Checkpoint
- [ ] Bisa menjelaskan static import vs dynamic import.
- [ ] Bisa menyebutkan use case lazy loading yang tepat.
- [ ] Bisa menjelaskan tradeoff startup vs first-use latency.

## Jebakan Umum
- Dynamic import dipakai berlebihan sampai alur sulit dipahami.
- Tidak menyiapkan fallback UX untuk loading/error.
