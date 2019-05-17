export interface RollResponse {
  diceRolled: number;
  rollSet: Array<number>;
  rerolledSet?: Array<number>;
  successes: number;
}
