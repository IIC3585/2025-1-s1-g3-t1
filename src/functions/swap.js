export function swap(data, n, m) {
    return data.map(row => {
        const newRow = [...row];
        const temporal = newRow[n];
        newRow[n] = newRow[m];
        newRow[m] = temporal;
        return newRow;
    })
}

