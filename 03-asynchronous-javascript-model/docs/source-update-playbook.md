# Source Update Playbook - Track 03

Dokumen ini dipakai saat ada update dari sumber belajar eksternal agar track 03 tetap sinkron dan konsisten.

## Kapan Dipakai
- ada topik async baru di sumber utama
- ada perubahan rekomendasi praktik (`Promise API`, cancellation, retry, observability)
- ada koreksi konsep event loop atau urutan eksekusi

## Checklist Update
1. Catat perubahan sumber (tanggal, URL, ringkasan perubahan).
2. Tandai dampak ke topik mana (`01-10`).
3. Pilih aksi:
- `minor`: perbaiki contoh/kalimat
- `medium`: tambah subbagian + latihan
- `major`: tambah topik baru atau pecah topik
4. Update berkas terkait:
- `topics/*.md`
- `topics/README.md`
- `docs/learning-path.md`
- `README.md`
- `CHANGELOG.md`
5. Jalankan validasi link markdown lokal.
6. Tambahkan entri changelog versi baru.

## Template Catatan Update

```md
### Source Update - YYYY-MM-DD
- Sumber:
- Perubahan utama:
- Dampak topik:
- Aksi yang dilakukan:
- Risiko/regresi:
```

## Rule Konsistensi
- pertahankan format topik rilis yang sama
- jika menambah topik, sambungkan alur `Lanjut Setelah Ini`
- jika contoh berubah, perbarui latihan dan ringkasan agar sinkron
- hindari membawa detail framework spesifik ke track 03
