export function toHTMLTable(data) {
    const rows = data.map(row => {
        const cells = row.map(cell => `    <td>${cell}</td>\n`).join('');
        return `  <tr>\n${cells}  </tr>\n`;
    }).join('');
    return `<table>\n${rows}</table>\n`;
}