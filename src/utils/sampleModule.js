
// src/utils/sampleModule.js
export function sampleFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input');
  }
  return a + b;
}