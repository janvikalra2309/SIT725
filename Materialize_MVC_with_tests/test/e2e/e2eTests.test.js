
// End-to-End Test Example
const request = require('supertest');
const app = require('../../src/app');

describe('E2E Tests', () => {
  it('should return a 200 status for the home page', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
  });
});
