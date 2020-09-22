const request = require('supertest');
const app = require('../lib/app');

describe('routes', () => {
  it('returns the string DERP at root path with GET', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('DERP');
  });
});
