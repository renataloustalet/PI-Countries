var supertest = require('supertest-as-promised')(require('../../src/app'));

describe('Routes', function () {

  describe('GET /countries', function () {
    it('GET recibe todos los paises', function () {
      return supertest
        .get('/countries')
        .expect(200)
        .expect('Content-Type', /json/)
    })

    it('GET Recibe un país que no existe', function () {
      return supertest
        .get('/countries?name=Asgard')
        .expect(404)
        .expect('Not found')
    })
  })
});


