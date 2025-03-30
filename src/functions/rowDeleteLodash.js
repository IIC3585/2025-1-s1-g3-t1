import _ from "lodash";

export function rowDelete(data, n) {
  _.pullAt(data, n);
  return data;
}
