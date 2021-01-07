import Swordsman from '../swordsman';

test('should create new unit', () => {
  const received = new Swordsman('Blade', 'Swordsman');
  const expected = {
    name: 'Blade',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
