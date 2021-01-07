import Bowman from '../bowman';

test('should create new unit', () => {
  const received = new Bowman('Oleg', 'Bowman');
  const expected = {
    name: 'Oleg',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
