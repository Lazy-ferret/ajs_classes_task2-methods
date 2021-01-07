import Magician from '../magician';

test('should create new unit', () => {
  const received = new Magician('Gendalf', 'Magician');
  const expected = {
    name: 'Gendalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
