export function rowstocolumns(data){
    return data[0].map((_, i) => data.map(y => y[i]));
}