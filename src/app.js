import { parseCSV } from './functions/parser.js';
import { rowDelete } from './functions/rowDelete.js';
import { columnDelete } from './functions/columnDelete.js';
import { insertRow } from './functions/insertRow.js';
import { insertColumn } from './functions/insertColumn.js';
import { rowstocolumns } from './functions/ rowsToColumns.js';
import { columnstorows } from './functions/columnsToRows.js';
import { swap } from './functions/swap.js';
import { toHTMLTable } from './functions/toHTMLTable.js';
import { renderTable } from './table.js';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Effect from 'effect/Effect';

let csvData = [];
let selectedRow = null;
let selectedColumn = null;


export function setupCSVHandler() {
  const fileInput = document.getElementById('file');
  const rowsToColumnsBtn = document.getElementById('rowsToColumns');
  const columnsToRowsBtn = document.getElementById('columnsToRows');
  const deleteRowBtn = document.getElementById('delete-row');
  const deleteColumnBtn = document.getElementById('delete-column');
  const insertRowBtn = document.getElementById('insert-row');
  const insertColumnBtn = document.getElementById('insert-column');
  const newRowInput = document.getElementById('new-row');
  const newColumnInput = document.getElementById('new-column');
  const swapBtn = document.getElementById('swap');
  const swapCol1Input = document.getElementById('swap-row-1');
  const swapCol2Input = document.getElementById('swap-row-2');
  const toHTMLTableBtn = document.getElementById('toHTMLTable');

  if (!fileInput || !deleteRowBtn || !deleteColumnBtn) return;

  rowsToColumnsBtn.addEventListener('click', () => {
    csvData = rowstocolumns(csvData);
    renderTable(csvData, handleRowSelection, handleColumnSelection);
    updateButtons();
  });

  columnsToRowsBtn.addEventListener('click', () => {
    csvData = columnstorows(csvData);
    renderTable(csvData, handleRowSelection, handleColumnSelection);
    updateButtons();
  });

  deleteRowBtn.addEventListener('click', () => {
    if (selectedRow !== null) {
      csvData = rowDelete(csvData, selectedRow);
      selectedRow = null;
      renderTable(csvData, handleRowSelection, handleColumnSelection);
      updateButtons();
    }
  });

  deleteColumnBtn.addEventListener('click', () => {
    if (selectedColumn !== null) {
      csvData = columnDelete(csvData, selectedColumn);
      selectedColumn = null;
      renderTable(csvData, handleRowSelection, handleColumnSelection);
      updateButtons();
    }
  });

  insertRowBtn.addEventListener('click', () => {
    if (newRowInput && newRowInput.value.trim() !== '') {
      const rowValues = newRowInput.value.split(',').map(cell => cell.trim());
      const index = selectedRow !== null ? selectedRow : csvData.length;
      csvData = insertRow(csvData, index, rowValues);
      renderTable(csvData, handleRowSelection, handleColumnSelection);
      selectedRow = null;
      newRowInput.value = '';
      updateButtons();
    }
  });

  insertColumnBtn.addEventListener('click', () => {
    if (newColumnInput && newColumnInput.value.trim() !== '') {
      const columnValues = newColumnInput.value.split(',').map(cell => cell.trim());
      const index = selectedColumn !== null ? selectedColumn : (csvData[0]?.length || 0);
      csvData = insertColumn(csvData, index, columnValues);
      renderTable(csvData, handleRowSelection, handleColumnSelection);
      selectedColumn = null;
      newColumnInput.value = '';
      updateButtons();
    }
  });

  swapBtn.addEventListener('click', () => {
    const col1 = parseInt(swapCol1Input.value);
    const col2 = parseInt(swapCol2Input.value);
    if (!isNaN(col1) && !isNaN(col2) && col1 !== col2) {
      csvData = swap(csvData, col1, col2);
      renderTable(csvData, handleRowSelection, handleColumnSelection);
      updateButtons();
    }
  }
  );

  toHTMLTableBtn.addEventListener('click', () => {
    if (csvData.length > 0) {
      const html = toHTMLTable(csvData);
      document.getElementById('html-output').value = html;
    }
  });
  

  fromEvent(fileInput, 'change')
    .pipe(map(event => event.target.files[0]),map(file => Effect.runSync(readFileEffect(file))))
    .subscribe();
}

function readFileEffect(file) {
  return Effect.sync(() => {
    const reader = new FileReader();

    reader.onload = () => {
      csvData = parseCSV(reader.result);
      renderTable(csvData, handleRowSelection, handleColumnSelection);
      updateButtons();
    };
    reader.readAsText(file);
  });
}

function handleRowSelection(rowIndex) {
  selectedRow = selectedRow === rowIndex ? null : rowIndex;
  selectedColumn = null; 
  updateButtons();
}

function handleColumnSelection(colIndex) {
  selectedColumn = selectedColumn === colIndex ? null : colIndex;
  selectedRow = null; 
  updateButtons();
}

function updateButtons() {
  document.getElementById('delete-row').disabled = selectedRow === null;
  document.getElementById('delete-column').disabled = selectedColumn === null;
  document.getElementById('insert-row').disabled = selectedRow === null;
  document.getElementById('insert-column').disabled = selectedColumn === null;
  document.getElementById('rowsToColumns').disabled = csvData.length === 0;
  document.getElementById('columnsToRows').disabled = csvData.length === 0;
  document.getElementById('swap').disabled = csvData.length === 0;
  document.getElementById('toHTMLTable').disabled = csvData.length === 0;

}
