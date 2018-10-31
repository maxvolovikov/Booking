const seed = require('../db/seeders/seed');

test('expect database to be populated with seed data', () => {
  expect.assertions(1);
  return seed()
    .then((data) => {
      expect(data).toBe('peanut butter');
    });
});
