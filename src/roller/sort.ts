import { includes } from 'lodash';

export const sort = (rolls: Array<number>): Array<number> => {
  const sortedRollSet: Array<number> = [];
  for (let roll of rolls) {
    if (includes(sortedRollSet, roll)) sortedRollSet[roll] = sortedRollSet[roll] + 1;
    else sortedRollSet[roll] = 1;
  }
  return sortedRollSet;
}
