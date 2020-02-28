require('dotenv').config();
const server = require('./server');
const request = require('supertest');
const db = require('../database/dbConfig');

describe('server.js', () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  describe('testing auth routes', () => {
    describe('testing POST /api/auth/register', () => {
      it('should return code 500 with no username, no password', async () => {
        const res = await request(server)
          .post('/api/auth/register')
          .send({});
        expect(res.status).toBe(500);
      })
      it('will succeed registering with a 201', async () => {
          const res = await request(server)
          .post('/api/auth/register')
          .send({ username: 'testing', password: 'test'})
        expect(res.status).toBe(201)
      })
    })})
})