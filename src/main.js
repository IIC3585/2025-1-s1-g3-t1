import './style.css';
import { setupCSVHandler } from './app.js';

document.querySelector('#app').innerHTML = `
  <div>
    <input type="file" id="file">
    <div id="buttons-container">
      <button id="delete-row" disabled>Eliminar Fila</button>
      <button id="delete-column" disabled>Eliminar Columna</button>
    </div>
    <table id="table"></table>
  </div>
`;

setupCSVHandler();
