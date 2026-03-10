'use strict';

function parseInput(value) {
  if (!value) {
    throw new Error('value is required');
  }
  return value.trim();
}

console.log(parseInput('  ok  '));
