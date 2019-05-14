import isNil from 'lodash/isNil';

export interface Roll {
  rawResult : number[];                            // the raw face results of the roll, including all appended rerolls
  successResult: number;                           // the net successes produced by the roll
  rerollSet ?: number[];                           // dice rolls to be rerolled
  config : RollConfig;                             // RollConfig object
}

export class RollConfig {
  targetNumber : number;                           // the face value on which a single success occurs
  double : number;                                 // the face value on which a double success occurs
  autosuccesses ?: number;                         // the number of autosuccesses added to the result
  rerolls ?: number[];                             // dice sides to reroll
  cascade ?: {[side: number] : number | boolean}   // cascade rerolls per side, infinitely or limited to N times per side
  appendResults ?: boolean;                        // append the results of the rerolls to the original roll

  constructor(
    tn ?: number,
    db ?: number,
    as ?: number,
    rr ?: number[],
    cs ?: {[side: number] : number | boolean},
    ar ?: boolean
  ){
    this.targetNumber = (tn) ? tn : 7;            // default value
    this.double = (db) ? db : 10;                 // default value
    if (as) this.autosuccesses = as;
    if (rr) this.rerolls = rr;
    if (! isNil(cs)) this.cascade = cs;
    if (! isNil(ar)) this.appendResults = ar;
  }
}
