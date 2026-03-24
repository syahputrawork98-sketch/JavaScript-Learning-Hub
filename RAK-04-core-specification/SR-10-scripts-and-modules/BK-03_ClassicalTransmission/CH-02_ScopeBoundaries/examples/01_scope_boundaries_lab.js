(function () {
  var privateSignal = "sealed";
  console.log("Inside IIFE:", privateSignal);
})();

{
  const blockSignal = "block-only";
  console.log("Inside block:", blockSignal);
}

console.log("Has privateSignal on globalThis:", "privateSignal" in globalThis);
console.log("Has blockSignal on globalThis:", "blockSignal" in globalThis);
