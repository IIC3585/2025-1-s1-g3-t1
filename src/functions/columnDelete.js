import { pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';
import _ from 'lodash';

export function columnDelete(data, n) {
  return pipe(data, A.map(row => pipe(row, A.filter((_, index) => index !== n))));
}
