export function insertColumn(data, n, column){
    return data.map((row, index) => {
        return row.slice(0, n).concat(column[index]).concat(row.slice(n));
    });
}