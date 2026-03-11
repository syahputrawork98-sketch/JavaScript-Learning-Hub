// C12 - Example 03: checklist helper

function debugCoercion(label, value) {
  console.log(label, {
    value,
    type: typeof value,
    isArray: Array.isArray(value),
    isNaN: Number.isNaN(value),
    asNumber: Number(value),
    asBoolean: Boolean(value),
    asString: String(value),
  });
}

debugCoercion('input-1', '0');
debugCoercion('input-2', 0);
debugCoercion('input-3', null);
