import { isArray } from 'lodash';

import { d10, rollDice } from '../../src/roller/dice';

describe('tests for dice functions', () => {

  describe('d10 tests', () => {
    it('should produce a result between 1 and 10', () => {
      const result: number = d10();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });
  });

  describe('rollDice tests', () => {
    it('should return an array with a length equal to the number passed in', () => {
      const result: Array<number> = rollDice(5);
      expect(isArray(result)).toBe(true);
      expect(result.length).toEqual(5);
    });

    it('should throw an error when invalid args are passed in', () => {
      const errorString: string = 'numDice must be a positive integer representing an amount of dice';
      expect(rollDice(-1)).toThrowError(errorString);
      expect(rollDice('abc')).toThrowError(errorString);
      expect(rollDice(0.0001)).toThrowError(errorString);
    });
  });

});
