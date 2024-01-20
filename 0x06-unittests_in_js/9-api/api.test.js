const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('test response status code of GET/ of the API', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

   it('test response status code of cart/ with negative id', (done) => {
    const id = -47;
    request.get(`${API_URL}/cart/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('test response status code of cart/ with non-numeric id ', (done) => {
    const id = 'xza';
    request.get(`{API_URL}/cart/${id}}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
