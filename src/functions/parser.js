export function parseCSV(data) {
  const rows = data.trim().split('\n');
  const firstRow = rows[0];
  const separator = firstRow.includes(';') ? ';' : ','; 
  
  return rows.map(row => row.split(separator).map(cell => cell.trim()));
}
