import { reduce, isUndefined } from 'lodash';

import { RollConfig } from '../model/rollrequest';

/**
 * Count successes of a roll
 * @param {Array<number>} roll - a dice roll or an array of dice rolls
 * @param {RollConfig} config - a config for settings pertinent to successes
 * @returns {number} the totall successes rolled
 */
export const countSuccesses = (roll: Array<number>, config: RollConfig): number => {
  let autosuccesses: number = (config.autosuccesses) ? config.autosuccesses : 0;
  return reduce(
    roll,
    (successes, count, face) => {
      return successes + count*(Number(face) >= config.targetNumber ? (Number(face) >= config.double ? 2 : 1) : 0);
    },
    autosuccesses
  );
};

export const countDiceRolled = (roll: Array<number>): number => {
  return reduce(
    roll, (total, value, key) => {
      const typedValue: number | undefined = value;
      const safeValue: number = (isUndefined(value)) ? value : 0;
      return total + safeValue;
    }, 0);
}
