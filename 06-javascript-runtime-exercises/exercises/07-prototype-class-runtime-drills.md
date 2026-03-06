# 07 - Prototype and Class Runtime Drills

## Tujuan
Melatih reasoning lookup property dan perilaku method class di runtime.

## Level 1 - Dasar
```js
const base = { role: "guest" };
const user = Object.create(base);
user.nama = "Rina";

console.log(user.nama);
console.log(user.role);
console.log(user.hasOwnProperty("role"));
```

Tugas:
- Prediksi output.
- Jelaskan jalur lookup property untuk `user.role`.

## Level 2 - Menengah
```js
class Counter {
  constructor() {
    this.nilai = 0;
  }
  inc() {
    this.nilai++;
    return this.nilai;
  }
}

const c = new Counter();
const fn = c.inc;
console.log(c.inc());
console.log(fn());
```

Tugas:
- Prediksi output/error.
- Jelaskan kenapa pemanggilan `fn()` bermasalah.

## Level 3 - Lanjutan
```js
class Base {
  constructor(prefix) {
    this.prefix = prefix;
  }
  getLabel() {
    return `${this.prefix}-BASE`;
  }
}

class Child extends Base {
  constructor(prefix) {
    super(prefix);
  }
  getLabel() {
    return super.getLabel() + "-CHILD";
  }
}

const obj = new Child("X");
const detached = obj.getLabel;

console.log(obj.getLabel());
console.log(detached());
```

Tugas:
- Prediksi output/error.
- Jelaskan interaksi `super`, method context, dan reference yang terlepas.

## Checkpoint
- [ ] Level 1: Bisa membedakan own property vs inherited property.
- [ ] Level 2: Bisa mendeteksi bug method saat reference lepas dari instance.
- [ ] Level 3: Bisa menjelaskan risiko runtime pada class inheritance + detached method.
