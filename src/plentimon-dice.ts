import { Handler } from 'aws-sdk/clients/lambda';

import { RollConfig, RollRequest } from './model/rollrequest';
import { RollResponse } from './model/rollresponse';

import { countDiceRolled, countSuccesses } from './roller/count';
import { rollDice } from './roller/dice';
import { sort } from './roller/sort';

const makeRoll: Handler = (request: RollRequest): RollResponse => {
  const rollSet: Array<number> = sort(rollDice(request.pool));
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

export { makeRoll };
