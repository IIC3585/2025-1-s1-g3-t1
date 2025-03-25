export function renderTable(data, handleRowSelection, handleColumnSelection) {
    const table = document.getElementById('table');
    if (!table) return;
    table.innerHTML = '';
  
    const headerRow = document.createElement('tr');
    data[0].forEach((header, colIndex) => {
      const th = document.createElement('th');
      th.textContent = header;
      th.addEventListener('click', () => {
        clearSelections();
        handleColumnSelection(colIndex);
        highlightColumn(colIndex);
      });
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  
    data.slice(1).forEach((row, rowIndex) => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
  
      tr.addEventListener('click', () => {
        clearSelections();
        handleRowSelection(rowIndex + 1);
        highlightRow(tr);
      });
  
      table.appendChild(tr);
    });
  }
  
  
  function clearSelections() {
    document.querySelectorAll('.selected-row').forEach(el => el.classList.remove('selected-row'));
    document.querySelectorAll('.selected-column').forEach(el => el.classList.remove('selected-column'));
  }
  
  function highlightRow(rowElement) {
    rowElement.classList.add('selected-row');
  }
  
  function highlightColumn(colIndex) {
    document.querySelectorAll(`th:nth-child(${colIndex + 1}), td:nth-child(${colIndex + 1})`)
      .forEach(el => el.classList.add('selected-column'));
  }
  