import { isUndefined } from 'lodash';

export const sort = (rolls: Array<number>): Array<number> => {
  const sortedRollSet: Array<number> = [];
  for (let roll of rolls) {
    if (isUndefined(sortedRollSet[roll])) sortedRollSet[roll] = 1;
    else sortedRollSet[roll] = sortedRollSet[roll] + 1;
  }
  return sortedRollSet;
}
