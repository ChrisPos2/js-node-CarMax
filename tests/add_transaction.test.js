const request = require('supertest');
const { app, server } = require('../index');

describe('POST /add_transaction', () => {
  beforeAll(() => {
    server.listen(81); // Uruchomienie serwera na porcie 3000 przed rozpoczęciem testów
  });

  afterAll(() => {
    server.close(); // Zamknięcie serwera po zakończeniu testów
  });

  it('should add a transaction', async () => {
    const response = await request(app)
      .post('/add_transaction')
      .send({
        username: 'example',
        id_auta: 123,
        status: 'completed',
        cena: 100
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Transakcja dodana' });
  });
});
