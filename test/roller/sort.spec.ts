import { sort } from '../../src/roller/sort';

describe('sort function tests', () => {
  it('should sort an array of dice rolls into a sparse array', () => {
    const input: Array<number> = [10, 2, 5, 4, 2, 7];
    const output: Array<number> = sort(input);
    expect(output[0]).toBeUndefined;
    expect(output[1]).toBeUndefined;
    expect(output[2]).toEqual(2);
    expect(output[3]).toBeUndefined;
    expect(output[4]).toEqual(1);
    expect(output[5]).toEqual(1);
    expect(output[6]).toBeUndefined;
    expect(output[7]).toEqual(1);
    expect(output[8]).toBeUndefined;
    expect(output[9]).toBeUndefined;
    expect(output[10]).toEqual(1);
  });
});
