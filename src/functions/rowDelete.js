export function rowDelete(data, n) {
  return data.filter((_, index) => index !== n);
}
