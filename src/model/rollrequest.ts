export interface RollRequest {
  pool: number;
  config: RollConfig;
}

export interface RollConfig {
  targetNumber : number;
  double : number;
  autosuccesses ?: number;
  rerolls ?: Array<number>;
  appendResults ?: boolean;
}
