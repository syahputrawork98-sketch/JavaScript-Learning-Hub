console.log("=== RegExp Performance Audit ===");

const input = "hub-".repeat(2000) + "END";
const greedy = /(hub-)+END/;
const lazy = /(hub-)+?END/;

console.time("greedy");
console.log("Greedy match:", greedy.test(input));
console.timeEnd("greedy");

console.time("lazy");
console.log("Lazy match:", lazy.test(input));
console.timeEnd("lazy");

const tagged = /HUB-(\d+)/g;
console.log("Tagged matches:", Array.from("HUB-101 HUB-202".matchAll(tagged), (match) => match[1]));
