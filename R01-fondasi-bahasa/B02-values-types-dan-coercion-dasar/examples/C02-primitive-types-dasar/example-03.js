// C02 - Example 03: number vs bigint

const safe = Number.MAX_SAFE_INTEGER;
const overflow = safe + 1;
const overflow2 = safe + 2;

console.log('safe:', safe);
console.log('overflow === overflow2:', overflow === overflow2);

const big = 9007199254740993n;
console.log('bigint presisi:', big);
console.log('bigint + 1n:', big + 1n);
