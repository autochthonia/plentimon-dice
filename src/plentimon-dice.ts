import { RollConfig, RollRequest } from './model/rollrequest';
import { RollResponse } from './model/rollresponse';

import { countDiceRolled, countSuccesses } from './roller/count';
import { rollDice } from './roller/dice';
import { sort } from './roller/sort';

export const makeRoll = (request: RollRequest): RollResponse => {
  const rawRollSet: Array<number> = rollDice(request.pool);
  console.log(rawRollSet);
  const rollSet: Array<number> = sort(rawRollSet);
  // const result = reroll(roll, { rerollArray, append: true, cascade });
  const successes: number = countSuccesses(rollSet, request.config);
  const diceRolled: number = countDiceRolled(rollSet);

  const response: RollResponse = {
    rollSet,
    //rerollSet,
    successes,
    diceRolled
  }

  return response;
}
