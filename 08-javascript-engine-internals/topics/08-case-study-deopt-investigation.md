# 08 - Case Study: Deopt Investigation

## Tujuan
Melatih alur investigasi performa dari gejala -> hipotesis -> verifikasi -> perbaikan.

## Fokus Istilah
- Baseline benchmark
- Deopt signal
- Retest
- Regression guard

## Mapping Konsep
- Mulai dari gejala terukur (latensi/CPU).
- Bangun hipotesis penyebab deopt.
- Verifikasi dengan profiling.
- Terapkan patch dan ukur ulang.

## Workflow Investigasi
1. Reproduce gejala dengan langkah stabil.
2. Ambil baseline metric (latency, CPU, memory).
3. Bentuk hipotesis (misal: shape tidak stabil di hot path).
4. Terapkan patch kecil terukur.
5. Retest dengan skenario sama.
6. Simpan regression guard (benchmark/test/perf note).

## Mini Mapping Contoh
```text
Kasus:
- Gejala: endpoint list melambat saat data heterogen.
- Hipotesis: akses property pada call-site jadi polymorphic.
- Aksi: normalisasi shape object di jalur transform.
- Verifikasi: CPU hotspot turun dan p95 membaik.
```

## Checkpoint
- [ ] Bisa menyusun investigasi berbasis bukti, bukan tebakan.
- [ ] Bisa memisahkan gejala, hipotesis, aksi, dan verifikasi.
- [ ] Bisa menulis regression guard sederhana setelah fix.

## Jebakan Umum
- Mengubah banyak hal sekaligus sehingga sebab-akibat tidak jelas.
- Menilai patch performa tanpa retest yang sebanding.
