import { pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';
import _ from 'lodash';

export function parseCSV(csvString) {
  return pipe(csvString.split('\n'), A.map(row => row.split(',')));
}

