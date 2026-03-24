const safeStorage = {
  _value: 0,
  get value() {
    return `${this._value} units`;
  },
  set value(input) {
    if (typeof input !== "number" || input < 0) {
      throw new Error("INVALID_VALUE");
    }
    this._value = input;
  },
};

safeStorage.value = 220;
console.log("Stored:", safeStorage.value);
