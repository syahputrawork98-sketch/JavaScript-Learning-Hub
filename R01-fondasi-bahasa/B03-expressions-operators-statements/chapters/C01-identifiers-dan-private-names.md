# C01 - [13.1] Identifiers dan Private Names

## Tujuan

Bab ini bertujuan memahami identifier, private name, dan batas validitas penamaan pada expression context.

## Kenapa Bab Ini Penting

Identifier dan private names adalah fondasi sintaks expression JavaScript.
Kesalahan di level ini sering memicu error parser sebelum logic program jalan.

## Konsep Inti

### 1. Identifier Valid vs Tidak Valid

- valid: totalScore, _cache, 
- tidak valid: 2score, user-name

### 2. Reserved Words Tidak Bisa Dipakai Sembarangan

Kata seperti class, return, atau import punya aturan konteks tertentu.

### 3. Private Names Dipakai di Class

Private fields menggunakan prefix # dan hanya valid dalam class body.

## Praktik yang Direkomendasikan

- Gunakan penamaan konsisten dan deskriptif.
- Hindari nama mirip reserved word untuk mencegah kebingungan.
- Pakai private field hanya saat encapsulation memang dibutuhkan.

## Kesalahan Umum

- Menamai variabel diawali angka.
- Mencampur karakter khusus yang tidak valid.
- Mengakses private field dari luar class.

## Checkpoint Cepat

1. Apa beda identifier biasa dan private name?
2. Kenapa 2score invalid sebagai identifier?
3. Kapan #id boleh dipakai?

## Analogi Singkat

Identifier dan private name itu seperti nama yang harus lolos aturan sistem sebelum bisa dipakai. Kalau format namanya tidak valid, parser bahkan belum mau melanjutkan membaca kode.

## Ringkasan

- Identifier mengikuti aturan lexical yang ketat.
- Reserved word dan private name punya konteks penggunaan berbeda.
- Paham aturan penamaan mempercepat debugging sejak awal.

## Visual Map

![C01 - [13.1] Identifiers dan Private Names Map](../assets/C01-identifiers-dan-private-names-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C01-identifiers-dan-private-names/example.js
- Panduan: ../examples/C01-identifiers-dan-private-names/README.md
