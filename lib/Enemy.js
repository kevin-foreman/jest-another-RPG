const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
    this.weapon = weapon;
    this.potion = new Potion();
}

// Object.create(Character.prototype);

getDescription() {
    return `A ${this.name} hodling a ${this.weapon} has appeared`;
}
}

module.exports = Enemy;