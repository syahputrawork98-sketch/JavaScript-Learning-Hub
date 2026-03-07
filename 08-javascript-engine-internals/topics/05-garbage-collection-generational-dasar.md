# 05 - Garbage Collection Generational Dasar

## Tujuan
Memahami model GC generational secara high-level dan dampaknya pada performa.

## Fokus Istilah
- Young generation
- Old generation
- Minor collection
- Major collection
- Promotion

## Mapping Konsep
- Banyak object berumur pendek dibersihkan cepat di generasi muda.
- Object yang bertahan dipromosikan ke generasi tua.
- Tekanan alokasi tinggi dapat meningkatkan frekuensi GC.

## Workflow Baca (Topik Ini)
1. Bedakan object short-lived vs long-lived pada kode.
2. Kaitkan short-lived churn dengan minor collection.
3. Kaitkan object bertahan lama dengan old generation.
4. Pahami bahwa pause/overhead GC bergantung pola alokasi.

## Mini Mapping Contoh
```js
function churn() {
  for (let i = 0; i < 100000; i++) {
    const tmp = { i, v: i + 1 };
    void tmp;
  }
}

churn();
```
Cara baca:
1. Banyak object sementara dialokasikan.
2. Mayoritas object kemungkinan cepat jadi unreachable.
3. Pola ini biasanya menekan generasi muda lebih dulu.

## Checkpoint
- [ ] Bisa menjelaskan minor vs major collection secara konseptual.
- [ ] Bisa menjelaskan konsep promotion antar generasi.
- [ ] Bisa menghubungkan allocation churn dengan tekanan GC.

## Jebakan Umum
- Menganggap `GC` terjadi pada waktu yang bisa diprediksi sinkron.
- Mengoptimasi mikro sebelum punya gejala bottleneck memori nyata.
