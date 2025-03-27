export function swap(data, n, m) {
    return data.map((array) =>[n,m].reduce((a, b) => ([array[a], array[b]] = [array[b], array[a]], array)));
}

