import Undead from '../undead';

test('should create new unit', () => {
  const received = new Undead('Lenin', 'Undead');
  const expected = {
    name: 'Lenin',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
