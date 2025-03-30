export function insertRow(data, n, row){
    return data.slice(0, n + 1)
    .concat([row])
    .concat(data.slice(n + 1));
}
