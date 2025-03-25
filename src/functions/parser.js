export function parseCSV(data) {
  return data.split('\n').map(row => row.split(','));
}