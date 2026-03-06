# 08 - Integrative Runtime Debugging Drills

## Tujuan
Menggabungkan closure, async order, `this`, dan mutation dalam kasus debugging campuran.

## Level 1 - Dasar
```js
function makeRunner(user) {
  return {
    run() {
      Promise.resolve().then(function () {
        user.count++;
        console.log(this.nama, user.count);
      });
    },
  };
}

const state = { count: 0 };
const runner = makeRunner(state);
const obj = { nama: "Nia", runner };
obj.runner.run();
```

Tugas:
- Prediksi output/error.
- Identifikasi minimal dua sumber bug runtime pada snippet.

## Level 2 - Menengah
```js
const state = { items: [1, 2] };

async function update(next) {
  const copy = { ...next };
  await Promise.resolve();
  copy.items.push(3);
  return copy;
}

update(state).then((result) => {
  console.log("state:", state.items);
  console.log("result:", result.items);
});
```

Tugas:
- Prediksi output.
- Jelaskan kenapa `state` ikut berubah walau ada spread copy.
- Usulkan perbaikan minimal agar `state` tetap aman.

## Level 3 - Lanjutan
```js
function createModule(config) {
  return {
    count: 0,
    inc() {
      this.count++;
      Promise.resolve().then(() => {
        config.logs.push(this.count);
      });
    },
  };
}

const cfg = { logs: [] };
const mod = createModule(cfg);
const fn = mod.inc;
fn();
setTimeout(() => console.log(cfg.logs), 0);
```

Tugas:
- Prediksi output/error.
- Pecah akar masalah berdasarkan kategori: binding, async timing, dan mutation/reference.
- Usulkan patch minimal agar perilaku stabil.

## Checkpoint
- [ ] Level 1: Bisa memecah bug campuran menjadi akar masalah per konsep.
- [ ] Level 2: Bisa mengusulkan perbaikan kecil yang tepat sasaran.
- [ ] Level 3: Bisa menyusun patch yang menjaga perilaku sync dan async tetap konsisten.
