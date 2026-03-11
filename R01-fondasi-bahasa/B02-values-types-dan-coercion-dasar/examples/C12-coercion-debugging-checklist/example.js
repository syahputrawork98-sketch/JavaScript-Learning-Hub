// C12 - Coercion Debugging Checklist

function inspectValue(label, value) {
  console.log(label, '=>', value, '| typeof:', typeof value, '| isArray:', Array.isArray(value), '| isNaN:', Number.isNaN(value));
}

const raw = ' 15 ';
inspectValue('raw', raw);

const quantity = Number(raw);
inspectValue('quantity', quantity);

const payload = { active: 'false', count: '0' };
inspectValue('payload.active', payload.active);
inspectValue('Boolean(payload.active)', Boolean(payload.active));
inspectValue('payload.count', payload.count);
inspectValue('Number(payload.count)', Number(payload.count));

const maybeMissing = undefined;
console.log('default dengan || :', maybeMissing || 'fallback');
console.log('default dengan ?? :', maybeMissing ?? 'fallback');
