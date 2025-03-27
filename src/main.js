import './style.css';
import { setupCSVHandler } from './app.js';

document.querySelector('#app').innerHTML = `
  <div>
    <input type="file" id="file" />
    <div id="buttons-container">
      <button id="delete-row" disabled>Eliminar Fila</button>
      <button id="delete-column" disabled>Eliminar Columna</button>
    </div>

    <div id="insert-row-container">
      <label for="new-row">Nueva fila (separada por comas):</label><br>
      <input type="text" id="new-row" placeholder="Ej: Ema,Stone,estone@gmail.com" />
      <button id="insert-row" disabled>Insertar Fila</button>
    </div>

    <div id="insert-column-container">
      <label for="new-column">Nueva columna (separada por comas):</label><br>
      <input type="text" id="new-column" placeholder="Ej: 999999999,888888888,777777777" />
      <button id="insert-column" disabled>Insertar Columna</button>
    </div>

    <table id="table"></table>
  </div>
`;

setupCSVHandler();
