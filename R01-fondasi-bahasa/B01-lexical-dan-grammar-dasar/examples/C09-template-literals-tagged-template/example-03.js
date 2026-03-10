function currency(strings, value) {
  return `${strings[0]}Rp${value.toLocaleString('id-ID')}`;
}

const amount = 120000;
console.log(currency`Total: ${amount}`);
