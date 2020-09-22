const request = require('supertest');
const app = require('../lib/app');

describe('routes', () => {
  it('returns the string DERP at root path with GET', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('DERP');
  });

  it('responds with status code 200 and the request body on /echo with POST', async() => {
    const response = await request(app)
      .post('/echo')
      .send({ body: 'Herro pwease' });

    expect(response.text)
      .toEqual('Herro pwease');
  });

  it('responds with an h1 and the text red on /red with GET', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text)
      .toEqual('<h1>red</h1>');
  });
});
