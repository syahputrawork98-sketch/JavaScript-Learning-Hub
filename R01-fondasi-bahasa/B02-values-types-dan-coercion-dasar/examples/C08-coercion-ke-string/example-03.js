// C08 - Example 03: format log konsisten

function formatLog(label, value) {
  return `[${label}] ${String(value)}`;
}

console.log(formatLog('status', true));
console.log(formatLog('count', 0));
console.log(formatLog('meta', { id: 1 }));
