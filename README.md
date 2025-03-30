# Set Up y documentación

# Set Up y Documentación

## Setup
### Instalar las dependencias
```sh
npm install
```

### Entorno de desarrollo
```sh
npm run dev
```

### Construcción para producción
```sh
npm run build
```

## Deploy en GitHub Pages con GitHub Actions

El sitio estará disponible en `https://iic3585.github.io/2025-1-s1-g3-t1/`, para ello se debió:
### 1. Configurar `vite.config.js`
```js
export default defineConfig({
  base: '/2025-1-s1-g3-t1/',
});
```

### 2. Crear el workflow para el deploy
En la carpeta `.github/workflows/` y dentro un archivo `deploy.yml` se agregó el contenido básico de github action para la generación de github pages. Véase [deploy static site with Github Pages](https://vite.dev/guide/static-deploy.html#github-pages):


### 3. Habilitar GitHub Pages
1. Habilitar Github Pages en el repositorio de GitHub en **Settings > Pages > Build and Deployment > GitHub Actions**.

### 4. Hacer el deploy 
Para hacer el deploy, primero hay que generar la build del repositorio y luego realizar un commit a la rama main.


## Funciones de Lodash

### `zip`
Une elementos de múltiples arrays en un solo array de arrays.

```js
_.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```
Referencia: [Lodash Docs](https://lodash.com/docs/4.17.15#zip)

### `unzip`
Realiza la operación inversa a `zip`, separando los arrays agrupados.

```js
_.unzip([['a', 1, true], ['b', 2, false]]);
// => [['a', 'b'], [1, 2], [true, false]]
```
Referencia: [Lodash Docs](https://lodash.com/docs/4.17.15#unzip)

### `pullAt`
Elimina elementos en los índices especificados de un array y los devuelve.

```js
const array = ['a', 'b', 'c', 'd'];
const removed = _.pullAt(array, [1, 3]);
console.log(array); // => ['a', 'c']
console.log(removed); // => ['b', 'd']
```
Referencia: [Lodash Docs](https://lodash.com/docs/4.17.15#pullAt)

### `concat`
Concatena valores y arrays en un nuevo array.

```js
const array = [1];
const result = _.concat(array, 2, [3], [[4]]);
console.log(result); // => [1, 2, 3, [4]]
```
Referencia: [Lodash Docs](https://lodash.com/docs/4.17.15#concat)

### `take`
Obtiene los primeros `n` elementos de un array.

```js
_.take([1, 2, 3], 2);
// => [1, 2]
```
Referencia: [Lodash Docs](https://lodash.com/docs/4.17.15#take)

### `drop`
Elimina los primeros `n` elementos de un array.

```js
_.drop([1, 2, 3], 2);
// => [3]
```
Referencia: [Lodash Docs](https://lodash.com/docs/4.17.15#drop)

---

## Funciones de JavaScript

### `filter`
Filtra elementos de un array basado en una condición.

```js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // => [2, 4]
```
Referencia: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### `map`
Transforma cada elemento de un array según una función dada.

```js
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n);
console.log(squared); // => [1, 4, 9]
```
Referencia: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### `trim`
Elimina espacios en blanco de los extremos de una cadena.

```js
const str = '  hello world  ';
console.log(str.trim()); // => 'hello world'
```
Referencia: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

### `slice`
Extrae una parte de un array sin modificar el original.

```js
const arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(1, 3)); // => ['b', 'c']
```
Referencia: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### `reduce`
Aplica una función acumulativa a los elementos de un array.

```js
const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log(sum); // => 10
```
Referencia: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

---

## Implementación de Descarga de CSV
La implementación de la descarga de archivos CSV se basó en un artículo de GeeksforGeeks.
Referencia: [GeeksforGeeks](https://www.geeksforgeeks.org/lodash-_-pullat-method/)

