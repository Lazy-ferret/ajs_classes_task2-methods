import { expect } from '@jest/globals';
import Character from '../character';
import Bowman from '../bowman';

// Task 1 tests

test('should create new unit', () => {
  const received = new Character('Oleg', 'Bowman');
  const expected = {
    name: 'Oleg',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  };
  expect(received).toEqual(expected);
});

test('should throw error cause the name too short', () => {
  const received = () => new Character('O', 'Bowman');
  const expected = 'Имя должно содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error cause the name too long', () => {
  const received = () => new Character('OlegOlegovich', 'Bowman');
  const expected = 'Имя должно содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error cause the type is wrong', () => {
  const received = () => new Character('Oleg', 'Gunman');
  const expected = 'Такого типа нет в списке';
  expect(received).toThrowError(expected);
});

// Task 2 tests

test('should throw error cause the unit is dead', () => {
  const unit = new Bowman('Oleg');
  unit.health = 0;
  const received = () => unit.levelUp();
  const expected = 'Нельзя повысить левел умершего';
  expect(received).toThrowError(expected);
});

test('should up the level of unit', () => {
  const unit = new Bowman('Oleg');
  unit.levelUp();
  const expected = {
    name: 'Oleg',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(unit).toEqual(expected);
});

test('should to decrease health in case of damage', () => {
  const unit = new Bowman('Oleg');
  unit.damage(10);
  const expected = {
    name: 'Oleg',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit).toEqual(expected);
});

test('should not to decrease health of the dead unit', () => {
  const unit = new Bowman('Oleg');
  unit.health = 0;
  unit.damage(100);
  const expected = {
    name: 'Oleg',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit).toEqual(expected);
});
