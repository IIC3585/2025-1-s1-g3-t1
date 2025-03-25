import { parseCSV } from './functions/parser.js';
import { rowDelete } from './functions/rowDelete.js';
import { columnDelete } from './functions/columnDelete.js';
import { renderTable } from './table.js';
import { pipe } from 'fp-ts/function';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Effect from 'effect/Effect';

let csvData = [];
let selectedRow = null;
let selectedColumn = null;

export function setupCSVHandler() {
  const fileInput = document.getElementById('file');
  const deleteRowBtn = document.getElementById('delete-row');
  const deleteColumnBtn = document.getElementById('delete-column');

  if (!fileInput || !deleteRowBtn || !deleteColumnBtn) return;

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

  fromEvent(fileInput, 'change')
    .pipe(
      map(event => event.target.files[0]),
      map(file => Effect.runSync(readFileEffect(file)))
    )
    .subscribe();
}

function readFileEffect(file) {
  return Effect.sync(() => {
    const reader = new FileReader();

    reader.onload = () => {
      csvData = pipe(reader.result, parseCSV);
      renderTable(csvData, handleRowSelection, handleColumnSelection);
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
}
