export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;

    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    const units = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!units.includes(this.type)) {
      throw new Error('Такого типа нет в списке');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack += ((this.attack / 100) * 20);
    this.defence += ((this.defence / 100) * 20);
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
