
// test/unit/sampleFunction.test.js
import { expect } from 'chai';
import { sampleFunction } from '../../src/utils/sampleModule.js';

describe('Sample Function', () => {
  it('should return the correct result for valid inputs', () => {
    const result = sampleFunction(2, 3);
    expect(result).to.equal(5);
  });

  it('should throw an error for invalid inputs', () => {
    expect(() => sampleFunction('a', 3)).to.throw('Invalid input');
  });
});
