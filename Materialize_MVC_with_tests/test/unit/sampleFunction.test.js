
import { expect } from 'chai';
import { sampleFunction } from '../../src/utils/sampleModule';


describe('Sample Function', () => {
  it('should return the correct result for valid input', () => {
    const result = sampleFunction(2, 3);
    expect(result).to.equal(5);
  });
});
