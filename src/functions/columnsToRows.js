import zip from 'lodash/zip';
export function columnstorows(data){
    return zip(...data);
}