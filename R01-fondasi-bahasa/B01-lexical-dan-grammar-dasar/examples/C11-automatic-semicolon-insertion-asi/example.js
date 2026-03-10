function safeReturn() {
  return {
    name: 'Arta'
  };
}

const x = 10;
(function () {
  console.log('IIFE aman setelah semicolon');
})();

console.log(safeReturn(), x);
