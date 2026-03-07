# 06 - Profiling Basics: CPU, Heap, Flamegraph

## Tujuan
Mengenali sinyal utama profiling untuk investigasi performa aplikasi JavaScript.

## Fokus Istilah
- CPU profile
- Heap snapshot
- Flamegraph
- Hotspot

## Mapping Konsep
- CPU profile untuk hotspot eksekusi.
- Heap snapshot untuk object retention.
- Flamegraph untuk distribusi waktu eksekusi stack.

## Workflow Baca (Topik Ini)
1. Definisikan gejala: lambat CPU atau memory naik.
2. Pilih alat sesuai gejala (CPU profile vs heap snapshot).
3. Rekam baseline dan skenario reproduksi.
4. Cari fungsi/object dominan lalu validasi perbaikan.

## Mini Mapping Contoh
```text
Gejala: endpoint melambat setelah traffic naik.
Langkah:
1) Rekam CPU profile saat traffic normal dan tinggi.
2) Bandingkan hotspot function.
3) Jika memory ikut naik, ambil heap snapshot untuk retention path.
```

## Checkpoint
- [ ] Bisa memilih alat profiling sesuai jenis gejala.
- [ ] Bisa membedakan bottleneck CPU vs memory.
- [ ] Bisa menyusun langkah profiling yang repeatable.

## Jebakan Umum
- Menebak optimasi tanpa baseline profile.
- Mencampur hasil profile dari skenario yang tidak sebanding.
