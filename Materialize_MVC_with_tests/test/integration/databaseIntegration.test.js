
// Integration Test Example
const { expect } = require('chai');
const { connectDatabase, queryDatabase } = require('../../src/database');

describe('Database Integration', () => {
  before(() => {
    connectDatabase();
  });

  it('should return expected data for a valid query', async () => {
    const result = await queryDatabase('SELECT * FROM sample_table WHERE id=1');
    expect(result).to.have.property('name', 'Test User');
  });
});
