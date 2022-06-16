const request = require('supertest')
const app = require('../src/app')

describe('APP', () => {
  it('GET /app --> object', () => {
    return request(app)
      .get('/app')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            app: expect('hey hey hey')
          })
        )
      })
  })
})