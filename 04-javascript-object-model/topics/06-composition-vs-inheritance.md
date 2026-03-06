# Composition vs Inheritance

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/composition-vs-inheritance-map.svg`](../assets/composition-vs-inheritance-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`6` pada Track 04.
- Prasyarat langsung: `05-class-constructor-dan-new.md`.
- Lanjut setelah ini: `07-object-create-dan-delegation-patterns.md`.

Prasyarat topik:
- Sudah paham prototype chain dan class dasar.
- Sudah paham kebutuhan berbagi behavior antar object.

Referensi remedial:
- [`02-prototype-chain-lanjutan.md`](./02-prototype-chain-lanjutan.md)
- [`05-class-constructor-dan-new.md`](./05-class-constructor-dan-new.md)

Kamus mini topik:
- `[baru]` Inheritance: pewarisan perilaku lewat hubungan parent-child.
- `[baru]` Composition: menggabungkan perilaku dari beberapa bagian kecil.
- `[baru]` Coupling: tingkat keterikatan antar bagian kode.
- `[ulang]` Reuse: penggunaan ulang logic tanpa duplikasi.

## Pengantar Singkat Topik
Saat desain object berkembang, pilihan antara inheritance dan composition menentukan seberapa fleksibel kode berubah. Topik ini membantu memilih strategi reuse yang lebih aman untuk maintainability jangka panjang.

## 1) Big Picture
Inheritance cepat dipakai di awal, tetapi bisa menimbulkan coupling tinggi ketika hirarki makin dalam. Composition cenderung lebih fleksibel karena behavior dirakit dari bagian kecil yang bisa diganti. Topik ini membahas tradeoff praktis supaya pilihan desain tidak membuat codebase rapuh.

## 2) Small Picture
1. Inheritance cocok untuk hubungan `is-a` yang stabil.
2. Composition cocok untuk menggabungkan kemampuan `has-a` yang bisa berubah.
3. Semakin dalam hirarki inheritance, semakin sulit melacak efek perubahan.
4. Composition memudahkan testing karena unit behavior lebih terpisah.
5. Pilih pendekatan berdasarkan kebutuhan perubahan, bukan preferensi style.

## 3) Wireframe
```text
Alur utama:
[butuh reuse behavior] -> [evaluasi is-a vs has-a] -> [pilih inheritance/composition]

Alur jalan:
[fitur modular] -> [gabung fungsi kecil] -> [composition lebih fleksibel]

Alur error:
[hirarki inheritance terlalu dalam] -> [override membingungkan] -> [regresi lintas turunan]
```

## 4) Analogi
- Inheritance: model kendaraan turunan tetap (Mobil -> Sedan).
- Composition: merakit kendaraan dari komponen (mesin, sensor, navigasi) yang bisa diganti kapan saja.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: merancang arsitektur object yang mudah diubah.
- Alasan pakai: mengurangi coupling dan mencegah desain inheritance berlebihan.
- Kapan tidak dipakai: jangan memecah terlalu kecil jika domain memang sederhana dan stabil.

## 6) Contoh Sederhana
```js
const canLog = {
  log(msg) {
    return `[LOG] ${msg}`;
  },
};

function createService(name) {
  return {
    name,
    ...canLog,
    run() {
      return this.log(`${this.name} running`);
    },
  };
}

const svc = createService('Payment');
console.log(svc.run()); // [LOG] Payment running
```

### Bedah Output (Langkah Demi Langkah)
1. Behavior logging disiapkan sebagai komponen terpisah (`canLog`).
2. `createService` merakit object service dan menggabungkan behavior logging.
3. `run()` memanggil behavior hasil komposisi tanpa perlu hirarki class panjang.
4. Pola ini memudahkan menambah/mengganti kemampuan object.

## 7) Jebakan Umum
- Memaksa inheritance walau hubungan domain sebenarnya bukan `is-a`.
- Membuat utility composition tanpa kontrak jelas sehingga API object acak.
- Mencampur terlalu banyak mixin sampai asal method sulit dilacak.

## 8) Prediksi Output Drill
```js
const canA = { a() { return 'A'; } };
const canB = { b() { return 'B'; } };

const obj = { ...canA, ...canB };
console.log(obj.a(), obj.b());
```

### Kunci Jawaban Drill
- Output: `A B`
- Alasan: object akhir berisi gabungan behavior dari dua komponen.

## 9) Debug Story
Kasus: subclass saling override method hingga behavior tidak konsisten.
Langkah debug:
1. Petakan ulang hierarchy class yang terlalu dalam.
2. Identifikasi behavior yang bisa dipisah menjadi komponen composition.
3. Migrasikan bertahap dari inheritance berat ke composition modular.

## 10) Checkpoint
- [ ] Bisa membedakan kapan cocok pakai inheritance vs composition.
- [ ] Bisa menjelaskan risiko coupling pada inheritance dalam.
- [ ] Bisa membuat contoh composition sederhana yang reusable.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `05-class-constructor-dan-new.md`.
2. Buat satu contoh problem dan desain dua versi (inheritance + composition).
3. Bandingkan mana yang lebih mudah diubah saat requirement berubah.


