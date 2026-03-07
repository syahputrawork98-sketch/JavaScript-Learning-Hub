# 07 - Engine-Friendly JavaScript Patterns

## Tujuan
Merangkum pola kode yang umumnya lebih ramah terhadap optimasi engine.

## Fokus Istilah
- Stable shapes
- Predictable call-sites
- Allocation discipline
- Hot path hygiene

## Mapping Konsep
- Jaga konsistensi struktur object.
- Hindari perubahan tipe/shape drastis di jalur panas.
- Kurangi alokasi sementara berlebihan di loop kritis.

## Workflow Baca (Topik Ini)
1. Identifikasi hot path utama aplikasi.
2. Audit stabilitas input dan shape object di hot path.
3. Minimalkan perubahan pola data antar iterasi.
4. Verifikasi dengan profiling, bukan asumsi.

## Mini Mapping Contoh
```js
function makeUser(id, name) {
  return { id, name, active: true };
}

const users = [];
for (let i = 0; i < 10000; i++) users.push(makeUser(i, "u" + i));
```
Cara baca:
1. Factory menjaga layout object lebih konsisten.
2. Konsistensi ini biasanya lebih ramah untuk shape/IC.
3. Tetap validasi hasil dengan profiling nyata.

## Checkpoint
- [ ] Bisa menyebutkan 3 praktik engine-friendly yang realistis.
- [ ] Bisa membedakan optimasi berdampak vs premature micro-optimization.
- [ ] Bisa mengaitkan praktik coding dengan sinyal profiling.

## Jebakan Umum
- Mengejar trik performa tanpa memahami bottleneck utama.
- Mengorbankan readability besar untuk gain yang belum terbukti.
