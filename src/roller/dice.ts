import { range, sample, times } from 'lodash';

/**
 * Roll a d10
 * @returns {number} returns a number between 1 and 10
 */
export const d10 = (): number => {
  const roll: number | undefined = sample(range(1,11));
  const result: number = (roll) ? roll : -1 ;
  if (result === -1) throw new Error('dice roll cannot return nil values!');
  else return result;
}

/**
 * roll a number of dice
 * @param {number} numDice - number of dice to roll
 * @returns {Array<number>} the result of the dice roll
 */
export const rollDice = (numDice: number): Array<number> => {
  if ( Number.isNaN(numDice) || ! Number.isSafeInteger(numDice) || numDice <= 0)
    throw new Error("numDice must be a positive integer representing an amount of dice");
  const result: Array<number> =  times(numDice, d10);

  return result;
};
