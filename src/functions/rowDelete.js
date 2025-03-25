import { pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';
import _ from 'lodash';

export function rowDelete(data, n) {
  return pipe(data, A.filter((_, index) => index !== n));
}
