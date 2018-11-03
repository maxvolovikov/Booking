/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import fetch from 'supertest';
import api from '../server/api';

describe('Server API', () => {
  it('should respond with 200 to a GET at /',
    () => fetch(api).get('/')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      }));

  it('should respond with 200 to GET at /customers',
    () => fetch(api).get('/customers/1')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      }));

  it('should respond with 200 to GET at /rooms',
    () => fetch(api).get('/rooms/10')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      }));

  it('should respond with 404 to GET at non-existant listing',
    () => fetch(api).get('/listing/1042')
      .then((res) => {
        expect(res.statusCode).to.equal(404);
      }));

  it('should respond with 200 to POST at /booking',
    // TODO: Shoudl post a new entry to the database
    // and then remove on success

    () => fetch(api).post('/booking')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      }));
});
