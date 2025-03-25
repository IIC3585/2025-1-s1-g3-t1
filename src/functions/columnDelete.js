export function columnDelete(data, n){
  return data.map(row => row.filter((_, index) => index !== n));
}

