# Struktur Repository v2

Dokumen ini mendefinisikan struktur resmi JavaScript Learning Hub versi 2.

## Model Struktur

- Root repository = perpustakaan.
- Folder level atas = rak.
- Folder di dalam rak = buku.
- File materi di dalam buku = bab.

## Aturan `docs/` per Level

- Root boleh memiliki `docs/` untuk aturan global perpustakaan.
- Rak boleh memiliki `docs/` untuk aturan tingkat rak.
- Buku boleh memiliki `docs/` untuk aturan tingkat buku.
- Aturan harus ditulis sesuai scope level masing-masing.

## Aturan Log Perubahan

- Log perubahan hanya diletakkan di level buku.
- Nama file log: `CHANGELOG.md`.
- Tidak ada changelog di level root atau rak.

## Contoh Kerangka

```text
JavaScript-Learning-Hub/
|-- README.md
|-- docs/
|   |-- README.md
|   |-- repository-structure.md
|   |-- writing-rules.md
|   |-- contribution-rules.md
|   `-- templates/
|
|-- <rack-a>/
|   |-- docs/
|   |   |-- README.md
|   |   |-- scope.md
|   |   `-- writing-rules.md
|   `-- <book-1>/
|       |-- README.md
|       |-- CHANGELOG.md
|       |-- docs/
|       |   |-- README.md
|       |   |-- writing-rules.md
|       |   `-- content-structure.md
|       |-- chapters/
|       `-- assets/
|
`-- v1/
```

## Catatan Migrasi dari v1

- `v1/` berfungsi sebagai arsip referensi.
- Materi tidak dipindah massal ke root.
- Migrasi dilakukan bertahap per buku berdasarkan prioritas v2.

## Referensi Alur Rak

- Daftar rak resmi dan urutan alur ada di `docs/track-map.md`.
