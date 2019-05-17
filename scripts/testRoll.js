const roll = {
  pool: 10,
  config: {
    targetNumber : 7,
    double : 10,
    autosuccesses : 1
  }
}

const roller = require('../lib/plentimon-dice.js');

console.log(roller.makeRoll(roll))
