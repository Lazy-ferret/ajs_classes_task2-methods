import Zombie from '../zombie';

test('should create new unit', () => {
  const received = new Zombie('Egor', 'Zombie');
  const expected = {
    name: 'Egor',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
