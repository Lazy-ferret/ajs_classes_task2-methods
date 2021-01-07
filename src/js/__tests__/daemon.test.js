import Daemon from '../daemon';

test('should create new unit', () => {
  const received = new Daemon('Igor', 'Daemon');
  const expected = {
    name: 'Igor',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
